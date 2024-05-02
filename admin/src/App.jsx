import { BrowserRouter } from "react-router-dom";
import TopNavbar from "./Components/TopNavbar/TopNavBar";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from './Components/Welcome/Welcome';
import Hero from './Components/Hero/Hero';
import Offers from "./Components/Offers/Offers";
import MainLinks from './Components/MainLinks/MainLinks';
import Footer from './Components/Footer/Footer';
import PageLinks from './Components/PageLinks/PageLinks';
import Admin from "./Pages/Admin";
import Popular from './Components/Popular/Popular';
//import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopNavbar />
        <Navbar />
        <Admin />
        <Welcome />
        <MainLinks />
        <Hero />
        <Offers />
        <Popular />
        <Footer />
        <PageLinks />
      </div>
    </BrowserRouter>
  );
}

export default App;
