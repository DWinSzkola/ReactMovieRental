import "../../Styles/MovieCard.css";
import NoImageAvailable from "../../assets/NoImageAvailable.png";
import Plus from "../../assets/plus.svg?react";
import { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { UserContext } from "../contex/UserProvider";

const MovieCard = ({ movieInfo }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [error, setError] = useState(false);
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { once: true });
    const { addMovie, removeMovie, user } = useContext(UserContext);
    const isMovieOnWatchlist = (movie) => {
        if (
            user.watchlist.filter((e) => e.imdbID === movie.imdbID).length > 0
        ) {
            return true;
        }
        return false;
    };

    const [isAddedToWatchList, setisAddedToWatchList] = useState(false);

    const onAddMovieClick = (movie) => {
        const isRented = user.rentedMovies.some(
            (m) => m.imdbID === movie.imdbID
        );

        if (isRented) return;

        if (isAddedToWatchList) {
            removeMovie(movie);
        } else {
            addMovie(movie);
        }

        setisAddedToWatchList(!isAddedToWatchList);
    };
    user
        ? useEffect(() => {
              user
                  ? setisAddedToWatchList(isMovieOnWatchlist(movieInfo))
                  : null;
          }, [user.watchlist])
        : null;
    return (
        <div
            className={"movieCard"}
            style={{ opacity: isCardInView ? 1 : 0, transition: "3s" }}
            ref={cardRef}
        >
            <div className="DivPoster">
                {user ? (
                    <button
                        className={
                            isAddedToWatchList
                                ? "addButton activeButton"
                                : "addButton"
                        }
                    >
                        <Plus
                            width={30}
                            height={30}
                            fill={"#EEE"}
                            onClick={() => onAddMovieClick(movieInfo)}
                        />
                    </button>
                ) : null}

                <a
                    target="_blank"
                    href={`https://www.imdb.com/title/${movieInfo.imdbID}`}
                >
                    <div className="movieInfo">
                        <b>
                            <span>{movieInfo.Title}</span>
                        </b>
                        <br />
                        <span>{movieInfo.Year}</span>
                    </div>
                    <div className="DivPosterFlex">
                        <img
                            width={200}
                            className="poster"
                            src={
                                movieInfo.Poster !== "N/A" &&
                                isImageLoaded &&
                                !error
                                    ? movieInfo.Poster
                                    : NoImageAvailable
                            }
                            onLoad={() => setIsImageLoaded(true)}
                            onError={() => setError(true)}
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default MovieCard;
