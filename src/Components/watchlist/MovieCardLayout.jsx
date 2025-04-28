import RentalOptions from "./RentalOptions";
import RentalStatus from "./RentalStatus";
import "../../Styles/watchlistMovie.css";

const MovieCardLayout = ({
    movie,
    movieDetails,
    rented,
    timeLeft,
    videoQuality,
    setVideoQuality,
    audioQuality,
    setAudioQuality,
    subtitles,
    setSubtitles,
    rentalTime,
    setRentalTime,
    getTotalPrice,
    startRental,
    imageUnavailable,
}) => {
    return (
        <div
            className="card text-white bg-dark mb-3 shadow"
            style={{ maxWidth: "540px" }}
        >
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={movie.Poster || imageUnavailable}
                        alt={movie.Title}
                        className="img-fluid rounded-start"
                        style={{ objectFit: "cover", height: "100%" }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text text-light-emphasis">
                            Time:{" "}
                            {movieDetails ? movieDetails.Runtime : "Loading..."}
                        </p>
                        <RentalOptions
                            rented={rented}
                            videoQuality={videoQuality}
                            setVideoQuality={setVideoQuality}
                            audioQuality={audioQuality}
                            setAudioQuality={setAudioQuality}
                            subtitles={subtitles}
                            setSubtitles={setSubtitles}
                            rentalTime={rentalTime}
                            setRentalTime={setRentalTime}
                        />
                        <p
                            className={`${
                                rented ? " total-price-rented " : " text-white "
                            }card-text`}
                        >
                            <strong>Total price: </strong> {getTotalPrice()} zł
                        </p>
                        <RentalStatus
                            rented={rented}
                            timeLeft={timeLeft}
                            startRental={startRental}
                            rentalTime={rentalTime}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCardLayout;
