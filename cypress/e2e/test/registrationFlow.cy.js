import { registerPage } from "../../pages/registerPage";
const registerPageObj = new registerPage();
import registrationFlow from "../../fixtures/registrationData.json"

describe("Verify Registration Flow",()=>{
    it("Check Registration Flow",()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        //registerPageObj.visitRegisterPage()
        registerPageObj.inputFirstName(registrationFlow.firstName)
        registerPageObj.inputLastName(registrationFlow.lastName)
        registerPageObj.inputEmail(registrationFlow.email)
        registerPageObj.inputTelephone(registrationFlow.telephone)
        registerPageObj.enterPassword(registrationFlow.password)
        registerPageObj.chooseSubscribe().check()
        registerPageObj.clickCheckbox().check()
        registerPageObj.clickToContinue()
        registerPageObj.verifyMessage()
    })
})