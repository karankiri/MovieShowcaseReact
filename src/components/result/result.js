import React, { Component } from "react";
import MovieTile from "../movieTile/movieTile";
const noResultText = "No results";

class Result extends Component {
  state = {
    value: noResultText
  };
  constructor(props) {
    super(props);
    console.log(props.movies);
    if(props.movies && props.movies.length > 0) {
        this.state.value = this.props.movies.map(item => (
            <MovieTile movie={item} key={item.imdbID} />
        ));
    }
  }
  componentWillReceiveProps({movies}) {
    if(movies && movies.length > 0) {
        this.setState({
            value: movies.map(item => (
                <MovieTile movie={item} key={item.imdbID} />
            ))
        });
    } else {
        this.setState({
            value: noResultText
        })
    }
    
  }
  render() {
    return (
      <main>
        <div className="searchResults">
          {this.state.value}
        </div>
      </main>
    );
  }
}
export default Result;