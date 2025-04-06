import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://qauto2.forstudy.space/",
    env: {
      email: "user2+manual@example.com", 
      password: "Abc12345"
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports-qauto2",
    overwrite: false,
    html: true,
    json: true,
  },
});

