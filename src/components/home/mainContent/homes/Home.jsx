import React from "react";

import Popular from "../popular/Popular";
import Ppost from "../Ppost/Ppost";
import "./style.css";

const Homes = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Ppost />
          </section>
        </div>
      </main>
    </>
  );
};

export default Homes;
