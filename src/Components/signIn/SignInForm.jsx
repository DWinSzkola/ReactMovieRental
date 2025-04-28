import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../Styles/SignIn.css";
import { useContext, useState } from "react";
import { UserContext } from "../contex/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";

function SignInForm() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const sendForm = () => {
        if (username == "" || password == "") {
            alert("Inputs can't be empty");
            return;
        }
        const user = {
            name: username,
            password: password,
            watchlist: [],
            rentedMovies: [],
        };
        setUser(user);
        navigate("/");
    };
    return (
        <Form className="SignInForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => sendForm()}>
                Submit
            </Button>
        </Form>
    );
}

export default SignInForm;
