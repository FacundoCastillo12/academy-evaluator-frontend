# Academy Evaluator Next.js App

This is a Next.js project called _Academy Evaluator_, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This application is designed to help teachers assess student knowledge through evaluations. By utilizing this tool, educators can identify areas where students may be struggling or what concepts may need further clarification.

## Testing Evaluations

This project includes a set of mock evaluations that can be used to test the application. To access them, go to [http://localhost:3000/evaluations](http://localhost:3000/evaluations). You can then select an evaluation to take and see the results.

## Roadmap

- **Evaluation Creation**: Teachers can create evaluations tailored to their teaching material.
- **Student Assessments**: Facilitates the process for students to complete evaluations and for teachers to track progress.
- **Insightful Analytics**: Provides insights into common areas of difficulty, enabling targeted teaching strategies.
- **Link Creation**: Generates unique links for each evaluation, allowing teachers to share them with students.
- **Dashboard**: Offers a dashboard for teachers to view the completion status of evaluations and track the overall progress of their students.
- **Prompt-based AI**: Utilizes AI to check written answer questions and ensure they meet the correct criteria.

## Ideas to Work On

- **Add explanation section**: Each question could have an explanation to clarify why that was the correct answer. For example, in a law subject, an article could be cited to explain why the question was correct in that context.
- **Option to display the questions and correct answers during the evaluation**: Giving this option could display a toast with the correct or incorrect answer.
- **Option to remove the next and go back**: This option could be made optional if it is not desired to go back.
- **Improve design and color palette**: This needs work.
- **Backend**: Perform validations of the correct answers on the backend. In the future, user accounts could be used and linked, so that it can be recorded which user responded, keeping evaluation sessions open. (A user who started and left halfway keeps their evaluation saved)
