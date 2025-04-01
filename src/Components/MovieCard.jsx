import "../styles/MovieCard.css"
import NoImageAvailable from "../assets/NoImageAvailable.png";
import Plus from "../assets/plus.svg?react"
import { useState } from "react";

const MovieCard = (props) => {
    const movieInfo = props.movieInfo;
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [isAddedToWatchList, setisAddedToWatchList] = useState(false);
    return (
        <div className="movieCard">
            {/* <div className="movieCardTitle">
                <span>{movieInfo.Title}</span>
            </div> */}
            
            <div className="DivPoster">
                
                <button className={isAddedToWatchList ? "addButton activeButton" : "addButton"}><Plus width={30} height={30} fill={"#EEE"} onClick={()=> setisAddedToWatchList(!isAddedToWatchList)}/></button>
                <a
                        target="_blank"
                        href={`https://www.imdb.com/title/${movieInfo.imdbID}`}
                    >
                <div className="movieInfo">
                    <b><span>{movieInfo.Title}</span></b><br />
                    <span>{movieInfo.Year}</span>
                </div>
                <div className="DivPosterFlex">
                    
                        <img
                            width={200}
                            className="poster"
                            src={movieInfo.Poster !== "N/A" && isImageLoaded && !error ? movieInfo.Poster : NoImageAvailable}
                            onLoad={() => setIsImageLoaded(true)}
                            onError={() => setError(true)}
                        />
                   
                </div>
                </a>
            </div>
            

            {/* Przycisk dodawania w prawym górnym rogu */}
        </div>
    );
}

export default MovieCard;