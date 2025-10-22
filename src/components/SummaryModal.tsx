import React from 'react';
import { X, Download, AlertTriangle, CheckCircle, Info, AlertCircle } from 'lucide-react';
import { useAssessment } from '@/context/AssessmentContext';

const SummaryModal: React.FC = () => {
  const { state, dispatch, calculateSecurityScore, calculateStats, getHighRiskItems, getIncompleteItems, analyzeNAItems, exportAssessment } = useAssessment();

  if (!state.isModalOpen) return null;

  const score = calculateSecurityScore();
  const stats = calculateStats();
  const highRiskItems = getHighRiskItems();
  const incompleteItems = getIncompleteItems();
  const naAnalysis = analyzeNAItems();

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-600';
    if (score >= 60) return 'text-warning-600';
    if (score >= 40) return 'text-warning-500';
    return 'text-danger-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-success-100';
    if (score >= 60) return 'bg-warning-100';
    if (score >= 40) return 'bg-warning-100';
    return 'bg-danger-100';
  };

  const getRecommendations = () => {
    const recommendations = [];
    
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

    return recommendations;
  };

  const handleClose = () => {
    dispatch({ type: 'SET_MODAL_OPEN', payload: false });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="bg-primary-600 text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Assessment Summary</h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Security Score Overview */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary-600" />
              Security Score Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className={`p-4 rounded-lg ${getScoreBgColor(score.overall)}`}>
                <div className={`text-3xl font-bold ${getScoreColor(score.overall)}`}>
                  {score.overall}/100
                </div>
                <div className="text-sm text-gray-600">Overall Security Score</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{stats.totalQuestions}</div>
                <div className="text-sm text-gray-600">Total Questions</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{stats.completedQuestions}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{stats.completionRate}%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
            </div>
          </div>

          {/* Risk Distribution */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-warning-600" />
              Risk Distribution
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-danger-50 p-4 rounded-lg border border-danger-200">
                <div className="text-2xl font-bold text-danger-600">{score.riskCounts.high}</div>
                <div className="text-sm text-danger-700">High Risk</div>
              </div>
              <div className="bg-warning-50 p-4 rounded-lg border border-warning-200">
                <div className="text-2xl font-bold text-warning-600">{score.riskCounts.medium}</div>
                <div className="text-sm text-warning-700">Medium Risk</div>
              </div>
              <div className="bg-success-50 p-4 rounded-lg border border-success-200">
                <div className="text-2xl font-bold text-success-600">{score.riskCounts.low}</div>
                <div className="text-sm text-success-700">Low Risk</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="text-2xl font-bold text-gray-600">{score.riskCounts.informational}</div>
                <div className="text-sm text-gray-700">Informational</div>
              </div>
            </div>
          </div>

          {/* Section Scores */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Section Scores</h3>
            <div className="space-y-3">
              {Object.entries(score.sectionScores).map(([sectionId, sectionScore]) => (
                <div key={sectionId} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1 font-medium text-gray-900">{sectionScore.name}</div>
                  <div className="flex-2 w-32">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          sectionScore.score >= 80 ? 'bg-success-500' :
                          sectionScore.score >= 60 ? 'bg-warning-500' :
                          sectionScore.score >= 40 ? 'bg-warning-400' : 'bg-danger-500'
                        }`}
                        style={{ width: `${sectionScore.score}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className={`font-bold ${getScoreColor(sectionScore.score)}`}>
                    {sectionScore.score}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              {getRecommendations().map((rec, index) => (
                <div key={index} className="mb-2 text-sm">{rec}</div>
              ))}
            </div>
          </div>

          {/* High Risk Items */}
          {highRiskItems.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-danger-600">
                <AlertCircle className="h-5 w-5 mr-2" />
                High Risk Items Requiring Attention
              </h3>
              <div className="space-y-3">
                {highRiskItems.map((item, index) => (
                  <div key={index} className="bg-danger-50 p-4 rounded-lg border border-danger-200">
                    <div className="font-medium text-danger-900 mb-2">{item.question}</div>
                    <div className="text-sm text-danger-700">{item.findings}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Incomplete Items */}
          {incompleteItems.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-warning-600">
                <Info className="h-5 w-5 mr-2" />
                Incomplete Items
              </h3>
              <div className="bg-warning-50 p-4 rounded-lg border border-warning-200">
                <ul className="space-y-2">
                  {incompleteItems.slice(0, 5).map((item, index) => (
                    <li key={index} className="text-sm text-warning-700">• {item}</li>
                  ))}
                  {incompleteItems.length > 5 && (
                    <li className="text-sm text-warning-700">• ... and {incompleteItems.length - 5} more</li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* N/A Analysis */}
          {naAnalysis.totalNA > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Not Applicable Items Analysis</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Total N/A Items:</strong> {naAnalysis.totalNA}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Guidance:</strong> Items marked as "Not Applicable" should be properly documented with business justification.
                  </div>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-medium text-gray-900 mb-2">Best Practices for N/A Items:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Document the reason why the item is not applicable</li>
                    <li>• Consider if these technologies should be part of your roadmap</li>
                    <li>• Review N/A items during annual security reviews</li>
                    <li>• Ensure N/A decisions align with business objectives</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Assessment Details */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Assessment Details</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Client:</strong> {state.assessmentData.clientName || 'Not specified'}
                </div>
                <div>
                  <strong>Date:</strong> {state.assessmentData.assessmentDate || 'Not specified'}
                </div>
                <div>
                  <strong>Assessor:</strong> {state.assessmentData.assessorName || 'Not specified'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
          <button
            onClick={exportAssessment}
            className="btn btn-primary"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Summary
          </button>
          <button
            onClick={handleClose}
            className="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
