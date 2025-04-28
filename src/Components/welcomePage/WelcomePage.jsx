import { Button, Col, Container, Row } from "react-bootstrap";

import "../../Styles/WelcomePage.css";
import { Link } from "react-router-dom";
import Logo from "../template/Logo";
import { useContext, useRef } from "react";
import { useInView } from "framer-motion";
import VideoBackground from "../template/VideoBackground";
import { UserContext } from "../contex/UserProvider";

const WelcomePage = () => {
    const { user, setUser } = useContext(UserContext);
    const logoRef = useRef(null);
    const isLogoInView = useInView(logoRef);
    const buttonsRef = useRef(null);
    const areButtonsInView = useInView(buttonsRef);
    return (
        <VideoBackground>
            <Container
                fluid
                style={{ position: "fixed", width: "100%", height: "100%" }}
            >
                <Row style={{ height: "100%" }}>
                    <Col className="menuWelcomePage d-flex align-items-center">
                        <div className="container-fluid-xs container-lg">
                            <Row>
                                <Col
                                    xs={12}
                                    className="d-flex"
                                    style={{ cursor: "default" }}
                                >
                                    <div
                                        ref={logoRef}
                                        style={{
                                            opacity: isLogoInView ? 1 : 0,
                                            transition: "2s",
                                        }}
                                    >
                                        <Logo size={90} />
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-center justify-content-start">
                                    <div
                                        ref={buttonsRef}
                                        style={{
                                            transform: areButtonsInView
                                                ? "translateY(0)"
                                                : "translateY(100px)",
                                            opacity: areButtonsInView ? 1 : 0,
                                            transition: "1s",
                                        }}
                                    >
                                        <Link to="/movies">
                                            <Button className=" rounded-5">
                                                Go Search a Movie
                                            </Button>
                                        </Link>
                                        {user == null ? (
                                            <Link to="/signin">
                                                <Button className="rounded-5 signInButton">
                                                    Sign in
                                                </Button>
                                            </Link>
                                        ) : (
                                            <Button
                                                className="rounded-5 signOutButton"
                                                onClick={() => setUser(null)}
                                            >
                                                Sign out
                                            </Button>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </VideoBackground>
    );
};
export default WelcomePage;
