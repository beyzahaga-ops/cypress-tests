describe('odevv2', function(){

    it("tc03 test", function(){
    cy.visit('https://www.edu.goit.global/account/login');
    cy.get('#user_email').type("user888@gmail.com");
    cy.get('#user_password').type("1234567890");
    cy.get('.next-1jphuq5').click({multiple: true});
    cy.wait(6000);
    cy.get('.next-7afvtf').click({multiple: true});
    cy.wait(6000);
    cy.get('.next-bve2vl').click({multiple: true});
    })
    })