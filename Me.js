import React from "react";
import { useSelector } from "react-redux";

function Me() {
  const data = useSelector((state) => state.login.value);
  return (
    <div
      className="me"
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid purple",
        width: "500px",
        position: "relative",
        left: "35%",
        borderRadius: "10px",
        marginTop: "3%",
        boxShadow: "0px 0px 25px aqua",
      }}
    >
      <img
        src="https://i.pinimg.com/originals/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.png"
        alt=""
        style={{
          height: "150px",
          width: "150px",
          marginTop: "20px",
          marginLeft: "25%",
        }}
      />
      <hr />
      <table
        className="table"
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <tr>
          <td>
            <h4>
              <i>UserName :</i>
            </h4>
          </td>
          <td>
            <h5>{data.username}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h4>
              <i>Email :</i>
            </h4>
          </td>
          <td>
            <h5>{data.email}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h4>
              <i>Password :</i>
            </h4>
          </td>
          <td>
            <h5>{data.password}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h4>
              <i>Age :</i>
            </h4>
          </td>
          <td>
            <h5>{data.age}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h4>
              <i>Phone :</i>
            </h4>
          </td>
          <td>
            <h5>{data.phone}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h4>
              <i>Gender :</i>
            </h4>
          </td>
          <td>
            <h5>{data.gender}</h5>
          </td>
        </tr>
      </table>
      <div className="button">
        <button
          style={{
            position: "relative",
            left: "35%",
            bottom: "10px",
            backgroundColor: "rgb(206, 229, 250)",
            borderRadius: "10px",
          }}
        >
          <a
            href="http://localhost:3000/login"
            style={{
              textDecoration: "none",
              color: "Black",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Want to Edit
          </a>
        </button>
      </div>
    </div>
  );
}

export default Me;
