import React, { useState } from 'react';
import { Question } from '@/types';
import { useAssessment } from '@/context/AssessmentContext';

interface QuestionItemProps {
  question: Question;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {
  const { state, dispatch } = useAssessment();
  const questionData = state.assessmentData.sections[question.id] || {
    answer: '',
    findings: '',
    risk: ''
  };

  const [isNA, setIsNA] = useState(questionData.answer === 'na');

  const handleAnswerChange = (answer: string) => {
    dispatch({
      type: 'UPDATE_QUESTION_DATA',
      payload: {
        questionId: question.id,
        data: { ...questionData, answer }
      }
    });
    
    if (answer === 'na') {
      setIsNA(true);
    } else {
      setIsNA(false);
    }
  };

  const handleFindingsChange = (findings: string) => {
    dispatch({
      type: 'UPDATE_QUESTION_DATA',
      payload: {
        questionId: question.id,
        data: { ...questionData, findings }
      }
    });
  };

  const handleRiskChange = (risk: string) => {
    dispatch({
      type: 'UPDATE_QUESTION_DATA',
      payload: {
        questionId: question.id,
        data: { ...questionData, risk }
      }
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="mb-4">
        <h4 className="text-base font-medium text-gray-900 mb-4">{question.text}</h4>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <label className="radio-group">
            <input
              type="radio"
              name={`${question.id}_answer`}
              value="yes"
              checked={questionData.answer === 'yes'}
              onChange={() => handleAnswerChange('yes')}
              className="radio-input"
            />
            <span className="radio-label">Yes</span>
          </label>
          
          <label className="radio-group">
            <input
              type="radio"
              name={`${question.id}_answer`}
              value="no"
              checked={questionData.answer === 'no'}
              onChange={() => handleAnswerChange('no')}
              className="radio-input"
            />
            <span className="radio-label">No</span>
          </label>
          
          <label className={`radio-group ${isNA ? 'bg-gray-100 rounded-md px-3 py-1 border-2 border-gray-400' : ''}`}>
            <input
              type="radio"
              name={`${question.id}_answer`}
              value="na"
              checked={questionData.answer === 'na'}
              onChange={() => handleAnswerChange('na')}
              className="radio-input"
            />
            <span className={`radio-label ${isNA ? 'font-semibold text-gray-700' : ''}`}>N/A</span>
          </label>
        </div>
      </div>

      <div className={`space-y-4 transition-all duration-300 ${isNA ? 'opacity-50 pointer-events-none' : ''}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Findings & Notes:
          </label>
          <textarea
            value={questionData.findings}
            onChange={(e) => handleFindingsChange(e.target.value)}
            placeholder="Enter findings here..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical min-h-[100px]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Risk Rating:
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="radio-group">
              <input
                type="radio"
                name={`${question.id}_risk`}
                value="low"
                checked={questionData.risk === 'low'}
                onChange={() => handleRiskChange('low')}
                className="radio-input"
              />
              <span className="radio-label text-success-700">Low</span>
            </label>
            
            <label className="radio-group">
              <input
                type="radio"
                name={`${question.id}_risk`}
                value="medium"
                checked={questionData.risk === 'medium'}
                onChange={() => handleRiskChange('medium')}
                className="radio-input"
              />
              <span className="radio-label text-warning-700">Medium</span>
            </label>
            
            <label className="radio-group">
              <input
                type="radio"
                name={`${question.id}_risk`}
                value="high"
                checked={questionData.risk === 'high'}
                onChange={() => handleRiskChange('high')}
                className="radio-input"
              />
              <span className="radio-label text-danger-700">High</span>
            </label>
            
            <label className="radio-group">
              <input
                type="radio"
                name={`${question.id}_risk`}
                value="informational"
                checked={questionData.risk === 'informational'}
                onChange={() => handleRiskChange('informational')}
                className="radio-input"
              />
              <span className="radio-label text-gray-700">Informational</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
