import React from "react";
//Video
/* import ReactPlayer from 'react-player'; */
//Components
import Thumb from "../Thumb";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//Image
import NoImage from "../../images/no_image.jpg";
//Styles
import {Wrapper , Content,Text, Video} from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => {
    return(
        
    <Wrapper backdrop= {movie.backdrop_path}>
        <Content>
            <Thumb
            image={
                movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
            />
            <Text>
                <h1>{movie.title} </h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div>
                        <h3>
                            RATING 
                        </h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                        {movie.directors.map(director =>(
                            <p key= {director.credit_id}>{director.name}</p>

                        ))}
                    </div>
                </div>
                <Video src="https://www.youtube.com/embed/${video.key}"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    
                   {/*  <div>{`https://youtube.com/watch?v=${video[0].key}`}</div> */}
                    
                </Video>
            </Text>
           
        </Content>
    </Wrapper>
    )}

export default MovieInfo;