import React from 'react';
import { Subsection } from '@/types';
import QuestionItem from './QuestionItem';

interface QuestionGroupProps {
  subsection: Subsection;
}

const QuestionGroup: React.FC<QuestionGroupProps> = ({ subsection }) => {
  return (
    <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-primary-500">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{subsection.title}</h3>
      
      <div className="space-y-6">
        {subsection.questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionGroup;
