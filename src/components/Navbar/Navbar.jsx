import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav';
import { Link} from "react-router-dom";


const Navbar = () => {

  const[openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector('.nav-wrapper').offsetHeight;
    const targetPosition = element.offsetTop + navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
     <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper" >
        <div className='nav-content'>
          <h2 className='myname' > Faizan Husain</h2>
    
          <ul>
            <li>
              <a href="#" className='menu-item' onClick={() => scrollToSection("Home")}>Home</a>
            </li>
            <li>
              <a href="#Technical Proficiency" className='menu-item' onClick={() => scrollToSection("Technical Proficiency")}>Technical Proficiency</a>
            </li>
            
            <li>
              <a href="#projects" className='menu-item' onClick={() => scrollToSection("projects")}>Projects</a>
            </li>
            <li>
            <a  href="#Skills" className='menu-item' onClick={() => scrollToSection("Skills")}>Skills</a>
            </li>
            <li>
              <a href="#Contact Me"className='menu-item' onClick={() => scrollToSection("Contact Me")}>Contact Me</a>
            </li>
            <button className='contact-btn' onClick={() => {
            window.location.href = 'https://drive.google.com/file/d/1zEvBsAApatBeYPkBARRDVgIWipf9FZqk/view?usp=sharing';
            }}>
              Resume
            </button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <span className={'material-symbol-outline'}
            style={{fontSize :"1.8rem"}} 
            >
            {openMenu ? "X" : "☰"}
            </span>
            </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar