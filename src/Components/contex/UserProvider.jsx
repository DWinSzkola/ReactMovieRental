//TODO: UserProvider: walidowanie zalogowanie uzytkownika do zapisywania filmow do watchlisty oraz wyswietlanie, samej watchlisty

import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const getLocalStorageUser = () => {
        const userLS = localStorage.getItem("user");
        return userLS
            ? JSON.parse(userLS)
            : {
                  name: "User1",
                  password: "password123",
                  watchlist: [],
                  rentedMovies: [],
              };
    };
    const [user, setUser] = useState(getLocalStorageUser);
    const addMovie = (movie) => {
        setUser({
            ...user,
            watchlist: [...user.watchlist, movie],
        });
    };
    const removeMovie = (movie) => {
        setUser({
            ...user,
            watchlist: user.watchlist.filter((e) => e.imdbID != movie.imdbID),
        });
    };
    const addToRentedMovies = (movie) => {
        setUser({
            ...user,
            rentedMovies: [...user.rentedMovies, movie],
        });
    };
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    return (
        <UserContext.Provider
            value={{ user, addMovie, removeMovie, addToRentedMovies, setUser }}
        >
            {children}
        </UserContext.Provider>
    );
};
