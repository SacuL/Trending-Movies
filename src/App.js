import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/Main";
import Movie from "./movie/Movie";
import NotFound from "./NotFound";

class App extends React.Component {
  state = {
    distanceToTop: 0,
    showFilter: false
  };

  constructor(props) {
    super(props);
    this.onClickFilter = this.onClickFilter.bind(this);
  }

  handleScroll() {
    this.setState({ distanceToTop: window.pageYOffset });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  onClickFilter() {
    this.setState({ showFilter: !this.state.showFilter });
  }

  render() {
    return (
      <BrowserRouter>
        <div className={this.state.distanceToTop > 250 ? "down" : ""}>
          <Header onClickFilter={this.onClickFilter} className="clone" />
          <Header onClickFilter={this.onClickFilter} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Main onClickFilter={this.onClickFilter} showFilter={this.state.showFilter} />}
            />
            <Route path="/movie/:movieId" component={Movie} />
            {/* <Route component={NotFound} /> */}
            <Route render={() => <Main onClickFilter={this.onClickFilter} showFilter={this.state.showFilter} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
