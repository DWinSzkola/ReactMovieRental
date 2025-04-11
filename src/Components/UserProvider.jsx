import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "adam", lastname: "Nowak" });
    const changeUsername = (name) => {
        setUser({
            ...user,
            name: name,
        });
    };
    return (
        <UserContext.Provider value={{ user, changeUsername }}>
            {children}
        </UserContext.Provider>
    );
};
