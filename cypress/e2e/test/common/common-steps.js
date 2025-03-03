import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPageHelper } from '../../pages/common-page/common-page.helper';
import { SignUpHelper } from '../../pages/sign-up/sign-up.helper';
import { HomeHelper } from '../../pages/home/home.helper';
import { ApiInterceptorHelper } from "../../utils/api-interceptor.helper";
import { CartHelper } from '../../pages/cart/cart.helper';
import { UserDataHelper } from '../../utils/user-data.helper';
import {ProductHelper } from '../../pages/product/product.helper';
import {HomeConstants} from "../../pages/home/home.constants";
import { LoginHelper } from "../../pages/login/login.helper";


var productAddedAlert = "";
const productName = HomeConstants.testData.productName;
let userData; 

beforeEach(() => {
    cy.visit("https://www.demoblaze.com");
    cy.reload();
});

Given('They visit the home page', () => {
    CommonPageHelper.navigateToTheApplication();
});
  
When('They log in using valid credentials', () => {
    UserDataHelper.getUserData().then((userData) => {
        CommonPageHelper.clickOnLoginOption();
        LoginHelper.insertUsername(userData.username);
        LoginHelper.insertPassword(userData.password);
        LoginHelper.clickOnLoginButton();
    });
});

When('They click on a product', () => {
    HomeHelper.clickOnProductName(productName);
});

When('They add a product to the cart', () => {
    productAddedAlert=ApiInterceptorHelper.interceptApiMessage("POST","https://api.demoblaze.com/addtocart","postProductAddedApi")
    ProductHelper.clickOnAddToProductButton();
    ApiInterceptorHelper.confirmationMessage("productAlert",productAddedAlert,"Product added.")
});

When('They should see the product in the cart', () => {
    CommonPageHelper.clickOnCartOption();
    CartHelper.verifyProductCartAdded(productName);
});