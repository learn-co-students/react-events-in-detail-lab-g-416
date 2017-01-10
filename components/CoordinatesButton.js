const React = require('react');

class CoordinatesButton extends React.Component {
  constructor () {
    super ();

    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getCoordinates (event) {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render () {
    return (
      <button onClick={ this.getCoordinates }>Get Coordinates</button>
    )
  }
}

module.exports = CoordinatesButton;