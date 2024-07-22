import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { searchFlights } from '../redux/actions/flightActions';
import './FlightSearch.css';
import './CustomDatePicker.css'; 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const FlightSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [dateError, setDateError] = useState('');
  const [cityError, setCityError] = useState('');

  const cities = ['Pune', 'Mumbai', 'Delhi', 'Banglore', 'Chennai', 'Chandigarh'];

  const handleSearch = () => {
    if (fromCity && toCity && selectedDate && cities.includes(fromCity) && cities.includes(toCity)) {
      if (fromCity === toCity) {
        setCityError('Please select different cities for From and To.');
      } else if (!validateDate(selectedDate)) {
        // No need to do anything here if the date is invalid
      } else {
        dispatch(searchFlights({ from: fromCity, to: toCity, date: selectedDate }));
        navigate('/search-results');
      }
    } else {
      if (!fromCity) {
        setCityError('Please select a From city.');
      }
      if (!toCity) {
        setCityError('Please select a To city.');
      }
      if (!selectedDate) {
        setDateError('Please select a date.');
      }
    }
  };

  const validateDate = (date) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (!date || date < currentDate) {
      setDateError('Please select a date from tomorrow onwards.');
      return false;
    }
    setDateError('');
    return true;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    validateDate(date);
  };

  const handleFromCityChange = (e) => {
    const selectedFromCity = e.target.value;
    setFromCity(selectedFromCity);
    if (selectedFromCity === toCity) {
      setCityError('Please select different cities for From and To.');
    } else {
      setCityError('');
    }
  };

  const handleToCityChange = (e) => {
    const selectedToCity = e.target.value;
    setToCity(selectedToCity);
    if (selectedToCity === fromCity) {
      setCityError('Please select different cities for From and To.');
    } else {
      setCityError('');
    }
  };

  const filteredCitiesTo = cities.filter(city => city !== fromCity);
  const filteredCitiesFrom = cities.filter(city => city !== toCity);

  return (
   
    <div className="body-container">
      <div className="cloud cloud1">
  <div className="light"></div>
<img  src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" /></div>
<div className="cloud2">
  <div className="light2"></div>
<img className='scaled-image-cloud2' src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" /></div>
<div  className="cloud3">
  <div className="light3"></div>
<img className='scaled-image-cloud3' src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" /></div>

      <div className="flight-search-content">
        <h2>Find Your Flight</h2>
        <div className="flight-search-form">
          <div className="form-group">
            
            <FormControl  sx={{ m: 1}}>
            <label>From</label>
        <Select
        className="dropdown"
          value={fromCity}
          onChange={handleFromCityChange}
          displayEmpty
        //    label="From"
          inputProps={{ 'aria-label': 'Without label' }}
        >
             {filteredCitiesFrom.map(city => (
                <MenuItem key={city} value={city}>{city}</MenuItem>
              ))}
            </Select>
            <label>To</label>
            <Select
        className="dropdown"
          value={toCity}
          onChange={handleToCityChange}
          displayEmpty
        //    label="To"
          inputProps={{ 'aria-label': 'Without label' }}
        >
             {filteredCitiesTo.map(city => (
                <MenuItem key={city} value={city}>{city}</MenuItem>
              ))}
            </Select>
            </FormControl>
          </div>
          {/* <div className="form-group">
            <label>To:</label>
            <select value={toCity} onChange={handleToCityChange}>
              <option value="">Select City</option>
              {filteredCitiesTo.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div> */}
          <FormControl  sx={{ m: 1}}>
          <label>Departure Date:</label>
          <div 
          className="custom-datepicker"
          >     
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              filterDate={(date) => date >= new Date()}
              dateFormat="dd/MM/yyyy"
            //   className={dateError ? 'error' : 'custom-datepicker-input datepickersize'}
            />
          </div>

          </FormControl>
        
          <button className="search-button" onClick={handleSearch}>Search Flights</button>
          {cityError && <p className="error-message">{cityError}</p>}
          {dateError && <p className="error-message">{dateError}</p>}
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
