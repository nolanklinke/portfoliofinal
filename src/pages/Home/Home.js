import React from "react";
import Nav from "../../components/Nav";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-view">
        <Nav />
        <div className="home-content">
          <h1>Nolan Klinke</h1>
          <p id="homeP">Full Stack Web Developer.</p>
        </div>
      </div>
    );
  }
}

export default Home;
