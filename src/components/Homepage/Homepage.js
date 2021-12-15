import React from 'react'
import "./homepage.scss";

export default function Homepage() {
    return (
        <section id="home">
            <div className="image-home">
                <img
                    src="images/homepage-achtergrond-2.jpg"
                    alt="vogel boven woeste zee"
                />
            </div>
            <div className="intro-circle">
                <header>Welkom bij De Kracht<br></br>van het Systeem</header>
                <h2>
                    Vraag je je wel eens af, wie je bent of wat je wil?
                    Herken jij het verschil tussen je gedrag en wie je werkelijk bent?
                    Ben jij tevreden over je thuissituatie, over je werk of juist niet?
                    Hoe ga je om met relaties, het eigen gezin, vader en moeder, schoonouders, collega’s, je gezondheid?
                    
                    Heb je het idee dat je het allemaal alleen moet doen?
                    Kortom: wat werkt wel en wat werkt niet voor jou?
                    Zou jij op ontdekkingstocht willen gaan, om er nog meer uit te halen?
                </h2>
                <a href="#systeem" className="button-circle">
                    lees meer
                </a>
            </div>
            <div className="social-media-buttons">
                <ul>
                    <li>
                        <a
                            href="mailto:moaarts7@xs4all.nl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="images/email.svg" alt="instagram" />
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
        </section>
    )
}
