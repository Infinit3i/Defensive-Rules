title: <Short descriptive title>
id: <uuid4>
status: experimental
description: >-
  <Detailed description of what this rule detects and why. Include context and
  any attacker techniques/behaviors to help triage.>
references:
  - https://attack.mitre.org/techniques/T1059/003/
author: Matthew
date: <YYYY-MM-DD>
tags:
  - attack.execution
  - attack.t1059.003
  - windows
  - cmd
  - <other_tags_here>
logsource:
  product: windows
  service: sysmon
  category: process_creation
detection:
  selection:
    Image|endswith: '\cmd.exe'
    # Add fields/conditions here (CommandLine, ParentImage, User, etc.)
    CommandLine|contains:
      - '<example_indicator_1>'
      - '<example_indicator_2>'
  condition: selection
falsepositives:
  - <possible false positives>
level: <low|medium|high|critical>
tactic: Execution
