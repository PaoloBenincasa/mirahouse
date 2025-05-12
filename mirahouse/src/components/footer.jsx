import React from 'react';


function Footer() {
  return (
    <footer className="footer d-flex justify-content-around align-items-center">
      <div>
        Il tuo soggiorno nel cuore della Puglia
        <p>&copy; {new Date().getFullYear()} MiRa House Barsento</p>
      </div>
      <div>
        Contattaci!
        <a className='nav-link' href="tel:+393514641282">+39 351 464 1282</a>
        <a className='nav-link' href="mailto:mirahouse.barsento@gmail.com">mirahouse.barsento@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;