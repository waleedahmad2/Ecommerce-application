
import Product from "./pages/Product";
import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import Products from "./components/Products";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />


      </Routes>
    </Router>
  );

}

export default App;
