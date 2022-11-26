/// <reference types="Cypress" />

describe("Test contact us page / form", ()=>{
    it("Should be able to submit a succesfull submission contact us form - possitive TC", ()=>{
        //cypress code
        // cy.visit("http://www.webdriveruniversity.com/")
        // cy.get("#contact-us").click()
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get("input[name='first_name']").type("Szymon");
        cy.get("input[name='last_name']").type("Tester");
        cy.get("input[name='email']").type("test@wp.pl");
        cy.get("[name='message']").type("Some example text");
        cy.get("[value='SUBMIT']").click();
    })
    it("Should not be able to send contac us form page - negative TC", ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get("input[name='first_name']").type("Michal");
        cy.get("input[name='last_name']").type("Programista");
        cy.get("input[name='email']").type(" ");
        cy.get("[name='message']").type("Some example comment content");
        cy.get("[value='SUBMIT']").click();
        
    })
} )