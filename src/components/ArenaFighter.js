import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

const ArenaFighter = ({ fighter }) => {
  const { name, stand, image } = fighter

  return (
    <Grid.Column>
    <Header as='h2' textAlign='center'>
    { name }
    <Header.Subheader>{ stand }</Header.Subheader>
    </Header>
    <Image src={image} centered/>
    </Grid.Column>
  );
}

export default ArenaFighter;
