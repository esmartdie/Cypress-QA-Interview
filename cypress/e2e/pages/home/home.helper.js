import { HomeElements } from './home.elements';

export class HomeHelper {
  static clickOnProductName(productName) {
    HomeElements.elements.productLink(productName).click();
  }
}
