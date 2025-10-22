import { Section } from '@/types';

export const sections: Section[] = [
  {
    id: 'governance',
    title: 'Organizational & Governance',
    subsections: [
      {
        title: 'Security Governance & Leadership',
        questions: [
          {
            id: '1.1.1',
            text: 'Is there a documented information security governance framework or policy in place?',
            type: 'yes-no-na'
          },
          {
            id: '1.1.2',
            text: 'Does the organization have a designated Chief Information Security Officer (CISO) or equivalent role?',
            type: 'yes-no-na'
          },
          {
            id: '1.1.3',
            text: 'How often does the governing body (e.g., board, executive leadership) review security risks and strategies?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Security Policies & Procedures',
        questions: [
          {
            id: '1.2.1',
            text: 'Are information security policies formally approved, reviewed, and updated on a regular basis?',
            type: 'yes-no-na'
          },
          {
            id: '1.2.2',
            text: 'Are all employees and contractors required to acknowledge understanding of the security policies?',
            type: 'yes-no-na'
          },
          {
            id: '1.2.3',
            text: 'Do policies exist for acceptable use, password management, and remote work?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Regulatory Compliance',
        questions: [
          {
            id: '1.3.1',
            text: 'Which regulations, standards, or frameworks (e.g., ISO 27001, NIST, HIPAA, GDPR) does the organization follow?',
            type: 'yes-no-na'
          },
          {
            id: '1.3.2',
            text: 'Is there a process to monitor changes in relevant laws, regulations, or standards?',
            type: 'yes-no-na'
          },
          {
            id: '1.3.3',
            text: 'Does the organization perform periodic compliance audits or assessments?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'risk-management',
    title: 'Risk Management Process',
    subsections: [
      {
        title: 'Risk Assessment Methodology',
        questions: [
          {
            id: '2.1.1',
            text: 'Is there a formal, documented risk assessment methodology in place?',
            type: 'yes-no-na'
          },
          {
            id: '2.1.2',
            text: 'How frequently are risk assessments conducted (annually, semi-annually, etc.)?',
            type: 'yes-no-na'
          },
          {
            id: '2.1.3',
            text: 'Does the methodology include asset identification, threat modeling, vulnerability analysis, impact analysis, and likelihood assessment?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Risk Treatment & Acceptance',
        questions: [
          {
            id: '2.2.1',
            text: 'Are risk treatment options (accept, mitigate, transfer, avoid) documented and approved by senior management?',
            type: 'yes-no-na'
          },
          {
            id: '2.2.2',
            text: 'Is there a risk register or log tracking identified risks, owners, and treatment progress?',
            type: 'yes-no-na'
          },
          {
            id: '2.2.3',
            text: 'How does the organization ensure residual risks are formally approved or accepted at the appropriate level?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Third-Party Risk Management',
        questions: [
          {
            id: '2.3.1',
            text: 'Are third-party vendors or suppliers required to meet specific security requirements or certifications?',
            type: 'yes-no-na'
          },
          {
            id: '2.3.2',
            text: 'Do contracts with third parties include security clauses (e.g., data handling, breach notification)?',
            type: 'yes-no-na'
          },
          {
            id: '2.3.3',
            text: 'Is there a periodic assessment process to evaluate the security posture of third-party vendors?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'asset-management',
    title: 'Asset Management & Classification',
    subsections: [
      {
        title: 'Asset Inventory',
        questions: [
          {
            id: '3.1.1',
            text: 'Is there a maintained and up-to-date inventory of all IT assets (hardware, software, data)?',
            type: 'yes-no-na'
          },
          {
            id: '3.1.2',
            text: 'Does the organization track ownership and location of these assets?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Classification & Labeling',
        questions: [
          {
            id: '3.2.1',
            text: 'Are information assets classified (e.g., public, internal, confidential, restricted) based on sensitivity and criticality?',
            type: 'yes-no-na'
          },
          {
            id: '3.2.2',
            text: 'Are data handling and labeling procedures defined based on classification (e.g., encryption for confidential data)?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Data Retention & Disposal',
        questions: [
          {
            id: '3.3.1',
            text: 'Is there a data retention schedule defining how long different categories of data should be stored?',
            type: 'yes-no-na'
          },
          {
            id: '3.3.2',
            text: 'Are secure disposal methods in place for end-of-life assets (e.g., shredding, wiping, degaussing)?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'access-control',
    title: 'Access Control & Identity Management',
    subsections: [
      {
        title: 'User Provisioning & Deprovisioning',
        questions: [
          {
            id: '4.1.1',
            text: 'Is there a formal process for granting, modifying, and revoking access rights?',
            type: 'yes-no-na'
          },
          {
            id: '4.1.2',
            text: 'Are privileges promptly revoked when employees leave or change roles?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Authentication Mechanisms',
        questions: [
          {
            id: '4.2.1',
            text: 'Is multi-factor authentication (MFA) enabled for critical systems and remote access?',
            type: 'yes-no-na'
          },
          {
            id: '4.2.2',
            text: 'Are password policies (e.g., length, complexity, expiration) enforced across the environment?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Privileged Access Management',
        questions: [
          {
            id: '4.3.1',
            text: 'Is there a separate privileged account management solution or process?',
            type: 'yes-no-na'
          },
          {
            id: '4.3.2',
            text: 'Are privileged actions logged and monitored for anomalies?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Remote Access & BYOD',
        questions: [
          {
            id: '4.4.1',
            text: 'Are employees allowed to use personal devices for business purposes? If so, what security controls (e.g., MDM) are in place?',
            type: 'yes-no-na'
          },
          {
            id: '4.4.2',
            text: 'Is remote access to internal systems restricted and monitored?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'network-security',
    title: 'Network Security',
    subsections: [
      {
        title: 'Network Architecture & Segmentation',
        questions: [
          {
            id: '5.1.1',
            text: 'Is there documented network architecture showing DMZs, internal networks, and segregated environments (e.g., PCI network)?',
            type: 'yes-no-na'
          },
          {
            id: '5.1.2',
            text: 'Are critical systems isolated or segmented from the corporate network?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Firewall & Perimeter Security',
        questions: [
          {
            id: '5.2.1',
            text: 'Are firewalls configured with a default deny rule set, only allowing necessary traffic?',
            type: 'yes-no-na'
          },
          {
            id: '5.2.2',
            text: 'How often are firewall rules reviewed and updated?',
            type: 'yes-no-na'
          },
          {
            id: '5.2.3',
            text: 'Are intrusion detection or intrusion prevention systems (IDS/IPS) deployed and monitored?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Wireless Network Security',
        questions: [
          {
            id: '5.3.1',
            text: 'Is wireless access restricted using WPA2/WPA3 or equivalent encryption?',
            type: 'yes-no-na'
          },
          {
            id: '5.3.2',
            text: 'Is guest Wi-Fi segregated from internal corporate networks?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Network Monitoring & Logs',
        questions: [
          {
            id: '5.4.1',
            text: 'Are network traffic logs reviewed regularly for suspicious or unauthorized activities?',
            type: 'yes-no-na'
          },
          {
            id: '5.4.2',
            text: 'Does the organization have a Security Information and Event Management (SIEM) system or log management solution?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'endpoint-security',
    title: 'Endpoint & System Security',
    subsections: [
      {
        title: 'Endpoint Protection',
        questions: [
          {
            id: '6.1.1',
            text: 'Are antivirus/anti-malware solutions installed and kept up to date on all endpoints?',
            type: 'yes-no-na'
          },
          {
            id: '6.1.2',
            text: 'Are endpoints (e.g., laptops, desktops, servers) configured with host-based firewalls?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Patch Management',
        questions: [
          {
            id: '6.2.1',
            text: 'Is there a formal patch management policy covering operating systems, applications, and firmware?',
            type: 'yes-no-na'
          },
          {
            id: '6.2.2',
            text: 'How quickly are critical or high-severity patches applied?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Secure Configuration',
        questions: [
          {
            id: '6.3.1',
            text: 'Does the organization follow a secure baseline or benchmark (e.g., CIS Benchmarks) for servers, workstations, and network devices?',
            type: 'yes-no-na'
          },
          {
            id: '6.3.2',
            text: 'Are administrative tools (e.g., PowerShell, Remote Desktop) restricted and monitored?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Vulnerability Scanning',
        questions: [
          {
            id: '6.4.1',
            text: 'Is vulnerability scanning performed on a regular schedule (internal and external)?',
            type: 'yes-no-na'
          },
          {
            id: '6.4.2',
            text: 'How are vulnerabilities prioritized for remediation, and what is the typical remediation timeline?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'application-security',
    title: 'Application & Software Development',
    subsections: [
      {
        title: 'Secure Software Development Lifecycle',
        questions: [
          {
            id: '7.1.1',
            text: 'Are security requirements integrated into the SDLC, including design, development, testing, and deployment?',
            type: 'yes-no-na'
          },
          {
            id: '7.1.2',
            text: 'Is code reviewed for security weaknesses (e.g., peer code reviews, automated static analysis)?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Application Testing',
        questions: [
          {
            id: '7.2.1',
            text: 'Do you conduct regular penetration testing or code scanning for critical applications?',
            type: 'yes-no-na'
          },
          {
            id: '7.2.2',
            text: 'Are open source or third-party components scanned for known vulnerabilities?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Change Management',
        questions: [
          {
            id: '7.3.1',
            text: 'Is there a formal change control process to document, assess, and approve changes?',
            type: 'yes-no-na'
          },
          {
            id: '7.3.2',
            text: 'Are changes tested and reviewed for security impact before implementation?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Encryption & Key Management',
        questions: [
          {
            id: '7.4.1',
            text: 'Is sensitive data encrypted at rest and in transit?',
            type: 'yes-no-na'
          },
          {
            id: '7.4.2',
            text: 'How are encryption keys generated, stored, and rotated?',
            type: 'yes-no-na'
          },
          {
            id: '7.4.3',
            text: 'Are industry standards (e.g., AES-256) used for encryption?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'physical-security',
    title: 'Physical & Environmental Controls',
    subsections: [
      {
        title: 'Facilities Security',
        questions: [
          {
            id: '8.1.1',
            text: 'Are physical access controls (e.g., badges, biometric readers) in place for sensitive areas?',
            type: 'yes-no-na'
          },
          {
            id: '8.1.2',
            text: 'Is there a visitor management process (badges, escorts, logs)?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Equipment Protection',
        questions: [
          {
            id: '8.2.1',
            text: 'Are critical devices (servers, networking equipment) located in secure areas with restricted access?',
            type: 'yes-no-na'
          },
          {
            id: '8.2.2',
            text: 'Is environmental control (temperature, humidity) and fire suppression available in data centers?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Monitoring & Surveillance',
        questions: [
          {
            id: '8.3.1',
            text: 'Are CCTV or other surveillance systems in place, and are footage logs retained for a defined period?',
            type: 'yes-no-na'
          },
          {
            id: '8.3.2',
            text: 'Is on-premises security staffed or monitored 24/7?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'incident-management',
    title: 'Incident Management & Response',
    subsections: [
      {
        title: 'Incident Response Plan',
        questions: [
          {
            id: '9.1.1',
            text: 'Is there a documented incident response plan (IRP) detailing roles, responsibilities, and procedures?',
            type: 'yes-no-na'
          },
          {
            id: '9.1.2',
            text: 'How often is the IRP tested (e.g., tabletop exercises, simulations)?',
            type: 'yes-no-na'
          },
          {
            id: '9.1.3',
            text: 'Is there a defined process for breach notification to regulators and affected parties?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Detection & Reporting',
        questions: [
          {
            id: '9.2.1',
            text: 'Are intrusion detection tools and logs actively monitored to identify potential incidents?',
            type: 'yes-no-na'
          },
          {
            id: '9.2.2',
            text: 'Is there a clear process for employees to report suspected security events?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Forensics & Investigation',
        questions: [
          {
            id: '9.3.1',
            text: 'Does the organization have internal forensic capabilities or retain third-party expertise?',
            type: 'yes-no-na'
          },
          {
            id: '9.3.2',
            text: 'Are investigation procedures documented and tested, including evidence handling?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'business-continuity',
    title: 'Business Continuity & Disaster Recovery',
    subsections: [
      {
        title: 'Business Impact Analysis (BIA)',
        questions: [
          {
            id: '10.1.1',
            text: 'Has the organization conducted a BIA to identify critical processes and define RTO and RPO?',
            type: 'yes-no-na'
          },
          {
            id: '10.1.2',
            text: 'When was the last BIA review or update conducted?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Business Continuity Plan (BCP)',
        questions: [
          {
            id: '10.2.1',
            text: 'Is there a documented BCP addressing continuity strategies for essential functions?',
            type: 'yes-no-na'
          },
          {
            id: '10.2.2',
            text: 'Are BCP tests or exercises conducted at least annually?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Disaster Recovery (DR)',
        questions: [
          {
            id: '10.3.1',
            text: 'Is there a DR plan with defined recovery procedures for critical systems and data?',
            type: 'yes-no-na'
          },
          {
            id: '10.3.2',
            text: 'Are backups performed regularly, tested, and stored securely offsite?',
            type: 'yes-no-na'
          },
          {
            id: '10.3.3',
            text: 'Have recovery time (RTO) and recovery point objectives (RPO) been defined and tested?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'security-awareness',
    title: 'Security Awareness & Training',
    subsections: [
      {
        title: 'Training Program',
        questions: [
          {
            id: '11.1.1',
            text: 'Is there a formal security awareness program for all employees and contractors?',
            type: 'yes-no-na'
          },
          {
            id: '11.1.2',
            text: 'How frequently is cybersecurity training provided (e.g., onboarding, annual refreshers)?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Phishing & Social Engineering',
        questions: [
          {
            id: '11.2.1',
            text: 'Are regular phishing simulation campaigns conducted to measure and improve employee resilience?',
            type: 'yes-no-na'
          },
          {
            id: '11.2.2',
            text: 'Is there a mechanism for employees to report suspicious emails or messages?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Role-Based Training',
        questions: [
          {
            id: '11.3.1',
            text: 'Do employees in specialized roles (e.g., developers, administrators) receive additional security training relevant to their duties?',
            type: 'yes-no-na'
          },
          {
            id: '11.3.2',
            text: 'Are training records maintained for auditing and compliance purposes?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'logging-monitoring',
    title: 'Logging, Monitoring & Metrics',
    subsections: [
      {
        title: 'Logging Policies',
        questions: [
          {
            id: '12.1.1',
            text: 'Are critical system and application logs retained for a defined period (e.g., 90 days, 1 year)?',
            type: 'yes-no-na'
          },
          {
            id: '12.1.2',
            text: 'Is log collection centralized (e.g., using a SIEM or log management tool)?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Monitoring & Alerts',
        questions: [
          {
            id: '12.2.1',
            text: 'Are real-time alerts configured for critical events or threshold breaches?',
            type: 'yes-no-na'
          },
          {
            id: '12.2.2',
            text: 'Are logs reviewed regularly by trained personnel, with suspicious events escalated promptly?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Security Metrics & Reporting',
        questions: [
          {
            id: '12.3.1',
            text: 'Are key security metrics (e.g., patch compliance, incident response time) tracked and reported to management?',
            type: 'yes-no-na'
          },
          {
            id: '12.3.2',
            text: 'Does the organization have defined KPIs or KRIs (Key Performance/Risk Indicators) for cybersecurity?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    subsections: [
      {
        title: 'Cloud Service Provider Selection',
        questions: [
          {
            id: '13.1.1',
            text: 'Are cloud providers vetted for compliance with relevant security frameworks (e.g., SOC 2, ISO 27017)?',
            type: 'yes-no-na'
          },
          {
            id: '13.1.2',
            text: 'Do contractual agreements with cloud providers address data security, privacy, and breach notifications?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Cloud Architecture & Responsibilities',
        questions: [
          {
            id: '13.2.1',
            text: 'Is there a clear understanding of the shared responsibility model between the organization and the cloud provider?',
            type: 'yes-no-na'
          },
          {
            id: '13.2.2',
            text: 'How are network and endpoint security controls extended to cloud environments?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Data Security in the Cloud',
        questions: [
          {
            id: '13.3.1',
            text: 'Are encryption and key management processes implemented in cloud services?',
            type: 'yes-no-na'
          },
          {
            id: '13.3.2',
            text: 'Are cloud-based workloads regularly scanned for vulnerabilities?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'emerging-threats',
    title: 'Emerging Threats & Continuous Improvement',
    subsections: [
      {
        title: 'Threat Intelligence',
        questions: [
          {
            id: '14.1.1',
            text: 'Does the organization subscribe to threat intelligence feeds or participate in information-sharing communities (e.g., ISACs)?',
            type: 'yes-no-na'
          },
          {
            id: '14.1.2',
            text: 'Is there a process to integrate threat intelligence into security controls and risk assessments?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Continuous Improvement',
        questions: [
          {
            id: '14.2.1',
            text: 'Are lessons learned from incidents, audits, or assessments used to update security policies and procedures?',
            type: 'yes-no-na'
          },
          {
            id: '14.2.2',
            text: 'Does the organization periodically benchmark against industry best practices or peers?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  },
  {
    id: 'final-review',
    title: 'Final Review & Action Plan',
    subsections: [
      {
        title: 'Risk Prioritization',
        questions: [
          {
            id: '15.1.1',
            text: 'Which risks discovered during the assessment are deemed highest priority?',
            type: 'yes-no-na'
          },
          {
            id: '15.1.2',
            text: 'What are the timelines and resources required to address these risks?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Management Sign-Off',
        questions: [
          {
            id: '15.2.1',
            text: 'Who (roles or individuals) will review and approve the security assessment findings?',
            type: 'yes-no-na'
          },
          {
            id: '15.2.2',
            text: 'Is there a defined process for escalating unresolved high-risk issues to executive management?',
            type: 'yes-no-na'
          }
        ]
      },
      {
        title: 'Ongoing Governance',
        questions: [
          {
            id: '15.3.1',
            text: 'How will progress on remediation items be tracked, reported, and validated?',
            type: 'yes-no-na'
          },
          {
            id: '15.3.2',
            text: 'When will the next assessment or review take place (continuous assessment, annual formal review, etc.)?',
            type: 'yes-no-na'
          }
        ]
      }
    ]
  }
];
