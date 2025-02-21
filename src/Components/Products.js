import React, { useState } from 'react';
import './Products.css'
import { FaTimes } from 'react-icons/fa'; // Importing the cancel (close) icon from react-icons

// Modal component to display service details
const ServiceModal = ({ showModal, handleClose, service }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-icon" onClick={handleClose}>
          <FaTimes />
        </button>
        <img src={service.image} alt={service.title} />
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <button className="close-btn" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState({});

  const services = [
    {
      id: 1,
      title: 'Bridal Makeup',
      image: 'images/WhatsApp Image 2025-02-13 at 10.17.35 PM.jpeg',
      description: 'Get the perfect Bridal Makeup for any occasion.',
    },
    {
      id: 2,
      title: 'Hair Styling',
      image: 'images/renu2.jpg',
      description: 'Get the perfect hairstyle for any occasion..',
    },
    {
      id: 3,
      title: 'Party Makeup Styling',
      image: 'images/renu3.jpg',
      description: 'Get the perfect Party Makeup for any occasion..',
    },
    {
      id: 4,
      title: 'Reception Styling',
      image: 'images/ranu4.jpg',
      description: 'Get the perfect Reception for any occasion.',
    },
    {
      id: 5,
      title: 'Pre Wedding shoots',
      image: 'images/renu5.jpg',
      description: 'Pre Wedding shoots  with our special facials',
    },
    {
      id: 6,
      title: 'Haidhi Styles',
      image: 'images/WhatsApp Image 2025-02-13 at 10.17.34 PM copy.jpeg',
      description: 'Get creative and beautiful Haidhi Styles expert artists.',
    },
    {
      id: 7,
      title: 'Pre Wedding ',
      image: 'images/WhatsApp Image 2025-02-13 at 10.16.35 PM.jpeg',
      description: 'Pre Wedding shoots  with our special facials',
    },
    {
      id: 7,
      title: 'Pre Wedding ',
      image: 'images/WhatsApp Image 2025-02-13 at 10.16.37 PM.jpeg',
      description: 'Pre Wedding shoots  with our special facials',
    },
    {
      id: 7,
      title: 'Pre Wedding ',
      image: 'images/WhatsApp Image 2025-02-13 at 10.16.40 PM.jpeg',
      description: 'Pre Wedding shoots  with our special facials',
    },
    {
      id: 7,
      title: 'Pre Wedding ',
      image: 'images/WhatsApp Image 2025-02-13 at 10.16.38 PM.jpeg',
      description: 'Pre Wedding shoots  with our special facials',
    },
    {
      id: 7,
      title: 'Pre Wedding ',
      image: 'images/renu8.jpg',
      description: 'Pre Wedding shoots  with our special facials',
    },
    
  ];

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService({});
  };

  return (
    <div className="services-container">
      <h1 className="page-title">Our Beauty Services</h1>

      <div className="services-cards">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <button className="service-btn" onClick={() => handleOpenModal(service)}>Learn More</button>
          </div>
        ))}
      </div>

      <ServiceModal 
        showModal={showModal} 
        handleClose={handleCloseModal} 
        service={selectedService} 
      />
    </div>
  );
};

export default Services;
