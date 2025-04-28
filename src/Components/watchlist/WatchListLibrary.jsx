import { useContext } from "react";
import NavigationBar from "../navbar/Navbar";
import { UserContext } from "../contex/UserProvider";
import { Link, Navigate } from "react-router-dom";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "../../Styles/MovieSearch.css";
import WatchlistMovie from "./WatchlistMovie";

const watchListLibrary = () => {
    const { user } = useContext(UserContext);
    const UserNotLoggedIn = () => {};
    return (
        <>
            <NavigationBar />
            <Container fluid className="body">
                {
                    <Row>
                        {user ? (
                            user.watchlist.map((e, i) => (
                                <Col
                                    key={i}
                                    className="justify-content-center d-flex mb-5"
                                    xs="6"
                                >
                                    <WatchlistMovie movie={e} />
                                </Col>
                            ))
                        ) : (
                            <Col>
                                <Alert variant="danger">
                                    <Link
                                        to={"/signin"}
                                        className="alert-link sign-in-link"
                                    >
                                        Sign in
                                    </Link>{" "}
                                    to add to watchlist and rent movies
                                </Alert>
                            </Col>
                        )}
                    </Row>
                }
            </Container>
        </>
    );
};
export default watchListLibrary;
