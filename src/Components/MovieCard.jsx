import "../styles/MovieCard.css"
import NoImageAvailable from "../assets/NoImageAvailable.png";
import Plus from "../assets/plus.svg?react"
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const MovieCard = (props) => {
    const movieInfo = props.movieInfo;
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [isAddedToWatchList, setisAddedToWatchList] = useState(false);
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, {once: true});
    console.log(isCardInView);
    return (
        <div className={"movieCard"} style={{opacity: isCardInView ? 1 : 0, transition: "3s"}} ref={cardRef}>            
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