import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      showNav: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(event) {
    event.preventDefault();

    if (!this.state.showNav) {
      this.setState({
        showNav: true
      });
    } else {
      this.setState({
        showNav: false
      });
    }
  }

  componentDidMount() {
    if (window.innerWidth > 768) {
      this.setState({
        showNav: true
      });
    }
  }

  render() {
    return (
      <nav className="navbar">
        <span className="navbar-toggle" onClick={this.toggleNav}>
          <i className="fas fa-bars" />
        </span>
        <a href="/" className="logo">
          <img alt="donut" src="favicon.ico" />
        </a>
        {this.state.showNav ? (
          <ul className="main-nav" id="js-menu">
            <li>
              <a href="/about" className="nav-links">
                About
              </a>
            </li>
            <li>
              <a href="/portfolio" className="nav-links">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-links">
                Contact
              </a>
            </li>
          </ul>
        ) : null}
      </nav>
    );
  }
}

export default Nav;
