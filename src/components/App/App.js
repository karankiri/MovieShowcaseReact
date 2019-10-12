import React, { Component } from "react";
import Header from '../header/header';
import Footer from '../footer/footer';
import Result from '../result/result';
import "../../scss/main.scss";
import * as data from '../../data.json';


class App extends Component {

  constructor() {
    super();
    this.showMovieShowcase = this.showMovieShowcase.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.ApiURL = "https://www.omdbapi.com/?apikey=45048e3e&type=movie&s=";

    this.state = {
      movies: data.movies,
      filter: 0
    };
  }
  render() {
    this.sortMovies();
    return (
      <div className="container">
        <Header showMovieshowcaseClick={this.showMovieShowcase} searchInputChange={this.searchMovies} filterChange={this.filterMovies} />

        <Result movies={this.state.movies} />
        <Footer />
      </div>

    );
  }
  showMovieShowcase() {
    console.log("movieshowcase clicked app compo");
    this.setState({
      movies: data.movies,
      filter: this.state.filter
    });
  }

  searchMovies(value) {
    console.log("search input changed app compo: " + value);
    var url = this.ApiURL + value;

    let controller = new AbortController();
    controller.abort(); // Cancel the previous request
    let abortController = new AbortController();
    const signal = abortController.signal;

    fetch(url, {
        method: 'get',
        signal: signal,
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.Search || [],
          filter: this.state.filter
        });
      });
  }

  filterMovies(value) {
    let currentMovies = this.state.movies;
    let filter = this.state.filter;
    if (value === "1") {
      filter = 1;
    } else if (value === "2") {
      filter = 2;
    } else {
      filter = 0;
    }

    this.setState({
      movies: currentMovies || [],
      filter: filter
    });
  }

  sortMovies() {
    if (this.state.filter !== 0) {
      this.state.movies.sort((movie1, movie2) => {
        var value1, value2;
        if (this.state.filter === 1) {
          value1 = movie1.Title.toLowerCase();
          value2 = movie2.Title.toLowerCase();
        } else if (this.state.filter === 2) {
          value1 = parseInt(movie1.Year);
          value2 = parseInt(movie2.Year);
        }
        if (value1 < value2) //sort string ascending
          return -1;
        if (value1 > value2)
          return 1;
        return 0;
      });
    } else {
      this.shuffleArray(this.state.movies);
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
export default App;