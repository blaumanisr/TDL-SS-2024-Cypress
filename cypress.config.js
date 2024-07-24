const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    baseUrl: 'https://coe-webstore.tdlbox.com/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      email: 'rudolfs.blaumanis@testdevlab.com',
      password: 'test123',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
