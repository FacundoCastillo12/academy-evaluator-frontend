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
          { text: '3.14', isCorrect: true },
          { text: '3.15', isCorrect: false },
        ],
      },
      {
        question: 'What is the square root of 64?',
        isMultipleOption: false,
        answers: [
          { text: '8', isCorrect: true },
          { text: '7', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is a prime number?',
        isMultipleOption: true,
        answers: [
          { text: '12', isCorrect: false },
          { text: '17', isCorrect: true },
          { text: '18', isCorrect: false },
          { text: '20', isCorrect: false },
        ],
      },
      {
        question: 'What is the solution to the equation 3x + 2 = 11?',
        isMultipleOption: false,
        answers: [
          { text: '3', isCorrect: true },
          { text: '2', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is the derivative of sin(x)?',
        isMultipleOption: true,
        answers: [
          { text: 'cos(x)', isCorrect: true },
          { text: '-sin(x)', isCorrect: false },
          { text: '-cos(x)', isCorrect: false },
          { text: 'sin(x)', isCorrect: false },
        ],
      },
      {
        question: 'What is the sum of the interior angles of a triangle?',
        isMultipleOption: false,
        answers: [
          { text: '180 degrees', isCorrect: true },
          { text: '360 degrees', isCorrect: false },
        ],
      },
      {
        question: 'Solve for x: 5x - 20 = 0',
        isMultipleOption: false,
        answers: [
          { text: '4', isCorrect: true },
          { text: '5', isCorrect: false },
        ],
      },
      {
        question: 'What is 15% of 200?',
        isMultipleOption: false,
        answers: [
          { text: '30', isCorrect: true },
          { text: '20', isCorrect: false },
        ],
      },
      {
        question: 'What is the area of a circle with radius 7?',
        isMultipleOption: true,
        answers: [
          { text: '154', isCorrect: true },
          { text: '144', isCorrect: false },
          { text: '100', isCorrect: false },
          { text: '110', isCorrect: false },
        ],
      },
      {
        question: 'What is the next number in the sequence: 2, 4, 6, 8, ...?',
        isMultipleOption: false,
        answers: [
          { text: '10', isCorrect: true },
          { text: '12', isCorrect: false },
        ],
      },
      {
        question: 'What is the Pythagorean theorem?',
        isMultipleOption: true,
        answers: [
          { text: 'a^2 + b^2 = c^2', isCorrect: true },
          { text: 'a^2 - b^2 = c^2', isCorrect: false },
          { text: 'a^2 * b^2 = c^2', isCorrect: false },
          { text: 'a + b = c', isCorrect: false },
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
          { text: 'Mars', isCorrect: true },
          { text: 'Venus', isCorrect: false },
        ],
      },
      {
        question: 'Which of these are mammals?',
        isMultipleOption: true,
        answers: [
          { text: 'Dog', isCorrect: true },
          { text: 'Cat', isCorrect: true },
          { text: 'Crocodile', isCorrect: false },
          { text: 'Whale', isCorrect: true },
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
          { text: 'George Washington', isCorrect: true },
          { text: 'Thomas Jefferson', isCorrect: false },
          { text: 'Abraham Lincoln', isCorrect: false },
          { text: 'John Adams', isCorrect: false },
        ],
      },
      {
        question: 'In what year did World War II end?',
        isMultipleOption: false,
        answers: [
          { text: '1945', isCorrect: true },
          { text: '1939', isCorrect: false },
          { text: '1918', isCorrect: false },
          { text: '1963', isCorrect: false },
        ],
      },
      {
        question:
          'Which empire was known as the "Empire on which the sun never sets"?',
        isMultipleOption: false,
        answers: [
          { text: 'British Empire', isCorrect: true },
          { text: 'Roman Empire', isCorrect: false },
          { text: 'Ottoman Empire', isCorrect: false },
          { text: 'Mongol Empire', isCorrect: false },
        ],
      },
      {
        question: 'What was the main cause of the American Civil War?',
        isMultipleOption: true,
        answers: [
          { text: 'Slavery', isCorrect: true },
          { text: 'Taxes', isCorrect: false },
          { text: 'Religion', isCorrect: false },
          { text: 'Territorial Expansion', isCorrect: false },
        ],
      },
      {
        question: 'Who discovered America in 1492?',
        isMultipleOption: true,
        answers: [
          { text: 'Christopher Columbus', isCorrect: true },
          { text: 'Vasco da Gama', isCorrect: false },
          { text: 'Ferdinand Magellan', isCorrect: false },
          { text: 'Marco Polo', isCorrect: false },
        ],
      },
      {
        question: 'What ancient civilization built the Machu Picchu?',
        isMultipleOption: true,
        answers: [
          { text: 'Inca', isCorrect: true },
          { text: 'Aztec', isCorrect: false },
          { text: 'Maya', isCorrect: false },
          { text: 'Olmec', isCorrect: false },
        ],
      },
      {
        question: 'In what year did the French Revolution begin?',
        isMultipleOption: true,
        answers: [
          { text: '1789', isCorrect: true },
          { text: '1776', isCorrect: false },
          { text: '1804', isCorrect: false },
          { text: '1812', isCorrect: false },
        ],
      },
      {
        question:
          'Who was the British Prime Minister during most of World War II?',
        isMultipleOption: false,
        answers: [
          { text: 'Winston Churchill', isCorrect: true },
          { text: 'Neville Chamberlain', isCorrect: false },
          { text: 'Clement Attlee', isCorrect: false },
          { text: 'Stanley Baldwin', isCorrect: false },
        ],
      },
      {
        question:
          'Which war was fought between the North and South regions in the United States?',
        isMultipleOption: false,
        answers: [
          { text: 'The American Civil War', isCorrect: true },
          { text: 'The Revolutionary War', isCorrect: false },
          { text: 'The War of 1812', isCorrect: false },
          { text: 'The Spanish-American War', isCorrect: false },
        ],
      },
      {
        question:
          'What was the name of the ship that brought the Pilgrims to America in 1620?',
        isMultipleOption: true,
        answers: [
          { text: 'Mayflower', isCorrect: true },
          { text: 'Santa Maria', isCorrect: false },
          { text: 'HMS Beagle', isCorrect: false },
          { text: 'Endeavour', isCorrect: false },
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
          { text: 'Paris', isCorrect: true },
          { text: 'London', isCorrect: false },
        ],
      },
      {
        question: 'Which of these are countries in Africa?',
        isMultipleOption: true,
        answers: [
          { text: 'Nigeria', isCorrect: true },
          { text: 'Brazil', isCorrect: false },
          { text: 'Kenya', isCorrect: true },
          { text: 'Spain', isCorrect: false },
        ],
      },
    ],
  },
];
