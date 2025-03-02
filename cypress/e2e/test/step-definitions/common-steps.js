import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import { CommonPageHelper } from '../../pages/common-page/common-page.helper';
import { SignUpHelper } from '../../pages/sign-up/sign-up.helper';
import { HomeHelper } from "../pages/home/home.helper";
import { ProductHelper } from "../pages/product/product.helper";
import { ApiInterceptorHelper } from "../../utils/api-interceptor.helper";
import { CartHelper } from '../../pages/cart/cart.helper';
import { UserDataHelper } from '../../utils/user-data.helper';

var productAddedAlert = "";
const producName = HomeConstants.testData.producName;
let userData; 

before(() => {
    UserDataHelper.getUserData().then((data) => {
        userData = data;
    });
});

Given('They visit the home page', () => {
    CommonPageHelper.navigateToTheApplication();
});
  
When('They log in using valid credentials', () => {
    CommonPageHelper.clickOnSignUpOption();
    SignUpHelper.insertUsername(userData.username);
    SignUpHelper.insertUsername(userData.password);
});

When('When They click on a product', () => {
    HomeHelper.clickOnProductName(producName);
});

When('They add a product to the cart', () => {
    productAddedAlert=ApiInterceptorHelper.ApiInterceptorHelper("POST","https://api.demoblaze.com/addtocart","postProductAddedApi")
    ProductHelper.clickOnAddToProductButton();
    ApiInterceptorHelper.confirmationMessage("productAlert",productAddedAlert,"Product added.")
});

When('They should see the product in the cart', () => {
    CommonPageHelper.clickOnCartOption();
    CartHelper.verifyProductCartAdded(producName);
});
  
