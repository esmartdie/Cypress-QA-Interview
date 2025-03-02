import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { CommonPageHelper } from '../../pages/common-page/common-page.helper';
import { SignUpHelper } from '../../pages/sign-up/sign-up.helper';
import { ApiInterceptorHelper } from "../../utils/api-interceptor.helper";
import { UserDataHelper } from '../../utils/user-data.helper';

const user = UserDataHelper.generateUserData();
var signUpAlert = "";

When('They go to the sign-up page', () => {
    CommonPageHelper.clickOnSignUpOption();
});
  
When('They enter valid registration details', () => {
    SignUpHelper.insertUsername(user.username);
    SignUpHelper.insertUsername(user.password);
});

When('They submit the form', () => {
    signUpAlert=ApiInterceptorHelper.ApiInterceptorHelper("POST","https://api.demoblaze.com/signup","postSignUpApi")
    SignUpHelper.clickOnSignUpButton();
});

Then('The account should be created successfully', () => {
    //SignUpHelper.confirmationMessage();
    ApiInterceptorHelper.confirmationMessage("signupAlert",signUpAlert,"Sign up successful.")
});

Then('They should see the username on the header', () => {
    CommonPageHelper.verifySignedUser(username);
});

Then('They log out', () => {
    CommonPageHelper.clickOnLogoutOption();
});

Then('They expect the log in button in the header', () => {
    CommonPageHelper.verifyLoginButtonExits();
});

  



