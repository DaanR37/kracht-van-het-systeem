import React from "react";
import "./reviews.scss";

export default function Reviews() {
  return (
    <section id="review">
      <div className="image-reviews">
        <img src="images/homepage-achtergrond-2.jpg" alt="mannetje-vrouwtje" />
      </div>

      {/* --> Hoi Monique, ik vind het erg bijzonder..... <-- */}
      <div className="text-balloon">
        <img src="images/text-balloon.svg" alt="tekstballon" />
        <h2>
          "Hoi Monique, ik vind het erg bijzonder, dat het zo kan en ik heb ook goed gemerkt dat het thema afgelopen
          tijd flink aan bod kwam. Ik sta er al een heel stuk anders in. Als ik in de onzekerheid schiet kan ik me veel
          sneller herpakken en voelen wat er te voelen valt. Live opstellingen vind ik meer impact hebben op dat moment,
          maar het resultaat is hetzelfde en uiteindelijk gaat het daarom. Dus al met al vind ik het een mooie manier
          van opstellen. Nogmaals dank je wel. Groetjes Cindy"
        </h2>
      </div>

      {/* --> Dat was een eye-opener..... <-- */}
      <div className="text-balloon two">
        <img src="images/text-balloon-2.svg" alt="tekstballon" />
        <h2>"Dat was een eye-opener! Veel dank, wauw. Liefs Anneke"</h2>
      </div>

      {/* --> Hi Monique, ik ben nu zes keer bij je..... <-- */}
      <div className="text-balloon three">
        <img src="images/text-balloon-3.svg" alt="tekstballon" />
        <h2>
          "Hi Monique, ik ben nu zes keer bij je geweest. De eerste keer was onwennig en nieuw en toch kon ik al snel
          mijn eerste stapjes zetten. Inmiddels heb ik mijn doel bereikt, 45 kilo lichter. Echt, ik ben zo blij. Thanks
          Trudy"
        </h2>
      </div>

      {/* --> Hallo Monique, de opstelling was diepgaand..... <-- */}
      <div className="text-balloon four">
        <img src="images/text-balloon-4.svg" alt="tekstballon" />
        <h2>
          “Hallo Monique, de opstelling was diepgaand. Ik realiseer me dat mijn verleden veel invloed heeft gehad.
          Momenteel kom ik uit deze verlamming. Ik zie de opstelling nog duidelijk voor me en verwerk wat zich toen
          toonde. Dank je wel, ik weet je te vinden!”
        </h2>
      </div>

      {/* --> Dag Monique, ondertussen gaat het..... <-- */}
      <div className="text-balloon five">
        <img src="images/text-balloon.svg" alt="tekstballon" />
        <h2>
          “Dag Monique, ondertussen gaat het goed. De sessie heeft duidelijk gemaakt wat er was op dat moment. Een heel
          leerrijke periode! Ondertussen spreek ik me helemaal uit in hoe ik in de wereld wil staan en in wat ik nodig
          heb. Er kan voor mij geen taboe meer zijn... Grote opluchting bij mij. Ik kies er nu voor om echt mijn pad te
          gaan en voor mezelf te kiezen. De energie is helemaal verandert nu. Dank je wel lieve Monique voor jouw
          bijdrage hierin. Ps En voor jou nog een dikke merci! Fijne feestdagen.”
        </h2>
      </div>

      {/* --> Lieve Monique, dank je wel voor..... <-- */}
      <div className="text-balloon six">
        <img src="images/text-balloon-3.svg" alt="tekstballon" />
        <h2>
          "Lieve Monique, dank je wel voor de bijzondere sessie. Het geeft mij een duidelijk zicht hoe het is verlopen
          met mijn ouders en in het bijzonder met mijn overleden zusje. Ik ga het verwerken en kom er zeker nog op
          terug, voor een volgende stap…veel dank, liefs M."
        </h2>
      </div>

      {/* --> Hi Monique. Wat fijn en inzicht ..... <-- */}
      <div className="text-balloon seven">
        <img src="images/text-balloon-2.svg" alt="tekstballon" />
        <h2>
          Hi Monique. Wat fijn en inzicht gevend wat die middag langskwam. Nooit verwacht.. Ik bedenk altijd allerlei
          dingen maar wat ik zag in de opstellingen was precies wat ik miste: dieper inzicht waar het vandaan komt..
          Dank je wel!
        </h2>
      </div>
    </section>
  );
}
