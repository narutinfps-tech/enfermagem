export interface ClinicalScale {
  id: string;
  name: string;
  fullName?: string;
  category: string;
  badge?: string;
  summary: string;
  scoreRange?: string;
  whenToUse: string;
  evaluates: string[];
  interpretation: string;
  clinicalCase: {
    patient: string;
    scenario: string;
    findings: string;
    score: string;
    conduct: string;
  };
  keyDifference?: string;
}

export interface ModuleItem {
  id: number;
  numberStr: string;
  title: string;
  icon: string;
  color: string;
  accentBg: string;
  description: string;
  scales: string[];
}

export interface BonusItem {
  id: number;
  numberStr: string;
  title: string;
  subtitle: string;
  description: string;
  examples?: string[];
  perceivedValue: string;
  tag: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
