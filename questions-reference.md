# Cybersecurity Assessment Questions Reference

## 1. Organizational & Governance

### 1.1. Security Governance & Leadership
- Is there a documented information security governance framework or policy in place?
- Does the organization have a designated Chief Information Security Officer (CISO) or equivalent role?
- How often does the governing body (e.g., board, executive leadership) review security risks and strategies?

### 1.2. Security Policies & Procedures
- Are information security policies formally approved, reviewed, and updated on a regular basis?
- Are all employees and contractors required to acknowledge understanding of the security policies?
- Do policies exist for acceptable use, password management, and remote work?

### 1.3. Regulatory Compliance
- Which regulations, standards, or frameworks (e.g., ISO 27001, NIST, HIPAA, GDPR) does the organization follow?
- Is there a process to monitor changes in relevant laws, regulations, or standards?
- Does the organization perform periodic compliance audits or assessments?

## 2. Risk Management Process

### 2.1. Risk Assessment Methodology
- Is there a formal, documented risk assessment methodology in place?
- How frequently are risk assessments conducted (annually, semi-annually, etc.)?
- Does the methodology include asset identification, threat modeling, vulnerability analysis, impact analysis, and likelihood assessment?

### 2.2. Risk Treatment & Acceptance
- Are risk treatment options (accept, mitigate, transfer, avoid) documented and approved by senior management?
- Is there a risk register or log tracking identified risks, owners, and treatment progress?
- How does the organization ensure residual risks are formally approved or accepted at the appropriate level?

### 2.3. Third-Party Risk Management
- Are third-party vendors or suppliers required to meet specific security requirements or certifications?
- Do contracts with third parties include security clauses (e.g., data handling, breach notification)?
- Is there a periodic assessment process to evaluate the security posture of third-party vendors?

## 3. Asset Management & Classification

### 3.1. Asset Inventory
- Is there a maintained and up-to-date inventory of all IT assets (hardware, software, data)?
- Does the organization track ownership and location of these assets?

### 3.2. Classification & Labeling
- Are information assets classified (e.g., public, internal, confidential, restricted) based on sensitivity and criticality?
- Are data handling and labeling procedures defined based on classification (e.g., encryption for confidential data)?

### 3.3. Data Retention & Disposal
- Is there a data retention schedule defining how long different categories of data should be stored?
- Are secure disposal methods in place for end-of-life assets (e.g., shredding, wiping, degaussing)?

## 4. Access Control & Identity Management

### 4.1. User Provisioning & Deprovisioning
- Is there a formal process for granting, modifying, and revoking access rights?
- Are privileges promptly revoked when employees leave or change roles?

### 4.2. Authentication Mechanisms
- Is multi-factor authentication (MFA) enabled for critical systems and remote access?
- Are password policies (e.g., length, complexity, expiration) enforced across the environment?

### 4.3. Privileged Access Management
- Is there a separate privileged account management solution or process?
- Are privileged actions logged and monitored for anomalies?

### 4.4. Remote Access & BYOD
- Are employees allowed to use personal devices for business purposes? If so, what security controls (e.g., MDM) are in place?
- Is remote access to internal systems restricted and monitored?

## 5. Network Security

### 5.1. Network Architecture & Segmentation
- Is there documented network architecture showing DMZs, internal networks, and segregated environments (e.g., PCI network)?
- Are critical systems isolated or segmented from the corporate network?

### 5.2. Firewall & Perimeter Security
- Are firewalls configured with a default deny rule set, only allowing necessary traffic?
- How often are firewall rules reviewed and updated?
- Are intrusion detection or intrusion prevention systems (IDS/IPS) deployed and monitored?

### 5.3. Wireless Network Security
- Is wireless access restricted using WPA2/WPA3 or equivalent encryption?
- Is guest Wi-Fi segregated from internal corporate networks?

### 5.4. Network Monitoring & Logs
- Are network traffic logs reviewed regularly for suspicious or unauthorized activities?
- Does the organization have a Security Information and Event Management (SIEM) system or log management solution?

## 6. Endpoint & System Security

### 6.1. Endpoint Protection
- Are antivirus/anti-malware solutions installed and kept up to date on all endpoints?
- Are endpoints (e.g., laptops, desktops, servers) configured with host-based firewalls?

### 6.2. Patch Management
- Is there a formal patch management policy covering operating systems, applications, and firmware?
- How quickly are critical or high-severity patches applied?

### 6.3. Secure Configuration
- Does the organization follow a secure baseline or benchmark (e.g., CIS Benchmarks) for servers, workstations, and network devices?
- Are administrative tools (e.g., PowerShell, Remote Desktop) restricted and monitored?

### 6.4. Vulnerability Scanning
- Is vulnerability scanning performed on a regular schedule (internal and external)?
- How are vulnerabilities prioritized for remediation, and what is the typical remediation timeline?

## 7. Application & Software Development

### 7.1. Secure Software Development Lifecycle
- Are security requirements integrated into the SDLC, including design, development, testing, and deployment?
- Is code reviewed for security weaknesses (e.g., peer code reviews, automated static analysis)?

### 7.2. Application Testing
- Do you conduct regular penetration testing or code scanning for critical applications?
- Are open source or third-party components scanned for known vulnerabilities?

### 7.3. Change Management
- Is there a formal change control process to document, assess, and approve changes?
- Are changes tested and reviewed for security impact before implementation?

### 7.4. Encryption & Key Management
- Is sensitive data encrypted at rest and in transit?
- How are encryption keys generated, stored, and rotated?
- Are industry standards (e.g., AES-256) used for encryption?

## 8. Physical & Environmental Controls

### 8.1. Facilities Security
- Are physical access controls (e.g., badges, biometric readers) in place for sensitive areas?
- Is there a visitor management process (badges, escorts, logs)?

### 8.2. Equipment Protection
- Are critical devices (servers, networking equipment) located in secure areas with restricted access?
- Is environmental control (temperature, humidity) and fire suppression available in data centers?

### 8.3. Monitoring & Surveillance
- Are CCTV or other surveillance systems in place, and are footage logs retained for a defined period?
- Is on-premises security staffed or monitored 24/7?

## 9. Incident Management & Response

### 9.1. Incident Response Plan
- Is there a documented incident response plan (IRP) detailing roles, responsibilities, and procedures?
- How often is the IRP tested (e.g., tabletop exercises, simulations)?
- Is there a defined process for breach notification to regulators and affected parties?

### 9.2. Detection & Reporting
- Are intrusion detection tools and logs actively monitored to identify potential incidents?
- Is there a clear process for employees to report suspected security events?

### 9.3. Forensics & Investigation
- Does the organization have internal forensic capabilities or retain third-party expertise?
- Are investigation procedures documented and tested, including evidence handling?

## 10. Business Continuity & Disaster Recovery

### 10.1. Business Impact Analysis (BIA)
- Has the organization conducted a BIA to identify critical processes and define RTO and RPO?
- When was the last BIA review or update conducted?

### 10.2. Business Continuity Plan (BCP)
- Is there a documented BCP addressing continuity strategies for essential functions?
- Are BCP tests or exercises conducted at least annually?

### 10.3. Disaster Recovery (DR)
- Is there a DR plan with defined recovery procedures for critical systems and data?
- Are backups performed regularly, tested, and stored securely offsite?
- Have recovery time (RTO) and recovery point objectives (RPO) been defined and tested?

## 11. Security Awareness & Training

### 11.1. Training Program
- Is there a formal security awareness program for all employees and contractors?
- How frequently is cybersecurity training provided (e.g., onboarding, annual refreshers)?

### 11.2. Phishing & Social Engineering
- Are regular phishing simulation campaigns conducted to measure and improve employee resilience?
- Is there a mechanism for employees to report suspicious emails or messages?

### 11.3. Role-Based Training
- Do employees in specialized roles (e.g., developers, administrators) receive additional security training relevant to their duties?
- Are training records maintained for auditing and compliance purposes?

## 12. Logging, Monitoring & Metrics

### 12.1. Logging Policies
- Are critical system and application logs retained for a defined period (e.g., 90 days, 1 year)?
- Is log collection centralized (e.g., using a SIEM or log management tool)?

### 12.2. Monitoring & Alerts
- Are real-time alerts configured for critical events or threshold breaches?
- Are logs reviewed regularly by trained personnel, with suspicious events escalated promptly?

### 12.3. Security Metrics & Reporting
- Are key security metrics (e.g., patch compliance, incident response time) tracked and reported to management?
- Does the organization have defined KPIs or KRIs (Key Performance/Risk Indicators) for cybersecurity?

## 13. Cloud Security

### 13.1. Cloud Service Provider Selection
- Are cloud providers vetted for compliance with relevant security frameworks (e.g., SOC 2, ISO 27017)?
- Do contractual agreements with cloud providers address data security, privacy, and breach notifications?

### 13.2. Cloud Architecture & Responsibilities
- Is there a clear understanding of the shared responsibility model between the organization and the cloud provider?
- How are network and endpoint security controls extended to cloud environments?

### 13.3. Data Security in the Cloud
- Are encryption and key management processes implemented in cloud services?
- Are cloud-based workloads regularly scanned for vulnerabilities?

## 14. Emerging Threats & Continuous Improvement

### 14.1. Threat Intelligence
- Does the organization subscribe to threat intelligence feeds or participate in information-sharing communities (e.g., ISACs)?
- Is there a process to integrate threat intelligence into security controls and risk assessments?

### 14.2. Continuous Improvement
- Are lessons learned from incidents, audits, or assessments used to update security policies and procedures?
- Does the organization periodically benchmark against industry best practices or peers?

## 15. Final Review & Action Plan

### 15.1. Risk Prioritization
- Which risks discovered during the assessment are deemed highest priority?
- What are the timelines and resources required to address these risks?

### 15.2. Management Sign-Off
- Who (roles or individuals) will review and approve the security assessment findings?
- Is there a defined process for escalating unresolved high-risk issues to executive management?

### 15.3. Ongoing Governance
- How will progress on remediation items be tracked, reported, and validated?
- When will the next assessment or review take place (continuous assessment, annual formal review, etc.)?
