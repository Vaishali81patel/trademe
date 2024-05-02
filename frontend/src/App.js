import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavBar from './Components/TopNavBar/TopNavbar';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Welcome from './Components/Welcome/Welcome';
import MainLinks from './Components/MainLinks/MainLinks';
import Footer from './Components/Footer/Footer';
import PageLinks from './Components/PageLinks/PageLinks';

const App = () => {
  return (
    <div>
      <Router>
        <TopNavBar />
        <Navbar/>
      <Welcome />
      <MainLinks />
      <Routes>
      <Route>
      <Route path="/" element={<Shop gender="all" />} />
        <Route path='/watchlist' element ={<watchlist />}/>
        <Route path='/favourites' element ={<favourites/>}/>
        <Route path='/startListing' element ={<startListing/>}/>
        <Route path='/myTradeMe' element ={<myTradeMe />}/>
        <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
       </Routes>
       <Footer />
      <PageLinks />
     </Router>
  </div>
 );
}

export default App;
