import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
    <nav className={`nav ${show && 'nav-container'}`}>
      <ul className={`logo ${show && 'logo-left'}`}>
        <li>
          <a href="#home">
            <img
              src="images/logo-zwart.png"
              alt="logo kracht van het systeem"
            />
          </a>
        </li>
      </ul>
      <ul className={`menu ${show && 'menu-buttons'}`}>
        <li><Link to="/Whoispage" className="uitleg-monique">wie ben ik?</Link></li>
        <li><button className="button-aanvraag-navbar" data-tf-slider="kNICAlsm" data-tf-width="550">Doe een aanvraag</button></li>
        <li><a href="#review" className="reviews">reviews</a></li>
      </ul>
    </nav>
  )
}
