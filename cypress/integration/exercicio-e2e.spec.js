/// <reference types="cypress" />
var faker = require('faker');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.pedidos1('Aero Daily Fitness Tee', 'M', 'Brown', 1)
        cy.pedidos2('Arcadio Gym Short', '34', 'Blue', 3)
        cy.pedidos3('Argus All-Weather Tank', 'S', 'Gray', 2)
        cy.pedidos4('Aether Gym Pant', '34', 'Brown', 5)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.finalizarcompra(nomeFaker, sobrenomeFaker, 'Rua X', 'Rio de Janeiro', 'Rio de Janeiro', '22776-000', '2199999999', emailFaker)
        cy.wait(5)
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
})