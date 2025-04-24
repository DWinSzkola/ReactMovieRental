import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "User1", watchlist: [] });
    const addMovie = (movie) => {
        
        setUser({
            ...user,
            watchlist: [...user.watchlist, movie]
        });
    };
    const removeMovie = (movie) =>{
        setUser({
            ...user,
            watchlist: user.watchlist.filter(e=> e!=movie)
        })
    }
    return (
        <UserContext.Provider value={{ user, addMovie, removeMovie }}>
            {children}
        </UserContext.Provider>
    );
};
