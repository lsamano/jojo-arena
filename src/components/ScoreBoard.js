import React from 'react';
import { Container, Message, Grid } from 'semantic-ui-react';

const ScoreBoard = ({ winner, protagScore, antagScore }) => {
  return (
    <Grid centered>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Container textAlign='center' style={{backgroundColor: 'ghostWhite', padding: '20px'}}>
            <p>Winner: {winner}</p>
            <p>Score: {protagScore} - {antagScore}</p>
            {
              protagScore === 7 ?
              <Message success>
                <p>Protagonists Win!</p>
              </Message> :
              antagScore === 7 ?
              <Message negative>
                <p>Antagonists Win!</p>
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
