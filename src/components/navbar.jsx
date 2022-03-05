import { Component } from "react";
import { Navbar,Nav,Container,Offcanvas,NavDropdown,Button } from "react-bootstrap";
import { Link } from "react-router-dom";



function NotloggedIn(props) {
    return(
        <Nav> 
            <Nav.Link >
                <Link eventKey={2} to={"/login"}>
                    <Button variant="success">LogIn</Button>{' '}
                </Link> 
            </Nav.Link>
            <Nav.Link>
                <Link eventKey={3} to={"/register"}>
                    <Button variant="success">Register</Button>{' '}
                </Link>
            </Nav.Link>
        </Nav>
    );
}

function LoggedIn(props){
    return (
        <Nav>
            <NavDropdown eventKey={4} title={<img
                        src={process.env.PUBLIC_URL + '/logo192.png'}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="lgo"
                    />} id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                Something else here
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

class MyNavbar extends Component{
    constructor(props){
        super(props);
        this.state={isLogin:false};
    }
    
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"}>
                            Needify
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">About Us</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav> 

                        {this.state.isLogin ? <LoggedIn /> : <NotloggedIn /> }
                            
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default MyNavbar;