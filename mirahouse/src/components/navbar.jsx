
import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar w-100 align-items-center justify-content-between">

      <ul className='list-unstyled d-flex w-100'>
        <div className='d-flex justify-content-start w-50 ps-5'>
          <li>
            <div className='logo'>MiRa House</div>
          </li>
        </div>
        <div className='list-unstyled d-flex justify-content-around w-50'>
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
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;