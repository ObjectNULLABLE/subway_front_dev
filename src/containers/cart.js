import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Header } from 'semantic-ui-react';
import { addToCart, removeFromCart, approveCart } from '../actions/cart';
import CartItemList from '../components/cart-item-list';
import EmptyCart from '../components/empty-cart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.onApproveClick = this.onApproveClick.bind(this);
  }

  onApproveClick = () => {
    let cartToSend = this.props.cart.inCartItems.map(item => ({
      foodId: item.food.key,
      amount: item.amount
    }));
    this.props.approveCart(cartToSend);
  };

  render() {
    return (
      <div>
        <Header textAlign="center" as="h1" content="Drawing up of an order" />
        {typeof this.props.cart.inCartItems !== 'undefined' &&
        this.props.cart.inCartItems.length > 0 ? (
          <Grid centered divided="vertically">
            <Grid.Row verticalAlign="middle" divided>
              <Grid.Column width={8}>
                <Header as="h4" content="List of products" />
              </Grid.Column>
              <Grid.Column width={2}>
                <Header as="h4" content="Price" />
              </Grid.Column>
              <Grid.Column width={2}>
                <Header as="h4" content="Quantity" />
              </Grid.Column>
              <Grid.Column width={2}>
                <Header as="h4" content="Amount" />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <CartItemList inCartItems={this.props.cart.inCartItems} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Button
                  fluid
                  circular
                  positive
                  size="large"
                  content="Take my money"
                  floated="right"
                  onClick={this.onApproveClick}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ) : (
          <EmptyCart />
        )}
      </div>
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
