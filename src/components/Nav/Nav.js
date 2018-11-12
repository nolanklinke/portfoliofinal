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
        <span class="navbar-toggle" onClick={this.toggleNav}>
          <i class="fas fa-bars" />
        </span>
        <a href="/portfoliofinal/" className="logo">
          <img alt="donut" src="favicon.ico" />
        </a>
        {this.state.showNav ? (
          <ul className="main-nav" id="js-menu">
            <li>
              <a href="portfoliofinal/about" className="nav-links">
                About
              </a>
            </li>
            <li>
              <a href="portfoliofinal/portfolio" className="nav-links">
                Portfolio
              </a>
            </li>
            <li>
              <a href="portfoliofinal/resume" className="nav-links">
                Resume
              </a>
            </li>
          </ul>
        ) : null}
      </nav>
    );
  }
}

export default Nav;
