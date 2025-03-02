import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { PlaceOrderHelper } from "../pages/place-order/place-order.helper";
import { CartHelper } from '../../pages/cart/cart.helper';
import { ConfirmationOrderHelper } from '../../pages/confirmation-order/confirmation-order.helper';


When('They remove the product from the cart', () => {
    CartHelper.clickOnDeleteButton();
});

Then('The cart should be empty', () => {
    CartHelper.verifiyTotalCartNoItemSelected();
});

When('They place the order', () => {
    CommonPageHelper.clickOnCartOption();
    PlaceOrderHelper.insertName(orderTestData.name);
    PlaceOrderHelper.insertCountry(orderTestData.country);
    PlaceOrderHelper.insertCity(orderTestData.city);
    PlaceOrderHelper.insertCreditCard(orderTestData.creditCard);
    PlaceOrderHelper.insertMonth(orderTestData.month);
    PlaceOrderHelper.insertYear(orderTestData.year);
    PlaceOrderHelper.clickOnAddToProductButton();
});

Then('They see the confirmation message', () => {
    ConfirmationOrderHelper.verifyPurchaseSuccessful();
    ConfirmationOrderHelper.verifyPurchaseDetails();
    ConfirmationOrderHelper.clickOnOKButton();
});
