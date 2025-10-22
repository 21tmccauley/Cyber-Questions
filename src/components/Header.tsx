import React from 'react';
import { Shield, User, Calendar, FileText } from 'lucide-react';
import { useAssessment } from '@/context/AssessmentContext';

const Header: React.FC = () => {
  const { state, dispatch, calculateSecurityScore } = useAssessment();
  const score = calculateSecurityScore();

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-600';
    if (score >= 60) return 'text-warning-600';
    if (score >= 40) return 'text-warning-500';
    return 'text-danger-600';
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl shadow-lg mb-8">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8" />
            <h1 className="text-3xl font-bold">Cybersecurity Assessment Tool</h1>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${getScoreColor(score.overall)}`}>
              {score.overall}/100
            </div>
            <div className="text-sm opacity-90">Security Score</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium opacity-90">
              <User className="h-4 w-4" />
              <span>Client</span>
            </label>
            <input
              type="text"
              value={state.assessmentData.clientName}
              onChange={(e) => dispatch({
                type: 'UPDATE_ASSESSMENT_DATA',
                payload: { clientName: e.target.value }
              })}
              placeholder="Enter client name"
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium opacity-90">
              <Calendar className="h-4 w-4" />
              <span>Date</span>
            </label>
            <input
              type="date"
              value={state.assessmentData.assessmentDate}
              onChange={(e) => dispatch({
                type: 'UPDATE_ASSESSMENT_DATA',
                payload: { assessmentDate: e.target.value }
              })}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium opacity-90">
              <FileText className="h-4 w-4" />
              <span>Assessor</span>
            </label>
            <input
              type="text"
              value={state.assessmentData.assessorName}
              onChange={(e) => dispatch({
                type: 'UPDATE_ASSESSMENT_DATA',
                payload: { assessorName: e.target.value }
              })}
              placeholder="Enter assessor name"
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-danger-500 rounded-full"></div>
              <span>{score.riskCounts.high} High Risk</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
              <span>{score.riskCounts.medium} Medium Risk</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              <span>{score.riskCounts.low} Low Risk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
