import React, { useState, useEffect, useRef } from 'react';
import './community.css';
import { 
  FaInstagram, 
  FaYoutube, 
  FaTiktok, 
  FaSnapchatGhost, 
  FaHeart, 
  FaUserFriends, 
  FaGlobe, 
  FaLanguage, 
  FaHandHoldingHeart, 
  FaArrowRight, 
  FaQuran,
  FaRegComments
} from 'react-icons/fa';
import { MdOutlineMosque } from 'react-icons/md';

const Community: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  // Stats counter animation
  const [counts, setCounts] = useState({
    followers: 0,
    students: 0,
    countries: 0
  });
  
  const finalCounts = {
    followers: 10000,
    students: 350,
    countries: 15
  };
  
  // Testimonials data
  const testimonials = [
    {
      name: "Aisha Rahman",
      location: "United States",
      text: "Following Imaan for Jannah has transformed my connection with Islam. The content is authentic, accessible, and truly inspiring.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Mohammed Ali",
      location: "United Kingdom",
      text: "The Arabic course has changed my life! I can finally understand the Quran and feel more connected to my faith than ever before.",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Fatima Hussein",
      location: "Canada",
      text: "I look forward to every post and video. The knowledge I've gained has been invaluable to my spiritual journey.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];
  
  // Updates for instagram feed
  const instagramPosts = [
    {
      imageUrl: "https://placekitten.com/300/300", // Placeholder - would be replaced with actual content
      likes: 1245,
      caption: "The beauty of Surah Rahman. 'Which of the favors of your Lord will you deny?'"
    },
    {
      imageUrl: "https://placekitten.com/301/301", // Placeholder - would be replaced with actual content
      likes: 987,
      caption: "Learning Arabic brings you closer to understanding the Quran in its true essence."
    },
    {
      imageUrl: "https://placekitten.com/302/302", // Placeholder - would be replaced with actual content
      likes: 2451,
      caption: "Join us on this beautiful journey of faith and community."
    },
    {
      imageUrl: "https://placekitten.com/303/303", // Placeholder - would be replaced with actual content
      likes: 1823,
      caption: "Remembrance of Allah brings peace to the heart."
    }
  ];
  
  // Handle intersection observer for animations
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
  
  // Stats counter animation
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // 20ms between updates
    const steps = duration / interval;
    
    const incrementFollowers = finalCounts.followers / steps;
    const incrementStudents = finalCounts.students / steps;
    const incrementCountries = finalCounts.countries / steps;
    
    let currentStep = 0;
    
    const counter = setInterval(() => {
      currentStep++;
      
      setCounts({
        followers: Math.min(Math.round(incrementFollowers * currentStep), finalCounts.followers),
        students: Math.min(Math.round(incrementStudents * currentStep), finalCounts.students),
        countries: Math.min(Math.round(incrementCountries * currentStep), finalCounts.countries)
      });
      
      if (currentStep >= steps) {
        clearInterval(counter);
      }
    }, interval);
    
    return () => clearInterval(counter);
  }, []);
  
  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };
  
  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="hero-community fade-in" ref={setRef(0)}>
        <div className="hero-content">
          <MdOutlineMosque className="hero-icon" />
          <h1>Join Our Community</h1>
          <p>Connect with believers worldwide on a journey of faith, knowledge, and spiritual growth.</p>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="stats-section fade-in" ref={setRef(1)}>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <FaHeart />
            </div>
            <div className="stat-number">{counts.followers.toLocaleString()}+</div>
            <div className="stat-label">Followers</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <FaUserFriends />
            </div>
            <div className="stat-number">{counts.students.toLocaleString()}+</div>
            <div className="stat-label">Students</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <FaGlobe />
            </div>
            <div className="stat-number">{counts.countries}+</div>
            <div className="stat-label">Countries</div>
          </div>
        </div>
      </section>
      
      {/* Arabic Course Section */}
      <section className="arabic-course-section fade-in" ref={setRef(2)}>
        <div className="arabic-course-container">
          <div className="course-content">
            <div className="section-title">
              <FaLanguage className="title-icon" />
              <h2>Master Arabic Today</h2>
            </div>
            <p className="section-description">
              Unlock the beauty of the Quran by learning Arabic with our partner Path to Arabic. 
              Understanding the language of the Quran brings you closer to Allah's message.
            </p>
            <ul className="course-features">
              <li>
                <span className="check-icon">✓</span>
                Understand Quranic verses in their original form
              </li>
              <li>
                <span className="check-icon">✓</span>
                Learn from qualified teachers with ijazah
              </li>
              <li>
                <span className="check-icon">✓</span>
                Flexible online lessons fit your schedule
              </li>
              <li>
                <span className="check-icon">✓</span>
                Progressive curriculum for all levels
              </li>
            </ul>
            <a href="https://pathtoarabic.com/?ref=imaanforjannah" target="_blank" rel="noopener noreferrer" className="course-link">
              <span>Get 10% Off With Code: IMAAN10</span>
              <FaArrowRight className="arrow-icon" />
            </a>
          </div>
          <div className="course-image-container">
            <div className="course-image"></div>
            <div className="arabic-text">القرآن</div>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed Section */}
      <section className="instagram-section fade-in" ref={setRef(3)}>
        <div className="section-title centered">
          <FaInstagram className="title-icon" />
          <h2>Follow Us on Instagram</h2>
        </div>
        <p className="section-description centered">
          Daily inspiration, Quranic verses, and spiritual reminders to strengthen your faith.
        </p>
        
        <div className="instagram-feed">
          {instagramPosts.map((post, index) => (
            <div className="instagram-post" key={index}>
              <div className="post-image" style={{ backgroundImage: `url(${post.imageUrl})` }}>
                <div className="post-overlay">
                  <div className="post-likes">
                    <FaHeart />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
              <div className="post-caption">{post.caption}</div>
            </div>
          ))}
        </div>
        
        <div className="cta-container">
          <a 
            href="https://www.instagram.com/imaan_for_jannah/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-cta"
          >
            <span>Follow @imaan_for_jannah</span>
            <FaInstagram className="cta-icon" />
          </a>
        </div>
      </section>
      
      {/* YouTube Section */}
      <section className="video-platforms-section fade-in" ref={setRef(4)}>
        <div className="platform-container youtube-container">
          <div className="platform-content">
            <div className="section-title">
              <FaYoutube className="title-icon youtube-color" />
              <h2>Watch & Learn</h2>
            </div>
            <p className="section-description">
              Dive deeper into Islamic teachings with our educational videos, Quran recitations, 
              and inspiring lectures from scholars around the world.
            </p>
            <a 
              href="https://www.youtube.com/watch?v=4QIrTITc_00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="platform-cta youtube-btn"
            >
              <span>Watch on YouTube</span>
              <FaYoutube className="cta-icon" />
            </a>
          </div>
          <div className="platform-preview youtube-preview">
            <a 
              href="https://www.youtube.com/watch?v=4QIrTITc_00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-link"
            >
              <div className="play-button">
                <div className="play-icon"></div>
              </div>
            </a>
          </div>
        </div>
        
        {/* TikTok & Snapchat Combined Section */}
        <div className="social-split-container">
          <div className="social-half tiktok-half">
            <div className="social-content">
              <div className="section-title">
                <FaTiktok className="title-icon" />
                <h2>Quick Wisdom</h2>
              </div>
              <p className="section-description">
                Short, impactful reminders and Quranic wisdom to brighten your day and strengthen your iman.
              </p>
              <a 
                href="https://tr.ee/1f3TGeQPOS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-cta"
              >
                <span>Follow on TikTok</span>
                <FaTiktok className="cta-icon" />
              </a>
            </div>
          </div>
          
          <div className="social-half snapchat-half">
            <div className="social-content">
              <div className="section-title">
                <FaSnapchatGhost className="title-icon" />
                <h2>Daily Moments</h2>
              </div>
              <p className="section-description">
                Exclusive behind-the-scenes content, daily reminders, and interactive Q&As with our team.
              </p>
              <div className="snapchat-username">
                <span>@imaanforjannah</span>
              </div>
              <a 
                href="https://www.snapchat.com/add/imaanforjannah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="platform-cta"
              >
                <span>Add on Snapchat</span>
                <FaSnapchatGhost className="cta-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section fade-in" ref={setRef(5)}>
        <div className="section-title centered">
          <FaRegComments className="title-icon" />
          <h2>From Our Community</h2>
        </div>
        
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
              style={{transform: `translateX(${(index - activeTestimonial) * 100}%)`}}
            >
              <div className="testimonial-content">
                <div className="quote">"</div>
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-user">
                <div className="user-image" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
                <div className="user-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
            ></button>
          ))}
        </div>
      </section>
      
      {/* Donation Section */}
      <section className="donation-section fade-in" ref={setRef(6)}>
        <div className="donation-container">
          <div className="section-title centered">
            <FaHandHoldingHeart className="title-icon" />
            <h2>Support Our Mission</h2>
          </div>
          <p className="section-description centered">
            Your contribution helps us create more content, reach more people, and spread the message of faith and spirituality
            to Muslims around the world.
          </p>
          
          <div className="donation-amounts">
            <div className="donation-amount">
              <div className="amount">$10</div>
              <div className="amount-description">Supports a day of content creation</div>
            </div>
            <div className="donation-amount recommended">
              <div className="recommended-tag">Most Popular</div>
              <div className="amount">$25</div>
              <div className="amount-description">Helps us reach 5,000+ believers</div>
            </div>
            <div className="donation-amount">
              <div className="amount">$50</div>
              <div className="amount-description">Funds a complete video production</div>
            </div>
            <div className="donation-amount">
              <div className="amount">$100</div>
              <div className="amount-description">Sponsors educational content for a month</div>
            </div>
          </div>
          
          <div className="donation-cta">
            <a href="https://www.paypal.com/donate/?hosted_button_id=Z9RDY53LRG8JC" target="_blank" rel="noopener noreferrer" className="donate-btn">
              <FaQuran className="donate-icon" />
              <span>Donate Now</span>
            </a>
            <p className="donation-note">
              "The example of those who spend their wealth in the way of Allah is like a seed which grows seven spikes; 
              in each spike is a hundred grains. And Allah multiplies for whom He wills." (Quran 2:261)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
