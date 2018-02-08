import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Divider, Button } from 'semantic-ui-react';
import { addToCart, removeFromCart, approveCart } from '../actions/cart';
import CartItemList from '../components/cart-item-list';

class Cart extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={14}>
            <CartItemList inCartItems={this.props.cart.inCartItems} />
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column>
            <Button
              positive
              size="large"
              content="Take my money"
              floated="right"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  approveCart
})(Cart);
