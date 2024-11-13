import React, { useState } from 'react';


import './Home.css'; // Import the separate CSS file
const Home = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const openPopup = (service) => {
    let content = {};
    switch (service) {
      case 'service1':
        content = {
          title: 'Hair Styling',
          description: 'Get the perfect hairstyle for any occasion.',
          image: '  ', // Replace with actual image URL
        };
        break;
      case 'service2':
        content = {
          title: 'Facial Treatments',
          description: 'Rejuvenate your skin with our special facials.',
          image: 'https://via.placeholder.com/100x100', // Replace with actual image URL
        };
        break;
      case 'service3':
        content = {
          title: 'Nail Art',
          description: 'Get creative and beautiful nails with our expert artists.',
          image: 'https://via.placeholder.com/100x100', // Replace with actual image URL
        };
        break;
      default:
        content = {};
    }
    setPopupContent(content);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const closeBack = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Beauty Parlor</h1>
          <p className="hero-text">
            Discover the best beauty services to enhance your natural beauty.
          </p>
          <a href='/Products'>
          <button className="cta-button">View Our Services</button>
          </a>
        </div>
      </header>
      <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to Our Beauty Parlour</h1>
        <p className="welcome-content">
          We offer a range of beauty services to help you look and feel your best. From haircuts to bridal services, we’ve got everything you need.
        </p>
        <a href='/Products'>

        <button className="explore-btn">Explore Our Services</button>
        </a>

      </div>
    </div>
      <div className="info-card">
        <div className="info-card-image">
          <img src="images/SKIN-TREATMENT.png" alt="Beauty Parlor" />
        </div>  
        
        <div className="info-card-content">
          <h2 className="info-card-title">About Our Beauty Parlor</h2>
          <p className="info-card-description">
            At our Beauty Parlor, we offer a range of beauty services tailored to meet your needs. Whether you're looking for a quick makeover or a complete spa experience, we have something for everyone. Our professional staff ensures that you leave feeling refreshed and beautiful.
          </p>
          <a href='/Aboutus'>
          <button className="info-card-button">Learn More</button>
          </a>
        </div>
      </div>


      <section className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <img
              src="images/Organic-Hair-Salon-Treatments.png"
              alt="Service 1"
              className="card-image"
            />
            <h3 className="card-title">Hair Styling</h3>
            <p className="card-description">Get the perfect hairstyle for any occasion.</p>
            <a href='/Products'>
            <button className="card-button" onClick={() => openPopup('service2')}>Learn More</button>

            </a>
          </div>
          <div className="card">
            <img
              src="images/image-20.png"
              alt="Service 2"
              className="card-image"
            />
            <h3 className="card-title">Facial Treatments</h3>
            <p className="card-description">Rejuvenate your skin with our special facials.</p>
            <a href='/Products'>
            <button className="card-button" onClick={() => openPopup('service2')}>Learn More</button>

            </a>
          </div>
          <div className="card">
            <img
              src="images/Screenshot-237.png"
              alt="Service 3"
              className="card-image"
            />
            <h3 className="card-title">Nail Art</h3>
            <p className="card-description">Get creative and beautiful nails with our expert artists.</p>
            <a href='/Products'>
            <button className="card-button" onClick={() => openPopup('service2')}>Learn More</button>

            </a>
          </div>
        </div>
      </section>

      {/* Pop-up */}
      <div className={`popup ${isPopupVisible ? 'popup-show' : ''}`}>
        <div className="popup-content">
          <button className="close-btn" onClick={closePopup}>&times;</button>
          <button className="back-btn" onClick={closeBack}>&lt; Back</button>
          <img src={popupContent.image} alt={popupContent.title} className="popup-image" />
          <h3>{popupContent.title}</h3>
          <p>{popupContent.description}</p>
        </div>
      </div>



    <div className="beauty-home">
      {/* About Us Section */}
      <section className="about-us">
        <h2 className="section-title">About Us</h2>
        <div className="content-block">
          <div className="mission">
            <h3 className="content-title">Our Mission</h3>
            <p>
              At [Your Beauty Parlor Name], we believe that beauty is more than just appearance; it’s about how you feel. We are dedicated to enhancing your natural beauty and helping you feel your best, every day. Our highly trained professionals offer personalized services in a relaxing, luxurious environment.
            </p>
          </div>
          <div className="story">
            <h3 className="content-title">Our Story</h3>
            <p>
              Founded in [Year], [Your Beauty Parlor Name] started as a small beauty salon and has now grown into one of the most trusted and popular beauty parlors in [City]. With a passion for beauty and self-care, our founder, [Founder’s Name], created a space where clients could indulge in high-quality beauty treatments while being treated like family. Our services include haircuts, facials, manicures, pedicures, makeup, and massage treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us</h2>
        <ul className="features-list">
          <li><strong>Experienced Professionals:</strong> Our team consists of certified, highly skilled beauticians and stylists who are passionate about making you look and feel amazing.</li>
          <li><strong>Personalized Treatments:</strong> We tailor each treatment to your unique needs to ensure the best results for your beauty and wellness goals.</li>
          <li><strong>Luxurious Experience:</strong> From the moment you step in, you’ll feel pampered. We offer a soothing atmosphere designed to relax and calm your mind and body.</li>
          <li><strong>Top Quality Products:</strong> We use only the best and most trusted products in the industry to ensure you get the best possible results.</li>
          <li><strong>Customer Care:</strong> Your satisfaction is our priority. We listen to your needs and ensure your experience is smooth, enjoyable, and exceeds your expectations.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">Customer Testimonials</h2>
        <div className="testimonial-item">
          <blockquote>“I had a wonderful experience at [Your Beauty Parlor Name]. The staff is so welcoming and the facial treatment left my skin glowing. Highly recommend!”</blockquote>
          <cite>– Sarah M.</cite>
        </div>
        <div className="testimonial-item">
          <blockquote>“I’ve been coming here for months for my haircuts and I’ve never been disappointed. The team knows exactly what works for me. It’s always a relaxing experience.”</blockquote>
          <cite>– Emma R.</cite>
        </div>
        <div className="testimonial-item">
          <blockquote>“The bridal makeup I had for my wedding was perfect. I felt beautiful all day long. Thank you for making my big day even more special!”</blockquote>
          <cite>– Rachel L.</cite>
        </div>
      </section>



      {/* Contact Us Section */}
      <section className="contact-us">
        <h2 className="section-title">Get in Touch</h2>
        <p>For bookings or inquiries, please contact us through any of the following methods:</p>
        <p><strong>Phone:</strong> [Phone Number]</p>
        <p><strong>Email:</strong> [Email Address]</p>
        <p><strong>Location:</strong> [Street Address, City, Country]</p>
        <p>Follow us on Instagram, Facebook, and Twitter for the latest updates, promotions, and behind-the-scenes fun!</p>
      </section>
    </div>

    </div>
  );
};

export default Home;
  