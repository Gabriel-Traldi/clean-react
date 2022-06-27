import { defineConfig } from "cypress";

const cypressTypeScriptPreprocessor = require('./src/main/test/cypress/plugins/cy-ts-preprocessor')


export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    fixturesFolder: false,
    supportFile: "src/main/test/cypress/support/index.js",
    specPattern: 'src/main/test/cypress/integration/**/*.{ts,tsx}',
    setupNodeEvents(on, config) {
        on('file:preprocessor', cypressTypeScriptPreprocessor)
    },
  },
});
