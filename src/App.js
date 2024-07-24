import React from 'react';
import "./styles/App.scss"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar';
import Home from "./pages/home";
import Contact from "./pages/contact";
import Service from "./pages/Service"
import Footer from "./pages/footer";
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/Navbar.scss";
import "./styles/mediaquery.scss";
function App() {
  return (  
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Service' element={<Service />} />
        </Routes>
        <Service/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
