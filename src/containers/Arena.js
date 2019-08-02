import React from 'react';
import ArenaFighter from '../components/ArenaFighter';
import { Grid, Header, Container, Button } from 'semantic-ui-react';

const Arena = props => {

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
              onClick={props.doBattle}
              fluid
              disabled={false /* enable only if both fighters are in the Arena */}>
              Fight!
            </Button>

          </Container>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>

        <ArenaFighter /> {/* For protagonists */}
        <ArenaFighter /> {/* For antagonists */}

      </Grid.Row>

    </Grid>
  );
}

export default Arena;
