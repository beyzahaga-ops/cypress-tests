import login from "../pages/login";

import home from "../pages/home";

describe("login ve home sayfası", () => {

    it("tc04 login ve home sayfası", () => {
        
    login.navigateUrl();
    login.checkEmailField("user888@gmail.com");
    login.checkPasswordField("1234567890");
    login.checkloginButton('.next-1jphuq5');
    
    cy.wait(5000);

    home.clickNavigationMenu('.next-7afvtf');
    home.clickLogoutButton('.next-bve2vl');
    
    })

    
    });