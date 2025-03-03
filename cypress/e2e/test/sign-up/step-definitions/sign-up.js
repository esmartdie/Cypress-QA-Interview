import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPageHelper } from '../../../pages/common-page/common-page.helper';
import { SignUpHelper } from '../../../pages/sign-up/sign-up.helper';
import { ApiInterceptorHelper } from "../../../utils/api-interceptor.helper";
import { UserDataHelper } from '../../../utils/user-data.helper';

const user = UserDataHelper.generateUserData();
var signUpAlert = "";
let userData; 

before(() => {
    UserDataHelper.generateUserData().then((data) => {
        cy.wrap(data).as("userData"); 
    });
});

When('They go to the sign-up page', () => {
    CommonPageHelper.clickOnSignUpOption();
});

When("They enter valid registration details", () => {
    cy.get("@userData").then((user) => {
        expect(user).to.have.property("username");
        expect(user).to.have.property("password");

        SignUpHelper.insertUsername(user.username);
        SignUpHelper.insertPassword(user.password);
    });
});

When('They submit the form', () => {
    signUpAlert=ApiInterceptorHelper.interceptApiMessage("POST","https://api.demoblaze.com/signup","postSignUpApi")
    cy.log('Contenido de signupAlert:', signUpAlert);
    SignUpHelper.clickOnSignUpButton();
});


Then('The account should be created successfully', () => {
    ApiInterceptorHelper.confirmationMessage("signupAlert",signUpAlert,"Sign up successful.")
});


Then('They should see the username on the header', () => {
    UserDataHelper.getUserData().then((userData) => {
        CommonPageHelper.verifySignedUser(userData.username);
    });   
});



Then('They log out', () => {
    CommonPageHelper.clickOnLogoutOption();
});


Then('They expect the log in button in the header', () => {
    cy.wait(2000)
    CommonPageHelper.verifyLoginButtonExits();
});
