import './App.css';
import Navigation from './components/navbar';
import Home from './components/home';
import Cart from './components/cart';
import { BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import { ShopContextProvider } from './components/shop-context';
import Login from './components/login';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
