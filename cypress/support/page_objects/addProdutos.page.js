class addProdutos {

    addProdutos(produto1, tamanho1, cor1, quantidade1, produto2, tamanho2, cor2, quantidade2, produto3, tamanho3, cor3, quantidade3, produto4, tamanho4, cor4, quantidade4, usuario, senha) {
        cy.addProduto(produto1, tamanho1, cor1, quantidade1)
        cy.addProduto(produto2, tamanho2, cor2, quantidade2)
        cy.addProduto(produto3, tamanho3, cor3, quantidade3)
        cy.addProduto(produto4, tamanho4, cor4, quantidade4)

    }

}

export default new addProdutos()