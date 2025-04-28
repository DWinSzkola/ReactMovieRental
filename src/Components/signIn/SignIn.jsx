//TODO: Dokonczyc strone logowania i rejestracji
import { Col, Container, Row } from "react-bootstrap";
import VideoBackground from "../template/VideoBackground";
import "../../Styles/WelcomePage.css";
import SignInForm from "./SignInForm";
import Logo from "../template/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contex/UserProvider";
const SignIn = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const isLogged = () => {
        user ? navigate("/") : null;
    };
    useEffect(() => {
        isLogged();
    }, []);
    return (
        <VideoBackground>
            <Container
                fluid
                style={{ position: "fixed", width: "100%", height: "100%" }}
            >
                <Row style={{ height: "100%" }}>
                    <Col
                        xs={12}
                        lg={6}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <Link to="/">
                            <Logo size={80} />
                        </Link>
                    </Col>
                    <Col
                        style={{ minWidth: "500px" }}
                        className="menuWelcomePage d-flex justify-content-center align-items-center"
                        xs={12}
                        lg={6}
                    >
                        <SignInForm />
                    </Col>
                </Row>
            </Container>
        </VideoBackground>
    );
};

export default SignIn;
