/// <reference types="cypress" />
import addProdutos from "../support/page_objects/addProdutos.page"
import loginCheckout from "../support/page_objects/loginCheckout.page"
import checkout from "../support/page_objects/checkout.page"
const produtos = require('../fixtures/produtos.json')
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
        addProdutos.addProdutos(
            produtos[0].produto1,
            produtos[0].tamanho1,
            produtos[0].cor1,
            produtos[0].quantidade1,
            produtos[0].produto2,
            produtos[0].tamanho2,
            produtos[0].cor2,
            produtos[0].quantidade2,
            produtos[0].produto3,
            produtos[0].tamanho3,
            produtos[0].cor3,
            produtos[0].quantidade3,
            produtos[0].produto4,
            produtos[0].tamanho4,
            produtos[0].cor4,
            produtos[0].quantidade4,
        )

        loginCheckout.loginCheckout(usuarios[0].usuario,
            usuarios[0].senha,
        )

        checkout.checkout()


        cy.get(':nth-child(1) > .woocommerce-table__product-name > a').should('contain', produtos[0].produto1,
            produtos[0].tamanho1,
            produtos[0].cor1,
            produtos[0].quantidade1)

        cy.get(':nth-child(2) > .woocommerce-table__product-name > a').should('contain', produtos[0].produto2,
            produtos[0].tamanho2,
            produtos[0].cor2,
            produtos[0].quantidade2)

        cy.get(':nth-child(3) > .woocommerce-table__product-name > a').should('contain', produtos[0].produto3,
            produtos[0].tamanho3,
            produtos[0].cor3,
            produtos[0].quantidade3)

        cy.get(':nth-child(4) > .woocommerce-table__product-name > a').should('contain', produtos[0].produto4,
            produtos[0].tamanho4,
            produtos[0].cor4,
            produtos[0].quantidade4)

    });


})