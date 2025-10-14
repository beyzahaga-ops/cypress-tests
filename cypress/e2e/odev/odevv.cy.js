describe('odevv1', function(){

    it("tc01 ilk test", function(){
    cy.visit('https://www.edu.goit.global/account/login');
    cy.get('#user_email').type("user888@gmail.com");
    cy.get('#user_password').type("1234567890");
    cy.get('.next-1jphuq5').click({multiple: true});
    cy.wait(6000);
    cy.get('#open-navigation-menu-mobile').click({multiple: true});
    cy.wait(6000);
    cy.get('.next-bve2vl').click({multiple: true});
    })


        it("tc02 ikinci test", function(){
    cy.login('testowyqa@qa.team', 'QA!automation-1');
    cy.get('#open-navigation-menu-mobile', { timeout: 10000}).should('be.visible').click({ force:true });
    cy.contains('Log out', { timeout: 10000 }).should('be.visible').click();
    cy.url().should('include', '/login');
    })


})