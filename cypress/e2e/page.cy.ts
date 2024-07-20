/// <reference types="cypress" />
describe('Pages', () => {
  describe('Landing page', () => {
    beforeEach(() => {
      cy.viewport('macbook-11');
      cy.visit('/');
    });

    it('Should render home', () => {
      cy.get('[data-cy="title-navbar"]')
        .should('contain', 'Academy Evaluator')
        .should('be.visible');
    });

    it('Should render landing page with cards', () => {
      cy.get('[data-cy="card-Create quizzes easily"]').should('be.visible');
      cy.get('[data-cy="card-Create assessments easily"]').should('be.visible');
      cy.get('[data-cy="card-Create assessments easily"]').should('be.visible');

      cy.get('[data-cy="card-title-Create quizzes easily"]').contains(
        'Create quizzes easily',
      );
    });

    it('Should render stats page', () => {
      cy.get('[data-cy="stats-section"]').should('be.visible');

      cy.get('[data-cy="stats-title"]').should('be.visible');
      cy.get('[data-cy="stats-description"]').should('be.visible');
    });

    it('Should render features page', () => {
      cy.get('[data-cy="features-section"]')
        .scrollIntoView()
        .should('be.visible');

      cy.get('[data-cy="features-title"]')
        .scrollIntoView()
        .should('be.visible');
      cy.get('[data-cy="features-subtitle"]')
        .scrollIntoView()
        .should('be.visible');
      cy.get('[data-cy="features-description"]')
        .scrollIntoView()
        .should('be.visible');

      cy.get('[data-cy="feature-title-Easy Quizzes"]')
        .scrollIntoView()
        .should('be.visible');
      cy.get('[data-cy="feature-description-Easy Quizzes"]')
        .scrollIntoView()
        .should('be.visible');
      cy.get('[data-cy="feature-title-Automatic Correction"]')
        .scrollIntoView()
        .should('be.visible');
      cy.get('[data-cy="feature-description-Automatic Correction"]')
        .scrollIntoView()
        .should('be.visible');
      cy.get('[data-cy="feature-title-Group Management"]')
        .scrollIntoView()
        .should('be.visible');
      cy.get('[data-cy="feature-description-Group Management"]')
        .scrollIntoView()
        .should('be.visible');
    });

    it('Should render FAQ page', () => {
      cy.get('[data-cy="faq-section"]').scrollIntoView().should('be.visible');

      cy.get('[data-cy="faq-title"]').scrollIntoView().should('be.visible');
      cy.get('[data-cy="faq-description"]')
        .scrollIntoView()
        .should('be.visible');

      cy.get('[data-cy="faq-item-1"]')
        .scrollIntoView()
        .should('be.visible')
        .click();

      cy.get(
        '[data-cy="faq-answer-Is Academy Evaluator suitable for all educational levels?"]',
      ).should('be.visible');
    });
  });

  describe('Evaluator page', () => {
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
      cy.get('[data-cy="Mars-answer"]')
        .should('be.visible')
        .as('correct-answer');
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
});
