/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  beforeEach(() => {
    cy.visit('produtos');
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.addProdutos('Abominable Hoodie', 'XS', 'Blue', 1);
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(5) > a').click();
    cy.addProdutos('Hollister Backyard Sweatshirt', 'S', 'Red', 1);
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(4) > a').click();
    cy.addProdutos('Beaumont Summit Kit', 'M', 'Orange', 1);
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click();
    cy.addProdutos('Ajax Full-Zip Sweatshirt', 'L', 'Red', 1);
    cy.get('.woocommerce-message > .button').click();
    cy.get('.checkout-button').click();
    cy.addDados(
      'Teste',
      'Cypress',
      'Ebac',
      'Brasil',
      'Rua da Paz',
      '15',
      'São Paulo',
      'São Paulo',
      '68928-166',
      '11999999999',
      'teste@teste87.com'
    );
    cy.get('#order_comments').type('OBS: Teste automatizado Cypress');
    cy.get('#payment_method_cod').click();
    cy.get('#terms').click();
    cy.get('#place_order').click();
    cy.get('.page-title').should('contain', 'Pedido recebido');
  });
});
