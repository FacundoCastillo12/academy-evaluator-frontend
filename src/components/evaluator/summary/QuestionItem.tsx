import React from 'react';

type QuestionItemProps = {
  question: string;
  isCorrect: boolean;
  index: number;
  isExpanded: boolean;
  toggleQuestionDetails: (index: number) => void;
  children: React.ReactNode;
};
const QuestionItem = ({
  children,
  index,
  isCorrect,
  isExpanded,
  question,
  toggleQuestionDetails,
}: QuestionItemProps) => {
  return (
    <div
      className={`p-3 rounded ${isCorrect ? 'bg-success/20' : 'bg-error/20'}`}
    >
      <div className="flex justify-between items-center">
        <p className="font-medium">{question}</p>
        <button
          onClick={() => toggleQuestionDetails(index)}
          className="btn btn-sm btn-ghost"
          data-cy={`show-details-${question}`}
        >
          {isExpanded ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {isExpanded && children}
    </div>
  );
};

export default QuestionItem;
