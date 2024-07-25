import React, { useState } from 'react';
import { IEvaluation, IQuestion } from '@/interfaces/IEvaluation';
import Link from 'next/link';
import SummaryQuestion from './SummaryQuestion';

interface EvaluationSummaryProps {
  evaluation: IEvaluation;
  userAnswers: string[];
}

const EvaluationSummary: React.FC<EvaluationSummaryProps> = ({
  evaluation,
  userAnswers,
}) => {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const evaluateAnswer = (question: IQuestion, userAnswer: string): boolean => {
    if (!question.isMultipleOption) {
      return question.answers.some((a) => a.text === userAnswer && a.isCorrect);
    } else {
      const userChoices = userAnswer.split(',');
      const correctChoices = question.answers
        .filter((a) => a.isCorrect)
        .map((a) => a.text);
      const incorrectUserChoices = userChoices.filter(
        (choice) => !correctChoices.includes(choice),
      );
      const missingCorrectChoices = correctChoices.filter(
        (choice) => !userChoices.includes(choice),
      );
      return (
        incorrectUserChoices.length === 0 && missingCorrectChoices.length === 0
      );
    }
  };

  const correctAnswers = evaluation.questions.filter((q, index) =>
    evaluateAnswer(q, userAnswers[index]),
  );

  const toggleQuestionDetails = (index: number) => {
    setExpandedQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div
      className="bg-secondary rounded-lg shadow-xl shadow-accent p-4 w-full max-w-2xl bg-base-200 py-2"
      data-cy="evaluation-summary"
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Evaluation Summary
      </h2>
      <p className="text-lg text-center mb-4" data-cy="evaluation-summary-text">
        You got {correctAnswers.length} out of {evaluation.questions.length}{' '}
        questions correct.
      </p>

      <div className="space-y-4">
        {evaluation.questions.map((q, index) => (
          <SummaryQuestion
            evaluateAnswer={evaluateAnswer}
            key={q.text}
            expandedQuestions={expandedQuestions}
            index={index}
            question={q}
            userAnswers={userAnswers}
            toggleQuestionDetails={toggleQuestionDetails}
          />
        ))}
      </div>
      <Link
        className="btn btn-secondary text-white flex justify-center items-center mt-4"
        href="/evaluations"
        data-cy="go-evaluations"
      >
        Go Evaluations
      </Link>
    </div>
  );
};

export default EvaluationSummary;
