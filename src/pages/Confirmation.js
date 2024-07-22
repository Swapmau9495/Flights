import React from 'react';
import { useSelector } from 'react-redux';
import Ticket from '../components/Ticket';
import '../components/FlightSearch'
const Confirmation = () => {
 
  const booking = useSelector(state => state.flight.booking);
console.log('booking',booking)
  return (
    <div  style={{position:'relative', overflowX:'hidden',overflowY:'hidden' }}>
    <div  className="cloud3">
  <div className="light3"></div>
<img className='scaled-image-cloud3' src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" /></div>

      {booking && <Ticket booking={booking} />}
    </div>
  );
};

export default Confirmation;
