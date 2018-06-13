import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class EmptyCart extends Component {
  render() {
    return (
      <Container
        textAlign="left"
        style={{ fontSize: "1.5em", paddingLeft: "2em", paddingRight: "2em" }}
      >
        <p>{"Sorry, your shopping cart is empty"}</p>
        <p>
          {
            "For ordering, you must select at least one product. You can go to the "
          }
          <Link to="/">{"main page"}</Link>
          {" or"}
          <Link to="/menu?category=all"> {"order something!"} </Link>
        </p>
      </Container>
    );
  }
}

export default EmptyCart;
