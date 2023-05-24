import { useState } from "react";
import './nav.css';

import logo from '../../images/logo.svg';
import open from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';


const Menu = () => (
  <>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Blog</li>
      <li>Careers</li>
    </ul>
    <button>Request Invite</button>
  </>
)

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main">
      <div className={isOpen ? "main-container" : ""}  onClick={{toggleNavbar}} />

      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? (
          <img src={close} alt="close" />
        ) : (
          <img src={open} alt="open" />
        )}
        </div>

        <div className="navbar-items">
          <Menu />
        </div>


      </nav>
    </div>
  )
}

export default Nav