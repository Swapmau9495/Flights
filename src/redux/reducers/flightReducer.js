import { SEARCH_FLIGHTS, SELECT_FLIGHT, MAKE_PAYMENT, CONFIRM_BOOKING } from '../types';

const initialState = {
  flights: [],
  selectedFlight: null,
  paymentDetails: null,
  booking: null
};

export const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FLIGHTS:
      return { ...state, flights: action.payload };
    case SELECT_FLIGHT:
        return { ...state, selectedFlight: action.payload };
        case MAKE_PAYMENT:
          return { ...state, paymentDetails: action.payload };
        case CONFIRM_BOOKING:
          return { ...state, booking: action.payload };
        default:
          return state;
      }
    };
    
