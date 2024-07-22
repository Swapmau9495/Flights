import React from 'react';
import FlightSearch from './FlightSearch'; // Import your FlightSearch component
import './FlightSearchPanel.css'; // Import the CSS file for styling

const FlightSearchPanel = ({onSearch}) => {
  return (
    // <div className="flight-search-container">
    //   <div >
        <FlightSearch onSearch={onSearch}/>
    //   </div>
    // </div>
  );
};

export default FlightSearchPanel;
