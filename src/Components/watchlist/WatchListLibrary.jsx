import { useContext } from "react";
import NavigationBar from "../navbar/Navbar";
import { UserContext } from "../contex/UserProvider";
import { Navigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/MovieSearch.css";
import WatchlistMovie from "./WatchlistMovie";

const watchListLibrary = () => {
    const { user } = useContext(UserContext);
    const UserNotLoggedIn = () => {};
    // <Navigate to="/"/>
    return (
        <>
            <NavigationBar />
            <Container fluid className="body" style={{ minHeight: "90vh" }}>
                {
                    <Row>
                        {user.watchlist.map((e, i) => (
                            <Col
                                key={i}
                                className="justify-content-center d-flex mb-5"
                                xs="6"
                            >
                                <WatchlistMovie movie={e} />
                            </Col>
                        ))}
                    </Row>
                }
            </Container>
        </>
    );
};
export default watchListLibrary;
