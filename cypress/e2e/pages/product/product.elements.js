export class ProductElements {
    static get elements() {
      return {
        get addToCartButton() {
          return cy.contains('a', 'Add to cart');
        }
      };
    }
  }