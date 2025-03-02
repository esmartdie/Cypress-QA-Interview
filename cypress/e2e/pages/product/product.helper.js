import { ProductElements } from './product.elements';

export class ProductHelper {
  static clickOnAddToProductButton() {
    ProductElements.elements.addToCartButton.click();
  }

  static confirmationMessage(){
    return cy.window().then((win) => {
        cy.stub(win, "alert").as("alertStub");
    }).then(() => {
        cy.wait("@signupCall"); 
        cy.get("@alertStub").should("have.been.calledWith", "Sign up successful.");
    });
}
}
