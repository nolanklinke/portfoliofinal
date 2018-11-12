import React from "react";

import Card from "../../components/Card";
import Nav from "../../components/Nav";
import projects from "../../utils/projects.json";
import "./Portfolio.css";

class Portfolio extends React.Component {
  state = {
    projects
  };
  render() {
    return (
      <div className="portfolio-view">
        <Nav />
        <div className="card-content">
          {this.state.projects.map(card => (
            <Card
              href={card.url}
              image={card.image}
              alt={card.name}
              name={card.name}
              shortDescription={card.shortDescription}
              technoUsed={card.technoUsed}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
