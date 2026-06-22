import { test, expect } from "@playwright/test";
import { validBooking } from "../data/bookingData.js";
import { createBooking, getBooking } from "../api/bookingClient.js";

test("should create booking", async ({ request }) => {
  const response = await createBooking(request, validBooking());

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.bookingid).toBeDefined();
});

test("should create and retrieve booking", async ({ request }) => {
  const createResponse = await createBooking(request, validBooking());

  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;

  const getResponse = await getBooking(request, bookingId);

  const booking = await getResponse.json();

  expect(booking.firstname).toBe("Milica");
  expect(booking.lastname).toBe("Palisaski");
});