import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/shared/logo.svg';
import Burger from "../images/shared/icon-hamburger.svg";
import Close from "../images/shared/icon-close.svg";
import '../style/navbar.css'


const Navbar = () => {

  const [mobileNavIcon, setMobileNavIcon] = useState(Burger);

  const toggleMobileNav = () => {
    let mobileNav = document.querySelector(".navItems");
    mobileNav.classList.toggle("active");
    mobileNav.classList.contains("active")
      ? setMobileNavIcon(Close)
      : setMobileNavIcon(Burger);
  };

    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src={Logo} alt='logo' className="imgLogo"/></Link>
            </div>
            <div className="line"></div>
            <div className="navItems">
              
                <ul className="items">
                    <li className={window.location.pathname==="/" && "active_nav"}><Link to="/"><span className="number">00</span>Home</Link></li>
                    <li className={window.location.pathname==="/destination" && "active_nav"}><Link to="/destination"><span className="number">01</span>destination</Link></li>
                    <li className={window.location.pathname==="/crew" && "active_nav"}><Link to="/crew"><span className="number">02</span>crew</Link></li>
                    <li className={window.location.pathname==="/technology" && "active_nav"}><Link to="/technology"><span className="number">03</span>technology</Link></li>
                </ul>
            </div>
            <button className="mobilNav">
              <img
                onClick={toggleMobileNav}
                src={mobileNavIcon}
                alt="mobileNavIcon"
              />
            </button>
        </nav>
    );
}

export default Navbar
