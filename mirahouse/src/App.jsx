import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './pages/home';
import StrutturaPage from './pages/struttura'; 
import DintorniPage from './pages/dintorni'; 
import ContattiPage from './pages/contatti'; 
import Navbar from './components/navbar'; 
import Footer from './components/footer'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container min-vh-100 w-100 d-flex flex-column ">
        <Navbar />
        <div className="content flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/struttura" element={<StrutturaPage />} />
            <Route path="/cosa-vedere" element={<DintorniPage />} /> {/* Ho assunto che "dintorni" corrisponda a "cosa vedere" */}
            <Route path="/contatti" element={<ContattiPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;