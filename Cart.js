import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Tools/CartSlice";

function Cart() {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeCart = (e) => {
    dispatch(remove(e));
  };
  return (
    <div
      className="cart"
      style={{ display: "flex", justifyContent: "center", alignItems: "ceter" }}
    >
      {" "}
      <div className="Pizza row">
        {product.map((piz) => {
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
                <div className="price" name="price">
                  $<h3>{piz.price}</h3>
                </div>
              </div>
              <hr />
              <div className="buttons">
                <div className="add-to-cart">
                  <button
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={() => {
                      removeCart(piz.id);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
