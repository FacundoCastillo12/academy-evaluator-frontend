import { IAnswer } from '@/interfaces/IEvaluation';
import React from 'react';

type AnswerOptionItemProps = {
  answer: IAnswer;
  userAnswer: string;
  isMultipleOption: boolean;
};
const AnswerOptionItem = ({
  isMultipleOption,
  userAnswer,
  answer,
}: AnswerOptionItemProps) => {
  const isUserChoice = isMultipleOption
    ? userAnswer.split(',').includes(answer.text)
    : userAnswer === answer.text;
  let className = '';
  if (isUserChoice && answer.isCorrect) className = 'text-success';
  else if (isUserChoice && !answer.isCorrect) className = 'text-error';
  else if (!isUserChoice && answer.isCorrect) className = 'text-warning';

  return (
    <li className={className}>
      {answer.text}
      {isUserChoice && !answer.isCorrect && ' ❌'}
      {!isUserChoice && answer.isCorrect && ' (missed)'}
    </li>
  );
};

export default AnswerOptionItem;
