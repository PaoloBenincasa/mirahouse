import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Consider 768px as the medium breakpoint
    };

    checkScreenSize(); // Check on initial load
    window.addEventListener('resize', checkScreenSize); // Check on window resize

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Clean up the listener
    };
  }, []);

  return (
    <nav className="navbar w-100 align-items-center justify-content-between">
  

        <div className='d-flex justify-content-start w-50 ps-5'>
          <div className='logo'>MiRa House</div>
        </div>
        <div className="d-flex justify-content-end w-50 pe-5">
          {/* Burger Icon for small screens */}
          {!isLargeScreen && (
            <div
              className="burger-icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </div>
          )}
          {/* Menu Items for large screens */}
          {isLargeScreen && (
            <ul className='list-unstyled d-flex justify-content-around w-50'>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                  to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                  to="/struttura">
                  La Nostra Struttura
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                  to="/cosa-vedere">
                  Cosa Vedere
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                  to="/contatti">
                  Prenota
                </NavLink>
              </li>
            </ul>
          )}
      
      </div>

      {/* Mobile Menu */}
      {!isLargeScreen && isMenuOpen && (
        <div className="mobile-menu">
          <ul className="list-unstyled">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/struttura" onClick={() => setIsMenuOpen(false)}>
                La Nostra Struttura
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/cosa-vedere" onClick={() => setIsMenuOpen(false)}>
                Cosa Vedere
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/contatti" onClick={() => setIsMenuOpen(false)}>
                Prenota
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

