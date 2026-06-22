import { test, expect } from "@playwright/test";
import { createToken } from "../api/authClient.js";

test.describe("Auth API", () => {
  test("health check - booking endpoint is available", async ({ request }) => {
    const response = await request.get("/booking");

    expect(response.ok()).toBeTruthy();
  });

  test("should create auth token", async ({ request }) => {
    const token = await createToken(request);

    expect(token).toBeDefined();
    expect(token.length).toBeGreaterThan(0);
  });

  test("should not create token with invalid credentials", async ({ request }) => {
    const response = await request.post("/auth", {
      data: {
        username: "invalid",
        password: "invalid",
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.reason).toBe("Bad credentials");
  });
});