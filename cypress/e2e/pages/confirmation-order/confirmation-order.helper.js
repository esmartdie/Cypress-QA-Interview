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

  static verifyPurchaseDetails(details){
    ConfirmationOrderElements.elements.purchaseInformation.then((text) => {
        const idMatch = text.match(/Id:\s*(\d+)/);
        const amountMatch = text.match(/Amount:\s*(\d+)\s*USD/);
        const cardNumberMatch = text.match(/Card Number:\s*(.+)/);
        const nameMatch = text.match(/Name:\s*(.+)/);
        const dateMatch = text.match(/Date:\s*(\d{1,2}\/\d{1,2}\/\d{4})/);
    
        const extractedDetails = {
          id: idMatch ? idMatch[1] : null,
          amount: amountMatch ? amountMatch[1] : null,
          creditCard: cardNumberMatch ? cardNumberMatch[1].trim() : null,
          name: nameMatch ? nameMatch[1].trim() : null,
          date: dateMatch ? dateMatch[1] : null,
        };

        expect(extractedDetails.name).to.equal(details.name);
        expect(extractedDetails.creditCard).to.equal(details.creditCard);
      });
  }
}
