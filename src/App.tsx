import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import About from './pages/about/about'
import Homepage from './pages/homepage/homepage'
import Contact from './pages/contact/contact'
import Community from './pages/community/community'
import Shop from './pages/shop/shop'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
