export class CartElements {
    static get elements() {
      return {
        get placeOrderButton() {
          return cy.get('button[data-toggle="modal"]');
        },
        get productCartRow(){
          return cy.contains('td', 'Samsung galaxy s6').eq(0);
        }, 
        get deleteButton(){
          return cy.contains('a', 'Delete')
        }, 
        get totalOrder(){
          return cy.get('h3#totalp')
        }
      };
    }
  }
  