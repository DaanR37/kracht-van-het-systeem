import React from 'react'
import "./coaching.scss";

export default function Coaching() {
    return (
        <section id="coaching">
            <div className="image-coaching">
                <img
                    src="images/coachingpage-achtergrond.jpg"
                    alt="mannetje-vrouwtje"
                />
            </div>
            <div className="coaching-circle-1">
                <header>“Bekijk de wereld als een enorme schat, die op
                    je ligt te wachten om te worden ontdekt en veroverd”</header>
                <h2>
                    Coaching is een vorm van persoonlijke begeleiding op basis van een
                    gelijkwaardige één-op-één-relatie. Ik stel je wat vragen en kan je ondersteunen
                    de weg te bewandelen waar je even was afgedwaald.
                    Coaching is gericht op het verdiepen van het bewustzijn, wat effect
                    kan hebben op jouw gedrag. 
                </h2>
            </div>
            <div className="coaching-circle-2">
                <h2>
                    Het doel is dat je in beweging komt,
                    zodat er een betere kwaliteit van leven en werken ontstaat.
                    Ik hanteer de volgende tarieven: 85 euro per uur voor een 1-op-1 sessie
                    of 115 euro per 1,5 uur.
                </h2>
                <button className="button-aanvraag" data-tf-slider="kNICAlsm" data-tf-width="550">
                    Doe een aanvraag
                </button>
            </div>
        </section>
    )
}
