import Evaluator from '@/components/evaluator/Evaluator';
import MainLayout from '@/components/layout/MainLayout';
import { IEvaluation, IQuestions } from '@/interfaces/IEvaluation';
import { ToastNotify } from '@/utils/Toast';
import React, { useState } from 'react';

const randomEvaluation: IEvaluation = {
  subject: 'Conocimientos Generales',
  questions: [
    {
      question: '¿Cuántos continentes hay en el mundo?',
      isMultipleOption: false,
      answers: [
        {
          answer: '7',
          isCorrect: true,
        },
        {
          answer: '6',
          isCorrect: false,
        },
        {
          answer: '5',
          isCorrect: false,
        },
      ],
    },
    {
      question: '¿Cuál es la capital de Francia?',
      isMultipleOption: false,
      answers: [
        {
          answer: 'Madrid',
          isCorrect: false,
        },
        {
          answer: 'Londres',
          isCorrect: false,
        },
        {
          answer: 'París',
          isCorrect: true,
        },
      ],
    },
    {
      question: '¿Cuál es el resultado de 2 + 2?',
      isMultipleOption: false,
      answers: [
        {
          answer: '3',
          isCorrect: false,
        },
        {
          answer: '4',
          isCorrect: true,
        },
        {
          answer: '5',
          isCorrect: false,
        },
      ],
    },
    {
      question: '¿Cuál es el animal considerado el "rey de la selva"?',
      isMultipleOption: false,
      answers: [
        {
          answer: 'Elefante',
          isCorrect: false,
        },
        {
          answer: 'Tigre',
          isCorrect: false,
        },
        {
          answer: 'León',
          isCorrect: true,
        },
      ],
    },
  ],
};

const EvaluatorPage = () => {
  const [evaluation] = useState<IEvaluation>(randomEvaluation);
  const [selectQuestion, setSelectQuestion] = useState<IQuestions>(
    evaluation.questions[0],
  );

  const handleQuestionAnswer = (question: string, answer: string) => {
    const currentQuestionIndex = evaluation.questions.findIndex(
      (q) => q.question === question,
    );
    const currentQuestion = evaluation.questions[currentQuestionIndex];
    const isCorrectAnswer = currentQuestion.answers.some(
      (answerQuestion) =>
        answerQuestion.answer === answer && answerQuestion.isCorrect,
    );

    if (currentQuestionIndex === evaluation.questions.length - 1) {
      ToastNotify.sucess('This is the end');
    } else {
      if (isCorrectAnswer) {
        ToastNotify.sucess('Correct Answer');
      } else {
        ToastNotify.error('Wrong Answer');
      }
      handleNextQuestion(question);
    }
  };

  const handleNextQuestion = (question: string) => {
    const questionIndex = evaluation.questions.findIndex(
      (q) => q.question === question,
    );

    setSelectQuestion(evaluation.questions[questionIndex + 1]);
  };
  return (
    <MainLayout>
      <div className="flex flex-col justify-center grow items-center w-full">
        <div className="flex flex-col bg-secondary rounded-lg shadow-xl shadow-accent p-4 w-96 h-96">
          <div>
            <h4 className="text-lg font-bold text-center">
              {evaluation.subject}
            </h4>
          </div>
          <Evaluator
            question={selectQuestion}
            handleQuestionAnswer={handleQuestionAnswer}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default EvaluatorPage;
