import React, { Component } from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Result from '../result/Result';
import "../../scss/main.scss";
import * as data from '../../data.json';


class App extends Component {
  
  constructor(){
    super();
    this.showMovieShowcase = this.showMovieShowcase.bind(this);
    this.showSearchMovie = this.showSearchMovie.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.ApiURL = "https://www.omdbapi.com/?apikey=45048e3e&type=movie&s=";
    
    this.state = {
      movies: data.movies
    };
  }
  render() {
    return (
      <div className = "container">
        <Header showMovieshowcaseClick={this.showMovieShowcase} showSearchClick={this.showSearchMovie} 
                searchInputChange={this.searchMovies} filterChange={this.filterMovies}/>
        
          <Result movies={this.state.movies}/>
        <Footer />
      </div>

    );
  }
  showMovieShowcase() {
    console.log("movieshowcase clicked app compo");
    this.setState({
      movies: data.movies
    });
  }

  showSearchMovie(){
    console.log("search movie clicked app compo");
    this.setState({
      movies: []
    });
    console.log(this.state.movies);
  }

  searchMovies(value) {
    console.log("search input changed app compo: " + value);
    var url =  this.ApiURL + value;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        this.setState({
          movies: data.Search || []
        });
    })
  }

  filterMovies(value){
    let currentMovies= this.state.movies;
        if(value !== "0") {
          currentMovies.sort((movie1, movie2) => {
              var value1, value2;
              if(value==="1") {
                  value1 = movie1.Title.toLowerCase();
                  value2 = movie2.Title.toLowerCase();
              } else if(value==="2") {
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
          this.shuffleArray(currentMovies);
      }

      this.setState({
        movies: currentMovies || []
      });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
export default App;