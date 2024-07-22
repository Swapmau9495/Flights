import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FlightResults from '../components/FlightResults';
import { selectFlight } from '../redux/actions/flightActions';
import { useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const flights = useSelector(state => state.flight.flights);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectFlight = (flight) => {
    dispatch(selectFlight(flight));
    navigate('/payment'); // Navigate to the payment page after selecting a flight
  };

  return (
    <div>
      <FlightResults flights={flights} onSelectFlight={handleSelectFlight} />
    </div>
  );
};

export default SearchResults;
