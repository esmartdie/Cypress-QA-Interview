const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config, { platform: "node", external: ["path"] })],
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
    baseUrl: "https://www.demoblaze.com/",
    defaultCommandTimeout: 10000,
  },
});
