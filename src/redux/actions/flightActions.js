import { SEARCH_FLIGHTS, SELECT_FLIGHT, MAKE_PAYMENT, CONFIRM_BOOKING } from '../types';

export const searchFlights = (searchParams) => async (dispatch) => {
    console.log(searchParams)
  // Simulate an API call to search for flights
  const flights = [
    { name: 'Indigo', from: searchParams.from, to: searchParams.to, date: searchParams.date, price: 5000 },
    { name: 'SpiceJet', from: searchParams.from, to: searchParams.to, date: searchParams.date, price: 6000 },
    { name: 'Kingfisher', from: searchParams.from, to: searchParams.to, date: searchParams.date, price: 8000 },
    { name: 'Vistara', from: searchParams.from, to: searchParams.to, date: searchParams.date, price: 10000 },
    { name: 'AirIndia', from: searchParams.from, to: searchParams.to, date: searchParams.date, price: 5000 },
  ];
  dispatch({ type: SEARCH_FLIGHTS, payload: flights });
};

export const selectFlight = (flight) => ({
  type: SELECT_FLIGHT, payload: flight
});

export const makePayment = (paymentDetails) => ({
  type: MAKE_PAYMENT, payload: paymentDetails
});

export const confirmBooking = (bookingDetails) => ({
  type: CONFIRM_BOOKING, payload: bookingDetails
});
