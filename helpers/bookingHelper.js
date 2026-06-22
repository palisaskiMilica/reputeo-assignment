import { createBooking } from "../api/bookingClient.js";
import { createToken } from "../api/authClient.js";
import { validBooking } from "../data/bookingData.js";

export async function createAuthenticatedBooking(request) {
  const createResponse = await createBooking(request, validBooking());
  const createBody = await createResponse.json();

  const token = await createToken(request);

  return {
    bookingId: createBody.bookingid,
    token,
  };
}