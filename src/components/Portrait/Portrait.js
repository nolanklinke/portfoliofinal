import React from "react";
import "./Portrait.css";
import meJPG from "./me.jpg";

const Portrait = () => (
  <div>
    <img className="me" src={meJPG} alt="Nolan Klinke" />
  </div>
);

export default Portrait;
