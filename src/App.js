import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Systeem from "./components/Systeempage/Systeem";
import Coaching from "./components/Coachingpage/Coaching";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Systeem />
      <Coaching />  
      <Reviews />
    </>

  );
}

export default App;
