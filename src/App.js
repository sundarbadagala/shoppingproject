import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import {Provider} from 'react-redux'
import store from './redux/store'


function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Products/>
      <Cart/>
    </Provider>
  );
}

export default App;
