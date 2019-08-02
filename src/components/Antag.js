import React, { Component } from 'react';

class Antag extends Component {

  render() {
    return (
      <div>
        { this.props.antag.name }
      </div>
    );
  }

}

export default Antag;
