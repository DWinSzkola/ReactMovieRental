//TODO: App: localstorage, zapisanie nowej listy wypozyczonych filmow i zapisanie stanu zegara do licznie ile zostało czasu do obejrzenia, wszystko powinno zawrzec sie w user kontekst
//TODO: App: zrobic logowanie uzytkownika oraz wykorzystanie do tego localStorage

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieSearch from "./Components/movieSearch/MovieSearch";
import "./App.css";
import WelcomePage from "./Components/welcomePage/WelcomePage";
import WatchListLibrary from "./Components/watchlist/WatchListLibrary";
import { UserProvider } from "./Components/contex/UserProvider";

import { CssBaseline } from "@mui/material";
import Test from "./Components/template/test";
const App = () => {
    return (
        <UserProvider>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route exact path="/*" element={<WelcomePage />} />
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/movies" element={<MovieSearch />} />
                    <Route path="/watchlist" element={<WatchListLibrary />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};
export default App;
