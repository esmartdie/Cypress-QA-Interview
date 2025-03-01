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
        CommonPageElements.topMenu.nameOfUser.should("contain", 'Welcome ${username}');
    }

    static clickOnHomePage(){
        CommonPageConstants.topMenu.clickOnHomePage.click();
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
    }

    static generateRandomString = (length = 10) => {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        
        return result;
    }; 
}