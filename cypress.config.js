const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: false, // Disable the support file
    specPattern: 'cypress/{e2e,unit}/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // Add any setup or plugin logic here
    },
  },
});
