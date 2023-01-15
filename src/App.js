import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=6e498552";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        searchMovie("Batman");
    },[]);

    const searchMovie = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();

        setMovie(data.Search);
        console.log(data.Search);
    }

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    value={searchTerm}
                    placeholder="Search for movie"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovie(searchTerm)}
                />
            </div>

            { movie.length > 0 ? (
                    <div className="container">
                        {movie.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h3>No movie found</h3>
                    </div>
                )
            }
        </div>
    );
}

export default App;