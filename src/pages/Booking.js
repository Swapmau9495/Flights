import React from 'react';
import { useSelector } from 'react-redux';
import Ticket from '../components/Ticket';

const Booking = () => {
  const selectedFlight = useSelector(state => state.flight.selectedFlight);

  return (
    <div>
      {selectedFlight && <Ticket booking={{ flight: selectedFlight }} />}
    </div>
  );
};

export default Booking;
