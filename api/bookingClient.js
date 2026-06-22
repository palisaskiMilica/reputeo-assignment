export async function createBooking(request, bookingData) {
  return await request.post("/booking", {
    data: bookingData,
  });
}

export async function getBooking(request, bookingId) {
  return await request.get(`/booking/${bookingId}`);
}