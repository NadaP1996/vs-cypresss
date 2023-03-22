/// <refrence types="Cypress" />

import { loginPage } from "../page_object/loginPage";
import { myBoard } from "../page_object/myBoard";
import { myOrganizationsPage } from "../page_object/myOrganizationsPage";

describe("delete board test", () => {
  before("visit login page", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("testUserEmail"), Cypress.env("testUserPassword"));
    cy.url().should("include", "/my-organizations");
        myOrganizationsPage.addOrganizationButton.click();
       myOrganizationsPage.addOrganization("hhgfggf");
       myBoard.boardButton.click();
       myBoard.addBoard("jjfjjff");
  });

  it("Delete board", () => {
    cy.get('.vs-c-list > li').last().click();
    cy.get("button").contains("Delete").click();
    cy.get('.el-input__inner').eq(0).should('be.visible').type("nadapanic16");
    cy.get("button").contains("Yes").click();
  });

});