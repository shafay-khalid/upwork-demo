
// src/components/PaymentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // Mock payment processing
    setTimeout(() => {
      setPaymentStatus('Payment successful');
      navigate('/chat');
    }, 1000);
  };



  return (
    <div className="container">
      <h1>Payment</h1>
      {paymentStatus && <p>{paymentStatus}</p>}
      <div className="payment-form">
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </label>
        <button onClick={handlePayment}>Complete Payment</button>
      </div>
    </div>
  );
};

export default PaymentPage;