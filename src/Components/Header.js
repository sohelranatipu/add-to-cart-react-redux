import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  Navbar,
  Badge,
  Dropdown,
  Nav,
  Container,
  FormControl,
} from "react-bootstrap";
// import { Navbar, Container, FormControl } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <a href="/">Shoping Cart</a>
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl
            type="search"
            style={{ width: 500 }}
            placeholder="Search a Product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart
                color="white"
                fontSize="25px"
                margin="0 10px 0 0"
              />
              {10}
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" style={{ minWidth: 300 }}>
              <span style={{ padding: 10 }}>Cart is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
