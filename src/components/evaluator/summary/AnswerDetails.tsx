import { IQuestion } from '@/interfaces/IEvaluation';
import React from 'react';

type AnswerDetailsProps = {
  userAnswer: string;
  isCorrect: boolean;
  question: IQuestion;
};
const AnswerDetails = ({
  isCorrect,
  question,
  userAnswer,
}: AnswerDetailsProps) => {
  return (
    <div className="mt-2 space-y-2">
      <p
        className={isCorrect ? 'text-success' : 'text-error'}
        data-cy={`answer-${question.text}-${isCorrect}`}
      >
        Your answer: {userAnswer}
      </p>
      {!isCorrect && (
        <p className="text-success">
          Correct answer(s):{' '}
          {question.answers
            .filter((a) => a.isCorrect)
            .map((a) => a.text)
            .join(', ')}
        </p>
      )}
    </div>
  );
};

export default AnswerDetails;
