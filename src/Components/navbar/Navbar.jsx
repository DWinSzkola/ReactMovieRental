//TODO: Navbar: dodanie przycisku do movieSearch 
//TODO: Navbar: Navbar nie jest w 100% responsywny, naprawic serachbar, najprawdopodobniej zrobic hamburgera


import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../../Styles/Navbar.css";
import PlayerIcon from "../../assets/player.svg?react";
import Logo from "../template/Logo";
import { Link } from "react-router-dom";


const NavigationBar = (props) => {
    const searchCallback = props.searchCallback;
    const searchValue = props.searchValue;


    return (
        <>
            <Navbar className="NavigationBar">
                <Container>
                    <Nav className="align-items-center">
                        <Link to="/" className="navbar-brand" style={{textDecoration: "none"}}>
                            <Logo />
                        </Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Navbar.Text className="px-3">Search:</Navbar.Text>
                        <Form>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        value={searchValue}
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2 searchInput"
                                        onInput={(e) =>
                                            searchCallback(e.target.value)
                                        }
                                    />
                                </Col>
                            </Row>
                        </Form>
                        <Link className="nav-item nav-link ms-5" to="/watchlist">
                            <span>WatchList</span>{" "}
                            <PlayerIcon
                                fill={"#0A900A"}
                                width={20}
                                height={20}
                            />
                        </Link>
                       
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
