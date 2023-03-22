const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com",
    env: {
      testUserEmail: "testtest123@gmail.com",
      testUserPassword: "nadapanic16",
      apiUrl: "https://cypress-api.vivifyscrum-stage.com/api/v2"
   }
  },
});
