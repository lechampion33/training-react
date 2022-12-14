import React, { useContext } from "react";
import Movie from "./movie";
import MovieContext from "./movieContext";

const MovieList =()=>{
    const[movies, setMovies] =useContext(MovieContext);
    return(
        <div>
            {movies.map((movies)=>(
                <Movie name={movies.name}price={movies}key={movies.id}/>
            ))}
        </div>
    )
}
export default MovieList