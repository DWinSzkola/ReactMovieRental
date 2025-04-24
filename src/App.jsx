import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieSearch from "./Components/movieSearch/MovieSearch";
import "./App.css";
import WelcomePage from "./Components/welcomePage/WelcomePage";
import WatchListLibrary from "./Components/watchlist/watchListLibrary";
import { UserProvider } from "./Components/contex/UserProvider";

import { CssBaseline } from "@mui/material";
const App = () => {
    
    return (
        <UserProvider>
            
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/*" element={<WelcomePage />} />
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/movies" element={<MovieSearch />} />
                        <Route path="/watchlist" element={<WatchListLibrary/>} />
                    </Routes>
                </BrowserRouter>
            
        </UserProvider>
    );
};
export default App;
