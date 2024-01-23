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


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('pedidos1', (modelo1, tamanho1, cor1, quantidade1, modelo2, tamanho2, cor2, quantidade2, modelo3, tamanho3, cor3, quantidade3, modelo4, tamanho4, cor4, quantidade4 ) => {
    cy.get('[class="products products-grid"]').contains(modelo1).click()
    cy.get('.button-variable-item-' + tamanho1).click()
    cy.get('.button-variable-item-' + cor1).click()
    cy.get('.input-text').clear().type(quantidade1)
    cy.get('.single_add_to_cart_button').click()
});
Cypress.Commands.add('pedidos2', (modelo2, tamanho2, cor2, quantidade2) => {
    cy.visit('/produtos')
    cy.get('[class="products products-grid"]').contains(modelo2).click()
    cy.get('.button-variable-item-' + tamanho2).click()
    cy.get('.button-variable-item-' + cor2).click()
    cy.get('.input-text').clear().type(quantidade2)
    cy.get('.single_add_to_cart_button').click()
});

Cypress.Commands.add('pedidos3', (modelo3, tamanho3, cor3, quantidade3) => {
    cy.visit('/produtos')
    cy.get('[class="products products-grid"]').contains(modelo3).click()
    cy.get('.button-variable-item-' + tamanho3).click()
    cy.get('.button-variable-item-' + cor3).click()
    cy.get('.input-text').clear().type(quantidade3)
    cy.get('.single_add_to_cart_button').click()   
})

Cypress.Commands.add('pedidos4', (modelo4, tamanho4, cor4, quantidade4) => {
    cy.visit('/produtos')
    cy.get('[class="products products-grid"]').contains(modelo4).click()
    cy.get('.button-variable-item-' + tamanho4).click()
    cy.get('.button-variable-item-' + cor4).click()
    cy.get('.input-text').clear().type(quantidade4)
    cy.get('.single_add_to_cart_button').click()
})


Cypress.Commands.add('finalizarcompra', (primeironome, ultimonome, endereco, cidade, estado, cep, numero, email) => {
    cy.get('#billing_first_name').type(primeironome)
    cy.get('#billing_last_name').type(ultimonome)
    cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city').type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(numero)
    cy.get('#billing_email').type(email)
    cy.get('#createaccount').click()
    cy.get('#account_password').type('Teste@teste123!')
    cy.get('#terms').click()
    cy.get('#place_order').click()
});