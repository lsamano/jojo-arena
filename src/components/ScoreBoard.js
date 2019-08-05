import React from 'react';
import { Container, Message, Grid } from 'semantic-ui-react';

const ScoreBoard = ({ winner, protagScore, antagScore }) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Container text textAlign='center'>
            <p>Winner: {winner}</p>
            <p>Score: {protagScore} - {antagScore}</p>
            {
              protagScore === 7 ?
              <Message success>
                <p>Protagonists Wins!</p>
              </Message> :
              antagScore === 7 ?
              <Message negative>
                <p>Antagonists Wins!</p>
              </Message> :
              null
            }
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ScoreBoard;
