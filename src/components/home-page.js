import React, { Component } from 'react';
import { Embed} from 'semantic-ui-react';

export default class HomePage extends Component {
  render() {
    return (
      <Embed
        autoplay={false}
        color='white'
        aspectRatio='16:9'
        hd={true}
        id='gJscrxxl_Bg'
        iframe={{
          allowFullScreen: true,
          style: {
            padding: 4,
          },
        }}
        source='youtube'
      />
    )
  }
}