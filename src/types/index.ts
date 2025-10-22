export interface Question {
  id: string;
  text: string;
  type: 'yes-no-na';
}

export interface Subsection {
  title: string;
  questions: Question[];
}

export interface Section {
  id: string;
  title: string;
  subsections: Subsection[];
}

export interface QuestionData {
  answer: 'yes' | 'no' | 'na' | '';
  findings: string;
  risk: 'low' | 'medium' | 'high' | 'informational' | '';
}

export interface AssessmentData {
  clientName: string;
  assessmentDate: string;
  assessorName: string;
  sections: Record<string, QuestionData>;
}

export interface SecurityScore {
  overall: number;
  sectionScores: Record<string, {
    name: string;
    score: number;
    riskCounts: Record<string, number>;
  }>;
  riskCounts: Record<string, number>;
  totalQuestions: number;
  completedQuestions: number;
}

export interface AssessmentStats {
  totalQuestions: number;
  completedQuestions: number;
  completionRate: number;
  highRiskCount: number;
}

export interface HighRiskItem {
  question: string;
  findings: string;
}

export interface NAnalysis {
  totalNA: number;
  criticalNA: number;
  technologyNA: number;
  items: Array<{
    question: string;
    risk: string;
    findings: string;
  }>;
}
