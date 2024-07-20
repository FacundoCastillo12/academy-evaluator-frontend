import { IEvaluation } from '@/interfaces/IEvaluation';

export const mockEvaluations: IEvaluation[] = [
  {
    id: 1,
    subject: 'Mathematics',
    questions: [
      {
        question: 'What is the value of Pi to two decimal places?',
        isMultipleOption: false,
        answers: [
          { answer: '3.14', isCorrect: true },
          { answer: '3.15', isCorrect: false },
        ],
      },
      {
        question: 'What is the square root of 64?',
        isMultipleOption: false,
        answers: [
          { answer: '8', isCorrect: true },
          { answer: '7', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a prime number?',
        isMultipleOption: true,
        answers: [
          { answer: '12', isCorrect: false },
          { answer: '17', isCorrect: true },
          { answer: '18', isCorrect: false },
          { answer: '20', isCorrect: false },
        ],
      },
      {
        question: 'What is the solution to the equation 3x + 2 = 11?',
        isMultipleOption: false,
        answers: [
          { answer: '3', isCorrect: true },
          { answer: '2', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is the derivative of sin(x)?',
        isMultipleOption: true,
        answers: [
          { answer: 'cos(x)', isCorrect: true },
          { answer: '-sin(x)', isCorrect: false },
          { answer: '-cos(x)', isCorrect: false },
          { answer: 'sin(x)', isCorrect: false },
        ],
      },
      {
        question: 'What is the sum of the interior angles of a triangle?',
        isMultipleOption: false,
        answers: [
          { answer: '180 degrees', isCorrect: true },
          { answer: '360 degrees', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: 5x - 20 = 0',
        isMultipleOption: false,
        answers: [
          { answer: '4', isCorrect: true },
          { answer: '5', isCorrect: false },
        ],
      },
      {
        question: 'What is 15% of 200?',
        isMultipleOption: false,
        answers: [
          { answer: '30', isCorrect: true },
          { answer: '20', isCorrect: false },
        ],
      },
      {
        question: 'What is the area of a circle with radius 7?',
        isMultipleOption: true,
        answers: [
          { answer: '154', isCorrect: true },
          { answer: '144', isCorrect: false },
          { answer: '100', isCorrect: false },
          { answer: '110', isCorrect: false },
        ],
      },
      {
        question: 'What is the next number in the sequence: 2, 4, 6, 8, ...?',
        isMultipleOption: false,
        answers: [
          { answer: '10', isCorrect: true },
          { answer: '12', isCorrect: false },
        ],
      },
      {
        question: 'What is the Pythagorean theorem?',
        isMultipleOption: true,
        answers: [
          { answer: 'a^2 + b^2 = c^2', isCorrect: true },
          { answer: 'a^2 - b^2 = c^2', isCorrect: false },
          { answer: 'a^2 * b^2 = c^2', isCorrect: false },
          { answer: 'a + b = c', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 3,
    subject: 'Science',
    questions: [
      {
        question: 'What planet is known as the Red Planet?',
        isMultipleOption: false,
        answers: [
          { answer: 'Mars', isCorrect: true },
          { answer: 'Venus', isCorrect: false },
        ],
      },
      {
        question: 'Which of these are mammals?',
        isMultipleOption: true,
        answers: [
          { answer: 'Dog', isCorrect: true },
          { answer: 'Cat', isCorrect: true },
          { answer: 'Crocodile', isCorrect: false },
          { answer: 'Whale', isCorrect: true },
        ],
      },
    ],
  },
  {
    id: 2,
    subject: 'History',
    questions: [
      {
        question: 'Who was the first President of the United States?',
        isMultipleOption: false,
        answers: [
          { answer: 'George Washington', isCorrect: true },
          { answer: 'Thomas Jefferson', isCorrect: false },
          { answer: 'Abraham Lincoln', isCorrect: false },
          { answer: 'John Adams', isCorrect: false },
        ],
      },
      {
        question: 'In what year did World War II end?',
        isMultipleOption: false,
        answers: [
          { answer: '1945', isCorrect: true },
          { answer: '1939', isCorrect: false },
          { answer: '1918', isCorrect: false },
          { answer: '1963', isCorrect: false },
        ],
      },
      {
        question:
          'Which empire was known as the "Empire on which the sun never sets"?',
        isMultipleOption: false,
        answers: [
          { answer: 'British Empire', isCorrect: true },
          { answer: 'Roman Empire', isCorrect: false },
          { answer: 'Ottoman Empire', isCorrect: false },
          { answer: 'Mongol Empire', isCorrect: false },
        ],
      },
      {
        question: 'What was the main cause of the American Civil War?',
        isMultipleOption: true,
        answers: [
          { answer: 'Slavery', isCorrect: true },
          { answer: 'Taxes', isCorrect: false },
          { answer: 'Religion', isCorrect: false },
          { answer: 'Territorial Expansion', isCorrect: false },
        ],
      },
      {
        question: 'Who discovered America in 1492?',
        isMultipleOption: true,
        answers: [
          { answer: 'Christopher Columbus', isCorrect: true },
          { answer: 'Vasco da Gama', isCorrect: false },
          { answer: 'Ferdinand Magellan', isCorrect: false },
          { answer: 'Marco Polo', isCorrect: false },
        ],
      },
      {
        question: 'What ancient civilization built the Machu Picchu?',
        isMultipleOption: true,
        answers: [
          { answer: 'Inca', isCorrect: true },
          { answer: 'Aztec', isCorrect: false },
          { answer: 'Maya', isCorrect: false },
          { answer: 'Olmec', isCorrect: false },
        ],
      },
      {
        question: 'In what year did the French Revolution begin?',
        isMultipleOption: true,
        answers: [
          { answer: '1789', isCorrect: true },
          { answer: '1776', isCorrect: false },
          { answer: '1804', isCorrect: false },
          { answer: '1812', isCorrect: false },
        ],
      },
      {
        question:
          'Who was the British Prime Minister during most of World War II?',
        isMultipleOption: false,
        answers: [
          { answer: 'Winston Churchill', isCorrect: true },
          { answer: 'Neville Chamberlain', isCorrect: false },
          { answer: 'Clement Attlee', isCorrect: false },
          { answer: 'Stanley Baldwin', isCorrect: false },
        ],
      },
      {
        question:
          'Which war was fought between the North and South regions in the United States?',
        isMultipleOption: false,
        answers: [
          { answer: 'The American Civil War', isCorrect: true },
          { answer: 'The Revolutionary War', isCorrect: false },
          { answer: 'The War of 1812', isCorrect: false },
          { answer: 'The Spanish-American War', isCorrect: false },
        ],
      },
      {
        question:
          'What was the name of the ship that brought the Pilgrims to America in 1620?',
        isMultipleOption: true,
        answers: [
          { answer: 'Mayflower', isCorrect: true },
          { answer: 'Santa Maria', isCorrect: false },
          { answer: 'HMS Beagle', isCorrect: false },
          { answer: 'Endeavour', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 5,
    subject: 'Geography',
    questions: [
      {
        question: 'What is the capital of France?',
        isMultipleOption: false,
        answers: [
          { answer: 'Paris', isCorrect: true },
          { answer: 'London', isCorrect: false },
        ],
      },
      {
        question: 'Which of these are countries in Africa?',
        isMultipleOption: true,
        answers: [
          { answer: 'Nigeria', isCorrect: true },
          { answer: 'Brazil', isCorrect: false },
          { answer: 'Kenya', isCorrect: true },
          { answer: 'Spain', isCorrect: false },
        ],
      },
    ],
  },
];
