import NavBar from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/HomePage';
import Cart from './components/Cart/Cart.js';
import Footer from './components/footer/footer.js';
import CustomProvider from './components/context/cartContext.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contactPage/contact.js';
import About from './pages/aboutPage/about.js';
import ItemDetailContainer from './components/Container/ItemDetailContainer.js';
import ItemListContainer from './components/Container/itemListContainer.js';
import Compra from './pages/formPage/formPage';



function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
          <NavBar/>
          <Routes path="/">
            <Route index element={<HomePage/>}/>
              <Route path="/category/:category" element={<ItemListContainer/>}/>
              <Route path=":nameToNavigate" element={<ItemDetailContainer/>}/>
              <Route path="about"  element={<About/>}/>
              <Route path="contact"  element={<Contact/>}/>
              <Route path="/cart" element={<Cart/>}/>
                <Route  path="/cart/pago/:id" element={<Compra/>}/>
          </Routes>
          <Footer/>

      </CustomProvider> 
    </BrowserRouter>
     );
}

export default App;
