# [T1021] External VPN Tunnel

### Mitre Tactic:  
*Lateral Movement*

#### Description:  
Detects IKE traffic (port 500) from external IP addresses. This may indicate VPN tunnel attempts or unauthorized IPsec-based connections. This rule filters out traffic from internal IP ranges (RFC1918) and focuses on port 500 activity either as source or destination.

```bash
index=syslog sourcetype=syslog
| where NOT cidrmatch("10.0.0.0/8", src_ip) AND NOT cidrmatch("192.168.0.0/16", src_ip) AND NOT cidrmatch("172.16.0.0/12", src_ip)
| where src_port=500 OR dest_port=500
```