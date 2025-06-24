describe("Adopet", () => {
  it("visitar Adopet", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
  });

  it("Visitar Adopet e clicar em Cadastrar", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.contains("a", "Cadastrar").click();
  });

  it("Preencher as informações de Cadastro", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.contains("a", "Cadastrar").click();
    cy.get('input[name="nome"]').type("João");
    cy.get('input[name="email"]').type("joao@hotmail.com");
    cy.get('input[name="password"]').type("Joao123");
    cy.get('input[name="confirm_password"]').type("Joao123");
  });

  it("Preencher informações de Cadastro e clicar em Cadastrar", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.contains("a", "Cadastrar").click();
    cy.get('input[name="nome"]').type("João");
    cy.get('input[name="email"]').type("joaovolponi@hotmail.com");
    cy.get('input[name="password"]').type("Joao123");
    cy.get('input[name="confirm_password"]').type("Joao123");
    cy.contains("button", "Cadastrar").click();
  });
});
