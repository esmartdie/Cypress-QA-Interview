import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper{
    static navigateToTheApplication(){
        cy.visit(CommonPageConstants.applicationUrl);
    }

    static clickOnSignUpOption(){
        CommonPageElements.topMenu.signUp.click();
    }

    static clickOnLoginOption(){
        CommonPageElements.topMenu.login.click();
    }

    static verifySignedUser(username){
        CommonPageElements.topMenu.nameOfUser.should("contain", `Welcome ${username}`);
    }
  

    static clickOnHomePage(){
        CommonPageConstants.topMenu.clickOnHomePage.click();
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
    }

    static clickOnLogoutOption(){
        CommonPageElements.topMenu.logout.click();
    }
    
    static verifyLoginButtonExits(){
        CommonPageElements.topMenu.login.should('be.visible');        
    }
}