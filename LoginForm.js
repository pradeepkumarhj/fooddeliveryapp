import React, { useState } from "react";
import { Mylogin } from "../../Tools/FoodSlice";
import { useDispatch } from "react-redux";
import "./Login.css";

function LoginForm() {
  const [user, setUser] = useState([]);
  // const data = useSelector((state) => state.login.value);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Mylogin(user));
    alert("Login form is successfully submited");
  };
  return (
    <div className="login-container">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3%",
          color: "cadetblue",
        }}
      >
        <i>Login Page</i>
      </h1>
      <form action="" onSubmit={handleSubmit} className="form">
        <div className="fields">
          <label>UserName :</label>

          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div className="fields">
          <label>Email :</label>

          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="fields">
          <label>Password :</label>

          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="fields">
          <label>Age :</label>

          <input type="number" name="age" onChange={handleChange} />
        </div>
        <div className="fields">
          <label>Phone :</label>

          <input type="number" name="phone" onChange={handleChange} />
        </div>
        <label
          style={{
            position: "relative",
            left: "25%",
            marginBottom: "1%",
            marginTop: "3%",
          }}
        >
          Gender :
        </label>
        <div className="field">
          <div className="gender">
            <input
              type="radio"
              name="gender"
              id="Male"
              value="Male"
              onChange={handleChange}
            />
            <label>Male </label>
          </div>
          <div className="gender">
            <input
              type="radio"
              name="gender"
              id="Female"
              value="Female"
              onChange={handleChange}
            />
            <label>Female </label>
          </div>
          <div className="gender">
            <input
              type="radio"
              name="gender"
              id="Others"
              value="others"
              onChange={handleChange}
            />
            <label>Others </label>
          </div>
        </div>
        <div className="fields">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
