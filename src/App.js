import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import ConfirmationForm from './components/Checkout/ConfirmationForm'
import Details from './components/Details/Details';
import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/'><Products/></Route>
      <Route path='/cart'><Cart/></Route>
      <Route path='/confirm'><ConfirmationForm/></Route>
      <Route path='/product/:id'><Details/></Route>
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
