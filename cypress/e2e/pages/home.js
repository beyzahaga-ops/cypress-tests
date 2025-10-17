class home{


    clickNavigationMenu(){
    cy.get('.next-7afvtf').click({multiple: true});
}

    clickLogoutButton(){
    cy.get('.next-bve2vl').click({multiple: true});
}

}

export default new home();