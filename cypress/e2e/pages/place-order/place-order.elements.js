export class PlaceOrderElements {
    static get elements() {
      return {
        get name() {
          return cy.get("input#name");
        },
        get country() {
          return cy.get("input#country");
        },
        get city() {
          return cy.get("input#city");
        },
        get creditCard() {
          return cy.get("input#card");
        },
        get month() {
          return cy.get("input#month");
        }, 
        get year(){
            return cy.get("input#year");
        },
        get purchaseButton(){
            return cy.contains('button', 'Purchase')
        }
      };
    }
  }
  