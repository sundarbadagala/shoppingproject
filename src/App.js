import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <Navbar/>
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
