import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',
    controlNavbar)
    return () => {
      window.removeEventListener('scroll',
      controlNavbar)
    }
  }, [])

  return (
    <nav className={`nav-who ${show && 'nav-container-who'}`}>
      <ul className={`logo-who ${show && 'logo-left-who'}`}>
        <li>
            <img
              src="images/logo-zwart.png"
              alt="logo kracht van het systeem"
            />
        </li>
      </ul>
      <ul className={`menu-who ${show && 'menu-buttons-who'}`}>
        <li><a href="/#home">terug</a></li>
      </ul>
    </nav>
  )
}
