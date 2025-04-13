import React, { useEffect, useRef } from 'react';
import './about.css';
import { FaHeart, FaHandHoldingHeart, FaPray, FaBook, FaQuran, FaGlobeAfrica } from 'react-icons/fa';
import { MdOutlineMosque } from 'react-icons/md';

const About: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };
  
  return (
    <div className="about-page">
      <section className="hero-about fade-in" ref={setRef(0)}>
        <MdOutlineMosque className="hero-icon" />
        <h1>About JANNAH</h1>
      </section>
      
      <section className="mission fade-in" ref={setRef(1)}>
        <div className="mission-container">
          <div className="mission-image"></div>
          <div className="mission-content">
            <h2>Our Mission</h2>
            <div className="mission-statement">
              <p>
                To inspire and uplift the global Muslim ummah through authentic Islamic content and meaningful products 
                that strengthen faith, foster community, and support charitable causes worldwide.
              </p>
            </div>
            <div className="mission-pillars">
              <div className="mission-pillar">
                <FaQuran className="pillar-icon" />
                <span>Faith</span>
              </div>
              <div className="mission-pillar">
                <FaGlobeAfrica className="pillar-icon" />
                <span>Community</span>
              </div>
              <div className="mission-pillar">
                <FaHandHoldingHeart className="pillar-icon" />
                <span>Charity</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="values fade-in" ref={setRef(2)}>
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon-wrapper">
                <FaPray className="value-icon" />
              </div>
              <div className="value-content">
                <h3>Faith First</h3>
                <p>Placing our relationship with Allah ﷻ at the center of everything we do</p>
              </div>
            </div>
            
            <div className="value-item">
              <div className="value-icon-wrapper">
                <FaBook className="value-icon" />
              </div>
              <div className="value-content">
                <h3>Islamic Knowledge</h3>
                <p>Sharing authentic teachings that encourage spiritual growth</p>
              </div>
            </div>
            
            <div className="value-item">
              <div className="value-icon-wrapper">
                <FaHeart className="value-icon" />
              </div>
              <div className="value-content">
                <h3>Community</h3>
                <p>Building connections that strengthen our global ummah</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="journey fade-in" ref={setRef(3)}>
        <div className="journey-content">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>Started with a simple idea: to create content that inspires Muslims to strengthen their faith</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Growing Community</h3>
                <p>Building a global network of believers passionate about living their faith authentically</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Launching Products</h3>
                <p>Creating meaningful merchandise that allows Muslims to express their identity beautifully</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Making an Impact</h3>
                <p>Directing proceeds to charitable causes that support Muslim communities worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section fade-in" ref={setRef(4)}>
        <h2>Join Our Community</h2>
        <p>Be part of a movement that celebrates faith, cultivates knowledge, and creates positive change</p>
        <button className="cta-button">Get Involved</button>
      </section>
    </div>
  );
};

export default About;
