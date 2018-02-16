import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CartItem from './cart-item';

export default class CartItemList extends Component {
  removeFromCart = (foodKey, amount) => {
    this.props.removeFromCart(foodKey, amount);
  };

  addToCart = (food, amount) => {
    this.props.addToCart(food, amount);
  };

  render() {
    return (
      <Grid centered>
        {this.props.inCartItems.map(mappingItem => (
          <CartItem
            key={mappingItem.food.key}
            foodData={mappingItem.food}
            amount={mappingItem.amount}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          />
        ))}
      </Grid>
    );
  }
}
