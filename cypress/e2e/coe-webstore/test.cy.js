/// <reference types="cypress" />
import Global from '../../pageObjects/Global';

describe('authorization', () => {
  beforeEach(() => {
    cy.loginUi();
  });

  it('opens store page & checks title', () => {
    Global.navigation.openStorePage();
  });

  it('visits cart page', () => {
    cy.visit('/cart');
  });
});
