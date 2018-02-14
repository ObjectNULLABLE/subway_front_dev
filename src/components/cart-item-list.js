import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import CartItem from './cart-item';

export default class CartItemList extends Component {
  onRemoveClick = (foodKey, amount) => {
    this.props.onRemoveClick(foodKey, amount);
  };

  render() {
    return (
      <Grid centered>
        {this.props.inCartItems.map(mappingItem => (
          <CartItem
            key={mappingItem.food.key}
            foodData={mappingItem.food}
            amount={mappingItem.amount}
            onRemoveClick={this.onRemoveClick}
          />
        ))}
      </Grid>
    );
  }
}
