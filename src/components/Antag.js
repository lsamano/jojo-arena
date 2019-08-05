import React from 'react';
import { Image } from 'semantic-ui-react';

const Antag = ({ antag }) => {
  return (
    <div>
      <Image src={antag.avatar} alt='' avatar size='tiny'/>
      { antag.name }
    </div>
  );
}

export default Antag;
