import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  

  const search = (q) => {
    console.log({ q });
  };

  console.log({ popularMovies: popularMovies });

  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE MANIA</h1>
        <input
          placeholder="Cari Film Kesayangan..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">CONTOH PERTAMA</div>
            <img className="Movie-Image" src="" />
            <div className="Movie-date">11-22-2024</div>
            <div className="Movie-rate">8.9</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
