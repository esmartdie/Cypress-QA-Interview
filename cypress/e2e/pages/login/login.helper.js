import { LoginElements } from "./login.elements";

export class LoginHelper {
    static insertUsername(username) {
      LoginElements.elements.username.type(username);
    }
  
    static insertPassword(password) {
      LoginElements.elements.password.click();
      LoginElements.elements.password.type(password);
    }
  
    static clickOnLoginButton() {
      LoginElements.elements.loginButton.click();
    }
  }