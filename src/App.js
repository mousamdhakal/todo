import React, { Component } from "react";
import Todos from "./Components/Todos";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: " ",
      showSearchResult: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
    if (this.state.searchText) {
      this.setState({
        showSearchResult: true,
      });
    }
  };

  render() {
    return (
      <div>
        <header className="header">
          <div className="container clearfix">
            <h1 className="header__brand">
              <a className="header__text" href="/">
                Baki Kaam
              </a>
            </h1>
            <SearchBar handleChange={this.handleChange} />
          </div>
        </header>
        <section className="todos">
          <div className="container">
            <Todos
              show={this.state.showSearchResult}
              searchText={this.state.searchText}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
