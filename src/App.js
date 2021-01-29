import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Cart from './Components/Pages/Cart';
import Details from './Components/Pages/Details';
import Default from './Components/Pages/Default';
import ProductList from './Components/Pages/ProductList';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
