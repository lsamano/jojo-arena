import React, { Component } from 'react';
import Protag from '../components/Protag';
import { Container } from 'semantic-ui-react';

class ProtagContainer extends Component {

  render() {
    const protagComponents = this.props.protags.map(protag => {
      return <Protag key={protag.id} protag={protag} chooseProtag={this.props.chooseProtag}/>
    })
    return (
      <Container>
        <h1>Protagonists</h1>
        { protagComponents }
      </Container>
    );
  }

}

export default ProtagContainer;
