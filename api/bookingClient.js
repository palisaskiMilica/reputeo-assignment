export async function createBooking(request, bookingData) {
  return await request.post("/booking", {
    data: bookingData,
  });
}

export async function getBooking(request, bookingId) {
  return await request.get(`/booking/${bookingId}`);
}

export async function updateBooking(request, bookingId, token, bookingData) {
  return await request.put(`/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`,
    },
    data: bookingData,
  });
}

export async function partialUpdateBooking(request, bookingId, token, bookingData) {
  return await request.patch(`/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`,
    },
    data: bookingData,
  });
}