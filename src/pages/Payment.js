import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaymentForm from '../components/Payment';
import { makePayment, confirmBooking } from '../redux/actions/flightActions';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedFlight = useSelector(state => state.flight.selectedFlight);

  const handlePayment = (paymentDetails) => {
    dispatch(makePayment(paymentDetails));
    dispatch(confirmBooking({ flight: selectedFlight, payment: paymentDetails }));
    navigate('/confirmation');
  };

  return (
    <div>
      <PaymentForm onPayment={handlePayment} />
    </div>
  );
};

export default Payment;
