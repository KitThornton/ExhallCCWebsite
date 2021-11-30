// So, let's test out some code for some nav-bars!
import * as React from "react";
import {Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';

// import {Link} from "react-router-dom";

class NavBar extends React.Component {

    render() {
        return (
            // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            //     <LinkContainer to="/Home">
            //         <Navbar.Brand>Exhall and Wixford CC</Navbar.Brand>
            //     </LinkContainer>
            //     <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            //     <Navbar.Collapse id="responsive-navbar-nav">
            //         <Nav className="mr-auto">
            //             <LinkContainer to="/AboutTheClub">
            //                 <Nav.Link>The Club</Nav.Link>
            //             </LinkContainer>
            //             <LinkContainer to="/Players">
            //                 <Nav.Link>Players</Nav.Link>
            //             </LinkContainer>
            //             <NavDropdown title="Trophy Cabinet" id="collapsible-nav-dropdown">
            //                 {/*<LinkContainer to="/AboutTheClub">*/}
            //                 <NavDropdown.Item href="/Trophies/Players">Players</NavDropdown.Item>
            //                 {/*</LinkContainer>*/}
            //                 <NavDropdown.Divider/>
            //                 <NavDropdown.Item href="/Players">Club</NavDropdown.Item>
            //             </NavDropdown>
            //             {/*<Nav.Link href="#aboutTheClub">About the Club</Nav.Link>*/}
            //             <NavDropdown title="Batting" id="collapsible-nav-dropdown">
            //                 {/*<LinkContainer to="/Profile">*/}
            //                 {/*    <NavDropdown.Item>Link</NavDropdown.Item>*/}
            //                 {/*</LinkContainer>*/}
            //                 <NavDropdown.Item disabled href="/Batting/1">First XI</NavDropdown.Item>
            //                 {/*<span>*/}
            //                 <NavDropdown.Item href="">
            //                     {/*<Tooltip title="not yet available">*/}
            //                     Second XI
            //                     {/*</Tooltip>*/}
            //                 </NavDropdown.Item>
            //                 {/*</span>*/}
            //                 <NavDropdown.Item disabled href="/Batting/3">Third XI</NavDropdown.Item>
            //                 <NavDropdown.Divider/>
            //                 <NavDropdown.Item href="/Batting/0">Career</NavDropdown.Item>
            //             </NavDropdown>
            //             <NavDropdown title="Bowling" id="collasible-nav-dropdown">
            //                 <NavDropdown.Item disabled href="/Bowling/1">First XI</NavDropdown.Item>
            //                 <NavDropdown.Item disabled href="/Bowling/2">Second XI</NavDropdown.Item>
            //                 <NavDropdown.Item disabled href="/Bowling/3">Third XI</NavDropdown.Item>
            //                 <NavDropdown.Divider/>
            //                 <NavDropdown.Item href="/Bowling/0">Career</NavDropdown.Item>
            //             </NavDropdown>
            //             {/*<LinkContainer to="/AboutTheClub">*/}
            //             {/*    <Nav.Link>Achievements</Nav.Link>*/}
            //             {/*</LinkContainer>*/}
            //         </Nav>
            //         <Form inline>
            //             {/*<FormControl type="text" placeholder="Search for a player..." className="mr-sm-2" />*/}
            //             {/*<PlayerSearchBar/>*/}
            //             {/*<Button*/}
            //             {/*    // style={{paddingRight: 5, paddingLeft: 5}}*/}
            //             {/*        variant="outline-light">Search*/}
            //             {/*</Button>*/}
            //         </Form>
            //         {/*<Nav>*/}
            //         {/*    <Nav.Link href="../about">About the Developer</Nav.Link>*/}
            //         {/*    <Nav.Link eventKey={2} href="#memes">Contact</Nav.Link>*/}
            //         {/*</Nav>*/}
            //     </Navbar.Collapse>
            // </Navbar>
            <>
                <div className="d-none d-md-block py-sm-0 pt-md-3">
                    Exhall and Wixford CC
                </div>
                <Navbar
                    collapseOnSelect
                    expand="sm"
                >
                    <Container>
                        <div className="d-md-none">
                            <Contact/>
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav" className="py-sm-0 pt-md-5">
                            <Col>
                                <Nav
                                    activeKey={location.pathname}
                                    className="flex-column d-md-block text-center"
                                    fill
                                >
                                    <Nav.Item className="my-md-1">
                                        <NavLink to="/home" activeClassName="active" className="link d-md-none">
                                            HOME
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className="my-md-1">
                                        <NavLink to="/skills" activeClassName="active" className="link">
                                            SKILLS
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className="my-md-1">
                                        <NavLink to="/experience" activeClassName="active" className="link">
                                            EXPERIENCE
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className="my-md-1">
                                        <NavLink to="/projects" activeClassName="active" className="link">
                                            PROJECTS
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className="my-md-1">
                                        <NavLink to="/cv" activeClassName="active" className="link">
                                            CV
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className="my-md-1">
                                        <NavLink to="/contact" activeClassName="active" className="link">
                                            CONTACT
                                        </NavLink>
                                    </Nav.Item>

                                </Nav>
                            </Col>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="d-none d-md-inline-block footer-wrapper">
                    <div className="footer">
                        GET IN TOUCH<br/>
                    </div>
                    <Contact/>
                </div>
            </>
        )
    }
}

// export default NavBar
export const Navbar = withRouter(NavBar);
