export class SignUpElements {
  static get elements() {
    return {
      get username() {
        return cy.get("input#sign-username");
      },

      get password() {
        return cy.get("input#sign-password");
      },

      get signUpButton() {
        return cy.contains("button", "Sign up");
      },
    };
  }
}