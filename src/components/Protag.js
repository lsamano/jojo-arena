import React from 'react';
import { Image, Header } from 'semantic-ui-react';

const Protag = ({ protag, chooseProtag }) => {
  return (
    <div onClick={ () => chooseProtag(protag) } style={{padding: '15px'}} >

      <Header as='h3'>
        <Image src={protag.avatar} alt='' avatar size='huge'/>
        { protag.name }
      </Header>
    </div>
  );
}

export default Protag;
