const API_URL = 'https://coe-webstore-api.tdlbox.com';

Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});

Cypress.Commands.add('loginApi', (email, password) => {
  cy.request({
    method: 'POST',
    followRedirect: true,
    url: API_URL + '/store/auth/token',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email: 'rudolfs.blaumanis@testdevlab.com',
      password: 'test123',
    },
  }).then((response) => {
    cy.setCookie('_medusa_jwt', response.body.access_token);
  });
});

Cypress.Commands.add('loginUi', (email, password) => {
  cy.visit('/sign-in');
  cy.getByTestId('email-input').type('rudolfs.blaumanis@testdevlab.com');
  cy.getByTestId('password-input').type('test123');
  cy.getByTestId('sign-in-button').click();
  cy.url().should('include', '/us'); // very basic form of session validation for a successful login
  cy.title().should('include', 'Store of Excellence');
});

Cypress.Commands.add('clearCart', () => {
  cy.request({
    method: 'POST',
    url: API_URL + '/store/carts',
    // body: [
    //   {
    //     identifier: vehicleAgreementNo,
    //     identifierType: 'AGREEMENT_NUMBER_CONTAINS',
    //   },
    // ],
    // headers: {
    //   Authorization: 'Bearer ' + window.localStorage.getItem('Bearer'),
    //   accept: 'application/json',
    //   'Content-Type': 'application/json',
    // },
  }).then((response) => {
    if (response.body.length > 0) {
      cy.log('cart cleared');
    } else {
      cy.log('cart not found');
    }
  });
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
