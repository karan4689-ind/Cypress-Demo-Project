export class registerPage{
    weblocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        subscribeButton: 'input[type="radio"]',
        confirmCheckbox: 'input[type="checkbox"]',
        continueButton: '.btn.btn-primary',
        msg: 'Your Account Has Been Created!'
    }

    /*visitRegisterPage(){
        cy.visit(Cypress.env("URL"))
    }*/

    inputFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName)
    }

    inputLastName(LName){
        cy.get(this.weblocators.lastName).type(LName)
    }
    
    inputEmail(Mail){
        cy.get(this.weblocators.email).type(Mail)
    }

    inputTelephone(Phone){
        cy.get(this.weblocators.telephone).type(Phone)
    }

    enterPassword(Password){
        cy.get(this.weblocators.password).type(Password)
        cy.get(this.weblocators.confirmPassword).type(Password)
    }

    chooseSubscribe(){
        return cy.get(this.weblocators.subscribeButton).eq(1)
    }

    clickCheckbox(){
        return cy.get(this.weblocators.confirmCheckbox)
    }

    clickToContinue(){
        cy.get(this.weblocators.continueButton).click()
    }

    verifyMessage(){
        cy.contains(this.weblocators.msg)
    }
}