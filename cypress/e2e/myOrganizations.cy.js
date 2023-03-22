/// <refrence types="Cypress" />

import { faker } from "@faker-js/faker"
import { loginPage } from "../page_object/loginPage";
import { myOrganizationsPage } from "../page_object/myOrganizationsPage";
import { myBoard } from '../page_object/myBoard';

const randomBoardTitle = faker.lorem.words();

describe("My organization tests", () => {
    before("Visit my organizations page", () => {
        cy.visit("/login")
        loginPage.login(Cypress.env("testUserEmail"), Cypress.env("testUserPassword"));
        cy.url().should("include", "/my-organizations");

        
    });

    it("Add new board", () => {
       myOrganizationsPage.addOrganizationButton.click();
       myOrganizationsPage.addOrganization(randomBoardTitle);
       myBoard.boardButton.click();
       myBoard.addBoard(randomBoardTitle);
    });

});