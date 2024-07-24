class Global {
  elements = {};

  navigation = {
    openStorePage: () => {
      cy.getByTestId('nav-menu-button').click();
      cy.getByTestId('store-link').click();
      cy.url().should('include', '/store');
      cy.getByTestId('store-page-title').should('have.text', 'All products');
    },
  };
}

export default new Global();
