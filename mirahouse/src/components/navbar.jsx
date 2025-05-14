
// import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router'; 
// import { useTranslation } from 'react-i18next';
// import ukFlag from '/assets/flag-uk.png';
// import italiaFlag from '/assets/flag-italy.png';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(true);
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 768);
//     };
//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar bg-body-tertiary w-100 align-items-center justify-content-between">
//         <div className="container-fluid">
//           <div className="logo ps-2">MiRa House</div>

//           {!isLargeScreen && (
//             <button
//               className="navbar-toggler"
//               type="button"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-expanded={isMenuOpen}
//               aria-label="Toggle navigation"
//             >
//               <i className="fas fa-bars"></i>
//             </button>
//           )}
//         </div>

//         {isLargeScreen && (
//           <ul className="list-unstyled d-flex justify-content-around w-100 pe-5 mb-0">
//             <li>
//               <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-link'} to="/">
//                 {t('home')}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-link'} to="/struttura">
//                 {t('structure')}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-link'} to="/cosa-vedere">
//                 {t('see')}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className={({ isActive }) => isActive ? 'active-link' : 'nav-link'} to="/contatti">
//                 {t('book')}
//               </NavLink>
//             </li>
//             <li>
//               <button className="nav-link border-0 bg-transparent" onClick={() => changeLanguage('it')}>
//                 <img src={italiaFlag} alt="Italiano" width="24" />
//               </button>
//             </li>
//             <li>
//               <button className="nav-link border-0 bg-transparent" onClick={() => changeLanguage('en')}>
//                 <img src={ukFlag} alt="English" width="24" />
//               </button>
//             </li>
//           </ul>
//         )}
//       </nav>

//       {!isLargeScreen && isMenuOpen && (
//         <div className="collapse show" id="navbarToggleExternalContent">
//           <div className="bg-body-tertiary shadow-3 p-4 d-flex flex-column gap-2">
//             <NavLink className="btn btn-link border-bottom text-start" to="/" onClick={() => setIsMenuOpen(false)}>
//               {t('home')}
//             </NavLink>
//             <NavLink className="btn btn-link border-bottom text-start" to="/struttura" onClick={() => setIsMenuOpen(false)}>
//               {t('structure')}
//             </NavLink>
//             <NavLink className="btn btn-link border-bottom text-start" to="/cosa-vedere" onClick={() => setIsMenuOpen(false)}>
//               {t('see')}
//             </NavLink>
//             <NavLink className="btn btn-link border-bottom text-start" to="/contatti" onClick={() => setIsMenuOpen(false)}>
//               {t('book')}
//             </NavLink>
//             <button className="btn btn-link text-start" onClick={() => changeLanguage('it')}>
//               <img src={italiaFlag} alt="ITA" width="24" className="me-2" /> ITA
//             </button>
//             <button className="btn btn-link text-start" onClick={() => changeLanguage('en')}>
//               <img src={ukFlag} alt="ENG" width="24" className="me-2" /> ENG
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import ukFlag from '/assets/flag-uk.png';
import italiaFlag from '/assets/flag-italy.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary w-100 align-items-center">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo ps-2 fs-4 fw-bold">MiRa House</div>

          {!isLargeScreen && (
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>
          )}

          {isLargeScreen && (
            <ul className="list-unstyled d-flex justify-content-around align-items-center mb-0 gap-4 me-3">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                  to="/"
                >
                  {t('home')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                  to="/struttura"
                >
                  {t('structure')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                  to="/cosa-vedere"
                >
                  {t('see')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                  to="/contatti"
                >
                  {t('book')}
                </NavLink>
              </li>
              <li>
                <button
                  className="nav-link border-0 bg-transparent"
                  onClick={() => changeLanguage('it')}
                >
                  <img src={italiaFlag} alt="Italiano" width="24" />
                </button>
              </li>
              <li>
                <button
                  className="nav-link border-0 bg-transparent"
                  onClick={() => changeLanguage('en')}
                >
                  <img src={ukFlag} alt="English" width="24" />
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {!isLargeScreen && isMenuOpen && (
        <div className="collapse show" id="navbarToggleExternalContent">
          <div className="bg-body-tertiary shadow-3 p-4 d-flex flex-column gap-3">
            <NavLink
              className="nav-link border-bottom text-end pt-5 mt-2"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </NavLink>
            <NavLink
              className="nav-link border-bottom text-end"
              to="/struttura"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('structure')}
            </NavLink>
            <NavLink
              className="nav-link border-bottom text-end"
              to="/cosa-vedere"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('see')}
            </NavLink>
            <NavLink
              className="nav-link border-bottom text-end"
              to="/contatti"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('book')}
            </NavLink>
            <button className="btn btn-link text-end" onClick={() => changeLanguage('it')}>
              <img src={italiaFlag} alt="ITA" width="24"  />
            </button>
            <button className="btn btn-link text-end" onClick={() => changeLanguage('en')}>
              <img src={ukFlag} alt="ENG" width="24" /> 
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

