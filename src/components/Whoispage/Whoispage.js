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
                <header>“Ik voeg de wereld toe aan wie ik al ben"</header>
                <h2>
                    Monique Aarts oprichter/eigenaar van ‘De Kracht van het Systeem’.
                    Moeder van een volwassen zoon en oma van een lieve kleindochter.
                    Ik ben geboren in 1962 te Amsterdam.
                    <br></br><br></br>
                    <em>Opleiding</em>
                    <br></br>
                    Gecertificeerd begeleider Systemisch werk, Coachopleiding, NLP Master, Oplossingsgerichte gespreksvoering.
                </h2>
                <img
                    src="images/monique.jpg"
                    alt="Monique foto"
                />
                {/* <img
                    src="images/Hart.png"
                    alt="Hartje"
                    className="hart-in-circle"
                /> */}
            </div>
        </section>
    )
}
