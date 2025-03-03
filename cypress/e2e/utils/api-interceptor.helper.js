export class ApiInterceptorHelper {

    static interceptApiMessage(httpMethod, url, aliasName) {
        const validMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
        const method = httpMethod.toUpperCase();

        if (!validMethods.includes(method)) {
            throw new Error(`Invalid HTTP method: ${method}. Accepted methods: ${validMethods.join(", ")}`);
        }

        cy.intercept(method, url).as(aliasName);

        return `${aliasName}`;
    }

    static confirmationMessage(alertAlias, apiAlias, expectedMessage) {
        cy.window().then((win) => {
            const alertStub = cy.stub(win, "alert").as(alertAlias);
        });
    
        cy.wait(`@${apiAlias}`);
    
        cy.get(`@${alertAlias}`).should("have.been.calledWith", expectedMessage);
    }    
}
