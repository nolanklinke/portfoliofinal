import React from "react";
import "./Card.css";

const Card = props => (
  <div>
    <a href={props.href}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>{props.name}</h1>
            <p>{props.shortDescription}</p>
            <h3>Built With:</h3>
            <h4>{props.technoUsed}</h4>
          </div>
          <div className="flip-card-back">
            <img className="projectIMG" src={props.image} alt={props.name} />
          </div>
        </div>
      </div>
    </a>
  </div>
);
export default Card;
