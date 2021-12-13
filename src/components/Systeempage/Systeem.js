import React from 'react'
import "./systeem.scss";

export default function Systeem() {
    return (
        <section id="systeem">
            <div className="image-systeem">
                <img
                    src="images/systeempage-achtergrond.jpg"
                    alt="mannetje-vrouwtje"
                />
            </div>
            <div className="systeem-circle-1">
                <header>“Het leven is gebaseerd op liefde, met een blik op het gehele systeem”</header>
                <h2>
                    Opstellingen vormen een bijzondere en doeltreffende methode om inzicht te
                    krijgen in de veelal verborgen dynamieken en verstrikkingen die binnen
                    families of organisaties kunnen spelen.
                    <br></br><br></br>
                    Opstellingen brengen in beeld hoe mensen, volledig onbewust en dikwijls ten
                    koste van zichzelf, loyaal zijn aan hun relaties.
                    Het is een verrijking voor jouw ervaringen en wederzijds begrip, meer
                    systemisch waar te nemen.
                </h2>
            </div>
            <div className="systeem-circle-2">
                <h2>
                    Er zijn soms spanningen die generaties teruggaan en hun wortels hebben in 
                    gebeurtenissen in de familiegeschiedenis.
                    Bijvoorbeeld door jouw ervaringen in de thuissituatie, vroeg overlijden 
                    van ouders/kinderen, miskramen, abortussen, echtscheiding, seksueel 
                    misbruik en oorlog.
                    <br></br><br></br>
                    Dit kan zich uiten in het gevoel hebben niet alles uit je leven kunnen 
                    halen, telkens ergens tegen aan te lopen, chronische vermoeidheid, 
                    relatieproblemen, burn-out en meer…
                </h2>
            </div>
            <a href="#coaching">
                <div className="arrow-down">
                    {/* <span></span> */}
                    <span></span>
                    <span></span>
                </div>
            </a>
        </section>
    )
}
