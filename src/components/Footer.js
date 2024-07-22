import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => (
  <Box component="footer" mt={5} py={3} textAlign="center" style={{backgroundColor:'skyblue'}}>
    <Typography variant="body1">
      &copy; 2024 Flight Booking Inc.
    </Typography>
  </Box>
);

export default Footer;
