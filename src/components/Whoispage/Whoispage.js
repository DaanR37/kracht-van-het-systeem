import React from 'react';
import "./whoispage.scss";
import Navbar from "./Navbar/Navbar";

export default function Whoispage() {
    return (
        <section id="who-am-i">
            <div className="navbar-component">
                <Navbar />
            </div>
            <div className="image-who-is">
                <img
                    src="images/homepage-achtergrond-2.jpg"
                    alt="mannetje-vrouwtje"
                />
            </div>
            <div className="circle-who-is">
                {/* <header>“Ik voeg de wereld toe aan wie ik al ben"</header> */}
                <h2 className="summary-mo">
                    Monique Aarts eigenaar van 
                    <br></br>
                    "de Kracht van het Systeem".
                    <br></br><br></br>
                    Ik ben gefascineerd door mensen, hun familiesystemen én 
                    hun verhalen daarachter. Een familieopstelling laat zien 
                    wat de onbewuste oorzaak is achter ons gedrag. 
                    <br></br>
                    Ik nodig je uit om deze verborgen patronen te herkennen. 
                    Dit proces zal ik op liefdevolle wijze begeleiden.
                    <br></br><br></br>
                    <em>Opleiding</em>
                    <br></br>
                    Gecertificeerd begeleider Systemisch werk,
                    <br></br> 
                    Coachopleiding,
                    <br></br>
                    NLP Master,
                    <br></br> 
                    Oplossingsgerichte gespreksvoering.
                    <br></br><br></br> 
                    En natuurlijk blijf ik mij persoonlijk ontwikkelen. 
                </h2>
                <h2 className="mobile-who-is">
                    Monique Aarts eigenaar van 
                    <br></br>
                    "De Kracht van het Systeem".
                    <br></br><br></br>
                    Ik ben gefascineerd door mensen, hun familiesystemen én 
                    hun verhalen daarachter. Een familieopstelling laat zien 
                    wat de onbewuste oorzaak is achter ons gedrag.
                    <br></br>
                    Ik nodig je uit om deze verborgen patronen te herkennen. 
                    Dit proces zal ik op liefdevolle wijze begeleiden.
                </h2>
                    <br></br><br></br>
                <h2 className="text-indent">
                    <em>Opleiding</em>
                    <br></br>
                    Gecertificeerd begeleider Systemisch werk,
                    <br></br> 
                    Coachopleiding,
                    {/* <br></br> */}
                    NLP Master,
                    <br></br> 
                    Oplossingsgerichte gespreksvoering.
                    <br></br><br></br> 
                    En natuurlijk blijf ik mij persoonlijk ontwikkelen. 
                </h2>
                <img
                    src="images/monique.jpg"
                    alt="Monique foto"
                />
            </div>
            <footer className="footer-container-who">
                <svg class="bottom-oval-who" width="1440px" height="150px" viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="bottom-oval__fill-who" transform="translate(0.000000, -650.000000)" fill="#B4D2EF">
                            <g>
                                <path d="M1441,800 C1441,800 1118.42116,650 720.5,650 C322.578838,650 0,800 0,800 C0,800 1441,800 1441,800 Z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                <div className="footer-container-who__content">
                    <div className="container-who">
                        <div className="footer-container-who__column footer-container__column--social">
                            <div className="footer-container-who__socials">
                                <ul>
                                    <li>
                                        <a
                                            href="mailto:moaarts7@xs4all.nl"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src="images/email.svg" alt="email" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/in/moniqueaarts/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src="images/linkedin.svg" alt="linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://wa.me/+31622429093"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img src="images/whatsapp.svg" alt="whatsapp" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-container-who__paragraph">
                            <p>
                                <strong>
                                    <h3>Monique Aarts</h3>
                                </strong>
                                <br></br>
                                <strong>
                                    <a href="tel:+31(0)622429093" target="_blank" rel="noreferrer">+31(0)622429093</a>
                                </strong>
                                <br></br>
                                <strong>
                                    <a href="mailto:moaarts7@xs4all.nl" target="_blank" rel="noreferrer">moaarts7@xs4all.nl</a>
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="front-labs-tag">
                    <p>© 2021 Front-Labs. All Rights Reserved.</p>
                </div>
            </footer>
        </section>
    )
}
