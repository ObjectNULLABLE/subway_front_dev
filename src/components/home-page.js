import React, { Component } from 'react';
import { Embed, Grid } from 'semantic-ui-react';

export default class HomePage extends Component {
  render() {
    return (
      <Grid.Column width="12">
        <Embed
          autoplay={false}
          color="white"
          aspectRatio="16:9"
          hd={true}
          id="gJscrxxl_Bg"
          iframe={{
            allowFullScreen: true,
            style: {
              padding: 4
            }
          }}
          source="youtube"
        />
      </Grid.Column>
    );
  }
}