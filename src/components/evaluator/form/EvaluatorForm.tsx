import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IQuestion } from '@/interfaces/IEvaluation';
type IEvaluatorProps = {
  question: IQuestion;
  handleQuestionAnswer: (question: string, answer: string) => void;
};

const EvaluatorForm = ({ question, handleQuestionAnswer }: IEvaluatorProps) => {
  const handleSubmit = (values: { answer: string | string[] }) => {
    const answer = Array.isArray(values.answer)
      ? values.answer.join(',')
      : values.answer;
    handleQuestionAnswer(question.text, answer);
  };

  return (
    <Formik initialValues={{ answer: '' }} onSubmit={handleSubmit}>
      <Form className="form-control">
        <div className="space-y-2">
          <p className="font-bold text-center" data-cy="question">
            {question.text}
          </p>
          {question.answers.map((answer) => (
            <label key={answer.text} className="label cursor-pointer">
              <Field
                type={question.isMultipleOption ? 'checkbox' : 'radio'}
                className={question.isMultipleOption ? 'checkbox' : 'radio'}
                name="answer"
                value={answer.text}
                data-cy={`${answer.text}-answer`}
              />

              <span className="label-text">{answer.text}</span>
            </label>
          ))}

          <ErrorMessage
            className="text-red-500 text-xs w-full"
            name="answer"
            component="p"
          />
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
