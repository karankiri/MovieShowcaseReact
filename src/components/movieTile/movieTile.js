import React, { Component } from "react";
import * as data from '../../data.json';

class movieTile extends Component {
  state = {
    value: "this was created without using create-react-app"
  };
  constructor(props) {
    super(props);
    if(props.movie.Poster === "N/A") {
      props.movie.Poster = data.defaultMoviePoster;
    }
    this.state = props.movie;
  }
  render() {
    return (
        <div className="movieContainer" data-id={this.state.imdbID}>
            <div className="posterContainer">
                <img src={this.state.Poster} alt={this.state.Title + " Poster"} title={this.state.Title}/>
            </div>
            <div className="textContainer">
                <div className="titleText">{this.state.Title}</div>
                <div className="yearText">{this.state.Year}</div>
            </div>
      </div>
    );
  }
}
export default movieTile;