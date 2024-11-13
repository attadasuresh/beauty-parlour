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
      title: 'Hair Services',
      image: 'images/Organic-Hair-Salon-Treatments.png',
      description: 'Haircuts, Hair Styling, Hair Coloring, Hair Treatments, and more.',
    },
    {
      id: 2,
      title: 'Facial Treatments',
      image: 'images/SKIN-TREATMENT.png',
      description: 'Basic Facials, Anti-aging Facials, Acne Treatments, and more.',
    },
    {
      id: 3,
      title: 'Nail Services',
      image: 'images/Screenshot-237.png',
      description: 'Manicures, Pedicures, Nail Art, Nail Extensions, and more.',
    },
    {
      id: 4,
      title: 'Makeup Services',
      image: 'images/Untitled-design-62.png',
      description: 'Bridal Makeup, Party Makeup, Airbrush Makeup, and more.',
    },
    {
      id: 5,
      title: 'Massage Services',
      image: 'images/pngtree-beauty-salon-series-beautician-comfortable-smooth-png-image_12558762.png',
      description: 'Swedish Massage, Deep Tissue Massage, Aromatherapy Massage, and more.',
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
