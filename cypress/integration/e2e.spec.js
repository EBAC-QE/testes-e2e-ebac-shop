/// <reference types="cypress" />
import compraE2ePage from "../support/page_objects/compra-e2e.page";
const compra = require('../fixtures/compra.json')
const usuarios = require('../fixtures/usuarios.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
        
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        compraE2ePage.compraE2e(
            compra[0].produto1,
            compra[0].tamanho1,
            compra[0].cor1,
            compra[0].quantidade1,
            compra[0].produto2,
            compra[0].tamanho2,
            compra[0].cor2,
            compra[0].quantidade2,
            compra[0].produto3,
            compra[0].tamanho3,
            compra[0].cor3,
            compra[0].quantidade3,
            compra[0].produto4,
            compra[0].taamnho4,
            compra[0].cor4,
            compra[0].quantidade4,
            usuarios[0].usuario,
            usuarios[0].senha
            
            
            )
        cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')
        cy.get(':nth-child(1) > .woocommerce-table__product-name > a').should('contain' , 'Autumn Pullie - S, Green')
        cy.get(':nth-child(1) > .woocommerce-table__product-name > .product-quantity').should('contain' , '2')
        cy.get(':nth-child(2) > .woocommerce-table__product-name > a').should('contain' , 'Caesar Warm-Up Pant - 36')
        cy.get(':nth-child(2) > .woocommerce-table__product-name > .product-quantity').should('contain' , '2')
        cy.get(':nth-child(3) > .woocommerce-table__product-name > a').should('contain' , 'Bruno Compete Hoodie - XS')
        cy.get(':nth-child(3) > .woocommerce-table__product-name > .product-quantity').should('contain' , '3')
        cy.get(':nth-child(4) > .woocommerce-table__product-name > a').should('contain' , 'Cassia Funnel Sweatshirt - XS')
        cy.get(':nth-child(4) > .woocommerce-table__product-name > .product-quantity').should('contain' , '2')
        
    });


})