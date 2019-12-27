import React from "react";
import "./Navigation.css";
import Selection from "./Selection";
import FilterSlider from "./FilterSlider";
import SearchButton from "./SearchButton";

class Navigation extends React.Component {
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.props.setGenres(data.genres))
      .catch(error => console.log(error));
  }

  render() {
    const {
      genre,
      genres,
      onGenreChange,
      onChange,
      year,
      rating,
      runtime
    } = this.props;
    return (
      <section className="navigation">
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />

        <FilterSlider data={year} onChange={onChange} />
        <FilterSlider data={rating} onChange={onChange} />
        <FilterSlider data={runtime} onChange={onChange} />

        <SearchButton onClick={this.props.onSearchButtonClick} />
      </section>
    );
  }
}

export default Navigation;
