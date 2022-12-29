import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


export const HeaderPartial = () => {
    return (
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand to="/">Dora Patins</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link className='nav-link' to="/">Início</Link>
                    <NavDropdown title="Patins" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Quads</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Inline
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Street</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Rodas e Bases
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Link className='nav-link' to="/carrinho">Carrinho</Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }