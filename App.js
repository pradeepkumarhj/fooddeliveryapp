import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/Validation.js/LoginForm";
import PizzaHut from "./components/Pizza/Pizza";
import BurgerHut from "./components/Burger/Burger";
import BiryaniHut from "./components/Biryani/BiryaniHut";
import KingRolls from "./components/Rolls/KingRolls";
import Cake from "./components/Cake/Cake";
import Cart from "./Cart/Cart";
import Me from "./components/Validation.js/Me";
import Footer from "./components/Footer";
// import { Pizza } from "./Api/ApiCall";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="pizza" element={<PizzaHut />} />
          <Route path="burger" element={<BurgerHut />} />
          <Route path="biryani" element={<BiryaniHut />} />
          <Route path="cake" element={<Cake />} />
          <Route path="rolls" element={<KingRolls />} />
        </Route>
        <Route path="login" element={<LoginForm />} />
        <Route path="cart" element={<Cart />} />
        <Route path="me" element={<Me />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
