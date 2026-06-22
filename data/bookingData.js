export const validBooking = () => ({
  firstname: "Milica",
  lastname: "Palisaski",
  totalprice: 450,
  depositpaid: true,
  bookingdates: {
    checkin: "2026-07-01",
    checkout: "2026-07-05",
  },
  additionalneeds: "SPA",
});

export const bookingWithInvalidDateRange = () => ({
  firstname: "Milica",
  lastname: "Palisaski",
  totalprice: 450,
  depositpaid: true,
  bookingdates: {
    checkin: "2026-08-10",
    checkout: "2026-08-01",
  },
  additionalneeds: "SPA",
});

export const bookingWithNoDeposit = () => ({
  firstname: "Milica",
  lastname: "Palisaski",
  totalprice: 450,
  depositpaid: false,
  bookingdates: {
    checkin: "2026-08-01",
    checkout: "2026-08-05",
  },
  additionalneeds: "SPA",
});

export const bookingWithNegativePrice = () => ({
  firstname: "Milica",
  lastname: "Palisaski",
  totalprice: -100,
  depositpaid: true,
  bookingdates: {
    checkin: "2026-08-01",
    checkout: "2026-08-05",
  },
  additionalneeds: "SPA",
});