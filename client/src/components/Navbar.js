// So, let's test out some code for some nav-bars!
import * as React from "react";
import {Navbar, NavDropdown, Nav, Form, Button, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
// import {Link} from "react-router-dom";

class NavBar extends React.Component{

    render() {
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <LinkContainer to="/Home">
                        <Navbar.Brand>Exhall and Wixford CC</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/AboutTheClub">
                                <Nav.Link>The Club</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Players">
                                <Nav.Link>Players</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Trophy Cabinet" id="collasible-nav-dropdown">
                                {/*<LinkContainer to="/AboutTheClub">*/}
                                    <NavDropdown.Item href="/Players">Players</NavDropdown.Item>
                                {/*</LinkContainer>*/}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Players">Club</NavDropdown.Item>
                            </NavDropdown>
                            {/*<Nav.Link href="#aboutTheClub">About the Club</Nav.Link>*/}
                            <NavDropdown title="Batting" id="collasible-nav-dropdown">
                                {/*<LinkContainer to="/Profile">*/}
                                {/*    <NavDropdown.Item>Link</NavDropdown.Item>*/}
                                {/*</LinkContainer>*/}
                                <NavDropdown.Item href="/Batting/1">First XI</NavDropdown.Item>
                                <NavDropdown.Item href="/Batting/2">Second XI</NavDropdown.Item>
                                <NavDropdown.Item href="/Batting/3">Third XI</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Batting/0">Career</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Bowling" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/Bowling/1">First XI</NavDropdown.Item>
                                <NavDropdown.Item href="/Bowling/2">Second XI</NavDropdown.Item>
                                <NavDropdown.Item href="/Bowling/3">Third XI</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Bowling/0">Career</NavDropdown.Item>
                            </NavDropdown>
                            {/*<LinkContainer to="/AboutTheClub">*/}
                            {/*    <Nav.Link>Achievements</Nav.Link>*/}
                            {/*</LinkContainer>*/}
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search for a player..." className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                        {/*<Nav>*/}
                        {/*    <Nav.Link href="../about">About the Developer</Nav.Link>*/}
                        {/*    <Nav.Link eventKey={2} href="#memes">Contact</Nav.Link>*/}
                        {/*</Nav>*/}
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default NavBar