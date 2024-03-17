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
