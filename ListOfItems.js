import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import { Link, Routes, Route } from "react-router-dom";
// import PizzaHut from "./Pizza/Pizza";
// import BurgerHut from "./Burger/Burger";
// import BiryaniHut from "./Biryani/BiryaniHut";
// import Cake from "./Cake/Cake";
// import KingRolls from "./Rolls/KingRolls";

function ListOfItems() {
  return (
    <div className="list_of_items">
      <div className="items">
        <Link to="pizza">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
            alt="/"
          />
          <p>Pizza</p>
        </Link>
      </div>
      <Link to="burger">
        <div className="items">
          <img
            src="https://b.zmtcdn.com/data/dish_photos/9fb/df6bf37f9739b6b481822e4b9385c9fb.jpg"
            alt="/"
          />
          <p>Burger</p>
        </div>
      </Link>
      <Link to="biryani">
        <div className="items">
          <img
            src="https://b.zmtcdn.com/data/pictures/3/18717053/28cbdfe2f65f3077ed32c936f5ea1db5.jpg"
            alt="/"
          />
          <p>Biryani</p>
        </div>
      </Link>
      <Link to="cake">
        <div className="items">
          <img
            src="https://b.zmtcdn.com/data/dish_photos/000/a36d5e6dd84c8a6401b38268dfcdf000.jpg?output-format=webp"
            alt="/"
          />
          <p>Cake</p>
        </div>
      </Link>
      <Link to="rolls">
        <div className="items">
          <img
            src="https://b.zmtcdn.com/data/dish_photos/cd3/567c07718ac4978483bda070e8049cd3.jpg"
            alt="/"
          />
          <p>Rolls</p>
        </div>
      </Link>
    </div>
  );
}

export default ListOfItems;
