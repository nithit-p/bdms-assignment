import { Question, QuestionWithAnswer } from "@/models/question";

const questionList: QuestionWithAnswer[] = [
  {
    id: "1",
    word: "What is the capital of France?",
    answerOptions: [
      {
        label: "Paris",
        value: "q1_1",
      },
      {
        label: "London",
        value: "q1_2",
      },
      {
        label: "Berlin",
        value: "q1_3",
      },
      {
        label: "Madrid",
        value: "q1_4",
      },
    ],
    answer: "q1_1",
  },
  {
    id: "2",
    word: "What is the capital of Thai?",
    answerOptions: [
      {
        label: "Paris",
        value: "q1_1",
      },
      {
        label: "London",
        value: "q1_2",
      },
      {
        label: "Berlin",
        value: "q1_3",
      },
      {
        label: "Bangkok",
        value: "q1_4",
      },
    ],
    answer: "q1_4",
  },
];
const getQuestionById = (id: string): QuestionWithAnswer | undefined => {
  return questionList.find((question) => question.id === id);
};

const checkAnswer = (questionId: string, answerValue: string): boolean => {
  const question = getQuestionById(questionId);
  return question?.answer === answerValue;
};

export const getRamdomQuestionList = (total: number): Question[] => {
  const randomQuestionList = questionList
    .toSorted(() => Math.random() - 0.5)
    .slice(0, total);
  return randomQuestionList.map((question) => {
    return {
      id: question.id,
      word: question.word,
      answerOptions: question.answerOptions,
    };
  });
};

export interface Answer {
  questionId: string;
  answerValue: string;
}

export const getScore = (answer: Answer[]): number => {
  let score = 0;
  answer.forEach((ans) => {
    if (checkAnswer(ans.questionId, ans.answerValue)) {
      score++;
    }
  });
  return score;
};
