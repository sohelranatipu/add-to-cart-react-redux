import React, { useEffect, useState } from "react";
import { ListGroup, Row, Col, Button, Image, From } from "react-bootstrap";
import { CartState } from "./Context/Context";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>${prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings}></Rating>
                </Col>
                <Col md={2}>
                  <From.Control as="select" value={prod.quantity}>
                    {[...Array(prod.inStock).key()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </From.Control>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal {cart.length} items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {total} </span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed To CheckOut
        </Button>
      </div>
    </div>
  );
};

export default Cart;
