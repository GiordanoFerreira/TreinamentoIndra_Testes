/// <reference types="cypress" />

describe('Teste de cadastro', () => {
    it('Fazer cadastro', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/users/new");
        cy.get('[id="user_name"]').click().type("Giordano");
        cy.get('[id="user_lastname"]').click().type("Palmezano");
        cy.get('[id="user_email"]').click().type("giordanopalmezano@gmail.com");
        cy.get('[id="user_address"]').click().type("teste_endereco");
        cy.get('[id="user_university"]').click().type("iesp");
        cy.get('[id="user_profile"]').click().type("testador");
        cy.get('[id="user_gender"]').click().type("masculino");
        cy.get('[id="user_age"]').click().type("19");
        cy.get('[name="commit"]').click();
        cy.get('[id="notice"]').should('contain.text', "Usuário Criado com sucesso")
    });
});