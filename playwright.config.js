import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  reporter: [["html"], ["list"]],
  use: {
    baseURL: "https://restful-booker.herokuapp.com",
  },
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
});