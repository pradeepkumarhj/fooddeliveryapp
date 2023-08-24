import React from "react";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        color: "#79b8f3",
        backgroundColor: "#1a242f",
        marginTop: "20px",
        width: "100%",
        position: "sticky",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          position: "relative",
          top: "15px",
        }}
      >
        <h5>Home</h5>
        <h5>Features</h5>
        <h5>Prices</h5>
        <h5>FAQ's</h5>
        <h5>About</h5>
      </div>
      <hr />
      <h5 style={{ position: "relative", left: "25%" }}>
        &copy;2023 Company Inc
      </h5>
    </div>
  );
}

export default Footer;
