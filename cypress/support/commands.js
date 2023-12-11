


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addProdutos' , (produto, tamanho, cor, quantidade) => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="product-block grid"]')
    .contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho ).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('addProdutos1' , (produto, tamanho, cor, quantidade)=> {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
    .contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('addProdutos2', (produto, tamanho, cor , quantidade)=>{
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
    .contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

})


Cypress.Commands.add('addProdutos3', (produto, tamanho, cor, quantidade)=>{
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(3) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
    .contains(produto).click()
    cy.get('.button-variable-item-'+ tamanho).click()
    cy.get('.button-variable-item-'+ cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
})


