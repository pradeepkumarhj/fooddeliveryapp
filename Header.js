import React from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";
// import LoginForm from "./Validation.js/LoginForm";
import { useSelector } from "react-redux";

function Header() {
  const carProducts = useSelector((state) => state.cart);
  return (
    <div className="header">
      <h2 style={{ fontSize: "40px" }}>
        <i>
          <Link to="/">Food App</Link>
        </i>
      </h2>
      <div>
        <input
          type="search"
          name="input"
          placeholder="Search for cuisine or dish"
        />
      </div>
      {/* <Link to="/login">Login</Link>
       */}
      <a href="">
        <Link to="login">Login</Link>
      </a>

      <div className="bag" style={{ display: "flex" }}>
        <h4>
          <i>
            <Link to="cart">MyBag</Link>
          </i>
        </h4>
        <p
          style={{
            backgroundColor: "red",
            borderRadius: "50%",
            width: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          {carProducts.length}
        </p>
      </div>
      <h2>
        <i>
          <Link to="me">Me</Link>
        </i>
      </h2>
    </div>
  );
}

export default Header;
