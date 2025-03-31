import { defineConfig } from "cypress";

export default defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },  
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
