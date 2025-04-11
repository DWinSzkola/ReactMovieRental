import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieSearch from "./Components/MovieSearch";
import "./App.css";
import WelcomePage from "./Components/WelcomePage";

import { UserProvider } from "./Components/UserProvider";

const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/*" element={<WelcomePage />} />
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/movies" element={<MovieSearch />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};
export default App;
