import Product from "./pages/Product";
import HomePage from "./pages/HomePage";
import ProductLists from "./pages/ProductLists";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { Navigate, useLocation } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import UserInfo from "./pages/UserInfo";
import Favorite from "./pages/Favorite";
import ScrollToTop from "./ScrollToTop";



function App() {
  const user = useSelector((state) => state.user.currentUser);


  return (
    <BrowserRouter >
    <ScrollToTop>
      <Routes>

        <Route path="/"  element={<HomePage/>} />
        <Route path="/products" element={<ProductLists/>} />
        <Route path="/products/:category" element={<ProductLists/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/login" element={user ? <Navigate replace to="/"/> : <Login/> } /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/update" element={<UserInfo/>} />
        <Route path="/favorite" element={user ? <Favorite/> : <Navigate replace to="/"/>}/>
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
