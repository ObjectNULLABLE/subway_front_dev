import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import foodArrayFilter from '../tools/food-array-filter';

import { fetchFood, purgeFood } from '../actions/food';
import FoodList from '../components/food-list';
import FoodFilter from '../components/food-filter';

class Menu extends Component {
  componentWillMount() {
    this.props.fetchFood();
  }

  componentWillUnmount() {
    this.props.purgeFood();
  }

  render() {
    return (
      <Grid padded>
        <Grid.Column computer={4} tablet={5} mobile={16}>
          <FoodFilter query={this.props.location.search} />
        </Grid.Column>
        <Grid.Column computer={12} tablet={11} mobile={16}>
          <FoodList
            foodList={foodArrayFilter(
              this.props.location.search,
              this.props.food.foodArray
            )}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return { food: state.food };
}

export default connect(mapStateToProps, { fetchFood, purgeFood })(Menu);
