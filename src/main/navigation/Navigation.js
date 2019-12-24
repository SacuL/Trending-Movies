import React from "react";
import "./Navigation.css";
import Selection from "./Selection";

class Navigation extends React.Component {
  state = {
    genre: "comedy"
  };

  setGenre = value => {
    this.setState({ genre: value });
  };

  render() {
    return (
      <section className="navigation">
        <Selection genre={this.state.genre} onGenreChange={this.setGenre} />
      </section>
    );
  }
}

export default Navigation;
