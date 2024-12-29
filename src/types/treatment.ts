export interface TreatmentData {
  overview: {
    description: string;
    scientificPrinciples: {
      title: string;
      content: string;
    }[];
    benefits: {
      title: string;
      points: string[];
    }[];
    process: {
      title: string;
      steps: string[];
    }[];
  };
  technical: {
    equipment: string;
    parameters: {
      title: string;
      details: string[];
    }[];
    safetyProtocols: {
      title: string;
      protocols: string[];
    }[];
    certifications: string[];
  };
  sections: {
    title: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}