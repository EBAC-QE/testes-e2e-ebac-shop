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


    it('Login usando fixture', () => {
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')
    });



});
it('Deve adicionar produtos ao carrinho - Usando o comando customizado', () => {
    cy.addProdutos('Argus All-Weather Tank', 'M', 'Gray', 1)

});

it('Deve adicionar produtos ao carrinho - Usando o comando customizado', () => {
    cy.addProdutos('Aether Gym Pant', '36', 'Blue', 2)


});

it('Deve adicionar produtos ao carrinho - Usando o comando customizado', () => {
    cy.addProdutos('Ajax Full-Zip Sweatshirt', 'XS', 'Green', 4)


});


