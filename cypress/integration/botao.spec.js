/// <reference types="cypress" />

describe('Teste de botões', () => {
    it('Validar botão ao clicar', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/botoes");
        cy.get('[id="teste"]').click();
        cy.get("#div1 > h5").should("have.text", "Você Clicou no Botão!");
    });
    it('Validar segundo botão ao clicar', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/botoes");
        cy.get('[class="material-icons right"]').click();
        cy.get("#div4 > h5").should("have.text", "Você Clicou no Botão!");
    });
    it('Validar nome e sobrenome', () => {
        cy.visit("https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield");
        cy.get('[id="first_name"]').click().type("Giordano").should("have.value", "Giordano");
        cy.get('[id="last_name"]').click().type("Palmezano").should("have.value", "Palmezano");
    });
});