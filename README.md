# Cybersecurity Assessment Tool

A modern, React-based cybersecurity assessment application built with TypeScript, Tailwind CSS, and Vite.

## Features

- **Modern React Architecture**: Built with React 18, TypeScript, and modern hooks
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Scoring**: Dynamic security score calculation with risk analysis
- **Data Persistence**: Automatic saving to localStorage
- **Export Functionality**: JSON export of assessment data
- **Comprehensive Assessment**: 15 sections covering all aspects of cybersecurity
- **Interactive UI**: Collapsible sections, progress tracking, and intuitive navigation

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vitest** for testing
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Application header with client info
│   ├── ProgressBar.tsx  # Progress tracking
│   ├── Navigation.tsx   # Section navigation
│   ├── MainContent.tsx  # Main content area
│   ├── QuestionItem.tsx # Individual question component
│   └── SummaryModal.tsx # Assessment summary modal
├── context/             # React context for state management
│   └── AssessmentContext.tsx
├── data/                # Static data
│   └── sections.ts      # Assessment sections and questions
├── types/               # TypeScript type definitions
│   └── index.ts
├── test/                # Test setup
│   └── setup.ts
└── main.tsx             # Application entry point
```

## Key Features

### Assessment Sections

1. **Organizational & Governance**
2. **Risk Management Process**
3. **Asset Management & Classification**
4. **Access Control & Identity Management**
5. **Network Security**
6. **Endpoint & System Security**
7. **Application & Software Development**
8. **Physical & Environmental Controls**
9. **Incident Management & Response**
10. **Business Continuity & Disaster Recovery**
11. **Security Awareness & Training**
12. **Logging, Monitoring & Metrics**
13. **Cloud Security**
14. **Emerging Threats & Continuous Improvement**
15. **Final Review & Action Plan**

### Scoring System

- **Dynamic Scoring**: Real-time security score calculation
- **Risk Analysis**: High, medium, low, and informational risk categorization
- **Section Breakdown**: Individual scores for each assessment section
- **Progress Tracking**: Visual progress indicators and completion rates

### Data Management

- **Auto-save**: Automatic saving to localStorage
- **Export**: JSON export functionality for assessment data
- **Import**: Load previously saved assessments
- **Validation**: Form validation and data integrity checks

## Modern Development Features

- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Modular, reusable components
- **State Management**: React Context for global state
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Testing**: Unit tests with Vitest and Testing Library
- **Code Quality**: ESLint configuration for consistent code style
- **Performance**: Optimized with Vite for fast builds and hot reload

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
