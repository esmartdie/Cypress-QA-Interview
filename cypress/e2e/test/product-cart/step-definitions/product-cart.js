import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPageHelper } from "../../../pages/common-page/common-page.helper";  
import { CartHelper } from "../../../pages/cart/cart.helper";
import { PlaceOrderHelper } from "../../../pages/place-order/place-order.helper";
import { ConfirmationOrderHelper } from "../../../pages/confirmation-order/confirmation-order.helper";
import { PlaceOrderConstants } from "../../../pages/place-order/place-order.constants";

const orderTestData = PlaceOrderConstants.testData;

When('They remove the product from the cart', () => {
    CartHelper.clickOnDeleteButton();
});

Then('The cart should be empty', () => {
    CartHelper.verifiyTotalCartNoItemSelected();
});

When('They place the order', () => {
    CartHelper.clickOnPlaceOrderButton();
    PlaceOrderHelper.insertName(orderTestData.name);
    PlaceOrderHelper.insertCountry(orderTestData.country);
    PlaceOrderHelper.insertCity(orderTestData.city);
    PlaceOrderHelper.insertCreditCard(orderTestData.creditCard);
    PlaceOrderHelper.insertMonth(orderTestData.month);
    PlaceOrderHelper.insertYear(orderTestData.year);
    PlaceOrderHelper.clickOnPurchaseButton();
    
});

Then('They see the confirmation message', () => {
    ConfirmationOrderHelper.verifyPurchaseSuccessful();
    ConfirmationOrderHelper.clickOnOKButton();
});
