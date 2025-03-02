export class UserDataHelper {

    static generateUserData() {
        const username = `user_${this.generateRandomString(6)}`;
        const password = this.generateSecurePassword(); 

        const userData = { username, password };

        cy.writeFile('cypress/fixtures/userCredentials.json', userData);

        Cypress.env('user', userData);

        return userData;
    }

    static getUserData() {
        return cy.fixture('userCredentials.json');
    }

    static generateRandomString(length = 10) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    }

    static generateSecurePassword() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        return Array.from({ length: 12 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    }
}
