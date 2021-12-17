import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Systeem from "./components/Systeempage/Systeem";
import Coaching from "./components/Coachingpage/Coaching";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Systeem />
      <Coaching />  
      <Reviews />
      <Footer />
    </>

  );
}

export default App;
