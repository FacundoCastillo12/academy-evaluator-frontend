describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");

    cy.get('[alt="Next.js Logo"]').should("be.visible");
  });
});
