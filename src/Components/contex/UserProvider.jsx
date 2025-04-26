//TODO: UserProvider: walidowanie zalogowanie uzytkownika do zapisywania filmow do watchlisty oraz wyswietlanie, samej watchlisty

import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "User1",
        watchlist: [],
        rentedMovies: [],
    });
    const addMovie = (movie) => {
        setUser({
            ...user,
            watchlist: [...user.watchlist, movie],
        });
    };
    const removeMovie = (movie) => {
        setUser({
            ...user,
            watchlist: user.watchlist.filter((e) => e != movie),
        });
    };
    const addToRentedMovies = (movie) => {
        setUser({
            ...user,
            rentedMovies: [...user.rentedMovies, movie],
        });
    };

    return (
        <UserContext.Provider
            value={{ user, addMovie, removeMovie, addToRentedMovies }}
        >
            {children}
        </UserContext.Provider>
    );
};
