import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';

import { fetchFood } from '../actions/food';
import FoodList from '../components/food-list';

class Menu extends Component {
  // constructor(props) {
  //   super(props);

  // this.state = {
  //   isLoginModalOpen: false,
  // };

  // this.onLoginSubmit = this.onLoginSubmit.bind(this);
  // }

  componentWillMount() {
    this.props.fetchFood();
  }

  render() {
    return (
      <Segment raised color="teal">
        <Grid padded>
          <Grid.Column width={12}>
            <FoodList foodList={this.props.food.foodArray} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return { food: state.food };
}

export default connect(mapStateToProps, { fetchFood })(Menu);
