import React, { Component } from 'react';
import Antag from '../components/Antag';
import { Container } from 'semantic-ui-react';

class AntagContainer extends Component {

  render() {
    const antagComponents = this.props.antags.map(antag => {
      return <Antag key={antag.id} antag={antag} />
    })
    return (
      <Container>
        <h1>Antagonists</h1>
        { antagComponents }
      </Container>
    );
  }

}

export default AntagContainer;
