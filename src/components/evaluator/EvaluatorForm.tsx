import React from 'react';
import { Formik, Form, Field } from 'formik';
import { IQuestions } from '@/interfaces/IEvaluation';

type IEvaluatorProps = {
  question: IQuestions;
  handleQuestionAnswer: (question: string, answer: string) => void;
};

const EvaluatorForm = ({ question, handleQuestionAnswer }: IEvaluatorProps) => {
  const handleSubmit = (values: { answer: string | string[] }) => {
    const answer = Array.isArray(values.answer)
      ? values.answer.join(',')
      : values.answer;
    handleQuestionAnswer(question.question, answer);
  };

  return (
    <Formik initialValues={{ answer: '' }} onSubmit={handleSubmit}>
      <Form className="form-control">
        <div className="space-y-2">
          <p className="font-bold text-center">{question.question}</p>
          {question.answers.map((answer, index) => (
            <label key={index} className="label cursor-pointer">
              <Field
                type={question.isMultipleOption ? 'checkbox' : 'radio'}
                className={question.isMultipleOption ? 'checkbox' : 'radio'}
                name="answer"
                value={answer.answer}
                data-cy={`${answer.answer}-answer`}
              />
              <span className="label-text">{answer.answer}</span>
            </label>
          ))}
        </div>
        <button
          type="submit"
          data-cy="submit-answer"
          className="btn btn-primary mt-4"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default EvaluatorForm;
