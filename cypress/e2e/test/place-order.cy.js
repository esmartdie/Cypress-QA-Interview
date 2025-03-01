import { CartHelper } from "../pages/cart/cart.helper";
import { CommonPageHelper } from "../pages/common-page/common-page.helper"
import { HomeHelper } from "../pages/home/home.helper";
import { LoginHelper } from "../pages/login/login.helper";
import { PlaceOrderConstants } from "../pages/place-order/place-order.constants";
import { PlaceOrderHelper } from "../pages/place-order/place-order.helper";
import { ProductHelper } from "../pages/product/product.helper";
import { SignUpConstants } from "../pages/sign-up/sign-up.constants";
import { SignUpHelper } from "../pages/sign-up/sign-up.helper";


describe("Place order", ()=>{
    it("Place order with newly created user account", ()=> {
        const username = CommonPageHelper.generateRandomString();
        const password = CommonPageHelper.generateRandomString();
        const producName = HomeConstants.testData.producName;
        const orderTestData = PlaceOrderConstants.testData;

        CommonPageHelper.navigateToTheApplication();
        CommonPageHelper.clickOnSignUpOption();
        SignUpHelper.insertUsername(username);
        SignUpHelper.insertUsername(password);
        SignUpHelper.clickOnSignUpButton();

        CommonPageHelper.clickOnLoginOption();
        LoginHelper.insertUsername(username);
        LoginHelper.insertPassword(password);
        LoginHelper.clickOnLoginButton();
        CommonPageHelper.verifySignedUser(username);
        
        CommonPageHelper.clickOnHomePage();
        HomeHelper.clickOnProductName(producName);
        ProductHelper.clickOnAddToProductButton();

        CommonPageHelper.clickOnCartOption();
        CartHelper.clickOnPlaceOrderButton();

        PlaceOrderHelper.insertName(orderTestData.name);
        PlaceOrderHelper.insertCountry(orderTestData.country);
        PlaceOrderHelper.insertCity(orderTestData.city);
        PlaceOrderHelper.insertCreditCard(orderTestData.creditCard);
        PlaceOrderHelper.insertMonth(orderTestData.month);
        PlaceOrderHelper.insertYear(orderTestData.year);
        PlaceOrderHelper.clickOnAddToProductButton();
        
        cy.wait(10000)
    });
})
