import { loginPage } from "../../pages/loginPage";
const loginPageObj = new loginPage();
import loginData from "../../fixtures/loginData.json";

describe("Verify login Flow",()=>{
    
    before(()=>{
        cy.Login(loginData.Login.email,loginData.Login.password)
    })
   
    it("Test Login functionality",()=>{
        loginPageObj.searchProduct(loginData.Product.productName)
        loginPageObj.addToCart()
        loginPageObj.verifySuccessMsg().should('contain',loginData.Msg.successMessage)
    })
})