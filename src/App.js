import './App.css';
import ButtonAppBar from "./components/NavBar"
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <ButtonAppBar />
        <Routes>
          <Route path="/checkout-page" element={<CheckoutPage />} />
          <Route path="/" element={<Products />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
