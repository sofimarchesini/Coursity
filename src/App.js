import NavBar from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard.js';
import Home from './pages/home.js';
import Cart from './components/Cart/Cart.js';
import Counter from './components/counter.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cart/>
      <Home/>
      <Counter/>
      <Dashboard/>
    </div>
  );
}

export default App;
