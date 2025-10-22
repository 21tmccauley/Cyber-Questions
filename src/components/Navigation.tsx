import React from 'react';
import { useAssessment } from '@/context/AssessmentContext';

const Navigation: React.FC = () => {
  const { state, dispatch, sections } = useAssessment();

  const isSectionCompleted = (sectionIndex: number): boolean => {
    const section = sections[sectionIndex];
    let completedQuestions = 0;
    let totalQuestions = 0;

    section.subsections.forEach(subsection => {
      subsection.questions.forEach(question => {
        totalQuestions++;
        const data = state.assessmentData.sections[question.id];
        if (data && data.answer && data.findings && data.risk) {
          completedQuestions++;
        }
      });
    });

    return completedQuestions === totalQuestions && totalQuestions > 0;
  };

  return (
    <div className="card p-6 mb-6">
      <div className="flex flex-wrap gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => dispatch({ type: 'SET_CURRENT_SECTION', payload: index })}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              index === state.currentSection
                ? 'bg-primary-600 text-white shadow-md'
                : isSectionCompleted(index)
                ? 'bg-success-100 text-success-800 border border-success-200 hover:bg-success-200'
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
