import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import FoodCard from './food-card';

export default class FoodList extends Component {
  render() {
    const foodList = this.props.foodList;
    console.log(this.props);
    return (
      <Grid>
        {foodList ? (
          foodList.map(mappingItem => (
            <FoodCard key={mappingItem.key} foodData={mappingItem} />
          ))
        ) : (
          <div>{'empty'}</div>
        )}
      </Grid>
    );
  }
}
