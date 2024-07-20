import React, { useState } from 'react';
import { IEvaluation, IQuestions } from '@/interfaces/IEvaluation';

interface EvaluationSummaryProps {
  evaluation: IEvaluation;
  userAnswers: string[];
}

const EvaluationSummary: React.FC<EvaluationSummaryProps> = ({
  evaluation,
  userAnswers,
}) => {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const evaluateAnswer = (
    question: IQuestions,
    userAnswer: string,
  ): boolean => {
    if (!question.isMultipleOption) {
      return question.answers.some(
        (a) => a.answer === userAnswer && a.isCorrect,
      );
    } else {
      const userChoices = userAnswer.split(',');
      const correctChoices = question.answers
        .filter((a) => a.isCorrect)
        .map((a) => a.answer);
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
    <div className="bg-secondary rounded-lg shadow-xl shadow-accent p-4 w-full max-w-2xl bg-base-200 py-2">
      <h2 className="text-2xl font-bold text-center mb-4">
        Evaluation Summary
      </h2>
      <p className="text-lg text-center mb-4">
        You got {correctAnswers.length} out of {evaluation.questions.length}{' '}
        questions correct.
      </p>

      <div className="space-y-4">
        {evaluation.questions.map((q, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = evaluateAnswer(q, userAnswer);

          return (
            <div
              key={index}
              className={`p-3 rounded ${isCorrect ? 'bg-success/20' : 'bg-error/20'}`}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{q.question}</p>
                <button
                  onClick={() => toggleQuestionDetails(index)}
                  className="btn btn-sm btn-ghost"
                >
                  {expandedQuestions.includes(index)
                    ? 'Hide Details'
                    : 'Show Details'}
                </button>
              </div>

              {expandedQuestions.includes(index) && (
                <div className="mt-2 space-y-2">
                  <p className={isCorrect ? 'text-success' : 'text-error'}>
                    Your answer: {userAnswer}
                  </p>
                  {!isCorrect && (
                    <p className="text-success">
                      Correct answer(s):{' '}
                      {q.answers
                        .filter((a) => a.isCorrect)
                        .map((a) => a.answer)
                        .join(', ')}
                    </p>
                  )}
                  <div className="mt-2">
                    <p className="font-semibold">All options:</p>
                    <ul className="list-disc list-inside">
                      {q.answers.map((a, answerIndex) => {
                        const isUserChoice = q.isMultipleOption
                          ? userAnswer.split(',').includes(a.answer)
                          : userAnswer === a.answer;
                        let className = '';
                        if (isUserChoice && a.isCorrect)
                          className = 'text-success';
                        else if (isUserChoice && !a.isCorrect)
                          className = 'text-error';
                        else if (!isUserChoice && a.isCorrect)
                          className = 'text-warning';

                        return (
                          <li key={answerIndex} className={className}>
                            {a.answer}
                            {isUserChoice && !a.isCorrect && ' ❌'}
                            {!isUserChoice && a.isCorrect && ' (missed)'}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EvaluationSummary;
