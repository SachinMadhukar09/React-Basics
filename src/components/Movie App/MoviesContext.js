import React, { Component, createContext } from "react";

export const Moviesprovider = React.createContext();

class MoviesContext extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      addmovie: this.addmovie,
    };
  }

  addmovie = (movie) => {
    this.setState({movies:[...this.state.movies,movie]})
  };
  render() {
    return (
      <Moviesprovider.Provider value={{ ...this.state }}>
        {this.props.children}
      </Moviesprovider.Provider>
    );
  }
}

export default MoviesContext;
