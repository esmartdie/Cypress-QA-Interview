export class CommonPageElements{

    static get topMenu(){
        return {
            get signUp(){
                return cy.get('a[data-target="#signInModal"]')
            },
            get login(){
                return cy.get('a[data-target="#logInModal"]')
            },
            get nameOfUser(){
                return cy.get("#nameofuser");
            },
            get home(){
                return cy.contains("a", "Home");
            }, 
            get cart(){
                return cy.get('a#cartur');
            }, 
            get logout(){
                return cy.contains('a', 'Log out')
            }
        };
    }
}