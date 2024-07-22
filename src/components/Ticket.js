import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { jsPDF } from 'jspdf';

const Ticket = ({ booking }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    doc.text('Booking Confirmation', 20, 20);
    doc.text(`Flight: ${booking.flight.name}`, 20, 30);
    doc.text(`From: ${booking.flight.from}`, 20, 40);
    doc.text(`To: ${booking.flight.to}`, 20, 50);
    doc.text(`Date: ${formatDate(booking.flight.date)}`, 20, 60);
    doc.text(`Price: ${booking.flight.price}`, 20, 70);

    doc.save('ticket.pdf');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5">Booking Confirmation</Typography>
        <Typography>Flight: {booking.flight.name}</Typography>
        <Typography>From: {booking.flight.from}</Typography>
        <Typography>To: {booking.flight.to}</Typography>
        <Typography>Date: {formatDate(booking.flight.date)}</Typography>
        <Typography>Price: {booking.flight.price}</Typography>
        <div> <Button variant="contained" color="primary" onClick={handleDownload}>Download Ticket</Button></div>
       
      </Box>
    </Container>
  );
};

export default Ticket;
