import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../contex/UserProvider";
import { options } from "../../config/config";
import prices from "../../assets/priceData/prices.json";
import imageUnavailable from "../../assets/NoImageAvailable.png";
import MovieCardLayout from "./MovieCardLayout";

const WatchlistMovie = ({ movie }) => {
    const { user, addToRentedMovies } = useContext(UserContext);
    const apiKey = options.apikey;

    const [movieDetails, setMovieDetails] = useState(null);
    const [videoQuality, setVideoQuality] = useState("720p");
    const [audioQuality, setAudioQuality] = useState("mono");
    const [subtitles, setSubtitles] = useState("none");
    const [rentalTime, setRentalTime] = useState("1day");
    const [rented, setRented] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);

    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
            );
            const data = await response.json();
            setMovieDetails(data);
        } catch (error) {
            console.error(error);
        }
    };

    const startRental = () => {
        const durationInSeconds =
            24 * 60 * 60 * prices["rental-time"][rentalTime]?.durationInDays;
        const endOfRent = new Date(Date.now() + durationInSeconds * 1000);

        setRented(true);
        setTimeLeft(durationInSeconds);
        addToRentedMovies({ imdbID: movie.imdbID, endOfRent });
    };

    const checkIfAlreadyRented = () => {
        const rentedMovie = user.rentedMovies.find(
            (m) => m.imdbID === movie.imdbID
        );
        if (rentedMovie) {
            const now = new Date();
            const end = new Date(rentedMovie.endOfRent);
            if (end > now) {
                setTimeLeft(Math.floor((end - now) / 1000));
                return true;
            }
        }
        return false;
    };

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    useEffect(() => {
        setRented(checkIfAlreadyRented());
    }, [user.rentedMovies, movie.imdbID]);

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

    const getTotalPrice = () =>
        (
            prices["video-quality"][videoQuality]?.price +
            prices["audio"][audioQuality]?.price +
            (prices["subtitles"][subtitles] || 0) +
            prices["rental-time"][rentalTime]?.price
        ).toFixed(2);

    return (
        <MovieCardLayout
            movie={movie}
            movieDetails={movieDetails}
            rented={rented}
            timeLeft={timeLeft}
            videoQuality={videoQuality}
            setVideoQuality={setVideoQuality}
            audioQuality={audioQuality}
            setAudioQuality={setAudioQuality}
            subtitles={subtitles}
            setSubtitles={setSubtitles}
            rentalTime={rentalTime}
            setRentalTime={setRentalTime}
            getTotalPrice={getTotalPrice}
            startRental={startRental}
            imageUnavailable={imageUnavailable}
        />
    );
};

export default WatchlistMovie;
