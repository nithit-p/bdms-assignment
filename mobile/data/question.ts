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
  {
    id: "3",
    word: "What is the capital of Japan?",
    answerOptions: [
      {
        label: "Tokyo",
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
    id: "4",
    word: "What is the capital of China?",
    answerOptions: [
      {
        label: "Paris",
        value: "q1_1",
      },
      {
        label: "Beijing",
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
    answer: "q1_2",
  },
  {
    id: "5",
    word: "What is the capital of India?",
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
        label: "New Delhi",
        value: "q1_3",
      },
      {
        label: "Madrid",
        value: "q1_4",
      },
    ],
    answer: "q1_3",
  },
  {
    id: "6",
    word: "What is the capital of South Korea?",
    answerOptions: [
      {
        label: "Seoul",
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
    id: "7",
    word: "What is the capital of Vietnam?",
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
        label: "Hanoi",
        value: "q1_3",
      },
      {
        label: "Madrid",
        value: "q1_4",
      },
    ],
    answer: "q1_3",
  },
  {
    id: "8",
    word: "What is the capital of Australia?",
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
        label: "Canberra",
        value: "q1_3",
      },
      {
        label: "Madrid",
        value: "q1_4",
      },
    ],
    answer: "q1_3",
  },
  {
    id: "9",
    word: "What is the capital of Germany?",
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
    answer: "q1_3",
  },
  {
    id: "10",
    word: "What is 1+1?",
    answerOptions: [
      {
        label: "1",
        value: "q1_1",
      },
      {
        label: "2",
        value: "q1_2",
      },
      {
        label: "3",
        value: "q1_3",
      },
      {
        label: "4",
        value: "q1_4",
      },
    ],
    answer: "q1_2",
  },
  {
    id: "11",
    word: "What is 2+2?",
    answerOptions: [
      {
        label: "1",
        value: "q1_1",
      },
      {
        label: "2",
        value: "q1_2",
      },
      {
        label: "3",
        value: "q1_3",
      },
      {
        label: "4",
        value: "q1_4",
      },
    ],
    answer: "q1_4",
  },
  {
    id: "12",
    word: "What is 3+3?",
    answerOptions: [
      {
        label: "4",
        value: "q1_1",
      },
      {
        label: "5",
        value: "q1_2",
      },
      {
        label: "6",
        value: "q1_3",
      },
      {
        label: "7",
        value: "q1_4",
      },
    ],
    answer: "q1_3",
  },
  {
    id: "13",
    word: "What is 4+4?",
    answerOptions: [
      {
        label: "5",
        value: "q1_1",
      },
      {
        label: "6",
        value: "q1_2",
      },
      {
        label: "7",
        value: "q1_3",
      },
      {
        label: "8",
        value: "q1_4",
      },
    ],
    answer: "q1_4",
  },
  {
    id: "14",
    word: "What is 5+5?",
    answerOptions: [
      {
        label: "10",
        value: "q1_1",
      },
      {
        label: "100",
        value: "q1_2",
      },
      {
        label: "100",
        value: "q1_3",
      },
      {
        label: "1000",
        value: "q1_4",
      },
    ],
    answer: "q1_1",
  },
  {
    id: "15",
    word: "What is 6+6?",
    answerOptions: [
      {
        label: "6",
        value: "q1_1",
      },
      {
        label: "12",
        value: "q1_2",
      },
      {
        label: "24",
        value: "q1_3",
      },
      {
        label: "1482",
        value: "q1_4",
      },
    ],
    answer: "q1_2",
  },
  {
    id: "16",
    word: "What is 7+7?",
    answerOptions: [
      {
        label: "11",
        value: "q1_1",
      },
      {
        label: "12",
        value: "q1_2",
      },
      {
        label: "13",
        value: "q1_3",
      },
      {
        label: "14",
        value: "q1_4",
      },
    ],
    answer: "q1_4",
  },
  {
    id: "17",
    word: "What is 8+8?",
    answerOptions: [
      {
        label: "8",
        value: "q1_1",
      },
      {
        label: "16",
        value: "q1_2",
      },
      {
        label: "17",
        value: "q1_3",
      },
      {
        label: "18",
        value: "q1_4",
      },
    ],
    answer: "q1_2",
  },
  {
    id: "18",
    word: "What is 9+9?",
    answerOptions: [
      {
        label: "17",
        value: "q1_1",
      },
      {
        label: "18",
        value: "q1_2",
      },
      {
        label: "19",
        value: "q1_3",
      },
      {
        label: "20",
        value: "q1_4",
      },
    ],
    answer: "q1_2",
  },
  {
    id: "19",
    word: "What is 10+10?",
    answerOptions: [
      {
        label: "20",
        value: "q1_1",
      },
      {
        label: "20.5",
        value: "q1_2",
      },
      {
        label: "50",
        value: "q1_3",
      },
      {
        label: "50.5",
        value: "q1_4",
      },
    ],
    answer: "q1_1",
  },
  {
    id: "20",
    word: "What is 11+11?",
    answerOptions: [
      {
        label: "12",
        value: "q1_1",
      },
      {
        label: "25",
        value: "q1_2",
      },
      {
        label: "22",
        value: "q1_3",
      },
      {
        label: "16",
        value: "q1_4",
      },
    ],
    answer: "q1_3",
  },
  {
    id: "21",
    word: "What is 12+12?",
    answerOptions: [
      {
        label: "24",
        value: "q1_1",
      },
      {
        label: "25",
        value: "q1_2",
      },
      {
        label: "26",
        value: "q1_3",
      },
      {
        label: "27",
        value: "q1_4",
      },
    ],
    answer: "q1_1",
  },
  {
    id: "22",
    word: "What is 13+13?",
    answerOptions: [
      {
        label: "26",
        value: "q1_1",
      },
      {
        label: "27",
        value: "q1_2",
      },
      {
        label: "28",
        value: "q1_3",
      },
      {
        label: "29",
        value: "q1_4",
      },
    ],
    answer: "q1_3",
  },
  {
    id: "23",
    word: "What is 14+14?",
    answerOptions: [
      {
        label: "28",
        value: "q1_1",
      },
      {
        label: "29",
        value: "q1_2",
      },
      {
        label: "30",
        value: "q1_3",
      },
      {
        label: "31",
        value: "q1_4",
      },
    ],
    answer: "q1_1",
  },
  {
    id: "24",
    word: "What is 15+15?",
    answerOptions: [
      {
        label: "30",
        value: "q1_1",
      },
      {
        label: "31",
        value: "q1_2",
      },
      {
        label: "32",
        value: "q1_3",
      },
      {
        label: "33",
        value: "q1_4",
      },
    ],
    answer: "q1_1",
  },
];
const getQuestionById = (id: string): QuestionWithAnswer | undefined => {
  return questionList.find((question) => question.id === id);
};

const checkAnswer = (questionId: string, answerValue: string): boolean => {
  const question = getQuestionById(questionId);
  console.log(`question: ${question?.answer}`);
  console.log(`answerValue: ${answerValue}`);
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
