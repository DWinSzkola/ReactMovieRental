//TODO: Dokonczyc strone logowania i rejestracji
import { Col, Container, Row } from "react-bootstrap";
import VideoBackground from "../template/VideoBackground";
import "../../Styles/WelcomePage.css";
const SignIn = () => {
    return (
        <VideoBackground>
            <Container
                fluid
                style={{ position: "fixed", width: "100%", height: "100%" }}
            >
                <Row style={{ height: "100%" }}>
                    <Col xs={6} />
                    <Col
                        className="menuWelcomePage d-flex align-items-center"
                        xs={6}
                    >
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </VideoBackground>
    );
};

export default SignIn;
