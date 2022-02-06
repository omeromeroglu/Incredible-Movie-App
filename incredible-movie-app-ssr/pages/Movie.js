import React from "react";
/* import { useParams } from "react-router-dom"; */

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//Components
import Grid from "../components/Grid";
import Spinner from "../components/Spinner";
import BreadCrumb from "../components/BreadCrumb";
import MovieInfo from "../components/MovieInfo";
//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
    const {movieId} = useParams()

    const{state:movie, loading, error,videoState} = useMovieFetch(movieId);
    //console log first item's key of videoState
     console.log(videoState.results)
    
    if(loading) return <Spinner/>
    if(error) return <div>Something went wrong...</div>


    return(
        <>
            <BreadCrumb movieTitle ={movie.original_title} />
            <MovieInfo movie={movie} />
        </>

    )
}

export default Movie;