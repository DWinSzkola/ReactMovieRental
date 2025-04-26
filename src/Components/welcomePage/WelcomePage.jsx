import { Button, Col, Container, Row } from "react-bootstrap";
import BackgroundWelcomePage from "../../assets/BackgroundWelcomePage.mp4";
import "../../Styles/WelcomePage.css";
import { Link } from "react-router-dom";
import Logo from "../template/Logo";
import { useRef } from "react";
import { useInView } from "framer-motion";

const WelcomePage = () => {
    const logoRef = useRef(null);
    const isLogoInView = useInView(logoRef);
    const buttonsRef = useRef(null);
    const areButtonsInView = useInView(buttonsRef);
    return (
        <div className="backgroundWelcomePage">
            <video muted loop autoPlay className="backgroundVideo">
                <source src={BackgroundWelcomePage} type="video/mp4" />
            </video>
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
                                        <Button className="rounded-5 signInButton">
                                            Sign in
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default WelcomePage;
