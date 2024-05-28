import React from "react";
import Head from "./Head";
import "./header.css";

const Header = () => {
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="line" />

            <p style={{ margin: "0 10px", Color: "#000" }}>
              THE FIRST WEALTH IS HEALTH
            </p>

            <div className="line" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
