import { CartElements } from "./cart.elements";

export class CartHelper {
  static clickOnPlaceOrderButton() {
    CartElements.elements.placeOrderButton.click();
  }

  static verifyProductCartAdded(productName){
    CartElements.elements.productCartRow(productName).should('exist');
  }

  static clickOnDeleteButton(){
    CartElements.elements.deleteButton.click();
  }

  static verifiyTotalCartNoItemSelected(){
    CartElements.elements.totalOrder.should("be.empty");
  }

}

