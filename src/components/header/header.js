import React, { Component } from "react";

class Header extends Component {
  state = {
    value: "this was created without using create-react-app"
  };
  constructor(props) {
      super(props);
      this.handleMovieShowcaseClick = this.handleMovieShowcaseClick.bind(this);
      this.handleSearchMovieClick = this.handleSearchMovieClick.bind(this);
      this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
      this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleMovieShowcaseClick(e) {
    e.preventDefault();
    this.props.showMovieshowcaseClick();
    console.log("movieshowcase clicked");
  };

  handleSearchMovieClick(e) {
    e.preventDefault();
    this.props.showSearchClick();
    console.log("search movie clicked");
  };

  handleSearchInputChange(e) {
    e.preventDefault();
    this.props.searchInputChange(e.target.value);
  };

  handleFilterChange(e) {
    e.preventDefault();
    this.props.filterChange(e.target.value);
  };

  render() {
    return (
        <header>
            <div className="topRow">
                <div className="buttonContainer">
                    <button className="tabSwtich appButton" id="movieShowcaseButton" onClick={this.handleMovieShowcaseClick}><span>My Movie Library</span></button>
                    <button className="tabSwtich appButton" id="searchTabButton" onClick={this.handleSearchMovieClick}><span>Search new movies</span></button>

                    <select name="filter" className="appButton" id="filter" onChange={this.handleFilterChange}>
                        <option value="0">No Filter</option>
                        <option value="1">Title</option>
                        <option value="2">Year</option>
                    </select>
                </div>
                <div className="searchContainer">
                    <input type="text" name="Search" placeholder="Enter search term here" onChange={this.handleSearchInputChange}/>
                </div>
            </div>
        </header>
    );
  }
}
export default Header;