import { IQuestion } from '@/interfaces/IEvaluation';
import React from 'react';
import QuestionItem from './QuestionItem';
import AnswerDetails from './AnswerDetails';
import AnswerOptions from './AnswerOptions';

type SummaryQuestionProps = {
  question: IQuestion;
  index: number;
  userAnswers: string[];
  evaluateAnswer: (question: IQuestion, userAnswer: string) => boolean;
  expandedQuestions: number[];
  toggleQuestionDetails: (index: number) => void;
};

const SummaryQuestion = ({
  question,
  evaluateAnswer,
  expandedQuestions,
  index,
  toggleQuestionDetails,
  userAnswers,
}: SummaryQuestionProps) => {
  const userAnswer = userAnswers[index];
  const isCorrect = evaluateAnswer(question, userAnswer);
  const isExpanded = expandedQuestions.includes(index);

  return (
    <QuestionItem
      key={`${question.question}-${index}`}
      question={question.question}
      isCorrect={isCorrect}
      index={index}
      toggleQuestionDetails={toggleQuestionDetails}
      isExpanded={isExpanded}
    >
      <AnswerDetails
        userAnswer={userAnswer}
        isCorrect={isCorrect}
        question={question}
      />
      <AnswerOptions
        answers={question.answers}
        userAnswer={userAnswer}
        isMultipleOption={question.isMultipleOption}
      />
    </QuestionItem>
  );
};

export default SummaryQuestion;
