import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
      super(props);
      this.handleMovieShowcaseClick = this.handleMovieShowcaseClick.bind(this);
      this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
      this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleMovieShowcaseClick(e) {
    e.preventDefault();
    this.props.showMovieshowcaseClick();
    console.log("movieshowcase clicked");
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
                    <button className="tabSwtich appButton" id="movieShowcaseButton" onClick={this.handleMovieShowcaseClick}><span>MovieLibrary</span></button>

                    
                </div>
                <div className="searchContainer">
                    <input type="text" name="Search" placeholder="Enter search term here" onChange={this.handleSearchInputChange}/>
                </div>
                <div className="filterContainer">
                    <select name="filter" className="appButton" id="filter" onChange={this.handleFilterChange}>
                        <option value="0">No Filter</option>
                        <option value="1">Title</option>
                        <option value="2">Year</option>
                    </select>
                </div>
                
            </div>
        </header>
    );
  }
}
export default Header;