import { IAnswer } from '@/interfaces/IEvaluation';
import React from 'react';
import AnswerOptionItem from './AnswerOptionItem';

type AnswerOptionsProps = {
  answers: IAnswer[];
  userAnswer: string;
  isMultipleOption: boolean;
};

const AnswerOptions = ({
  answers,
  isMultipleOption,
  userAnswer,
}: AnswerOptionsProps) => {
  return (
    <div className="mt-2">
      <p className="font-semibold">All options:</p>
      <ul className="list-disc list-inside">
        {answers.map((a, answerIndex) => (
          <AnswerOptionItem
            answer={a}
            userAnswer={userAnswer}
            key={answerIndex}
            isMultipleOption={isMultipleOption}
          />
        ))}
      </ul>
    </div>
  );
};

export default AnswerOptions;
