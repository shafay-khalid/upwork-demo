// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Dummy data for service providers
  const serviceProviders = [
    { id: 1, name: 'Provider A' },
    { id: 2, name: 'Provider B' },
  ];

  // Dummy data for uploaded videos
  const uploadedVideos = [
    { id: 1, title: 'Video 1', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 2, title: 'Video 2', src: 'https://www.w3schools.com/html/movie.mp4' },
  ];


  return (
    <>
 <div className="container">
      <h1>Welcome to the Service Provider Platform</h1>
      <section className="providers-section">
        <h2>Service Providers</h2>
        <ul className="provider-list">
          {serviceProviders.map(provider => (
            <li key={provider.id}>
              <Link to={`/provider/${provider.id}`} className="provider-link">
                {provider.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="videos-section">
        <h2>Uploaded Videos</h2>
        <div className="video-gallery">
          {uploadedVideos.map(video => (
            <div key={video.id} className="video-card">
              <video width="300" controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>

    </>
  )   
};

export default HomePage;