import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "./Context/Context";

const Filters = () => {
  const [rate, setRate] = useState(2);

  const {
    productState: { byStock, byFastDelivery, byRating, sort, SearchQuery },
    productDispatch,
  } = CartState();

  console.log(byStock, byFastDelivery, byRating, sort);

  return (
    <div className="filters">
      <span className="title">Filter products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onClick={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "LowToHigh",
            })
          }
          checked={sort === "LowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onClick={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "HignToLow",
            })
          }
          checked={sort === "HignToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="InClude Out Off Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onClick={() =>
            productDispatch({
              type: "SORT_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onClick={() =>
            productDispatch({
              type: "SORT_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "SORT_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        varient="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filter
      </Button>
    </div>
  );
};

export default Filters;
