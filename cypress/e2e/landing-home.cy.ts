/// <reference types="cypress" />
describe('View every route', () => {
  beforeEach(() => {
    cy.viewport('macbook-11');
    cy.visit('/');
  });

  describe('Home page', () => {
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
    it('Should render evaluator page', () => {
      cy.get('[data-cy="Evaluator"]')
        .should('contain', 'Evaluator')
        .should('be.visible')
        .as('evaluator');

      cy.get('@evaluator').first().click();

      cy.get('[data-cy="submit-answer"]').click();

      cy.get('[data-cy="submit-answer"]').click();
      cy.get('[data-cy="submit-answer"]').click();

      cy.get('[data-cy="León-answer"]').click();
      cy.get('[data-cy="submit-answer"]').click();
    });
  });
});
