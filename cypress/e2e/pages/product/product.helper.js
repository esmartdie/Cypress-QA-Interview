import { ProductElements } from './product.elements';

export class ProductHelper {
  static clickOnAddToProductButton() {
    ProductElements.elements.addToCartButton.click();
  }
}
