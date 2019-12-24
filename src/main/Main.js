import React from "react";
import "./Main.css";
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";

class Main extends React.Component {
  state = {
    moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,

    url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
    genre: "Action",
    genres: [],
    year: {
      label: "year",
      min: 1990,
      max: 2020,
      step: 1,
      value: { min: 2015, max: 2020 }
    },
    rating: {
      label: "rating",
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: "runtime",
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    }
  };

  setGenres = genres => {
    this.setState({ genres });
  };

  onGenreChange = event => {
    this.setState({ genre: event.target.value });
  };

  onChange = data => {
    this.setState({
      [data.type]: {
        ...this.state[data.type],
        value: data.value
      }
    });
  };

  generateUrl = () => {
    const { genres, year, rating, runtime } = this.state;
    const selectedGenre = genres.find(genre => genre.name === this.state.genre);
    const genreId = selectedGenre.id;

    const moviesUrl =
      `https://api.themoviedb.org/3/discover/movie?` +
      `api_key=${process.env.REACT_APP_TMDB_API_KEY}&` +
      `language=en-US&sort_by=popularity.desc&` +
      `with_genres=${genreId}&` +
      `primary_release_date.gte=${year.value.min}-01-01&` +
      `primary_release_date.lte=${year.value.max}-12-31&` +
      `vote_average.gte=${rating.value.min}&` +
      `vote_average.lte=${rating.value.max}&` +
      `with_runtime.gte=${runtime.value.min}&` +
      `with_runtime.lte=${runtime.value.max}&` +
      `page=1&`;

    this.setState({ moviesUrl });
  };

  onSearchButtonClick = () => {
    this.generateUrl();
  };

  render() {
    return (
      <section className="main">
        <Navigation
          onChange={this.onChange}
          onGenreChange={this.onGenreChange}
          setGenres={this.setGenres}
          onSearchButtonClick={this.onSearchButtonClick}
          {...this.state}
        />
        <Movies url={this.state.moviesUrl} />
      </section>
    );
  }
}

export default Main;
