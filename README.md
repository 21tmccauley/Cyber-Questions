# Cybersecurity Assessment Tool

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> A comprehensive, modern cybersecurity assessment application built with React, TypeScript, and Tailwind CSS. Designed for security professionals to conduct thorough organizational cybersecurity evaluations.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Assessment Framework](#assessment-framework)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features

### Core Functionality
- **Real-time Scoring**: Dynamic security score calculation with comprehensive risk analysis
- **Auto-save**: Automatic data persistence to localStorage
- **Export/Import**: JSON export functionality for assessment data
- **Reset Functionality**: One-click reset with confirmation dialog
- **Responsive Design**: Mobile-first design optimized for all devices

### Assessment Coverage
- **15 Comprehensive Sections** covering all aspects of cybersecurity
- **Risk-based Scoring** with High, Medium, Low, and Informational categories
- **Progress Tracking** with visual indicators and completion rates
- **Interactive Navigation** with collapsible sections and intuitive UI

### Modern Development
- **TypeScript** for type safety and better developer experience
- **React 18** with modern hooks and context API
- **Tailwind CSS** for utility-first styling
- **Vite** for lightning-fast development and builds

## Screenshots

> *Screenshots coming soon - showing the modern UI, progress tracking, and assessment interface*

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/cybersecurity-assessment-tool.git

# Navigate to the project directory
cd cybersecurity-assessment-tool

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Installation

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 8.0 or higher (or yarn)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cybersecurity-assessment-tool.git
   cd cybersecurity-assessment-tool
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Usage

### Starting an Assessment

1. **Enter Client Information**
   - Fill in client name, assessment date, and assessor name in the header
   - Data is automatically saved as you type

2. **Navigate Through Sections**
   - Use the navigation buttons to move between sections
   - Complete questions by selecting answers and providing findings
   - Risk levels are automatically calculated based on responses

3. **Track Progress**
   - Monitor completion percentage in the progress bar
   - View real-time security score updates
   - See risk distribution (High, Medium, Low)

### Using the Reset Function

1. **Locate Reset Button**
   - Find the "Reset Assessment" button in the header (rotate icon)
   - Located next to the risk indicators

2. **Confirm Reset**
   - Click the reset button to open confirmation dialog
   - Review the warning about data loss
   - Choose "Cancel" to keep progress or "Reset Assessment" to proceed

> ⚠️ **Warning**: Resetting will permanently delete all progress, answers, and findings. This action cannot be undone.

### Exporting Results

1. **Complete Assessment**
   - Finish all sections to generate comprehensive results
   - Review the summary modal for key findings

2. **Export Data**
   - Click "Export" to download JSON file
   - File includes all assessment data, scores, and metadata

## Project Structure

```
src/
├── components/              # React components
│   ├── Header.tsx          # Application header with client info
│   ├── ProgressBar.tsx     # Progress tracking component
│   ├── Navigation.tsx      # Section navigation
│   ├── MainContent.tsx     # Main content area
│   ├── QuestionItem.tsx    # Individual question component
│   ├── QuestionGroup.tsx   # Question grouping
│   ├── QuestionsContainer.tsx # Questions container
│   ├── SectionHeader.tsx   # Section headers
│   ├── SectionFooter.tsx   # Section footers
│   └── SummaryModal.tsx    # Assessment summary modal
├── context/                # React context for state management
│   └── AssessmentContext.tsx
├── data/                   # Static data
│   └── sections.ts        # Assessment sections and questions
├── types/                  # TypeScript type definitions
│   └── index.ts
├── test/                   # Test setup
│   └── setup.ts
└── main.tsx               # Application entry point
```

## Assessment Framework

### Assessment Sections

| Section | Description | Key Areas |
|---------|-------------|-----------|
| **1. Organizational & Governance** | Leadership and governance structures | Policies, roles, accountability |
| **2. Risk Management Process** | Risk identification and management | Risk assessment, mitigation strategies |
| **3. Asset Management** | Asset classification and protection | Inventory, classification, handling |
| **4. Access Control** | Identity and access management | Authentication, authorization, privileges |
| **5. Network Security** | Network infrastructure protection | Firewalls, segmentation, monitoring |
| **6. Endpoint Security** | Endpoint protection and management | Antivirus, patching, device management |
| **7. Application Security** | Secure development practices | SDLC, testing, secure coding |
| **8. Physical Security** | Physical access controls | Facilities, equipment, environmental |
| **9. Incident Response** | Incident handling procedures | Detection, response, recovery |
| **10. Business Continuity** | Disaster recovery planning | Backup, recovery, continuity |
| **11. Security Awareness** | Training and education | Awareness programs, phishing |
| **12. Logging & Monitoring** | Security monitoring and logging | SIEM, logging, alerting |
| **13. Cloud Security** | Cloud security controls | Cloud governance, shared responsibility |
| **14. Emerging Threats** | Threat landscape awareness | Threat intelligence, adaptation |
| **15. Final Review** | Assessment summary and planning | Findings, recommendations, action plan |

### Scoring Methodology

- **Dynamic Scoring**: Real-time calculation based on responses
- **Risk Weighting**: Different risk levels affect scoring multipliers
- **Section Breakdown**: Individual scores for each assessment area
- **Overall Security Score**: Comprehensive security posture rating

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run test suite |
| `npm run test:ui` | Run tests with UI |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

## Testing

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests in watch mode
npm run test:watch
```

## Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** for new functionality
5. **Run tests** to ensure everything works
   ```bash
   npm run test
   npm run lint
   ```
6. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
7. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Ensure responsive design
- Follow the existing code style

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide React](https://lucide.dev/)
- Bundled with [Vite](https://vitejs.dev/)

## Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yourusername/cybersecurity-assessment-tool/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

<div align="center">
  <strong>Built for the cybersecurity community</strong>
</div>