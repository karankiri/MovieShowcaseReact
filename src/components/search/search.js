import React, { Component } from "react";

class Search extends Component {
  state = {
    value: "this was created without using create-react-app"
  };
  render() {
    return (
        <header>
            <div className="topRow">
                <div className="buttonContainer">
                    <button className="tabSwtich appButton" id="movieShowcaseButton"><span>My Movie Library</span></button>
                    <button className="tabSwtich appButton" id="searchTabButton"><span>Search new movies</span></button>

                    <select name="filter" className="appButton" id="filter">
                        <option value="0">No Filter</option>
                        <option value="1">Title</option>
                        <option value="2">Year</option>
                    </select>
                </div>
                <div className="searchContainer">
                    <input type="text" name="Search" placeholder="Enter search term here"/>
                </div>
            </div>
        </header>
    );
  }
}
export default Search;