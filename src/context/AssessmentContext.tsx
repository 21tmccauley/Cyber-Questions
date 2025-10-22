import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AssessmentData, SecurityScore, AssessmentStats, HighRiskItem, NAnalysis } from '@/types';
import { sections } from '@/data/sections';

interface AssessmentState {
  currentSection: number;
  assessmentData: AssessmentData;
  isModalOpen: boolean;
}

type AssessmentAction =
  | { type: 'SET_CURRENT_SECTION'; payload: number }
  | { type: 'UPDATE_ASSESSMENT_DATA'; payload: Partial<AssessmentData> }
  | { type: 'UPDATE_QUESTION_DATA'; payload: { questionId: string; data: any } }
  | { type: 'SET_MODAL_OPEN'; payload: boolean }
  | { type: 'LOAD_SAVED_DATA'; payload: AssessmentData };

const initialState: AssessmentState = {
  currentSection: 0,
  assessmentData: {
    clientName: '',
    assessmentDate: new Date().toISOString().split('T')[0],
    assessorName: '',
    sections: {}
  },
  isModalOpen: false
};

function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'SET_CURRENT_SECTION':
      return { ...state, currentSection: action.payload };
    case 'UPDATE_ASSESSMENT_DATA':
      return { ...state, assessmentData: { ...state.assessmentData, ...action.payload } };
    case 'UPDATE_QUESTION_DATA':
      return {
        ...state,
        assessmentData: {
          ...state.assessmentData,
          sections: {
            ...state.assessmentData.sections,
            [action.payload.questionId]: action.payload.data
          }
        }
      };
    case 'SET_MODAL_OPEN':
      return { ...state, isModalOpen: action.payload };
    case 'LOAD_SAVED_DATA':
      return { ...state, assessmentData: action.payload };
    default:
      return state;
  }
}

interface AssessmentContextType {
  state: AssessmentState;
  dispatch: React.Dispatch<AssessmentAction>;
  sections: typeof sections;
  calculateSecurityScore: () => SecurityScore;
  calculateStats: () => AssessmentStats;
  getHighRiskItems: () => HighRiskItem[];
  getIncompleteItems: () => string[];
  analyzeNAItems: () => NAnalysis;
  saveData: () => void;
  loadData: () => void;
  exportAssessment: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export function AssessmentProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  // Load saved data on mount
  useEffect(() => {
    loadData();
  }, []);

  // Save data whenever assessment data changes
  useEffect(() => {
    saveData();
  }, [state.assessmentData]);

  const saveData = () => {
    localStorage.setItem('cybersecurityAssessment', JSON.stringify(state.assessmentData));
  };

  const loadData = () => {
    const saved = localStorage.getItem('cybersecurityAssessment');
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        dispatch({ type: 'LOAD_SAVED_DATA', payload: parsedData });
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  };

  const calculateQuestionScore = (answer: string, risk: string): number => {
    let baseScore = 0;
    switch (answer) {
      case 'yes': baseScore = 10; break;
      case 'no': baseScore = 0; break;
      case 'na': baseScore = 7; break;
    }

    let riskMultiplier = 1;
    if (answer === 'na') {
      switch (risk) {
        case 'low': riskMultiplier = 1.0; break;
        case 'medium': riskMultiplier = 0.9; break;
        case 'high': riskMultiplier = 0.7; break;
        case 'informational': riskMultiplier = 1.0; break;
      }
    } else {
      switch (risk) {
        case 'low': riskMultiplier = 1.0; break;
        case 'medium': riskMultiplier = 0.8; break;
        case 'high': riskMultiplier = 0.5; break;
        case 'informational': riskMultiplier = 0.9; break;
      }
    }

    return Math.round(baseScore * riskMultiplier);
  };

  const calculateSecurityScore = (): SecurityScore => {
    let totalScore = 0;
    let maxScore = 0;
    let sectionScores: Record<string, any> = {};
    let riskCounts = { low: 0, medium: 0, high: 0, informational: 0 };

    sections.forEach((section) => {
      let sectionScore = 0;
      let sectionMaxScore = 0;
      let sectionRiskCounts = { low: 0, medium: 0, high: 0, informational: 0 };

      section.subsections.forEach(subsection => {
        subsection.questions.forEach(question => {
          const data = state.assessmentData.sections[question.id];
          
          if (data && data.answer && data.risk) {
            const questionScore = calculateQuestionScore(data.answer, data.risk);
            sectionScore += questionScore;
            sectionMaxScore += 10;
            
            sectionRiskCounts[data.risk as keyof typeof sectionRiskCounts]++;
            riskCounts[data.risk as keyof typeof riskCounts]++;
          }
        });
      });

      const sectionPercentage = sectionMaxScore > 0 ? Math.round((sectionScore / sectionMaxScore) * 100) : 0;
      sectionScores[section.id] = {
        name: section.title,
        score: sectionPercentage,
        riskCounts: sectionRiskCounts
      };

      totalScore += sectionScore;
      maxScore += sectionMaxScore;
    });

    const overallScore = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
    
    return {
      overall: overallScore,
      sectionScores: sectionScores,
      riskCounts: riskCounts,
      totalQuestions: maxScore / 10,
      completedQuestions: totalScore / 10
    };
  };

  const calculateStats = (): AssessmentStats => {
    let totalQuestions = 0;
    let completedQuestions = 0;
    let highRiskCount = 0;

    sections.forEach(section => {
      section.subsections.forEach(subsection => {
        subsection.questions.forEach(question => {
          totalQuestions++;
          const data = state.assessmentData.sections[question.id];
          // If answer is 'na', count as completed without requiring findings and risk
          if (data && data.answer === 'na') {
            completedQuestions++;
          } else if (data && data.answer && data.findings && data.risk) {
            completedQuestions++;
            if (data.risk === 'high') {
              highRiskCount++;
            }
          }
        });
      });
    });

    return {
      totalQuestions,
      completedQuestions,
      completionRate: totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0,
      highRiskCount
    };
  };

  const getHighRiskItems = (): HighRiskItem[] => {
    const highRiskItems: HighRiskItem[] = [];
    sections.forEach(section => {
      section.subsections.forEach(subsection => {
        subsection.questions.forEach(question => {
          const data = state.assessmentData.sections[question.id];
          if (data && data.risk === 'high') {
            highRiskItems.push({
              question: question.text,
              findings: data.findings
            });
          }
        });
      });
    });
    return highRiskItems;
  };

  const getIncompleteItems = (): string[] => {
    const incompleteItems: string[] = [];
    sections.forEach(section => {
      section.subsections.forEach(subsection => {
        subsection.questions.forEach(question => {
          const data = state.assessmentData.sections[question.id];
          if (!data || !data.answer || !data.findings || !data.risk) {
            incompleteItems.push(question.text);
          }
        });
      });
    });
    return incompleteItems;
  };

  const analyzeNAItems = (): NAnalysis => {
    let totalNA = 0;
    let criticalNA = 0;
    let technologyNA = 0;
    const naItems: any[] = [];

    sections.forEach(section => {
      section.subsections.forEach(subsection => {
        subsection.questions.forEach(question => {
          const data = state.assessmentData.sections[question.id];
          
          if (data && data.answer === 'na') {
            totalNA++;
            
            if (data.risk === 'high') {
              criticalNA++;
            }
            
            const techKeywords = ['cloud', 'wireless', 'mobile', 'iot', 'ai', 'blockchain'];
            const isTechSpecific = techKeywords.some(keyword => 
              question.text.toLowerCase().includes(keyword)
            );
            
            if (isTechSpecific) {
              technologyNA++;
            }
            
            naItems.push({
              question: question.text,
              risk: data.risk,
              findings: data.findings
            });
          }
        });
      });
    });

    return {
      totalNA,
      criticalNA,
      technologyNA,
      items: naItems
    };
  };

  const exportAssessment = () => {
    const exportData = {
      ...state.assessmentData,
      exportDate: new Date().toISOString(),
      version: '1.0'
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `cybersecurity-assessment-${state.assessmentData.clientName || 'client'}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const value: AssessmentContextType = {
    state,
    dispatch,
    sections,
    calculateSecurityScore,
    calculateStats,
    getHighRiskItems,
    getIncompleteItems,
    analyzeNAItems,
    saveData,
    loadData,
    exportAssessment
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}
