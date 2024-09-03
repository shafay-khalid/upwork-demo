// src/components/ServiceProviderPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceProviderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);

  const handleVideoUpload = (event) => {
    setVideo(event.target.files[0]);
  };

  const handlePaymentRedirect = () => {
    if (!video) {
      alert("Please upload a video before proceeding.");
      return;
    }
    // Navigate to payment page
    navigate('/payment');
  };

  return (
    <div className="container">
      <h1>Service Provider {id}</h1>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      <button onClick={handlePaymentRedirect}>Pay and Submit</button>
    </div>
  );
};

export default ServiceProviderPage;