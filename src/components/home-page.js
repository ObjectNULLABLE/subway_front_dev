import React, { Component } from 'react';
import { Embed, Grid } from 'semantic-ui-react';

export default class HomePage extends Component {
  render() {
    return (
      <Grid.Column width="12">
        <Embed
          autoplay
          aspectRatio="16:9"
          hd={true}
          id="CACAmH4r1fw"
          placeholder="https://img.youtube.com/vi/CACAmH4r1fw/maxresdefault.jpg"
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
