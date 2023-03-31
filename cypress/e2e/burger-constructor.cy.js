describe("works burger-constructor", function () {
  beforeEach(function () {
    cy.viewport(1700, 1110);
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "/ingredients", { fixture: "ingredients.json" });
    cy.intercept("POST", "/login", { fixture: "login.json" }).as("postLogin");
    cy.intercept("GET", "/auth/user", { fixture: "user.json" });
    cy.intercept("POST", "makeOrder", { fixture: "order.json" }).as("postOrder");
  });

  it("should open, displaying elements and close ingredient modal", () => {
    cy.get(`[class^=render-ingredient_link`).first().click();
    cy.get(`[class^=modal_wrapper`).should("be.visible");
    cy.url().should("include", "/ingredients/:60d3b41abdacab0026a733c6");
    cy.get(`[class^=ingredient-details_image`).should(
      "have.attr",
      "src",
      "https://code.s3.yandex.net/react/code/bun-02.png"
    );
    cy.get(`[class^=ingredient-details_subtitle`).should(
      "have.text",
      "Краторная булка N-200i"
    );
    cy.get(`[id^=calories`).should("have.text", "420");
    cy.get(`[id^=proteins`).should("have.text", "80");
    cy.get(`[id^=fat`).should("have.text", "24");
    cy.get(`[id^=carbohydrates`).should("have.text", "53");
    cy.get(`[class^=modal_btn`).click();
    cy.get(`[class^=modal_wrapper`).should("not.exist");

    cy.get(`[class^=render-ingredient_link`).eq(9).click();
    cy.get(`[class^=modal_wrapper`).should("be.visible");
    cy.url().should("include", "/ingredients/:60d3b41abdacab0026a733cb");
    cy.get(`[class^=ingredient-details_image`).should(
        "have.attr",
        "src",
        "https://code.s3.yandex.net/react/code/meat-01.png"
      );
    cy.get(`[class^=ingredient-details_subtitle`).invoke('text').should('not.be.empty');
    cy.get(`[id^=calories`).invoke('text').should('not.be.empty');
    cy.get(`[id^=proteins`).invoke('text').should('not.be.empty');
    cy.get(`[id^=fat`).invoke('text').should('not.be.empty');
    cy.get(`[id^=carbohydrates`).invoke('text').should('not.be.empty');
    cy.get(`[class^=modal_btn`).click();
    cy.get(`[class^=modal_wrapper`).should("not.exist");
  });

  it("should login, dnd, open, displaying elements and close order", () => {
    cy.visit("http://localhost:3000/login");
    const email = "testtest@test.ru";
    const password = "testtest";
    cy.get("[id^=nameTest").type(email);
    cy.get("[id^=passwordTest").type(password);
    cy.get("button").contains("Войти").click();

    cy.get(`[id^=dragElement`).eq(1).trigger("mousedown").trigger("dragstart");
    cy.get(`[id^=dropContainer`).trigger("drop");
    cy.get(`[id^=dragElement`).eq(4).trigger("mousedown").trigger("dragstart");
    cy.get(`[id^=dropContainer`).trigger("drop");
    cy.get(`[id^=dragElement`).eq(5).trigger("mousedown").trigger("dragstart");
    cy.get(`[id^=dropContainer`).trigger("drop");
    cy.get(`[id^=dragElement`).eq(9).trigger("mousedown").trigger("dragstart");
    cy.get(`[id^=dropContainer`).trigger("drop");
    cy.get(`[id^=dragElement`).eq(10).trigger("mousedown").trigger("dragstart");
    cy.get(`[id^=dropContainer`).trigger("drop");
    cy.get(`[id^=dragElement`).eq(13).trigger("mousedown").trigger("dragstart");
    cy.get(`[id^=dropContainer`).trigger("drop");
    cy.get(`[id^=dragElement`).eq(14).trigger("mousedown").trigger("dragstart");
    cy.get(`[id^=dropContainer`).trigger("drop");

    cy.get("button").contains("Оформить заказ").click();
    cy.get(`[class^=modal_wrapper`).should("be.visible");
    cy.get(`[class^=preloader`).should("be.visible");
    cy.wait(16000);
    cy.get(`[id^=orderNumber`).should("be.visible").invoke('text').should('not.be.empty');
    cy.get(`[class^=modal_btn`).click();
    cy.get(`[class^=modal_wrapper`).should("not.exist");
  });
});
