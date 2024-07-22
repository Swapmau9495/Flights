import React from 'react';
import FlightSearchPanel from '../components/FlightSearchPanel';
import { useDispatch } from 'react-redux';
import { searchFlights } from '../redux/actions/flightActions';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (searchParams) => {
    dispatch(searchFlights(searchParams));
    navigate('/search-results');
  };

  return (
    // <div>
      <FlightSearchPanel onSearch={handleSearch} />
    // </div>
  );
};

export default Home;
