import React, { useState, useEffect } from 'react';
import EvaluatorForm from '@/components/evaluator/EvaluatorForm';
import EvaluationSummary from '@/components/evaluator/EvaluationSummary';
import MainLayout from '@/components/layout/MainLayout';
import { IEvaluation } from '@/interfaces/IEvaluation';
import { ToastNotify } from '@/utils/Toast';
import { mockEvaluations } from '@/data/evaluations';

interface EvaluatorPageProps {
  evaluationId: string;
}

const EvaluatorEngine: React.FC<EvaluatorPageProps> = ({ evaluationId }) => {
  const [evaluation, setEvaluation] = useState<IEvaluation | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isEvaluationComplete, setIsEvaluationComplete] = useState(false);

  useEffect(() => {
    // This need to be replaced with an API call
    const loadedEvaluation = mockEvaluations.find(
      (e) => e.id === parseInt(evaluationId),
    );
    if (loadedEvaluation) {
      setEvaluation(loadedEvaluation);
      setUserAnswers(new Array(loadedEvaluation.questions.length).fill(''));
    } else {
      ToastNotify.error('Evaluation not found');
    }
  }, [evaluationId]);

  if (!evaluation) {
    return <div>Loading...</div>;
  }

  const currentQuestion = evaluation.questions[currentQuestionIndex];

  const handleQuestionAnswer = (question: string, answer: string) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newUserAnswers);

    if (currentQuestionIndex < evaluation.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsEvaluationComplete(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < evaluation.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col justify-center grow items-center w-full">
        {!isEvaluationComplete ? (
          <div className="flex flex-col bg-secondary rounded-lg shadow-xl shadow-accent p-4 w-96 h-full bg-base-200">
            <div>
              <h4 className="text-lg font-bold text-center" data-cy="subject">
                {evaluation.subject}
              </h4>
              <p className="text-center">
                Question {currentQuestionIndex + 1} of{' '}
                {evaluation.questions.length}
              </p>
            </div>
            <EvaluatorForm
              question={currentQuestion}
              handleQuestionAnswer={handleQuestionAnswer}
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="btn btn-secondary"
                data-cy="previous-question"
              >
                Previous
              </button>
              <button
                onClick={handleNextQuestion}
                disabled={
                  currentQuestionIndex === evaluation.questions.length - 1
                }
                className="btn btn-secondary"
                data-cy="next-question"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <EvaluationSummary
            evaluation={evaluation}
            userAnswers={userAnswers}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default EvaluatorEngine;
