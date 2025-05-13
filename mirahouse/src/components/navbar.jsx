// import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router';
// import { useTranslation } from 'react-i18next';


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

//     return () => {
//       window.removeEventListener('resize', checkScreenSize);
//     };
//   }, []);

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="navbar w-100 align-items-center justify-content-between">


//       <div className='d-flex justify-content-start w-50 ps-5'>
//         <div className='logo'>MiRa House</div>
//       </div>
//       <div className="d-flex justify-content-end w-50 pe-5">

//         {!isLargeScreen && (
//           <div
//             className="burger-icon"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             ☰
//           </div>
//         )}
//         {isLargeScreen && (
//           <ul className='list-unstyled d-flex justify-content-around w-50'>
//             <li>
//               <NavLink
//                 className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
//                 to="/">
//                 {t('home')}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
//                 to="/struttura">
//                 {t('structure')}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
//                 to="/cosa-vedere">
//                 {t('see')}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
//                 to="/contatti">
//                 {t('book')}
//               </NavLink>
//             </li>
//           </ul>
//         )}

//       </div>

//       {!isLargeScreen && isMenuOpen && (
//         <div className="mobile-menu">
//           <ul className="list-unstyled">
//             <li>
//               <NavLink
//                 className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
//                 to="/" onClick={() => setIsMenuOpen(false)}>
//                 {t('home')}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
//                 to="/struttura" onClick={() => setIsMenuOpen(false)}>
//                 {t('structure')}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
//                 to="/cosa-vedere" onClick={() => setIsMenuOpen(false)}>
//                 {t('see')}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
//                 to="/contatti" onClick={() => setIsMenuOpen(false)}>
//                 {t('book')}
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';


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

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar w-100 align-items-center justify-content-between">


      <div className='d-flex justify-content-start w-50 ps-5'>
        <div className='logo'>MiRa House</div>
      </div>
      <div className="d-flex justify-content-around w-50 pe-5">

        {!isLargeScreen && (
          <div
            className="burger-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </div>
        )}
        {isLargeScreen && (
          <ul className='list-unstyled d-flex justify-content-around w-50'>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/">
                {t('home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/struttura">
                {t('structure')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/cosa-vedere">
                {t('see')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/contatti">
                {t('book')}
              </NavLink>
            </li>
             <li>
                <button className='nav-link' onClick={() => changeLanguage('it')}>IT</button>
            </li>
            <li>
                <button className='nav-link' onClick={() => changeLanguage('en')}>EN</button>
            </li>
          </ul>
        )}

      </div>

      {!isLargeScreen && isMenuOpen && (
        <div className="mobile-menu">
          <ul className="list-unstyled">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/" onClick={() => setIsMenuOpen(false)}>
                {t('home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/struttura" onClick={() => setIsMenuOpen(false)}>
                {t('structure')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/cosa-vedere" onClick={() => setIsMenuOpen(false)}>
                {t('see')}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
                to="/contatti" onClick={() => setIsMenuOpen(false)}>
                {t('book')}
              </NavLink>
            </li>
             <li>
                <button className='nav-link' onClick={() => changeLanguage('it')}>IT</button>
            </li>
            <li>
                 <button className='nav-link' onClick={() => changeLanguage('en')}>EN</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
