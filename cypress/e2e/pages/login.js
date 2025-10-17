class login{

//bu method ilgili url'e gider.

navigateUrl(){
    cy.visit('https://www.edu.goit.global/account/login');
}

//bu method email alanının kontrolünü sağlar.
checkEmailField(){
    cy.get('#user_email').type("user888@gmail.com");

}

//bu method password alanının kontrolünü sağlar.
checkPasswordField(){
    cy.get('#user_password').type("1234567890");
}

//bu method login butonunun kontrolünü sağlar.
checkloginButton(){
    cy.get('.next-1jphuq5').click({multiple: true});
}

}

export default new login();