// define a URL da aplicação em deploy local
let url = "http://localhost:3000/";
describe("Teste de inclusão", () => {
  it("Adiciona um todo", () => {
    cy.visit(url);
    cy.contains("Nova meta").click();

    cy.url().should("include", "/adicionar");
    cy.get("[type=text]").type("meta adicionada pelo cypress");
    cy.get("[type=submit]").click();

    cy.url().should("eq", url);
    cy.contains(new RegExp("meta adicionada pelo cypress"));
  });
});
