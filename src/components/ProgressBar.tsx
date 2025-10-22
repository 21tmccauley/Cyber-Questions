import React from 'react';
import { useAssessment } from '@/context/AssessmentContext';

const ProgressBar: React.FC = () => {
  const { calculateStats, calculateSecurityScore } = useAssessment();
  const stats = calculateStats();
  const score = calculateSecurityScore();

  const progressPercentage = stats.completionRate;

  return (
    <div className="card p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Assessment Progress</h3>
        <div className="text-sm text-gray-600">
          {stats.completedQuestions} of {stats.totalQuestions} questions completed
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="text-gray-600">
          {progressPercentage}% Complete
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-danger-500 rounded-full"></div>
            <span className="text-gray-600">{score.riskCounts.high} High</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
            <span className="text-gray-600">{score.riskCounts.medium} Medium</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success-500 rounded-full"></div>
            <span className="text-gray-600">{score.riskCounts.low} Low</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
