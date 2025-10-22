import React from 'react';
import { Section } from '@/types';
import QuestionGroup from './QuestionGroup';

interface QuestionsContainerProps {
  section: Section;
}

const QuestionsContainer: React.FC<QuestionsContainerProps> = ({ section }) => {
  return (
    <div className="p-6">
      {section.subsections.map((subsection, index) => (
        <QuestionGroup
          key={index}
          subsection={subsection}
        />
      ))}
    </div>
  );
};

export default QuestionsContainer;
