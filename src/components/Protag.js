import React from 'react';
import { Image, Header } from 'semantic-ui-react';

const Protag = ({ protag, chooseProtag }) => {
  return (
    <Header as='h3' onClick={ () => chooseProtag(protag) }  inverted color='grey'>
      <Image src={protag.avatar} alt='' avatar size='huge'/>
      { protag.name }
    </Header>
  );
}

export default Protag;
