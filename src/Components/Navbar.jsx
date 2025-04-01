import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import "../styles/Navbar.css";
import Icon from "../assets/icon.svg?react";

const NavigationBar = (props) => {
    const searchCallback = props.searchCallback;
    const searchValue = props.searchValue;
    const WebsiteIcon = "icon.svg";
    return (
        <>
      <Navbar className='NavigationBar'>
        <Container>
          <Navbar.Brand href="/"><Icon width={50} height={50} fill={"#fff"}/><span>MovieRental.com</span></Navbar.Brand>
          <Nav className="justify-content-end">
          <Navbar.Text className='px-3'>Search:</Navbar.Text>

          <Form>
            <Row>
            <Col xs="auto">
                
                <Form.Control value={searchValue}
                type="text"
                placeholder="Search"
                className=" mr-sm-2 searchInput"
                onInput={(e)=>searchCallback(e.target.value)}
                />
            </Col>
            
            </Row>
        </Form>
            
          </Nav>
        </Container>
      </Navbar>
      
      </>
    );
  }
  
  export default NavigationBar;