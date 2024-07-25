/// <reference types="cypress" />

describe('Evaluator page - /evaluation/:id', () => {
  beforeEach(() => {
    cy.viewport('macbook-11');
    cy.visit('/');
  });

  it('Should render evaluations page with cards', () => {
    cy.get('[data-cy="Evaluations"]')
      .should('contain', 'Evaluations')
      .should('be.visible')
      .as('Evaluations');

    cy.get('@Evaluations').first().click();

    cy.get('[data-cy="evaluation-1"]').should('be.visible');
    cy.get('[data-cy="evaluation-2"]').should('be.visible');
    cy.get('[data-cy="evaluation-3"]').should('be.visible');

    cy.get('[data-cy="start-evaluation-3"]').click();
  });

  it('Should click a evaluation and complete it', () => {
    cy.get('[data-cy="Evaluations"]')
      .should('contain', 'Evaluations')
      .first()
      .click();

    cy.get('[data-cy="start-evaluation-3"]').click();

    cy.get('[data-cy="question"]')
      .should('be.visible')
      .contains('What planet is known as the Red Planet?');
    cy.get('[data-cy="Mars-answer"]').should('be.visible').as('correct-answer');
    cy.get('[data-cy="Venus-answer"]').should('be.visible');

    cy.get('@correct-answer').check();
    cy.get('[data-cy="submit-answer"]').click();

    cy.get('[data-cy="question"]')
      .should('be.visible')
      .contains('Which of these are mammals?');

    cy.get('[data-cy="Dog-answer"]').should('be.visible').click();

    cy.get('[data-cy="submit-answer"]').click();

    cy.get('[data-cy="show-details-What planet is known as the Red Planet?"]')
      .should('be.visible')
      .as('first-question-details')
      .click();

    cy.get(
      '[data-cy="answer-What planet is known as the Red Planet?-true"]',
    ).contains('Your answer: Mars');

    cy.get('[data-cy="go-evaluations"]').should('be.visible').click();
  });

  it('Should try to go next and previous question', () => {
    cy.get('[data-cy="Evaluations"]')
      .should('contain', 'Evaluations')
      .first()
      .click();

    cy.get('[data-cy="start-evaluation-1"]').click();

    cy.get('[data-cy="previous-question"]')
      .should('be.disabled')
      .as('prev-btn');

    cy.get('[data-cy="next-question"]').should('be.visible').as('next-btn');

    cy.get('@next-btn').click();
    cy.get('@prev-btn').click();
  });
});
