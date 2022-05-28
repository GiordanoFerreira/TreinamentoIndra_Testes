/// <reference types="cypress" />

describe('Teste de cadastro', () => {
    
    beforeEach(() => {
        cy.visit("https://automacaocombatista.herokuapp.com/users/new");
    });

    it('Fazer cadastro', () => {
        //cy.visit("https://automacaocombatista.herokuapp.com/users/new");
        cy.get(".tamanhodiv2 > h5").should("have.text", "Novo Usuário!!");
        
        cy.get('[id="user_name"]').should("be.visible").type("Giordano");
        cy.get('[id="user_lastname"]').should("be.visible").type("Palmezano");
        cy.get('[id="user_email"]').should("be.visible").type("giordanopalmezano@gmail.com");
        cy.get('[id="user_address"]').should("be.visible").type("teste_endereco");
        cy.get('[id="user_university"]').should("be.visible").type("iesp");
        cy.get('[id="user_profile"]').should("be.visible").type("testador");
        cy.get('[id="user_gender"]').should("be.visible").type("masculino");
        cy.get('[id="user_age"]').should("be.visible").type("19");
        
        cy.get('input[value="Criar"]').should("be.visible").click();
        
        cy.get('[id="notice"]').should('contain.text', "Usuário Criado com sucesso");
        
        cy.contains("p", "Nome").should("contain", "Giordano");
    });

    it("Criar usuario com dados vazio", () => {
        //cy.visit("https://automacaocombatista.herokuapp.com/users/new");
        cy.get(".tamanhodiv2 > h5").should("have.text", "Novo Usuário!!");

        cy.get('input[value="Criar"]').should("be.visible").click();

        cy.get("#error_explanation > h2")
          .should("contain", "errors proibiu que este usuário fosse salvo");
    });
});