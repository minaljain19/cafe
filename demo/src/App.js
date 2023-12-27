import logo from "./logo.svg";
import "./App.css";
import Dash from "./components/Dash";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import EachItem from "./components/EachItem";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Orders from "./components/Orders";
import Drawer from "./components/Drawer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dash />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/item/:name" element={<EachItem />}></Route>
      </Routes>
    </>
  );
}

export default App;
