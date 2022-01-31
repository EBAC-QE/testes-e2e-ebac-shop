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
        cy.addProdutos('Abominable Hoodie', 'L', 'Blue', 1 )
        cy.addProdutos('Apollo Running Short', '34', 'Black', 1 )
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Blue', 1 )
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.woocommerce-billing-fields > h3').should('contain','Detalhes de faturamento' ) 
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click({force: true})
        cy.get('#place_order').click()

       
        


            //cy.get('.woocommerce-message > .button').click()
            
        
        
       // cy.get('.woocommerce-message > .button').click()
        //cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    });
    

})








