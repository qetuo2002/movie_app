import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

class App extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24-0aPo40r7Q5hM-ZrOl8cPGVnMR3Tq-YgIQqozLCE2ECPNMAsg"
          },
          {
            title: "Full Metal Jacket",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuhb82s2uxh0qAp8uKusVufQzEypjgVLCgBojmsG03tA1kNVH5g"
          },
          {
            title: "Oldboy",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24-0aPo40r7Q5hM-ZrOl8cPGVnMR3Tq-YgIQqozLCE2ECPNMAsg"
          },
          {
            title: "Star Wars",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuhb82s2uxh0qAp8uKusVufQzEypjgVLCgBojmsG03tA1kNVH5g"
          },
          {
            title: "Trainspotting",
            poster:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuhb82s2uxh0qAp8uKusVufQzEypjgVLCgBojmsG03tA1kNVH5g"
          }
        ]
      });
    }, 5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
