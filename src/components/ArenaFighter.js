import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const ArenaFighter = ({ fighter }) => {
  const { name, stand, image } = fighter

  return (
    <Grid.Column>
    <h3>
    { name && `${name} & ${stand}` }
    </h3>
    <Image src={image} centered/>
    </Grid.Column>
  );
}

export default ArenaFighter;
