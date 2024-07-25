export interface IEvaluation {
  id: number;
  subject: string;
  questions: IQuestion[];
}

export interface IAnswer {
  text: string;
  isCorrect: boolean;
}
export interface IQuestion {
  question: string;
  isMultipleOption: boolean;
  answers: IAnswer[];
}
