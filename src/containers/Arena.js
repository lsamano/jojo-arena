import React from 'react';
import ArenaFighter from '../components/ArenaFighter';
import { Grid, Header, Container, Button } from 'semantic-ui-react';

const Arena = ({ chosenProtag, chosenAntag, doBattle }) => {
  const { name: pName } = chosenProtag
  const { name: aName } = chosenAntag

  return (
    <Grid centered>
      <Grid.Row column={1}>
        <Grid.Column>
          <Container>
            <Header as='h1' textAlign='center'>
              Arena
            </Header>
            <Button
              color='purple'
              onClick={doBattle}
              fluid
              disabled={!pName || !aName}>
              Fight!
            </Button>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <ArenaFighter fighter={chosenProtag}/>
        <ArenaFighter fighter={chosenAntag}/>
      </Grid.Row>
    </Grid>
  );
}

export default Arena;
