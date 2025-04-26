import { useContext, useEffect, useState } from "react";
import "../../Styles/MovieSearch.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { options } from "../../config/config";
import MovieCard from "./MovieCard";
import NavigationBar from "../navbar/Navbar";
import "../../Styles/SideBar.css";
import "../../Styles/gridHeader.css";
import { UserContext } from "../contex/UserProvider";

const MovieSearch = () => {
  const apiKey = options.apikey;

  const [movieData, setMovieData] = useState([]);
  const [search, setSearch] = useState("");

  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${
        search != "" ? search : "godfather"
      }&plot=full`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovieData([]);

        if (res.Response == "True") {
          setMovieData((data) => [...data, ...res.Search]);
        }
      })
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <>
      <NavigationBar
        searchCallback={setSearch}
        searchValue={search}
      ></NavigationBar>
      <Container fluid className="body">
        <Row>
          <Col className="pt-3">
            {search == "" ? (
              <h1>Przykładowe wyniki dla "Godfather"</h1>
            ) : (
              <h1>wyniki wyszukiwania dla "{search}"</h1>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className="movieGrid">
              {movieData && movieData.length > 0 ? (
                movieData
                  .reduce((cols, e, i) => {
                    if (i % 3 === 0) {
                      cols.push([]);
                    }
                    cols[cols.length - 1].push(
                      <Col lg={3} xs={6} key={i}>
                        <MovieCard movieInfo={e} />
                      </Col>
                    );
                    return cols;
                  }, [])
                  .map((rowContent, i) => (
                    <Row
                      className="justify-content-center align-items-start"
                      key={i}
                    >
                      {rowContent}
                    </Row>
                  ))
              ) : search != "" ? (
                <h1 className="text-danger">No movies found</h1>
              ) : null}
            </Container>
          </Col>
        </Row>
        <div></div>
      </Container>
    </>
  );
};

export default MovieSearch;
