///  <reference types="cypress" />

const chekout = require('../fixtures/chekout.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve adicionar produtos com comando customizado ', () => {
        cy.addProdutos('Abominable Hoodie' , 'M', 'Green', 1)
        cy.addProdutos1('Arcadio Gym Short', '34' , 'Red', 1)
        cy.addProdutos2('Atomic Endurance Running Tee (Crew-Neck)', 'Black', 'M', 3)
        cy.addProdutos3('Autumn Pullie', 'M', 'Purple', 2)

        //..Preenchendo chekout

        cy.get('#billing_first_name').type(chekout.nome)
        cy.get('#billing_last_name').type(chekout.sobrenome)
        cy.get('#select2-billing_country-container').click().type(chekout.pais).click()
        cy.get('#billing_address_1').type(chekout.endereco)
        cy.get('#billing_city').type(chekout.cidade)
        cy.get('#select2-billing_state-container').click().type(chekout.estado).click()
        cy.get('#billing_postcode').type(chekout.cep)
        cy.get('#billing_phone').type(chekout.telefone)
        cy.get('#billing_email').type(chekout.email)

        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').contains('Obrigado. Seu pedido foi recebido.')



    });


})