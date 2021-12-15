import React from 'react'
import "./reviews.scss";

export default function Reviews() {
    return (
        <section id="review">
            <div className="image-reviews">
                <img
                    src="images/homepage-achtergrond-2.jpg"
                    alt="mannetje-vrouwtje"
                />
            </div>
            <div className="text-balloon">
                <img
                    src="images/text-balloon.svg"
                    alt=""
                />
                <h2>
                    "Hoi Monique, ik vind het erg bijzonder, dat het zo kan en ik heb ook goed
                    gemerkt dat het thema afgelopen tijd flink aan bod kwam.
                    Ik sta er al een heel stuk anders in. Als ik in de onzekerheid schiet kan ik
                    me veel sneller herpakken en voelen wat er te voelen valt.
                    Live opstellingen vind ik meer impact hebben op dat moment,
                    maar het resultaat is hetzelfde en uiteindelijk gaat het daarom.
                    Dus al met al vind ik het een mooie manier van opstellen.
                    Nogmaals dank je wel.
                    Groetjes Cindy"
                </h2>
            </div>
            <div className="text-balloon-2">
                <img
                    src="images/text-balloon-2.svg"
                    alt=""
                />
                <h2>
                    "Dat was een eye-opener! Veel dank, wauw. Liefs Anneke"
                </h2>
            </div>
            <div className="text-balloon-3">
                <img
                    src="images/text-balloon-3.svg"
                    alt=""
                />
                <h2>
                    "Hi Monique, ik ben nu zes keer bij je geweest. De eerste
                    keer was onwennig en nieuw en toch kon ik al snel mijn
                    eerste stapjes zetten. Inmiddels heb ik mijn doel bereikt,
                    45 kilo lichter. Echt, ik ben zo blij. Thanks Trudy"
                </h2>
            </div>
            <div className="text-balloon-4">
                <img
                    src="images/text-balloon-4.svg"
                    alt=""
                />
                <h2>
                    “Hallo Monique, de opstelling was diepgaand. Ik realiseer me 
                    dat mijn verleden veel invloed heeft gehad. 
                    Momenteel kom ik uit deze verlamming. Ik zie de opstelling nog 
                    duidelijk voor me en verwerk wat zich toen toonde. Dank je wel, 
                    ik weet je te vinden!”

                </h2>
            </div>
        </section>
    )
}
