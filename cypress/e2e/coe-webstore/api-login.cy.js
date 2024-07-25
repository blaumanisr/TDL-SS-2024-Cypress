/// <reference types="cypress" />
import Global from '../../pageObjects/Global';

describe('authorization', () => {
  beforeEach(() => {
    cy.loginApi();
  });

  it('opens store page & checks title', () => {
    cy.clearCart();
  });

  it('visits cart page', () => {
    cy.visit('/cart');
  });
});
