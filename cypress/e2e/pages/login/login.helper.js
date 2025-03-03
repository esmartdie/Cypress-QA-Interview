import { LoginElements } from "./login.elements";

export class LoginHelper {

    static insertUsername(username) {
      LoginElements.elements.username
            .should("be.visible")
            .clear()
            .type(username, { force: true })
            .should("have.value", username);
    }

    static insertPassword(password) {
      LoginElements.elements.password
            .should("be.visible")
            .clear()
            .type(password, { force: true })
            .should("have.value", password);
    }
  
    static clickOnLoginButton() {
      LoginElements.elements.loginButton
            .should("be.visible")
            .and("not.be.disabled")
            .click({ force: true });
    }
}