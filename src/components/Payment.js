
// import React, { useState } from 'react';
// import FormControl from '@mui/material/FormControl';
// import { Button } from '@mui/material';
// import './FlightSearch.css';
// const PaymentForm = ({ onPayment }) => {
//   const [paymentMethod, setPaymentMethod] = useState('upi');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryMonth, setExpiryMonth] = useState('');
//   const [expiryYear, setExpiryYear] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [upiId, setUpiId] = useState('');
//   const [upiIdError, setUpiIdError] = useState('');

//   const handlePaymentMethodChange = (event) => {
//     const selectedMethod = event.target.value;
//     setPaymentMethod(selectedMethod);

//     // Reset other fields based on selection
//     setCardNumber('');
//     setExpiryMonth('');
//     setExpiryYear('');
//     setCvv('');
//     setUpiId('');
//     setUpiIdError('');
//   };

//   const handlePayment = () => {
//     let paymentDetails;

//     if (paymentMethod === 'upi') {
//       paymentDetails = { method: 'UPI', id: upiId };
//     } else if (paymentMethod === 'card') {
//       paymentDetails = { method: 'Credit/Debit Card', number: cardNumber, expiryMonth, expiryYear, cvv };
//     } else {
//       // Handle other payment methods if needed
//       return;
//     }

//     // Validate paymentDetails before proceeding
//     if (validatePaymentDetails(paymentDetails)) {
//       // Call onPayment handler with validated payment details
//       onPayment(paymentDetails);
//     } else {
//       // Handle validation failure or error state
//       console.error('Invalid payment details:', paymentDetails);
//       // Optionally display an error message or take corrective action
//     }
//   };

//   const validatePaymentDetails = (details) => {
//     // Example validation logic, adjust as per your requirements
//     if (details.method === 'UPI') {
//       if (details.id.trim() === '') {
//         setUpiIdError('UPI ID cannot be empty.');
//         return false;
//       } else if (!details.id.includes('@')) {
//         setUpiIdError('UPI ID must contain "@" symbol.');
//         return false;
//       }
//       setUpiIdError('');
//       return true;
//     } else if (details.method === 'Credit/Debit Card') {
//       return (
//         details.number.trim() !== '' &&
//         details.expiryMonth.trim() !== '' &&
//         details.expiryYear.trim() !== '' &&
//         details.cvv.trim() !== ''
//       );
//     }
//     return false;
//   };

//   return (
//     <div className="body-container">
//       <div className="flight-search-form">
//       <div className="form-group">
//       <FormControl>
//       <label>Select Payment Method:</label>
//       <select style={{height:'50px'}} value={paymentMethod} onChange={handlePaymentMethodChange}>
//         <option value="upi">UPI</option>
//         {/* <option value="card">Credit/Debit Card</option> */}
//         {/* Add other payment method options if needed */}
//       </select>
      
//       {paymentMethod === 'upi' && (
      
//          <>
//           <label>Enter UPI Id:</label>
//           <input 
//           // style={{marginTop:'15px'}}
//             type="text" 
//             placeholder="Enter UPI Id" 
//             value={upiId} 
//             onChange={(e) => setUpiId(e.target.value)} 
//             // className={upiIdError ? 'error' : ''}
//           />
//         </>
       
//       )}

// {paymentMethod === 'card' && (
//         <div>
//           <label>Enter Card Number:</label>
//           <input type="text" placeholder="Enter Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
//           <label>Expiry Date:</label>
//           <input type="text" placeholder="MM" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} />
//           <input type="text" placeholder="YY" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} />
//           <label>CVV:</label>
//           <input type="text" placeholder="Enter CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
//         </div>
//       )}

//       {/* Add other payment method fields here */}
//       <Button variant="contained" color="primary"  onClick={handlePayment}>Proceed to Payment</Button>
     
//       <div/>
//       {upiIdError && <p className="error-message">{upiIdError}</p>}
//       </FormControl>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentForm;


import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import './Payment.css';

const PaymentForm = ({ onPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [upiIdError, setUpiIdError] = useState('');

  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;
    setPaymentMethod(selectedMethod);

    // Reset other fields based on selection
    setCardNumber('');
    setExpiryMonth('');
    setExpiryYear('');
    setCvv('');
    setUpiId('');
    setUpiIdError('');
  };

  const handlePayment = () => {
    let paymentDetails;

    if (paymentMethod === 'upi') {
      paymentDetails = { method: 'UPI', id: upiId };
    } else if (paymentMethod === 'card') {
      paymentDetails = { method: 'Credit/Debit Card', number: cardNumber, expiryMonth, expiryYear, cvv };
    } else {
      // Handle other payment methods if needed
      return;
    }

    // Validate paymentDetails before proceeding
    if (validatePaymentDetails(paymentDetails)) {
      // Call onPayment handler with validated payment details
      onPayment(paymentDetails);
    } else {
      // Handle validation failure or error state
      console.error('Invalid payment details:', paymentDetails);
      // Optionally display an error message or take corrective action
    }
  };

  const validatePaymentDetails = (details) => {
    // Example validation logic, adjust as per your requirements
    if (details.method === 'UPI') {
      if (details.id.trim() === '') {
        setUpiIdError('UPI ID cannot be empty.');
        return false;
      } else if (!details.id.includes('@')) {
        setUpiIdError('UPI ID must contain "@" symbol.');
        return false;
      }
      setUpiIdError('');
      return true;
    } else if (details.method === 'Credit/Debit Card') {
      return (
        details.number.trim() !== '' &&
        details.expiryMonth.trim() !== '' &&
        details.expiryYear.trim() !== '' &&
        details.cvv.trim() !== ''
      );
    }
    return false;
  };

  return (
    <div style={{position:'relative', overflowX:'hidden',overflowY:'hidden' }}>
    <div className="cloud cloud1">
    <div className="light"></div>
  <img  src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" /></div>
  <div className="cloud2">
    <div className="light2"></div>
  <img className='scaled-image-cloud2' src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" /></div>
  <div  className="cloud3">
    <div className="light3"></div>
  <img className='scaled-image-cloud3' src="https://images.vexels.com/media/users/3/145795/isolated/preview/05cd33059a006bf49006097af4ccba98-plane-in-flight-by-vexels.png" /></div>
  
    <div className="payment-body-container">
      <div className="payment-form">
        <div className="form-group">
          <FormControl>
            <label>Select Payment Method:</label>
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="upi">UPI</option>
              {/* <option value="card">Credit/Debit Card</option> */}
              {/* Add other payment method options if needed */}
            </select>

            {paymentMethod === 'upi' && (
              <div style={{marginTop:'10px'}}>
                <label>Enter UPI Id:</label>
                <input 
                  type="text" 
                  placeholder="Enter UPI Id" 
                  value={upiId} 
                  onChange={(e) => setUpiId(e.target.value)} 
                  // className={upiIdError ? 'error' : ''}
                />
              </div>
            )}

            {paymentMethod === 'card' && (
              <div>
                <label>Enter Card Number:</label>
                <input type="text" placeholder="Enter Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                <label>Expiry Date:</label>
                <input type="text" placeholder="MM" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} />
                <input type="text" placeholder="YY" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} />
                <label>CVV:</label>
                <input type="text" placeholder="Enter CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </div>
            )}

            {/* Add other payment method fields here */}
            <Button style={{marginTop:'10px'}} variant="contained" color="primary" onClick={handlePayment}>Proceed to Payment</Button>

            {upiIdError && <p className="error-message">{upiIdError}</p>}
          </FormControl>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PaymentForm;
