import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["html"], ["list"]],
  use: {
    baseURL: "https://restful-booker.herokuapp.com",
  },
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
});