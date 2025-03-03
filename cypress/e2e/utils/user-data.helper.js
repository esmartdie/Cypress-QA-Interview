export class UserDataHelper {
    static generateUserData() {
        return new Cypress.Promise((resolve) => {
            const username = `user_${UserDataHelper.generateRandomString(6)}`;
            const password = UserDataHelper.generateSecurePassword();
            const userData = { username, password };

            cy.writeFile('cypress/fixtures/userCredentials.json', userData).then(() => {
                Cypress.env('user', userData);
                resolve(userData);
            });
        });
    }

    static getUserData() {
        return cy.fixture('userCredentials.json').then((data) => {
            if (!data || !data.username || !data.password) {
                throw new Error("El archivo userCredentials.json no contiene username o password.");
            }
            return data;
        });
    }
    

    static generateRandomString(length = 6) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    }

    static generateSecurePassword() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        return Array.from({ length: 12 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    }
}
