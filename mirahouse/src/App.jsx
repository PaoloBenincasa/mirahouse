import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import HomePage from './pages/home';
import StrutturaPage from './pages/struttura';
import DintorniPage from './pages/dintorni';
import ContattiPage from './pages/contatti';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';
import { useEffect } from 'react';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { Suspense } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div className="app-container min-vh-100 w-100 d-flex flex-column ">
            <Navbar />
            <ScrollToTop />
            <div className="content flex-grow-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/struttura" element={<StrutturaPage />} />
                <Route path="/cosa-vedere" element={<DintorniPage />} />
                <Route path="/contatti" element={<ContattiPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </I18nextProvider>
  );
}

export default App;