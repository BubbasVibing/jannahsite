import React from 'react';
import './homepage.css';
import { FaTshirt, FaUsers, FaHeart, FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <img src="/herosectionjannah.png" alt="JANNAH Clothing" />
          </div>
          <div className="hero-content">
            <h1>FAITH. FASHION. PURPOSE.</h1>
            <p>Express your identity through premium Islamic clothing that combines faith and style while supporting charitable causes around the world.</p>
            <div className="hero-buttons">
              <Link to="/about" className="secondary-button">Learn More</Link>
              <Link to="/shop" className="cta-button">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="featured">
        <h2>Featured Collection</h2>
        <div className="products-grid">
          {/* Placeholder for products */}
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Essential Tee</h3>
            <p>$45</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Relaxed Fit Hoodie</h3>
            <p>$85</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Premium Joggers</h3>
            <p>$65</p>
          </div>
        </div>
        <div className="featured-cta">
          <Link to="/shop" className="shop-button">
            View All Products
            <FaArrowRight className="arrow-icon" />
          </Link>
        </div>
      </section>
      
      <section className="community-preview">
        <div className="community-content">
          <h2>Join Our Growing Community</h2>
          <p className="community-subtitle">Connect with believers worldwide who share your values</p>
          
          <div className="community-showcase">
            <div className="community-circle main-circle">
              <FaUsers className="circle-icon" />
              <div className="circle-content">
                <span className="stat-number">6,000+</span>
                <span className="circle-text">Global Members</span>
              </div>
            </div>
            
            <div className="community-divider"></div>
            
            <div className="community-highlights">
              <div className="highlight-item">
                <div className="highlight-icon-wrap">
                  <FaTshirt className="highlight-icon" />
                </div>
                <div className="highlight-content">
                  <h3>Faith-Inspired Fashion</h3>
                  <p>Clothing that reflects your identity and values</p>
                </div>
              </div>
              
              <Link to="/community" className="community-cta-button">
                Join Our Community
                <FaArrowRight className="arrow-icon" />
              </Link>
              
              <div className="highlight-item">
                <div className="highlight-icon-wrap">
                  <FaHeart className="highlight-icon" />
                </div>
                <div className="highlight-content">
                  <h3>Making an Impact</h3>
                  <p>Supporting causes that matter to our ummah</p>
                </div>
              </div>
            </div>
            
            <div className="countries-banner">
              <span className="country">United States</span>
              <span className="country">United Kingdom</span>
              <span className="country">Canada</span>
              <span className="country">France</span>
              <span className="country">Germany</span>
              <span className="country">UAE</span>
              <span className="country">Saudi Arabia</span>
              <span className="country">Malaysia</span>
              <span className="country">Indonesia</span>
              <span className="country">Australia</span>
              <span className="country">+ 5 more</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="donation">
        <div className="donation-container">
          <div className="donation-content">
            <h2>Support Our Cause</h2>
            <p>Your contribution helps us support charitable initiatives around the world, from building water wells to providing education for children in need.</p>
            
            <div className="donation-options">
              <div className="donation-option">
                <span className="donation-amount">$10</span>
                <p>Provides clean water for a family for one month</p>
              </div>
              
              <div className="donation-option recommended">
                <div className="recommended-tag">Popular</div>
                <span className="donation-amount">$25</span>
                <p>Supplies educational materials for children</p>
              </div>
              
              <div className="donation-option">
                <span className="donation-amount">$50</span>
                <p>Contributes to building sustainable housing</p>
              </div>
            </div>
            
            <div className="donation-cta">
              <a href="https://www.paypal.com/donate/?hosted_button_id=Z9RDY53LRG8JC" target="_blank" rel="noopener noreferrer" className="donate-button">
                <FaHandHoldingHeart className="donate-icon" />
                Donate Now
              </a>
              <p className="donation-note">100% of your donation goes directly to our partner charities</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
