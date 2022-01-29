import NavBar from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard.js';
import Home from './pages/home.js';
import Cart from './components/Cart/Cart.js';
import Footer from './pages/footer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cart/>
      <Home/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
