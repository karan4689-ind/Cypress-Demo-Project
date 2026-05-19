const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "h6yg6x",

  e2e: {
    experimentalPromptCommand: true,
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  env: {
    URL : "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  }  
  },
});
