import { SignUpElements } from "./sign-up.elements";

export class SignUpHelper {

        static insertUsername(username){
        SignUpElements.elements.username.type(username);
    }

    static insertPassword(password){
        SignUpElements.elements.password.click();
        SignUpElements.elements.password.type(password);
    }

    static clickOnSignUpButton(){
        //cy.intercept("POST", "https://api.demoblaze.com/signup").as("postSignUpApi");
        SignUpElements.elements.signUpButton.click();
    }

    /*
    static confirmationMessage(){
        return cy.window().then((win) => {
            cy.stub(win, "alert").as("signupAlert");
        }).then(() => {
            cy.wait("@postSignUpApi"); 
            cy.get("@signupAlert").should("have.been.calledWith", "Sign up successful.");
        });
    }
    */

}