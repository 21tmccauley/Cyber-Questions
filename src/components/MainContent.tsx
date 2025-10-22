import React from 'react';
import { useAssessment } from '@/context/AssessmentContext';
import SectionHeader from './SectionHeader';
import QuestionsContainer from './QuestionsContainer';
import SectionFooter from './SectionFooter';

const MainContent: React.FC = () => {
  const { state, dispatch, sections } = useAssessment();
  const currentSection = sections[state.currentSection];

  const handlePrevious = () => {
    if (state.currentSection > 0) {
      dispatch({ type: 'SET_CURRENT_SECTION', payload: state.currentSection - 1 });
    }
  };

  const handleNext = () => {
    if (state.currentSection < sections.length - 1) {
      dispatch({ type: 'SET_CURRENT_SECTION', payload: state.currentSection + 1 });
    } else {
      dispatch({ type: 'SET_MODAL_OPEN', payload: true });
    }
  };

  const handleSave = () => {
    // Data is automatically saved via useEffect in context
    // Show notification or feedback here if needed
  };

  const handleExport = () => {
    dispatch({ type: 'SET_MODAL_OPEN', payload: true });
  };

  return (
    <div className="card">
      <SectionHeader 
        title={currentSection.title}
        currentSection={state.currentSection}
        totalSections={sections.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      
      <QuestionsContainer section={currentSection} />
      
      <SectionFooter 
        onSave={handleSave}
        onExport={handleExport}
      />
    </div>
  );
};

export default MainContent;
