// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  _onClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render() {
    return (
      <button onClick={this._onClick}></button>
    )

  }
}

export default CoordinatesButton;
