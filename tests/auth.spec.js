import { test, expect } from "@playwright/test";

test("health check - booking endpoint is available", async ({ request }) => {
  const response = await request.get("https://restful-booker.herokuapp.com/booking");

  expect(response.ok()).toBeTruthy();
});