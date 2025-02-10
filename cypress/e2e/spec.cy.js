describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("", () => {});

  it("displays the header correctly", () => {
    cy.contains("Simple Todo App");
    cy.contains("Please add to-dos item(s) through the input field");
  });

  it("adds a new todo", () => {
    cy.get(".input-text").type("New Task");
    cy.get(".input-submit").click();

    cy.contains("New Task");
  });
  it("edits a todo item", () => {
    cy.get(".input-text").type("Task to edit");
    cy.get(".input-submit").click();

    cy.contains("Task to edit")
      .parent()
      .within(() => {
        cy.contains("Edit").click();
      });

    cy.get("input.input-edit").clear().type("Task updated!");

    cy.contains("Save").click();

    cy.contains("Task updated!");
  });
  it("move an item correctly", () => {
    cy.get(".input-text").type("Task to move");
    cy.get(".input-submit").click();

    cy.contains("Task to move")
      .parent()
      .within(() => {
        cy.contains("Edit").click();
      });

    cy.get("select").select("done");
    cy.contains("Save").click();

    cy.contains("Task to move")
      .should("have.css", "text-decoration")
      .then((textDecoration) => {
        textDecoration === "line-through";
      });
  });
  it("deletes a todo", () => {
    cy.get(".input-text").type("Task to delete");
    cy.get(".input-submit").click();

    cy.contains("Task to delete")
      .parent()
      .within(() => {
        cy.contains("Delete").click();
      });

    cy.contains("Task to delete").should("not.exist");
  });
});
