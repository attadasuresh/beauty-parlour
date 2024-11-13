import React from 'react';
import './Aboutus.css';
 // Example image path

const Aboutus = () => {
  return (
    <div className="about-us-container">
      {/* Welcome Section */}
      <section className="intro">
        <div className="intro-text">
          <h1>Welcome to [Your Beauty Parlor Name] – Where Beauty Meets Excellence!</h1>
          <p>
            At [Your Beauty Parlor Name], we believe that every individual is beautiful and deserves to feel confident in their own skin. Our mission is to enhance your natural beauty with top-notch beauty treatments, exceptional services, and a relaxing, luxurious experience. We specialize in offering personalized beauty solutions for all your beauty needs.
          </p>
        </div>
        <div className="intro-image">
        <img src="images/Salon Dtp (Custom).png" alt="Your Alt Text" />

        </div>
      </section>
      {/* Our Story */}
      <section className="story">
        <h2>Our Story</h2>
        <p>
          Founded in [Year], [Your Beauty Parlor Name] was born out of a passion for beauty and self-care. What started as a small, cozy beauty salon has now grown into a trusted and renowned beauty destination in [City or Area]. Our founder, [Founder’s Name], envisioned a space where people could indulge in high-quality services while receiving expert care and attention to detail.
        </p>
        <p>
          From haircuts to facials, manicures to makeup, we provide a comprehensive range of beauty treatments that are tailored to your unique needs. Whether you're preparing for a special occasion, maintaining your everyday beauty routine, or simply treating yourself to some relaxation, we are here to help you feel your best.
        </p>
      </section>

      {/* Our Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
          <img src="images/Organic-Hair-Salon-Treatments.png" alt="Your Alt Text" />
            <h3>Hair Services</h3>
            <p>Haircuts, Styling, Coloring, Treatments, Extensions, and more.</p>
            <button className="popup-btn" onClick={() => alert('Hair Services Popup')}>Learn More</button>
          </div>
          <div className="card">
          <img src="images/SKIN-TREATMENT.png" alt="Your Alt Text" />

            <h3>Facial Treatments</h3>
            <p>Anti-aging, Acne, Hydrating, Brightening, and Microdermabrasion.</p>
            <button className="popup-btn" onClick={() => alert('Facial Treatments Popup')}>Learn More</button>
          </div>
          <div className="card">
          <img src="images/Screenshot-237.png" alt="Your Alt Text" />

            <h3>Nail Services</h3>
            <p>Manicures, Pedicures, Nail Art, Extensions, and Gel Polish.</p>
            <button className="popup-btn" onClick={() => alert('Nail Services Popup')}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We use only the best products and the latest techniques to ensure the highest quality service for every client.</li>
          <li><strong>Customer Care:</strong> Your comfort and satisfaction are our top priorities. We listen to your needs and customize services to suit you.</li>
          <li><strong>Expertise:</strong> Our professional and skilled team of beauticians and stylists are passionate about their craft and stay updated with the latest trends.</li>
          <li><strong>Relaxing Atmosphere:</strong> Our calming, luxurious atmosphere is designed to provide you with the best pampering experience.</li>
          <li><strong>Hygiene:</strong> We maintain the highest hygiene standards to ensure a safe, clean, and healthy environment for all our clients.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Experienced Professionals:</strong> Our team is made up of experienced, certified beauty experts who take pride in their work.</li>
          <li><strong>Personalized Treatments:</strong> We offer customized beauty solutions to ensure you achieve the best results.</li>
          <li><strong>Comfort & Care:</strong> We create a serene and welcoming environment where you can relax and indulge in self-care.</li>
        </ul>
      </section>

      {/* Join Us */}
      <section className="cta">
        <h2>Join Us Today!</h2>
        <p>
          At [Your Beauty Parlor Name], we are committed to helping you look and feel your best. Whether you’re looking for a quick touch-up or a complete makeover, we promise to provide you with the best beauty experience in town.
        </p>
      </section>
    </div>
  );
};

export default Aboutus;
