// Cybersecurity Assessment Tool - Main JavaScript File

class CybersecurityAssessment {
    constructor() {
        this.currentSection = 0;
        this.assessmentData = {
            clientName: '',
            assessmentDate: '',
            assessorName: '',
            sections: {}
        };
        this.sections = this.initializeSections();
        this.init();
    }

    initializeSections() {
        return [
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
    }

    init() {
        this.setupEventListeners();
        this.initializeNavigation();
        this.loadSavedData();
        this.renderCurrentSection();
        this.updateProgress();
        this.setCurrentDate();
    }

    setupEventListeners() {
        // Header inputs
        document.getElementById('clientName').addEventListener('input', (e) => {
            this.assessmentData.clientName = e.target.value;
            this.saveData();
        });

        document.getElementById('assessmentDate').addEventListener('change', (e) => {
            this.assessmentData.assessmentDate = e.target.value;
            this.saveData();
        });

        document.getElementById('assessorName').addEventListener('input', (e) => {
            this.assessmentData.assessorName = e.target.value;
            this.saveData();
        });

        // Navigation
        document.getElementById('prevSection').addEventListener('click', () => {
            this.previousSection();
        });

        document.getElementById('nextSection').addEventListener('click', () => {
            this.nextSection();
        });

        // Actions
        document.getElementById('saveProgress').addEventListener('click', () => {
            this.saveData();
            this.showNotification('Progress saved successfully!', 'success');
        });

        document.getElementById('exportData').addEventListener('click', () => {
            this.showSummary();
        });

        // Modal events
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('closeSummaryModal').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('exportSummary').addEventListener('click', () => {
            this.exportAssessment();
        });

        // Close modal when clicking outside
        document.getElementById('summaryModal').addEventListener('click', (e) => {
            if (e.target.id === 'summaryModal') {
                this.closeModal();
            }
        });
    }

    initializeNavigation() {
        const navTabs = document.getElementById('navTabs');
        navTabs.innerHTML = '';

        this.sections.forEach((section, index) => {
            const tab = document.createElement('div');
            tab.className = 'nav-tab';
            tab.textContent = section.title;
            tab.addEventListener('click', () => {
                this.currentSection = index;
                this.renderCurrentSection();
                this.updateProgress();
            });
            navTabs.appendChild(tab);
        });
    }

    renderCurrentSection() {
        const section = this.sections[this.currentSection];
        const container = document.getElementById('questionsContainer');
        const title = document.getElementById('sectionTitle');

        title.textContent = section.title;
        container.innerHTML = '';

        section.subsections.forEach(subsection => {
            const subsectionDiv = document.createElement('div');
            subsectionDiv.className = 'question-group';
            subsectionDiv.innerHTML = `<h3>${subsection.title}</h3>`;

            subsection.questions.forEach(question => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question-item';
                questionDiv.innerHTML = this.renderQuestion(question);
                subsectionDiv.appendChild(questionDiv);
            });

            container.appendChild(subsectionDiv);
        });

        // Add event listeners for N/A collapse functionality
        this.setupCollapseListeners();

        this.updateNavigation();
        this.updateNavigationButtons();
    }

    renderQuestion(question) {
        const questionId = question.id;
        const currentData = this.assessmentData.sections[questionId] || {};
        const isNA = currentData.answer === 'na';

        return `
            <div class="question-text">${question.text}</div>
            <div class="question-options">
                <div class="option-group">
                    <input type="radio" id="${questionId}_yes" name="${questionId}_answer" value="yes" ${currentData.answer === 'yes' ? 'checked' : ''}>
                    <label for="${questionId}_yes">Yes</label>
                </div>
                <div class="option-group">
                    <input type="radio" id="${questionId}_no" name="${questionId}_answer" value="no" ${currentData.answer === 'no' ? 'checked' : ''}>
                    <label for="${questionId}_no">No</label>
                </div>
                <div class="option-group ${isNA ? 'na-selected' : ''}">
                    <input type="radio" id="${questionId}_na" name="${questionId}_answer" value="na" ${currentData.answer === 'na' ? 'checked' : ''}>
                    <label for="${questionId}_na">N/A</label>
                </div>
            </div>
            <div class="findings-section collapsible-section ${isNA ? 'collapsed' : 'expanded'}">
                <label for="${questionId}_findings">Findings & Notes:</label>
                <textarea id="${questionId}_findings" placeholder="Enter findings here...">${currentData.findings || ''}</textarea>
            </div>
            <div class="risk-rating collapsible-section ${isNA ? 'collapsed' : 'expanded'}">
                <label>Risk Rating:</label>
                <div class="risk-options">
                    <div class="risk-option">
                        <input type="radio" id="${questionId}_low" name="${questionId}_risk" value="low" ${currentData.risk === 'low' ? 'checked' : ''}>
                        <label for="${questionId}_low">Low</label>
                    </div>
                    <div class="risk-option">
                        <input type="radio" id="${questionId}_medium" name="${questionId}_risk" value="medium" ${currentData.risk === 'medium' ? 'checked' : ''}>
                        <label for="${questionId}_medium">Medium</label>
                    </div>
                    <div class="risk-option">
                        <input type="radio" id="${questionId}_high" name="${questionId}_risk" value="high" ${currentData.risk === 'high' ? 'checked' : ''}>
                        <label for="${questionId}_high">High</label>
                    </div>
                    <div class="risk-option">
                        <input type="radio" id="${questionId}_informational" name="${questionId}_risk" value="informational" ${currentData.risk === 'informational' ? 'checked' : ''}>
                        <label for="${questionId}_informational">Informational</label>
                    </div>
                </div>
            </div>
        `;
    }

    setupCollapseListeners() {
        // Find all N/A radio buttons and add event listeners
        const naInputs = document.querySelectorAll('input[value="na"]');
        naInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.collapseQuestionSections(e.target.name);
                }
            });
        });

        // Find all Yes/No radio buttons and add event listeners
        const yesNoInputs = document.querySelectorAll('input[value="yes"], input[value="no"]');
        yesNoInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.expandQuestionSections(e.target.name);
                }
            });
        });
    }

    collapseQuestionSections(questionName) {
        const questionId = questionName.replace('_answer', '');
        const findingsSection = document.getElementById(`${questionId}_findings`).closest('.findings-section');
        const riskRatingSection = document.querySelector(`input[name="${questionId}_risk"]`).closest('.risk-rating');
        
        // Add collapsed class to both sections
        findingsSection.classList.remove('expanded');
        findingsSection.classList.add('collapsed');
        riskRatingSection.classList.remove('expanded');
        riskRatingSection.classList.add('collapsed');

        // Update the N/A option group styling
        const naOptionGroup = document.querySelector(`input[name="${questionName}"]`).closest('.option-group');
        naOptionGroup.classList.add('na-selected');
    }

    expandQuestionSections(questionName) {
        const questionId = questionName.replace('_answer', '');
        const findingsSection = document.getElementById(`${questionId}_findings`).closest('.findings-section');
        const riskRatingSection = document.querySelector(`input[name="${questionId}_risk"]`).closest('.risk-rating');
        
        // Remove collapsed class from both sections
        findingsSection.classList.remove('collapsed');
        findingsSection.classList.add('expanded');
        riskRatingSection.classList.remove('collapsed');
        riskRatingSection.classList.add('expanded');

        // Remove the N/A option group styling
        const naOptionGroup = document.querySelector(`input[name="${questionName}"]`).closest('.option-group');
        naOptionGroup.classList.remove('na-selected');
    }

    updateNavigation() {
        const tabs = document.querySelectorAll('.nav-tab');
        tabs.forEach((tab, index) => {
            tab.classList.remove('active', 'completed');
            if (index === this.currentSection) {
                tab.classList.add('active');
            } else if (this.isSectionCompleted(index)) {
                tab.classList.add('completed');
            }
        });
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevSection');
        const nextBtn = document.getElementById('nextSection');

        prevBtn.disabled = this.currentSection === 0;
        nextBtn.disabled = this.currentSection === this.sections.length - 1;

        if (this.currentSection === this.sections.length - 1) {
            nextBtn.innerHTML = '<i class="fas fa-check"></i> Complete Assessment';
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
        }
    }

    isSectionCompleted(sectionIndex) {
        const section = this.sections[sectionIndex];
        let completedQuestions = 0;
        let totalQuestions = 0;

        section.subsections.forEach(subsection => {
            subsection.questions.forEach(question => {
                totalQuestions++;
                const questionId = question.id;
                const data = this.assessmentData.sections[questionId];
                if (data && data.answer && data.findings && data.risk) {
                    completedQuestions++;
                }
            });
        });

        return completedQuestions === totalQuestions && totalQuestions > 0;
    }

    updateProgress() {
        let totalQuestions = 0;
        let completedQuestions = 0;

        this.sections.forEach(section => {
            section.subsections.forEach(subsection => {
                subsection.questions.forEach(question => {
                    totalQuestions++;
                    const questionId = question.id;
                    const data = this.assessmentData.sections[questionId];
                    if (data && data.answer && data.findings && data.risk) {
                        completedQuestions++;
                    }
                });
            });
        });

        const percentage = totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0;
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        progressFill.style.width = `${percentage}%`;
        
        // Calculate and display security score
        const score = this.calculateSecurityScore();
        progressText.innerHTML = `${percentage}% Complete (${completedQuestions}/${totalQuestions} questions) | Security Score: <strong>${score.overall}/100</strong>`;
        
        // Update score display in header if it exists
        this.updateScoreDisplay(score);
    }

    nextSection() {
        if (this.currentSection < this.sections.length - 1) {
            this.saveCurrentSectionData();
            this.currentSection++;
            this.renderCurrentSection();
            this.updateProgress();
        } else {
            this.showSummary();
        }
    }

    previousSection() {
        if (this.currentSection > 0) {
            this.saveCurrentSectionData();
            this.currentSection--;
            this.renderCurrentSection();
            this.updateProgress();
        }
    }

    saveCurrentSectionData() {
        const section = this.sections[this.currentSection];
        section.subsections.forEach(subsection => {
            subsection.questions.forEach(question => {
                const questionId = question.id;
                const answer = document.querySelector(`input[name="${questionId}_answer"]:checked`);
                const findings = document.getElementById(`${questionId}_findings`);
                const risk = document.querySelector(`input[name="${questionId}_risk"]:checked`);

                if (answer || findings.value || risk) {
                    this.assessmentData.sections[questionId] = {
                        answer: answer ? answer.value : '',
                        findings: findings.value,
                        risk: risk ? risk.value : ''
                    };
                }
            });
        });
        this.saveData();
    }

    showSummary() {
        this.saveCurrentSectionData();
        const modal = document.getElementById('summaryModal');
        const content = document.getElementById('summaryContent');
        
        const summary = this.generateSummary();
        content.innerHTML = summary;
        modal.style.display = 'block';
    }

    generateSummary() {
        const stats = this.calculateStats();
        const score = this.calculateSecurityScore();
        const highRiskItems = this.getHighRiskItems();
        const incompleteItems = this.getIncompleteItems();
        const recommendations = this.getScoreRecommendations(score);

        return `
            <div class="summary-section">
                <h4>Security Score Overview</h4>
                <div class="summary-stats">
                    <div class="stat-card">
                        <div class="stat-number" style="color: ${this.getScoreColor(score.overall)}">${score.overall}/100</div>
                        <div class="stat-label">Overall Security Score</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${stats.totalQuestions}</div>
                        <div class="stat-label">Total Questions</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${stats.completedQuestions}</div>
                        <div class="stat-label">Completed</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">${stats.completionRate}%</div>
                        <div class="stat-label">Completion Rate</div>
                    </div>
                </div>
            </div>

            <div class="summary-section">
                <h4>Risk Distribution</h4>
                <div class="summary-stats">
                    <div class="stat-card">
                        <div class="stat-number" style="color: #dc3545">${score.riskCounts.high}</div>
                        <div class="stat-label">High Risk</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" style="color: #fd7e14">${score.riskCounts.medium}</div>
                        <div class="stat-label">Medium Risk</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" style="color: #28a745">${score.riskCounts.low}</div>
                        <div class="stat-label">Low Risk</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" style="color: #6c757d">${score.riskCounts.informational}</div>
                        <div class="stat-label">Informational</div>
                    </div>
                </div>
            </div>

            <div class="summary-section">
                <h4>Section Scores</h4>
                <div class="section-scores">
                    ${Object.values(score.sectionScores).map(section => `
                        <div class="section-score-item">
                            <div class="section-name">${section.name}</div>
                            <div class="section-score-bar">
                                <div class="section-score-fill" style="width: ${section.score}%; background-color: ${this.getScoreColor(section.score)}"></div>
                            </div>
                            <div class="section-score-value" style="color: ${this.getScoreColor(section.score)}">${section.score}%</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="summary-section">
                <h4>Recommendations</h4>
                <div class="recommendations">
                    ${recommendations.map(rec => `<div class="recommendation-item">${rec}</div>`).join('')}
                </div>
            </div>

            ${highRiskItems.length > 0 ? `
                <div class="summary-section">
                    <h4>High Risk Items Requiring Attention</h4>
                    <ul>
                        ${highRiskItems.map(item => `<li><strong>${item.question}</strong><br>${item.findings}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${incompleteItems.length > 0 ? `
                <div class="summary-section">
                    <h4>Incomplete Items</h4>
                    <ul>
                        ${incompleteItems.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${score.riskCounts.informational > 0 ? `
                <div class="summary-section">
                    <h4>Not Applicable Items Analysis</h4>
                    <div class="na-analysis">
                        <p><strong>Total N/A Items:</strong> ${score.riskCounts.informational}</p>
                        <p><strong>Guidance:</strong> Items marked as "Not Applicable" should be properly documented with business justification. Consider if these technologies or practices should be part of your future roadmap.</p>
                        <div class="na-guidance">
                            <h5>Best Practices for N/A Items:</h5>
                            <ul>
                                <li><strong>Document the reason:</strong> Explain why the item is not applicable to your organization</li>
                                <li><strong>Consider future adoption:</strong> Evaluate if these technologies should be part of your roadmap</li>
                                <li><strong>Review periodically:</strong> Reassess N/A items during annual security reviews</li>
                                <li><strong>Business justification:</strong> Ensure N/A decisions align with business objectives</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ` : ''}

            <div class="summary-section">
                <h4>Assessment Details</h4>
                <p><strong>Client:</strong> ${this.assessmentData.clientName || 'Not specified'}</p>
                <p><strong>Date:</strong> ${this.assessmentData.assessmentDate || 'Not specified'}</p>
                <p><strong>Assessor:</strong> ${this.assessmentData.assessorName || 'Not specified'}</p>
            </div>
        `;
    }

    calculateStats() {
        let totalQuestions = 0;
        let completedQuestions = 0;
        let highRiskCount = 0;

        this.sections.forEach(section => {
            section.subsections.forEach(subsection => {
                subsection.questions.forEach(question => {
                    totalQuestions++;
                    const questionId = question.id;
                    const data = this.assessmentData.sections[questionId];
                    if (data && data.answer && data.findings && data.risk) {
                        completedQuestions++;
                        if (data.risk === 'high') {
                            highRiskCount++;
                        }
                    }
                });
            });
        });

        return {
            totalQuestions,
            completedQuestions,
            completionRate: totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0,
            highRiskCount
        };
    }

    getHighRiskItems() {
        const highRiskItems = [];
        this.sections.forEach(section => {
            section.subsections.forEach(subsection => {
                subsection.questions.forEach(question => {
                    const questionId = question.id;
                    const data = this.assessmentData.sections[questionId];
                    if (data && data.risk === 'high') {
                        highRiskItems.push({
                            question: question.text,
                            findings: data.findings
                        });
                    }
                });
            });
        });
        return highRiskItems;
    }

    getIncompleteItems() {
        const incompleteItems = [];
        this.sections.forEach(section => {
            section.subsections.forEach(subsection => {
                subsection.questions.forEach(question => {
                    const questionId = question.id;
                    const data = this.assessmentData.sections[questionId];
                    if (!data || !data.answer || !data.findings || !data.risk) {
                        incompleteItems.push(question.text);
                    }
                });
            });
        });
        return incompleteItems;
    }

    exportAssessment() {
        const exportData = {
            ...this.assessmentData,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `cybersecurity-assessment-${this.assessmentData.clientName || 'client'}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        this.showNotification('Assessment exported successfully!', 'success');
    }

    saveData() {
        localStorage.setItem('cybersecurityAssessment', JSON.stringify(this.assessmentData));
    }

    loadSavedData() {
        const saved = localStorage.getItem('cybersecurityAssessment');
        if (saved) {
            this.assessmentData = JSON.parse(saved);
            
            // Populate header fields
            document.getElementById('clientName').value = this.assessmentData.clientName || '';
            document.getElementById('assessmentDate').value = this.assessmentData.assessmentDate || '';
            document.getElementById('assessorName').value = this.assessmentData.assessorName || '';
        }
    }

    setCurrentDate() {
        const dateInput = document.getElementById('assessmentDate');
        if (!dateInput.value) {
            dateInput.value = new Date().toISOString().split('T')[0];
            this.assessmentData.assessmentDate = dateInput.value;
        }
    }

    closeModal() {
        document.getElementById('summaryModal').style.display = 'none';
    }

    calculateSecurityScore() {
        let totalScore = 0;
        let maxScore = 0;
        let sectionScores = {};
        let riskCounts = { low: 0, medium: 0, high: 0, informational: 0 };

        this.sections.forEach((section, sectionIndex) => {
            let sectionScore = 0;
            let sectionMaxScore = 0;
            let sectionRiskCounts = { low: 0, medium: 0, high: 0, informational: 0 };

            section.subsections.forEach(subsection => {
                subsection.questions.forEach(question => {
                    const questionId = question.id;
                    const data = this.assessmentData.sections[questionId];
                    
                    if (data && data.answer && data.risk) {
                        const questionScore = this.calculateQuestionScore(data.answer, data.risk);
                        sectionScore += questionScore;
                        sectionMaxScore += 10; // Max score per question is 10
                        
                        // Count risk levels
                        sectionRiskCounts[data.risk]++;
                        riskCounts[data.risk]++;
                    }
                });
            });

            // Calculate section score as percentage
            const sectionPercentage = sectionMaxScore > 0 ? Math.round((sectionScore / sectionMaxScore) * 100) : 0;
            sectionScores[section.id] = {
                name: section.title,
                score: sectionPercentage,
                riskCounts: sectionRiskCounts
            };

            totalScore += sectionScore;
            maxScore += sectionMaxScore;
        });

        const overallScore = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
        
        return {
            overall: overallScore,
            sectionScores: sectionScores,
            riskCounts: riskCounts,
            totalQuestions: maxScore / 10,
            completedQuestions: totalScore / 10
        };
    }

    calculateQuestionScore(answer, risk) {
        // Base score based on answer
        let baseScore = 0;
        switch (answer) {
            case 'yes': baseScore = 10; break;
            case 'no': baseScore = 0; break;
            case 'na': baseScore = 7; break; // Higher score for N/A to not penalize for not having certain technologies
        }

        // Risk-based multiplier - N/A items get different treatment
        let riskMultiplier = 1;
        if (answer === 'na') {
            // For N/A items, risk rating indicates how critical it is for the organization
            switch (risk) {
                case 'low': riskMultiplier = 1.0; break;      // Not critical, full credit
                case 'medium': riskMultiplier = 0.9; break;   // Somewhat important, slight penalty
                case 'high': riskMultiplier = 0.7; break;     // Important but not applicable, moderate penalty
                case 'informational': riskMultiplier = 1.0; break; // Just informational, full credit
            }
        } else {
            // For Yes/No items, risk rating indicates severity of the issue
            switch (risk) {
                case 'low': riskMultiplier = 1.0; break;      // No penalty
                case 'medium': riskMultiplier = 0.8; break;    // 20% penalty
                case 'high': riskMultiplier = 0.5; break;      // 50% penalty
                case 'informational': riskMultiplier = 0.9; break; // 10% penalty
            }
        }

        return Math.round(baseScore * riskMultiplier);
    }

    updateScoreDisplay(score) {
        // Add score display to header if it doesn't exist
        let scoreDisplay = document.getElementById('scoreDisplay');
        if (!scoreDisplay) {
            scoreDisplay = document.createElement('div');
            scoreDisplay.id = 'scoreDisplay';
            scoreDisplay.className = 'score-display';
            document.querySelector('.header-content').appendChild(scoreDisplay);
        }

        const scoreColor = this.getScoreColor(score.overall);
        scoreDisplay.innerHTML = `
            <div class="score-item">
                <span class="score-label">Security Score:</span>
                <span class="score-value" style="color: ${scoreColor}">${score.overall}/100</span>
            </div>
            <div class="score-breakdown">
                <span class="risk-count high">${score.riskCounts.high} High</span>
                <span class="risk-count medium">${score.riskCounts.medium} Medium</span>
                <span class="risk-count low">${score.riskCounts.low} Low</span>
            </div>
        `;
    }

    getScoreColor(score) {
        if (score >= 80) return '#28a745'; // Green
        if (score >= 60) return '#ffc107'; // Yellow
        if (score >= 40) return '#fd7e14'; // Orange
        return '#dc3545'; // Red
    }

    getScoreRecommendations(score) {
        const recommendations = [];
        const naAnalysis = this.analyzeNAItems();
        
        if (score.overall < 40) {
            recommendations.push("🚨 CRITICAL: Immediate security improvements required");
            recommendations.push("• Implement basic security controls immediately");
            recommendations.push("• Conduct comprehensive security training");
            recommendations.push("• Establish incident response procedures");
        } else if (score.overall < 60) {
            recommendations.push("⚠️ HIGH PRIORITY: Significant security gaps identified");
            recommendations.push("• Address high-risk items first");
            recommendations.push("• Implement missing security controls");
            recommendations.push("• Regular security assessments recommended");
        } else if (score.overall < 80) {
            recommendations.push("✅ GOOD: Solid security foundation with room for improvement");
            recommendations.push("• Focus on medium-risk items");
            recommendations.push("• Enhance existing security measures");
            recommendations.push("• Regular monitoring and updates needed");
        } else {
            recommendations.push("🎉 EXCELLENT: Strong security posture");
            recommendations.push("• Maintain current security practices");
            recommendations.push("• Continue regular assessments");
            recommendations.push("• Consider advanced security measures");
        }

        // Add N/A specific recommendations
        if (naAnalysis.totalNA > 0) {
            recommendations.push("");
            recommendations.push("📋 NOT APPLICABLE ITEMS ANALYSIS:");
            
            if (naAnalysis.criticalNA > 0) {
                recommendations.push(`• ${naAnalysis.criticalNA} critical items marked as N/A - consider if these are truly not applicable`);
                recommendations.push("• Review if these technologies/services should be implemented");
            }
            
            if (naAnalysis.technologyNA > 0) {
                recommendations.push(`• ${naAnalysis.technologyNA} technology-specific items marked as N/A`);
                recommendations.push("• Consider future technology adoption roadmap");
            }
            
            recommendations.push("• Ensure N/A items are properly documented with business justification");
        }

        return recommendations;
    }

    analyzeNAItems() {
        let totalNA = 0;
        let criticalNA = 0;
        let technologyNA = 0;
        const naItems = [];

        this.sections.forEach(section => {
            section.subsections.forEach(subsection => {
                subsection.questions.forEach(question => {
                    const questionId = question.id;
                    const data = this.assessmentData.sections[questionId];
                    
                    if (data && data.answer === 'na') {
                        totalNA++;
                        
                        // Check if it's a critical item (high risk N/A)
                        if (data.risk === 'high') {
                            criticalNA++;
                        }
                        
                        // Check if it's technology-specific
                        const techKeywords = ['cloud', 'wireless', 'mobile', 'iot', 'ai', 'blockchain'];
                        const isTechSpecific = techKeywords.some(keyword => 
                            question.text.toLowerCase().includes(keyword)
                        );
                        
                        if (isTechSpecific) {
                            technologyNA++;
                        }
                        
                        naItems.push({
                            question: question.text,
                            risk: data.risk,
                            findings: data.findings
                        });
                    }
                });
            });
        });

        return {
            totalNA,
            criticalNA,
            technologyNA,
            items: naItems
        };
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            color: white;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CybersecurityAssessment();
});
