import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import FoodCard from './food-card';

export default class FoodList extends Component {
  render() {
    const foodList = this.props.foodList;
    return (
      <Grid columns="5" padded>
        {foodList ? (
          foodList.map(mappingItem => (
            <FoodCard key={mappingItem.id} foodData={mappingItem} />
          ))
        ) : (
          <div>{'empty'}</div>
        )}
      </Grid>
    );
  }
}
