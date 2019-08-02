import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const ArenaFighter = props => {
  return (
    <Grid.Column>
    <h3>
    { /* Render the fighter's name and stand name */ }
    </h3>
    <Image src={null /* Replace null with the fighter's image url */} centered/>
    </Grid.Column>
  );
}

export default ArenaFighter;
