//TODO: dodanie mozliwosci zmienienia czasu wypozyczenia (cennik jest juz w pliku json prices)

import React, { useState, useEffect, useContext } from "react";
import prices from "../../assets/priceData/prices.json";
import imageUnavailable from "../../assets/NoImageAvailable.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { options } from "../../config/config";
import { UserContext } from "../contex/UserProvider";

const WatchlistMovie = ({ movie }) => {
    const { user } = useContext(UserContext);
    const ApiKey = options.apikey;
    const [videoQuality, setVideoQuality] = useState("720p");
    const [audioQuality, setAudioQuality] = useState("mono");
    const [subtitles, setSubtitles] = useState("none");
    const [rented, setRented] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0); // in seconds
    const [movieDetals, setMovieDetals] = useState(null);
    const [rentalTime, setRentalTime] = useState("1day");

    const videoPrices = prices["video-quality"];
    const audioPrices = prices["audio"];
    const subtitlePrices = prices["subtitles"];
    const rentalTimePrices = prices["rental-time"];
    const rentalPeriodSecondsPerDay = 24 * 60 * 60;

    const checkIsRented = () => {
        if (user.rentedMovies.length == 0) {
            return;
        }
        if (
            user.rentedMovies.filter((m) => m.imdbID == movie.imdbID).length ==
            0
        ) {
            return;
        }
    };
    const getTotalPrice = () => {
        return (
            videoPrices[videoQuality]?.price +
            audioPrices[audioQuality]?.price +
            (subtitlePrices[subtitles] || 0) +
            rentalTimePrices[rentalTime]?.price
        ).toFixed(2);
    };

    const startRental = () => {
        setRented(true);
        setTimeLeft(
            rentalPeriodSecondsPerDay *
                rentalTimePrices[rentalTime]?.durationInDays
        );
    };

    useEffect(() => {
        if (!rented || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setRented(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [rented, timeLeft]);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${movie.imdbID}`)
            .then((res) => res.json())
            .then((res) => {
                setMovieDetals(res);
            });
    }, []);

    const formatTime = (seconds) => {
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor((seconds % (3600 * 24)) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${d}d ${h}h ${m}m ${s}s`;
    };

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
                            Time: {movieDetals ? movieDetals.Runtime : "NaN"}
                        </p>

                        <div className="mb-2">
                            <label className="form-label">Video quality</label>
                            <select
                                disabled={rented}
                                className="form-select bg-dark text-white border-light"
                                value={videoQuality}
                                onChange={(e) =>
                                    setVideoQuality(e.target.value)
                                }
                            >
                                {Object.entries(videoPrices).map(
                                    ([key, val]) => (
                                        <option key={key} value={key}>
                                            {val.name} ({val.price} zł)
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <div className="mb-2">
                            <label className="form-label">Audio</label>
                            <select
                                disabled={rented}
                                className="form-select bg-dark text-white border-light"
                                value={audioQuality}
                                onChange={(e) =>
                                    setAudioQuality(e.target.value)
                                }
                            >
                                {Object.entries(audioPrices).map(
                                    ([key, val]) => (
                                        <option key={key} value={key}>
                                            {val.name} ({val.price} zł)
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Subtitles</label>
                            <select
                                disabled={rented}
                                className="form-select bg-dark text-white border-light"
                                value={subtitles}
                                onChange={(e) => setSubtitles(e.target.value)}
                            >
                                {Object.keys(subtitlePrices).map((key) => (
                                    <option key={key} value={key}>
                                        {key.charAt(0).toUpperCase() +
                                            key.slice(1)}{" "}
                                        ({subtitlePrices[key]} zł)
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Rent for: </label>
                            <select
                                disabled={rented}
                                className="form-select bg-dark text-white border-light"
                                value={rentalTime}
                                onChange={(e) => setRentalTime(e.target.value)}
                            >
                                {Object.entries(rentalTimePrices).map(
                                    ([key, val]) => (
                                        <option key={key} value={key}>
                                            {val.name} {val.price} zł
                                        </option>
                                    )
                                )}
                            </select>
                        </div>

                        <p className="card-text text-white">
                            <strong>Total price:</strong> {getTotalPrice()} zł
                        </p>

                        {!rented ? (
                            <button
                                className="btn btn-outline-light w-100"
                                onClick={startRental}
                            >
                                Rent for {rentalTimePrices[rentalTime]?.name}
                            </button>
                        ) : (
                            <p className="card-text text-success">
                                Time left:{" "}
                                <strong>{formatTime(timeLeft)}</strong>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchlistMovie;
