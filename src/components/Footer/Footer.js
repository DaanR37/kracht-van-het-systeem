import React from 'react'
import "./footer.scss";

export default function Footer() {
    return (
        <section id="footer">
            <footer className="footer-container">
                <svg class="bottom-oval" width="1440px" height="150px" viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="bottom-oval__fill" transform="translate(0.000000, -650.000000)" fill="#B4D2EF">
                            <g>
                                <path d="M1441,800 C1441,800 1118.42116,650 720.5,650 C322.578838,650 0,800 0,800 C0,800 1441,800 1441,800 Z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                <div className="footer-container__content">
                    <div className="container">
                        <div className="footer-container__column footer-container__column--social">
                            {/* <h2 className="footer-container__title title title--size-4 color--light-blue">contact mij</h2> */}
                            <div className="footer-container__socials">
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
                        {/* <div className="footer-container__column footer-container__column--contact"> */}
                        {/* <div className="footer-container__column-inner"> */}
                        {/* <h2 className="footer-container__title title title--size-4 color--light-blue">Amsterdam</h2> */}
                        <div className="footer-container__paragraph">
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
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
                <div className="front-labs-tag">
                    <p>© 2021 Front-Labs. All Rights Reserved.</p>
                </div>
            </footer>
        </section>
    )
}
