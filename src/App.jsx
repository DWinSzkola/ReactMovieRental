import { useEffect, useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//Color Pattern https://colorhunt.co/palette/443627d98324efdcabf2f6d0

const options = {
    apikey: "ebe9a0bc",
};
function App() {
    const [movieData, setMovieData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        fetch(
            `http://www.omdbapi.com/?apikey=${options.apikey}&s=${search}&plot=full`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setMovieData(res.Search);
            })
            .catch((err) => console.error(err));
    }, [search]);

    return (
        <Container className="body">
            <Row>
                <Col>
                    <input
                        className="input"
                        value={search}
                        onInput={(e) => setSearch(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Welcome to MovieRental!!!</h1>
                    {movieData ? (
                        movieData.map((e) => (
                            <>
                                <h3>{e.Title}</h3>
                                <a
                                    target="_blank"
                                    href={`https://www.imdb.com/title/${e.imdbID}`}
                                >
                                    <img className="poster" src={e.Poster} />
                                </a>
                            </>
                        ))
                    ) : (
                        <h1 className="text-danger">No movies found</h1>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default App;
