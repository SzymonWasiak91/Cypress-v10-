/// <reference types="Cypress" />

describe("Automation test store",()=>{
    it("Automation test for contact us form",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click();
        cy.get('#ContactUsFrm_first_name').type("Szymon");
        cy.get('#ContactUsFrm_email').type("test@wp.pl");
        cy.get('#ContactUsFrm_enquiry').type("What is your favorite framework?") 
        cy.get("button[title='Submit']").click();
    })
    it.only("Automation test for contact us form with Xpath selectors",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.xpath("//a[contains(@href,'contact')]").click();
        // cy.get('#ContactUsFrm_first_name').type("Szymon");
        // cy.get('#ContactUsFrm_email').type("test@wp.pl");
        // cy.get('#ContactUsFrm_enquiry').type("What is your favorite framework?") 
        // cy.get("button[title='Submit']").click();
    })
})