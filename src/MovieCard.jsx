import React from "react";

const MovieCard = ({movies}) => {
    return(
<div className="movie">
    <div><p>{movies.Year}</p></div>
    <div><img src={movies.Poster} alt={movies.Title}></img></div>
    <div><span>{movies.Type}</span></div>
</div>);
}

export default MovieCard;