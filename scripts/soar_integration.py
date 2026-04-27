#!/usr/bin/env python3
"""
SOAR Integration Framework
API integration for SIEM alerts to SOAR platforms
Supports Microsoft Sentinel Logic Apps, Phantom, Demisto/XSOAR
"""

import json
import requests
import logging
from datetime import datetime
from typing import Dict, List, Optional
from dataclasses import dataclass
import os
from abc import ABC, abstractmethod

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class Alert:
    """Standardized alert format"""
    id: str
    title: str
    severity: str
    description: str
    source_system: str
    timestamp: datetime
    entities: List[Dict]
    mitre_techniques: List[str]
    raw_data: Dict

class SOARConnector(ABC):
    """Abstract base class for SOAR platform connectors"""

    @abstractmethod
    def send_alert(self, alert: Alert) -> Dict:
        """Send alert to SOAR platform"""
        pass

    @abstractmethod
    def get_case_status(self, case_id: str) -> Dict:
        """Get case status from SOAR platform"""
        pass

class SentinelLogicAppsConnector(SOARConnector):
    """Microsoft Sentinel Logic Apps connector"""

    def __init__(self, webhook_url: str, subscription_id: str = None):
        self.webhook_url = webhook_url
        self.subscription_id = subscription_id

    def send_alert(self, alert: Alert) -> Dict:
        """Send alert to Sentinel Logic App via webhook"""
        try:
            payload = {
                "alertId": alert.id,
                "alertTitle": alert.title,
                "severity": alert.severity,
                "description": alert.description,
                "sourceSystem": alert.source_system,
                "timestamp": alert.timestamp.isoformat(),
                "entities": alert.entities,
                "mitreTechniques": alert.mitre_techniques,
                "rawData": alert.raw_data
            }

            headers = {
                "Content-Type": "application/json",
                "User-Agent": "DefensiveRules-SOAR/1.0"
            }

            response = requests.post(
                self.webhook_url,
                json=payload,
                headers=headers,
                timeout=30
            )
            response.raise_for_status()

            logger.info(f"Alert {alert.id} sent to Sentinel Logic Apps")
            return {"status": "success", "response": response.json()}

        except Exception as e:
            logger.error(f"Failed to send alert {alert.id}: {str(e)}")
            return {"status": "error", "error": str(e)}

    def get_case_status(self, case_id: str) -> Dict:
        """Get case status from Sentinel"""
        # Implementation would require Azure REST API calls
        return {"case_id": case_id, "status": "pending"}

class PhantomConnector(SOARConnector):
    """Phantom/Splunk SOAR connector"""

    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url.rstrip('/')
        self.api_key = api_key

    def send_alert(self, alert: Alert) -> Dict:
        """Send alert to Phantom"""
        try:
            payload = {
                "name": alert.title,
                "description": alert.description,
                "severity": alert.severity,
                "source_data_identifier": alert.id,
                "cef": {
                    "sourceSystem": alert.source_system,
                    "mitreTechniques": ",".join(alert.mitre_techniques)
                },
                "artifacts": [
                    {
                        "name": entity.get("type", "unknown"),
                        "cef": entity
                    } for entity in alert.entities
                ]
            }

            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }

            response = requests.post(
                f"{self.base_url}/rest/container",
                json=payload,
                headers=headers,
                timeout=30
            )
            response.raise_for_status()

            logger.info(f"Alert {alert.id} sent to Phantom")
            return {"status": "success", "container_id": response.json().get("id")}

        except Exception as e:
            logger.error(f"Failed to send alert {alert.id} to Phantom: {str(e)}")
            return {"status": "error", "error": str(e)}

    def get_case_status(self, case_id: str) -> Dict:
        """Get case status from Phantom"""
        try:
            headers = {"Authorization": f"Bearer {self.api_key}"}
            response = requests.get(
                f"{self.base_url}/rest/container/{case_id}",
                headers=headers,
                timeout=30
            )
            response.raise_for_status()

            return response.json()

        except Exception as e:
            logger.error(f"Failed to get case status: {str(e)}")
            return {"status": "error", "error": str(e)}

class XSOARConnector(SOARConnector):
    """Cortex XSOAR/Demisto connector"""

    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url.rstrip('/')
        self.api_key = api_key

    def send_alert(self, alert: Alert) -> Dict:
        """Send alert to XSOAR"""
        try:
            payload = {
                "name": alert.title,
                "type": "Defensive Rules Alert",
                "severity": self._map_severity(alert.severity),
                "details": alert.description,
                "labels": [
                    {"type": "Source", "value": alert.source_system},
                    {"type": "MITRE", "value": ",".join(alert.mitre_techniques)}
                ],
                "customFields": {
                    "alertid": alert.id,
                    "mitreTechniques": alert.mitre_techniques,
                    "rawData": json.dumps(alert.raw_data)
                }
            }

            headers = {
                "Authorization": self.api_key,
                "Content-Type": "application/json"
            }

            response = requests.post(
                f"{self.base_url}/incident",
                json=payload,
                headers=headers,
                timeout=30
            )
            response.raise_for_status()

            logger.info(f"Alert {alert.id} sent to XSOAR")
            return {"status": "success", "incident_id": response.json().get("id")}

        except Exception as e:
            logger.error(f"Failed to send alert {alert.id} to XSOAR: {str(e)}")
            return {"status": "error", "error": str(e)}

    def _map_severity(self, severity: str) -> int:
        """Map severity to XSOAR numeric values"""
        mapping = {
            "low": 1,
            "medium": 2,
            "high": 3,
            "critical": 4
        }
        return mapping.get(severity.lower(), 2)

    def get_case_status(self, case_id: str) -> Dict:
        """Get case status from XSOAR"""
        try:
            headers = {"Authorization": self.api_key}
            response = requests.get(
                f"{self.base_url}/incident/{case_id}",
                headers=headers,
                timeout=30
            )
            response.raise_for_status()

            return response.json()

        except Exception as e:
            logger.error(f"Failed to get case status: {str(e)}")
            return {"status": "error", "error": str(e)}

class SOARManager:
    """Main SOAR integration manager"""

    def __init__(self):
        self.connectors = {}
        self.load_config()

    def load_config(self):
        """Load SOAR platform configurations"""
        config_file = os.getenv("SOAR_CONFIG", "soar_config.json")
        if os.path.exists(config_file):
            with open(config_file, 'r') as f:
                config = json.load(f)
                self._setup_connectors(config)

    def _setup_connectors(self, config: Dict):
        """Setup SOAR platform connectors based on config"""
        if "sentinel" in config:
            self.connectors["sentinel"] = SentinelLogicAppsConnector(
                webhook_url=config["sentinel"]["webhook_url"],
                subscription_id=config["sentinel"].get("subscription_id")
            )

        if "phantom" in config:
            self.connectors["phantom"] = PhantomConnector(
                base_url=config["phantom"]["base_url"],
                api_key=config["phantom"]["api_key"]
            )

        if "xsoar" in config:
            self.connectors["xsoar"] = XSOARConnector(
                base_url=config["xsoar"]["base_url"],
                api_key=config["xsoar"]["api_key"]
            )

    def send_alert_to_all(self, alert: Alert) -> Dict[str, Dict]:
        """Send alert to all configured SOAR platforms"""
        results = {}

        for platform, connector in self.connectors.items():
            try:
                result = connector.send_alert(alert)
                results[platform] = result
                logger.info(f"Alert sent to {platform}: {result['status']}")
            except Exception as e:
                results[platform] = {"status": "error", "error": str(e)}
                logger.error(f"Failed to send alert to {platform}: {str(e)}")

        return results

    def send_alert_to_platform(self, alert: Alert, platform: str) -> Dict:
        """Send alert to specific SOAR platform"""
        if platform not in self.connectors:
            return {"status": "error", "error": f"Platform {platform} not configured"}

        return self.connectors[platform].send_alert(alert)

def create_alert_from_splunk(splunk_data: Dict) -> Alert:
    """Convert Splunk alert to standardized Alert format"""
    return Alert(
        id=splunk_data.get("sid", "unknown"),
        title=splunk_data.get("search_name", "Splunk Alert"),
        severity=splunk_data.get("alert.severity", "medium"),
        description=splunk_data.get("description", ""),
        source_system="Splunk",
        timestamp=datetime.now(),
        entities=[
            {"type": "host", "value": splunk_data.get("host")},
            {"type": "user", "value": splunk_data.get("user")}
        ],
        mitre_techniques=splunk_data.get("mitre_attack", []),
        raw_data=splunk_data
    )

def create_alert_from_sentinel(sentinel_data: Dict) -> Alert:
    """Convert Sentinel alert to standardized Alert format"""
    return Alert(
        id=sentinel_data.get("AlertId", "unknown"),
        title=sentinel_data.get("AlertName", "Sentinel Alert"),
        severity=sentinel_data.get("Severity", "medium"),
        description=sentinel_data.get("Description", ""),
        source_system="Microsoft Sentinel",
        timestamp=datetime.now(),
        entities=sentinel_data.get("Entities", []),
        mitre_techniques=sentinel_data.get("Tactics", []),
        raw_data=sentinel_data
    )

if __name__ == "__main__":
    # Example usage
    manager = SOARManager()

    # Example alert
    test_alert = Alert(
        id="test-001",
        title="Suspicious PowerShell Activity",
        severity="high",
        description="Detected encoded PowerShell execution",
        source_system="Test",
        timestamp=datetime.now(),
        entities=[{"type": "host", "value": "DESKTOP-123"}],
        mitre_techniques=["T1059.001"],
        raw_data={"test": True}
    )

    # Send to all platforms
    results = manager.send_alert_to_all(test_alert)
    print(json.dumps(results, indent=2))