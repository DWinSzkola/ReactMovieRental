import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import "../styles/Navbar.css";
import Icon from "../assets/icon.svg?react";
import PlayerIcon from "../assets/player.svg?react"

const NavigationBar = (props) => {
    const searchCallback = props.searchCallback;
    const searchValue = props.searchValue;
    return (
        <>
      <Navbar className='NavigationBar'>
        <Container>
          <Nav className='align-items-center'>
            <Navbar.Brand href="/"><div className='logo'><Icon width={40} height={40} fill={"#fff"}/><span>Movie<span className='Rental'>Rental</span>.com</span></div></Navbar.Brand>
          </Nav>
          
          
          <Nav className="justify-content-end">
          <Nav.Link href='#watchlist'><span>WatchList</span> <PlayerIcon fill={"#0A900A"} width={20} height={20}/></Nav.Link>

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