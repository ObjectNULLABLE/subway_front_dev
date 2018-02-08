import React, { Component } from 'react';
import { ItemGroup, Container } from 'semantic-ui-react';
import CartItem from './cart-item';
import { Link } from 'react-router-dom';

export default class CartItemList extends Component {
  render() {
    return (
      <ItemGroup divided relaxed>
        {typeof this.props.inCartItems !== 'undefined' &&
        this.props.inCartItems.length > 0 ? (
          this.props.inCartItems.map(mappingItem => (
            <CartItem
              key={mappingItem.food.key}
              foodData={mappingItem.food}
              amount={mappingItem.amount}
            />
          ))
        ) : (
          <Container style={{ fontSize: '1.5em' }}>
            <p>{"Good news: You don't have to pay anything"}</p>
            <p>{"Bad news: You don't get anything"}</p>
            <p>
              {'Suggestion: '}
              <Link to="/menu?category=all"> {'Order something!'} </Link>
            </p>
          </Container>
        )}
      </ItemGroup>
    );
  }
}
