describe('Prompt Test Case', () => {
    it('Verify the prompt alert', () => {
        // cy.prompt([

        //     'Visit https://naveenautomationlabs.com/opencart/index.php?route=account/login',

        //     'Enter username as raj123@xyz.com in Username Field',

        //     'Enter password as #Learn123 in the password field',

        //     'Click on the Login Button',

        //     'Verify My Account text is visible on the page'

        // ])
        // Prompt step 1: Visit https://naveenautomationlabs.com/opencart/index.php?route=account/login
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

        // Prompt step 2: Enter username as raj123@xyz.com in Username Field
        cy.get("[name=\"email\"]").type("raj123@xyz.com")

        // Prompt step 3: Enter password as #Learn123 in the password field
        cy.get("[name=\"password\"]").type("#Learn123")

        // Prompt step 4: Click on the Login Button
        cy.get("#content input.btn").click()

        // Prompt step 5: Verify My Account text is visible on the page
        cy.get("#content h2:nth-child(1)").should("be.visible")
    })
})