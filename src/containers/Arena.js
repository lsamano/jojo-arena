import React from 'react';
import ArenaFighter from '../components/ArenaFighter';
import { Grid } from 'semantic-ui-react';

const Arena = ({ chosenProtag, chosenAntag }) => {

  return (
    <Grid centered>
      <Grid.Row columns={2}>
        <ArenaFighter fighter={chosenProtag}/>
        <ArenaFighter fighter={chosenAntag}/>
      </Grid.Row>
    </Grid>
  );
}

export default Arena;
