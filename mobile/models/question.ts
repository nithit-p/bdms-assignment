export interface QuestionWithAnswer {
  id: string;
  word: string;
  answerOptions: {
    label: string;
    value: string;
  }[];
  answer: string;
}

export type Question = Omit<QuestionWithAnswer, "answer">;
