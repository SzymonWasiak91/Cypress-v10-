/// <reference types="Cypress" />

describe("Automation test store",()=>{
    it.only("Automation test for contact us form",()=>{
        cy.visit("https://www.automationteststore.com/");
        //dodanie $ sprawia że szuka tekstu na końcu hrefa
        cy.get("a[href$='contact']").click();
        cy.get('#ContactUsFrm_first_name').type("Szymon");
        cy.get('#ContactUsFrm_email').type("test@wp.pl");
        cy.get('#ContactUsFrm_enquiry').type("What is your favorite framework?") 
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should("have.text","Your enquiry has been successfully sent to the store owner!")
    })
    it("Automation test for contact us form with Xpath selectors",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.xpath("//a[contains(@href,'contact')]").click();
       
    })
})