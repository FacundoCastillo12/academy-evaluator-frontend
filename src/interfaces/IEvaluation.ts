export interface IEvaluation {
  subject: string;
  questions: IQuestions[];
}

export interface IAnswer {
  answer: string;
  isCorrect: boolean;
}
export interface IQuestions {
  question: string;
  isMultipleOption: boolean;
  answers: IAnswer[];
}
