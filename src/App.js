import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
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
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
