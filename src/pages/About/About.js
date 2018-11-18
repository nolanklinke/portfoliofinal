import React from "react";
import Nav from "../../components/Nav";

import Portrait from "../../components/Portrait/Portrait";
import Aboutme from "../../components/Aboutme/Aboutme";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-view">
        <Nav />
        <div className="about-content">
          <Portrait />
          <Aboutme />
        </div>
      </div>
    );
  }
}
export default About;
