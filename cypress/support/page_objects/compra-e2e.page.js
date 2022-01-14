class compraE2e {

    compraE2e(produto1, tamanho1, cor1, quantidade1, produto2, tamanho2, cor2, quantidade2, produto3, tamanho3, cor3, quantidade3, produto4, tamanho4, cor4, quantidade4, usuario, senha) {
        cy.addProduto(produto1, tamanho1, cor1, quantidade1)
        cy.addProduto(produto2, tamanho2, cor2, quantidade2)
        cy.addProduto(produto3, tamanho3, cor3, quantidade3)
        cy.addProduto(produto4, tamanho4, cor4, quantidade4)

      /*  //Add produto 1
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]').contains(prod1).click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(qtd1)
        cy.get('.single_add_to_cart_button').click()
                
        //Add produto 2
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').contains(prod2).click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(qtd2)
        cy.get('.single_add_to_cart_button').click() 

        //Add produto 3
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').contains(prod3).click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(qtd3)
        cy.get('.single_add_to_cart_button').click()
        
        //Add produto 4
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').contains(prod4).click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(qtd4)
        cy.get('.single_add_to_cart_button').click()

        */

        //Acessa checkou via carrinho de compra e faz o login
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.showlogin').click()
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-button').click()

        //Checkout
        cy.get('#terms').check()
        cy.get('#place_order').click({ force: true }) 
    }



     
}

export default new compraE2e()