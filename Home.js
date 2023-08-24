import React from "react";
import { Link, Outlet } from "react-router-dom";
// import PizzaHut from "./components/Pizza/Pizza";
// import BurgerHut from "./components/Burger/Burger";
// import BiryaniHut from "./components/Biryani/BiryaniHut";
// import KingRolls from "./components/Rolls/KingRolls";
// import Cake from "./components/Cake/Cake";
// import ListOfItems from "./components/ListOfItems";
// import { Link, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1></h1>
      <div className="list_of_items">
        <Link to="pizza">
          <div className="items">
            <img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" />
            <p>Pizza</p>
          </div>
        </Link>
        <Link to="burger">
          <div className="items">
            <img src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" />
            <p>Burger</p>
          </div>
        </Link>
        <Link to="biryani">
          <div className="items">
            <img src="https://b.zmtcdn.com/data/dish_photos/f8a/20042ceab67859cbc6a7de58e4cabf8a.jpg" />
            <p>Biryani</p>
          </div>
        </Link>
        <Link to="cake">
          <div className="items">
            <img src="https://b.zmtcdn.com/data/dish_photos/056/6b9d00c9a897b6b408794ab98c5e7056.jpg?output-format=webp" />

            <p>Cake</p>
          </div>
        </Link>
        <Link to="rolls">
          <div className="items">
            <img src="https://b.zmtcdn.com/data/dish_photos/cd3/567c07718ac4978483bda070e8049cd3.jpg" />
            <p>Rolls</p>
          </div>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Home;
