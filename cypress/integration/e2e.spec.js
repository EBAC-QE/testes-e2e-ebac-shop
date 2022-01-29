/// <reference types="cypress" />

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

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        it('Deve adicionar produtos ao carrinho - Usando o comando customizado', () => {
            cy.addProdutos('Argus All-Weather Tank', 'M', 'Gray', 1)

        });

        it('Deve adicionar produtos ao carrinho - Usando o comando customizado', () => {
            cy.addProdutos('Aether Gym Pant', '36', 'Blue', 2)


        });

        it('Deve adicionar produtos ao carrinho - Usando o comando customizado', () => {
            cy.addProdutos('Ajax Full-Zip Sweatshirt', 'XS', 'Green', 4)


        });
    });


})