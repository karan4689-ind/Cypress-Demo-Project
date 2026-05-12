export class loginPage{
    weblocators = {
        searchBox:'.form-control.input-lg1',
        searchButton: '.btn.btn-default.btn-lg',
        successMsg: '.alert.alert-success.alert-dismissible'
    }

    searchProduct(PName){
        cy.get(this.weblocators.searchBox).type(PName)
        cy.get(this.weblocators.searchButton).click()
    }

    addToCart(){
        cy.contains("Add to Cart").eq(0).click()
    }

    verifySuccessMsg(){
        return cy.get(this.weblocators.successMsg)
    }
}