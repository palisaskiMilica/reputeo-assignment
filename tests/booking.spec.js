import { test, expect } from "@playwright/test";
import {
  validBooking,
} from "../data/bookingData.js";

import {
  createBooking,
  getBooking,
  updateBooking,
  partialUpdateBooking,
  deleteBooking,
} from "../api/bookingClient.js";

import { createAuthenticatedBooking } from "../helpers/bookingHelper.js";

test("should create booking", async ({ request }) => {
  const response = await createBooking(request, validBooking());

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.bookingid).toBeDefined();
});

test("should create and retrieve booking", async ({ request }) => {
  const createResponse = await createBooking(request, validBooking());

  expect(createResponse.status()).toBe(200);

  const createBody = await createResponse.json();
  const bookingId = createBody.bookingid;

  const getResponse = await getBooking(request, bookingId);

  expect(getResponse.status()).toBe(200);

  const booking = await getResponse.json();

  expect(booking.firstname).toBe("Milica");
  expect(booking.lastname).toBe("Palisaski");
  expect(booking.totalprice).toBe(450);
  expect(booking.depositpaid).toBe(true);
});

test("should update booking", async ({ request }) => {
  const { bookingId, token } = await createAuthenticatedBooking(request);

  const updatedBooking = {
    firstname: "Lazar",
    lastname: "Palisaski",
    totalprice: 700,
    depositpaid: true,
    bookingdates: {
      checkin: "2026-09-01",
      checkout: "2026-09-07",
    },
    additionalneeds: "Dinner",
  };

  const response = await updateBooking(
    request,
    bookingId,
    token,
    updatedBooking
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.firstname).toBe("Lazar");
  expect(body.lastname).toBe("Palisaski");
  expect(body.totalprice).toBe(700);
  expect(body.depositpaid).toBe(true);
  expect(body.bookingdates.checkin).toBe("2026-09-01");
  expect(body.bookingdates.checkout).toBe("2026-09-07");
  expect(body.additionalneeds).toBe("Dinner");
});

test("should partially update booking", async ({ request }) => {
  const { bookingId, token } = await createAuthenticatedBooking(request);

  const response = await partialUpdateBooking(
    request,
    bookingId,
    token,
    {
      firstname: "Radmila",
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.firstname).toBe("Radmila");
  expect(body.lastname).toBe("Palisaski");
  expect(body.totalprice).toBe(450);
  expect(body.depositpaid).toBe(true);
});

test("should not update booking without token", async ({ request }) => {
  const createResponse = await createBooking(
    request,
    validBooking()
  );

  const createBody = await createResponse.json();

  const response = await request.put(
    `/booking/${createBody.bookingid}`,
    {
      data: validBooking(),
    }
  );

  expect(response.status()).toBe(403);
});

test("should not delete booking without token", async ({ request }) => {
  const createResponse = await createBooking(
    request,
    validBooking()
  );

  const createBody = await createResponse.json();

  const response = await request.delete(
    `/booking/${createBody.bookingid}`
  );

  expect(response.status()).toBe(403);
});