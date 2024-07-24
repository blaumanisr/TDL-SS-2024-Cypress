// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});

Cypress.Commands.add('loginUi', (email, password) => {
  cy.visit('/sign-in');
  cy.getByTestId('email-input').type('rudolfs.blaumanis@testdevlab.com');
  cy.getByTestId('password-input').type('test123');
  cy.getByTestId('sign-in-button').click();
  cy.url().should('include', '/us'); // very basic form of session validation for a successful login
  cy.title().should('include', 'Store of Excellence');
});

Cypress.Commands.add('loginUiSession', (email, password) => {
  cy.session(
    'rudolfs.blaumanis',
    () => {
      const log = Cypress.log({
        displayName: 'Login',
        message: [`🔐 Authenticating | ${email}`],
        // @ts-ignore
        autoEnd: false,
      });
      log.snapshot('before');
      cy.visit('/sign-in');
      cy.getByTestId('email-input').type('rudolfs.blaumanis@testdevlab.com');
      cy.getByTestId('password-input').type('test123');
      cy.getByTestId('sign-in-button').click();
      log.snapshot('after');
      log.end();
    },
    {
      validate: () => {
        cy.url().should('include', '/us'); // very basic form of session validation for a successful login
        cy.title().should('include', 'Store of Excellence');
      },
    }
  );
});
