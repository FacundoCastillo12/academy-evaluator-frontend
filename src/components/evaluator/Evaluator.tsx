import React from 'react';
import { Formik, Form, Field } from 'formik';
import { IQuestions } from '@/interfaces/IEvaluation';

type IEvaluatorProps = {
  question: IQuestions;
  handleQuestionAnswer: (question: string, answer: string) => void;
};

const Evaluator = ({ question, handleQuestionAnswer }: IEvaluatorProps) => {
  const handleSubmit = (values: any) => {
    handleQuestionAnswer(question.question, values.answer);
  };

  return (
    <Formik initialValues={{ answer: '' }} onSubmit={handleSubmit}>
      {() => (
        <Form className="form-control">
          <div className="space-y-2">
            <p className="font-bold text-center">{question.question}</p>
            {question.answers.map((answer, index) => (
              <label key={index} className="label cursor-pointer">
                {question.isMultipleOption ? (
                  <Field
                    type="checkbox"
                    className="checkbox"
                    name="answer"
                    value={answer.answer}
                  />
                ) : (
                  <Field
                    type="radio"
                    className="radio"
                    name="answer"
                    value={answer.answer}
                  />
                )}
                <span className="label-text">{answer.answer}</span>
              </label>
            ))}
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Evaluator;
