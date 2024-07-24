/// <reference types="cypress" />

describe('Authorization', () => {
  beforeEach(() => {
    cy.visit('/sign-in');
  });

  it('Login through UI', () => {
    cy.title().should('include', 'Sign in');
  });
});
