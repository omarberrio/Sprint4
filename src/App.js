
import './App.css';
import Product from './components/Product';
import ButtonAppBar from "./components/NavBar"
import Products from './components/Products';
import CheckoutPage from './components/CheckOutCard';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      
      <Products/>
      {/* <Product/> */}
    </div>
  );
}

export default App;
