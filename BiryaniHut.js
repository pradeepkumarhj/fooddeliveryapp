import React from "react";
import { Biryani } from "../../Api/ApiCall";
import "../Pizza/Pizza.css";
import { add } from "../../Tools/CartSlice";
import { useDispatch } from "react-redux";

function BiryaniHut() {
  const dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(add(e));
  };
  return (
    <div className="Pizza row">
      {Biryani.map((piz) => {
        return (
          <div className="card" style={{ width: "25rem" }} key={piz.id}>
            <img src={piz.image_url} className="card-img-top" alt="..." />
            <h4>{piz.discount}</h4>
            <div className="card-body">
              <h3>{piz.image_name}</h3>
              <p className="card-rating">{piz.rating} *</p>
            </div>
            <div className="details">
              <div className="card-desc">{piz.desc}</div>
              <div className="price">
                $<h3>{piz.price}</h3>
              </div>
            </div>
            <hr />
            <div className="buttons">
              <div className="add-to-cart">
                <button
                  onClick={() => {
                    addToCart(piz);
                  }}
                >
                  Add to cart
                </button>
              </div>
              <div className="buy-now">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BiryaniHut;
