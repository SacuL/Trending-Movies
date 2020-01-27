// Header.js

import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className={this.props.className}>
        <img
          class="logoOnly"
          alt="Trending Movies Logo"
          src="https://github.com/SacuL/Trending-Movies/raw/master/public/logo-86-78.png"
        ></img>
        <img
          class="logoText"
          alt="Trending Movies Logo"
          src="https://github.com/SacuL/Trending-Movies/raw/master/public/main-logo-200-100.png"
        ></img>
        <img onClick={this.props.onClickFilter} class="filterIcon" alt="Filter" src="filter_icon.svg"></img>
        <h1>What's hot NOW?!</h1>
        <div></div>
      </header>
    );
  }
}

export default Header;
