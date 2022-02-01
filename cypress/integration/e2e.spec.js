/// <reference types="cypress" />
let dadosLogin


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */


    beforeEach(() => {
        cy.visit('minha-conta')
    });



    it('Login usando arquivo fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProdutos('Aether Gym Pant', '36', 'Blue', 1)
        cy.addProdutos('Abominable Hoodie', 'L', 'Blue', 1)
        cy.addProdutos('Apollo Running Short', '34', 'Black', 1)
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Blue', 1)
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('[class="button checkout wc-forward"]').eq(1).click()
        cy.get('#payment_method_cheque').click()
        cy.get('#terms').click({ force: true })
        cy.get('#place_order').click({ force: true })
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order-details__title').should('contain', 'Detalhes do pedido')

    });


})








