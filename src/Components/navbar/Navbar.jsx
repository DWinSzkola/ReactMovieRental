//TODO: Navbar: Navbar nie jest w 100% responsywny, naprawic serachbar, najprawdopodobniej zrobic hamburgera

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Form, NavDropdown, Offcanvas } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../../Styles/Navbar.css";
import PlayerIcon from "../../assets/player.svg?react";
import Logo from "../template/Logo";
import { Link } from "react-router-dom";
import VideoBackground from "../template/VideoBackground";

const NavigationBar = ({ searchCallback, searchValue, SearchBar = false }) => {
    return (
        <>
            <Navbar
                expand="lg"
                className="bg-body-tertiary mb-3 NavigationBar"
                variant="dark"
                data-bs-theme="dark"
            >
                <Container fluid>
                    <Navbar.Brand>
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                        data-bs-theme="dark"
                        className="offCanvasNavigationBar"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                <Logo />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <Link to={"/"} className="nav-link text-center">
                                    <span>Home</span>
                                </Link>
                            </Nav>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {SearchBar ? (
                                    <Form className="d-flex">
                                        <Navbar.Text className="px-3">
                                            Search:
                                        </Navbar.Text>
                                        <Form.Control
                                            value={searchValue}
                                            type="text"
                                            placeholder="Movie Title"
                                            className=" mr-sm-2 me-1 searchInput"
                                            onInput={(e) =>
                                                searchCallback(e.target.value)
                                            }
                                        />
                                    </Form>
                                ) : (
                                    <Link
                                        to={"/movies"}
                                        className="nav-link text-center"
                                    >
                                        <span>Search for movies</span>
                                    </Link>
                                )}

                                <Link
                                    to={"/watchlist"}
                                    className="nav-link text-center"
                                >
                                    <span>Watchlist</span>{" "}
                                    <PlayerIcon
                                        width={15}
                                        height={15}
                                        fill={"#0A900A"}
                                    />
                                </Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            {/* <Navbar className="NavigationBar">
                <Container>
                    <Nav className="align-items-center">
                        <Link
                            to="/"
                            className="navbar-brand"
                            style={{ textDecoration: "none" }}
                        >
                            <Logo />
                        </Link>
                        <Link className="nav-item nav-link ms-5" to="/movies">
                            <span className="btn btn-light text-dark">
                                Search for a movie
                            </span>
                        </Link>
                    </Nav>
                    <Nav className="justify-content-end align-items-center">
                        <Link
                            className="nav-item nav-link ms-5"
                            to="/watchlist"
                        >
                            <span>WatchList</span>{" "}
                            <PlayerIcon
                                fill={"#0A900A"}
                                width={20}
                                height={20}
                            />
                        </Link>
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
                    </Nav>
                </Container>
            </Navbar> */}
        </>
    );
};

export default NavigationBar;
