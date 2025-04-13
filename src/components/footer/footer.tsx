import React from 'react';
import './footer.css';
import { FaInstagram, FaYoutube, FaTiktok, FaSnapchatGhost, FaTshirt, FaHeart, FaHandHoldingHeart } from 'react-icons/fa';
import { MdOutlineMosque, MdKeyboardArrowRight } from 'react-icons/md';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <MdOutlineMosque className="footer-logo-icon" />
            <h3>JANNAH</h3>
          </div>
          <p>Premium quality clothing with a focus on Islamic identity, community and faith.</p>
          <div className="footer-purpose">
            <FaHandHoldingHeart className="footer-icon" />
            <span>Supporting charitable causes</span>
          </div>
          <div className="footer-purpose">
            <FaHeart className="footer-icon" />
            <span>Faith-inspired designs</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>
              <MdKeyboardArrowRight className="list-icon" />
              <a href="/shop/men">Men</a>
            </li>
            <li>
              <MdKeyboardArrowRight className="list-icon" />
              <a href="/shop/women">Women</a>
            </li>
            <li>
              <MdKeyboardArrowRight className="list-icon" />
              <a href="/shop/accessories">Accessories</a>
            </li>
            <li>
              <MdKeyboardArrowRight className="list-icon" />
              <a href="/shop/new">New Arrivals</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <MdKeyboardArrowRight className="list-icon" />
              <a href="/about">About Us</a>
            </li>
            <li>
              <MdKeyboardArrowRight className="list-icon" />
              <a href="/community">Community</a>
            </li>
            <li>
              <MdKeyboardArrowRight className="list-icon" />
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
              <span>YouTube</span>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="social-icon" />
              <span>TikTok</span>
            </a>
            <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
              <FaSnapchatGhost className="social-icon" />
              <span>Snapchat</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} JANNAH. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
