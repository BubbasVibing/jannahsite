import React, { useState, useEffect, useRef } from 'react';
import './shop.css';
import { 
  MdOutlineMosque, 
  MdSearch, 
  MdFilterList, 
  MdShoppingCart, 
  MdFavorite, 
  MdStar
} from 'react-icons/md';
import { 
  FaTshirt, 
  FaLeaf, 
  FaHandHoldingHeart,
  FaArrowRight
} from 'react-icons/fa';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  // Product data
  const products = [
    {
      id: 1,
      name: "Faith Hoodie",
      category: "men",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      rating: 4.8,
      reviews: 56,
      isNew: true,
      bestseller: false,
      isSustainable: true,
      description: "Cozy cotton hoodie with Arabic calligraphy.",
      colors: ["Black", "Green", "Beige"],
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Trust T-Shirt",
      category: "men",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      rating: 4.6,
      reviews: 42,
      isNew: false,
      bestseller: true,
      isSustainable: true,
      description: "Lightweight cotton t-shirt with minimal Islamic pattern design.",
      colors: ["White", "Black", "Navy"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Honesty Sweatshirt",
      category: "women",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      rating: 4.9,
      reviews: 38,
      isNew: true,
      bestseller: false,
      isSustainable: true,
      description: "Comfortable sweatshirt with elegant Islamic artwork.",
      colors: ["Dusty Pink", "Sage Green", "Lavender"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 4,
      name: "Integrity Hijab",
      category: "accessories",
      price: 25.99,
      image: "https://images.unsplash.com/photo-1534341490973-e0d046c0a109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80",
      rating: 4.7,
      reviews: 63,
      isNew: false,
      bestseller: true,
      isSustainable: true,
      description: "Premium modal fabric hijab with beautiful texture.",
      colors: ["Sage Green", "Desert Sand", "Midnight Blue", "Charcoal"],
      sizes: ["Standard"]
    },
    {
      id: 5,
      name: "Ethics Long Sleeve",
      category: "men",
      price: 35.99,
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      rating: 4.5,
      reviews: 27,
      isNew: false,
      bestseller: false,
      isSustainable: true,
      description: "Long sleeve cotton shirt with subtle Islamic motifs.",
      colors: ["White", "Black", "Olive"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 6,
      name: "Iman Prayer Rug",
      category: "accessories",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1542826300-95197eebe123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      rating: 4.9,
      reviews: 45,
      isNew: true,
      bestseller: false,
      isSustainable: true,
      description: "Sustainably made, portable prayer rug with geometric patterns.",
      colors: ["Forest Green", "Deep Blue", "Burgundy"],
      sizes: ["Standard"]
    },
    {
      id: 7,
      name: "Taqwa Dress",
      category: "women",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      rating: 4.8,
      reviews: 32,
      isNew: false,
      bestseller: true,
      isSustainable: true,
      description: "Elegant modest dress made from sustainable materials.",
      colors: ["Navy", "Burgundy", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      id: 8,
      name: "Sabr Cap",
      category: "accessories",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      rating: 4.6,
      reviews: 19,
      isNew: false,
      bestseller: false,
      isSustainable: true,
      description: "Embroidered cap with 'Sabr' (patience) in Arabic calligraphy.",
      colors: ["Black", "Tan", "Olive"],
      sizes: ["Adjustable"]
    }
  ];
  
  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }
    
    if (searchQuery) {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             product.description.toLowerCase().includes(searchQuery.toLowerCase());
    }
    
    return true;
  });

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
  
  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="hero-shop fade-in" ref={setRef(0)}>
        <div className="hero-content">
          <MdOutlineMosque className="hero-icon" />
          <h1>Shop Our Collection</h1>
          <p>Premium quality Islamic clothing and accessories that combine faith, style, and sustainability.</p>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="shop-values fade-in" ref={setRef(1)}>
        <div className="values-container">
          <div className="value-card">
            <FaTshirt className="value-icon" />
            <h3>Quality Materials</h3>
            <p>Premium fabrics that are comfortable and durable for everyday wear.</p>
          </div>
          
          <div className="value-card">
            <FaLeaf className="value-icon" />
            <h3>Sustainable</h3>
            <p>Ethically sourced materials with environmentally friendly production.</p>
          </div>
          
          <div className="value-card">
            <FaHandHoldingHeart className="value-icon" />
            <h3>Charitable Cause</h3>
            <p>A portion of every purchase supports Muslim communities worldwide.</p>
          </div>
        </div>
      </section>
      
      {/* Shop Controls Section */}
      <section className="shop-controls fade-in" ref={setRef(2)}>
        <div className="search-bar">
          <MdSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="category-tabs">
          <button 
            className={activeCategory === 'all' ? 'active' : ''} 
            onClick={() => setActiveCategory('all')}
          >
            All Products
          </button>
          <button 
            className={activeCategory === 'men' ? 'active' : ''} 
            onClick={() => setActiveCategory('men')}
          >
            Men
          </button>
          <button 
            className={activeCategory === 'women' ? 'active' : ''} 
            onClick={() => setActiveCategory('women')}
          >
            Women
          </button>
          <button 
            className={activeCategory === 'accessories' ? 'active' : ''} 
            onClick={() => setActiveCategory('accessories')}
          >
            Accessories
          </button>
        </div>
        
        <div className="filter-button" onClick={toggleFilter}>
          <MdFilterList />
          <span>Filter</span>
        </div>
      </section>
      
      {/* Filter Panel */}
      <div className={`filter-panel ${isFilterOpen ? 'open' : ''}`}>
        <div className="filter-section">
          <h4>Price Range</h4>
          <div className="filter-options">
            <label>
              <input type="checkbox" />
              <span>Under $25</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>$25 - $50</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>$50 - $75</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>$75+</span>
            </label>
          </div>
        </div>
        
        <div className="filter-section">
          <h4>Product Type</h4>
          <div className="filter-options">
            <label>
              <input type="checkbox" />
              <span>T-Shirts</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Hoodies</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Dresses</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Hijabs</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Accessories</span>
            </label>
          </div>
        </div>
        
        <div className="filter-section">
          <h4>Collections</h4>
          <div className="filter-options">
            <label>
              <input type="checkbox" />
              <span>New Arrivals</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Best Sellers</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Sustainable</span>
            </label>
          </div>
        </div>
        
        <div className="filter-controls">
          <button className="clear-btn">Clear All</button>
          <button className="apply-btn">Apply</button>
        </div>
      </div>
      
      {/* Products Grid */}
      <section className="products-section fade-in" ref={setRef(3)}>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="quickview-btn">Quick View</button>
                </div>
                <div className="product-actions">
                  <button className="action-btn favorite">
                    <MdFavorite />
                  </button>
                  <button className="action-btn cart">
                    <MdShoppingCart />
                  </button>
                </div>
                {product.isNew && <div className="product-tag new">New</div>}
                {product.bestseller && <div className="product-tag bestseller">Best Seller</div>}
                {product.isSustainable && <div className="product-tag sustainable"><FaLeaf /></div>}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <div className="stars">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar className={product.rating < 5 ? 'half' : ''} />
                  </div>
                  <span className="reviews-count">({product.reviews})</span>
                </div>
                <div className="product-price">${product.price}</div>
                <div className="product-colors">
                  {product.colors.slice(0, 3).map((color, index) => (
                    <div 
                      key={index} 
                      className="color-dot" 
                      title={color}
                      style={{backgroundColor: color === 'White' ? '#ffffff' : 
                                            color === 'Black' ? '#000000' :
                                            color === 'Navy' ? '#0a1e3c' :
                                            color === 'Green' ? '#4a6741' :
                                            color === 'Beige' ? '#f5f5dc' :
                                            color === 'Dusty Pink' ? '#dcb3ab' :
                                            color === 'Sage Green' ? '#b9c2b1' :
                                            color === 'Lavender' ? '#b69ac9' :
                                            color === 'Desert Sand' ? '#e5c8a8' :
                                            color === 'Midnight Blue' ? '#003366' :
                                            color === 'Charcoal' ? '#36454f' :
                                            color === 'Olive' ? '#556b2f' :
                                            color === 'Forest Green' ? '#228b22' :
                                            color === 'Deep Blue' ? '#00008b' :
                                            color === 'Burgundy' ? '#800020' :
                                            color === 'Tan' ? '#d2b48c' : '#cccccc'
                              }}
                    ></div>
                  ))}
                  {product.colors.length > 3 && (
                    <div className="color-more">+{product.colors.length - 3}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Collection */}
      <section className="featured-collection fade-in" ref={setRef(4)}>
        <div className="collection-container">
          <div className="collection-content">
            <h2>New Autumn Collection</h2>
            <p>Discover our latest modest fashion pieces designed for comfort and style as the seasons change.</p>
            <a href="#" className="collection-btn">
              Shop Collection
              <FaArrowRight className="btn-icon" />
            </a>
          </div>
          <div className="collection-image"></div>
        </div>
      </section>
      
      {/* Ethical Fashion */}
      <section className="ethical-fashion fade-in" ref={setRef(5)}>
        <div className="ethical-container">
          <h2>Fashion with Purpose</h2>
          <p>Our commitment to Islamic values extends to how we make our products.</p>
          
          <div className="ethical-points">
            <div className="ethical-point">
              <div className="point-number">01</div>
              <h3>Ethically Sourced</h3>
              <p>We ensure all materials are responsibly sourced without exploitation.</p>
            </div>
            
            <div className="ethical-point">
              <div className="point-number">02</div>
              <h3>Fair Wages</h3>
              <p>All our garments are made by workers who receive fair compensation.</p>
            </div>
            
            <div className="ethical-point">
              <div className="point-number">03</div>
              <h3>Reduced Waste</h3>
              <p>Our production processes minimize waste and environmental impact.</p>
            </div>
            
            <div className="ethical-point">
              <div className="point-number">04</div>
              <h3>Community Support</h3>
              <p>A portion of every sale goes to support Islamic charitable initiatives.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section fade-in" ref={setRef(6)}>
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-items">
            <div className="faq-item">
              <h3>What sizes do you offer?</h3>
              <p>Most of our products range from XS to XXL. Specific sizing information is available on each product page.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I care for my JANNAH garments?</h3>
              <p>We recommend gentle machine washing with like colors and air drying to preserve the quality of your garments.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>Yes, we ship to most countries worldwide. Shipping times and costs vary by location.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>We accept returns within 30 days of purchase. Items must be unworn with original tags attached.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="shop-cta fade-in" ref={setRef(7)}>
        <div className="cta-content">
          <h2>Join Our Mailing List</h2>
          <p>Be the first to know about new arrivals, exclusive offers, and community events.</p>
          <div className="cta-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop; 