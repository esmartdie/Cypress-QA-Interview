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
        SignUpElements.elements.signUpButton.click();
    }
  }
  