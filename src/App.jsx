import { useEffect, useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { options } from "./config/config";
import MovieCard from "./Components/MovieCard";
import { Stack } from "react-bootstrap";
import NavigationBar from "./Components/Navbar";
import "./Styles/SideBar.css";
import "./Styles/gridHeader.css";
//Color Pattern https://colorhunt.co/palette/443627d98324efdcabf2f6d0


function App() {
    const apiKey = options.apikey;
    const [movieData, setMovieData] = useState([]);
    const [search, setSearch] = useState("");
    const [hTitle, sethTitle] = useState("gridHeader opener");
    useEffect(() => {
        fetch(
            `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}&plot=full`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setMovieData(res.Search);
            })
            .catch((err) => console.error(err));
    }, [search]);

    

    return (
        <>
        <NavigationBar searchCallback={setSearch} searchValue={search}></NavigationBar>
        <Container className="body">
            { }
            {/* <Row className={hTitle} >
                {hTitle !== "d" ? ()=>sethTitle("") : null}
                <Col>
                    
                    <h1 key={hTitle} >{search!=="" ? `O to filmy po nazwą "${search}"` : "Wyszukaj filmu którego szukasz"}</h1>
                </Col>
            </Row> */}
            <Row>
                <Col className="pt-3">
                    <h1>wyniki wyszukiwania dla "{search}"</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    
                    <Container className="movieGrid">
                        {movieData && movieData.length > 0 ? (
                            movieData.reduce((cols, e, i) => 
                            
                            {
                                if(i%3 === 0){
                                    cols.push([]);
                                }
                                cols[cols.length-1].push(
                                    <Col md={6} lg={3} xs={12}>
                                        <MovieCard movieInfo={e}/>
                                    </Col>
                                )
                                return cols;
                            }, []).map((rowContent, i)=><Row className="justify-content-center" key={i}>
                                {rowContent}
                            </Row>)
                            
                        ) : (
                            <h1 className="text-danger">No movies found</h1>
                        )}
                    </Container>
                </Col>
                <Col className="infoSidebar" xs={12} lg={2} >
                        <Stack>
                            <p>If you have any complains, write to our support.</p>
                        </Stack>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default App;
