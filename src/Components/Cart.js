import React, { useEffect, useState } from "react";
import { ListGroup, Row, Col, Button, Image, Form } from "react-bootstrap";
import { CartState } from "./Context/Context";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
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
                  <Form.Control
                    as="select"
                    value={prod.quantity}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: {
                          id: prod.id,
                          quantity: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      });
                    }}
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal {cart.length} items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {total} </span>
        <Link to="/checkout">
          <Button type="button" disabled={cart.length === 0}>
            Proceed To CheckOut
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
