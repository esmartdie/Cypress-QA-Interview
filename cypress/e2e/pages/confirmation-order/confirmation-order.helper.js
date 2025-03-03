import { ConfirmationOrderElements } from "./confirmation-order.elements";

export class ConfirmationOrderHelper {
  static clickOnOKButton(){
    ConfirmationOrderElements.elements.okButton.click();
  }

  static verifyPurchaseSuccessful(){
    ConfirmationOrderElements.elements.purchaseSuccessCheckMark.should('exist');
    ConfirmationOrderElements.elements.greetingMessage.should('exist');
    ConfirmationOrderElements.elements.purchaseInformation.should('exist');
  }

}
