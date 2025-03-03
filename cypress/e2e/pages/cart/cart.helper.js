import { CartElements } from "./cart.elements";

export class CartHelper {
  static clickOnPlaceOrderButton() {
    CartElements.elements.placeOrderButton.click();
  }

  static verifyProductCartAdded(productName){
    CartElements.elements.productCartRow.should("be.visible").and("have.text", productName);
  }

  static clickOnDeleteButton(){
    CartElements.elements.deleteButton.click();
  }

  static verifiyTotalCartNoItemSelected(){
    CartElements.elements.totalOrder.should("be.empty");
  }

}

