import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const FlightResults = ({ flights, onSelectFlight }) => (
  <Grid container spacing={2}>
    {flights.map((flight, index) => (
      <Grid item xs={12} md={6} key={index}>
        <Card>
          <CardContent>
            <Typography variant="h6">{flight.name}</Typography>
            <Typography>{flight.from} to {flight.to}</Typography>
            <Typography>Date: {formatDate(flight.date)}</Typography>
            <Typography>Price: {flight.price}</Typography>
            <Button variant="contained" color="primary" onClick={() => onSelectFlight(flight)}>Select</Button>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

// Function to format date as DD/MM/YYYY
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if needed
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (add 1 because month is zero-indexed) and pad with leading zero if needed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default FlightResults;
