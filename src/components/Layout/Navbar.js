import React from "react";
import {
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
  Dropdown
} from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">NCNews-Round</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="/" href="#home">
            Home
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Topics
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/articles/topics/coding">
                Coding
              </Dropdown.Item>
              <Dropdown.Item href="/articles/topics/cooking">
                Cooking
              </Dropdown.Item>
              <Dropdown.Item href="/articles/topics/football">
                Football
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
