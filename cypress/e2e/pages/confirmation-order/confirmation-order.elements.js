export class ConfirmationOrderElements{
    static get elements() {
        return {
            get purchaseSuccessCheckMark(){
                return cy.get('.sa-success')
            }, 
            get greetingMessage(){
                return cy.contains('h2', 'Thank you for your purchase!')
            }, 
            get purchaseInformation(){
                return cy.get('p.lead.text-muted').invoke('text');
            }, 
            get okButton(){
                return cy.contains('button', 'OK')
            }
        };
      }
}