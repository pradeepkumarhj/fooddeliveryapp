import React from "react";
import { Rolls } from "../../Api/ApiCall";
import "../Pizza/Pizza.css";
import { useDispatch } from "react-redux";
import { add } from "../../Tools/CartSlice";

function KingRolls() {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="Pizza row">
      {Rolls.map((piz) => {
        return (
          <div className="card" style={{ width: "25rem" }}>
            <img src={piz.image_url} className="card-img-top" alt="..." />
            <h4>{piz.discount}</h4>
            <div className="card-body">
              <h3>{piz.image_name}</h3>
              <p className="card-rating">{piz.rating} *</p>
            </div>
            <div className="details">
              <div className="card-desc">{piz.desc}</div>
              <div className="price" name="price">
                $<h3>{piz.price}</h3>
              </div>
            </div>
            <hr />
            <div className="buttons">
              <div className="add-to-cart">
                <button onClick={() => addToCart(piz)}>Add to cart</button>
              </div>
              <div className="buy-now ">
                <button className="">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default KingRolls;
