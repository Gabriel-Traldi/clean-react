import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    fixturesFolder: false,
    supportFile: false,
    specPattern: 'src/main/test/cypress/integration/**/*.{ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
