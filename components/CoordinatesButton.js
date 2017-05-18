const React = require('react');

class CoordinatesButton extends React.Component {
  constructor(props) {
    super();

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
    // The onReceiveCoordinates callback prop is then called with these coordinates
  }

  render(){
    return(
      <div>
        <button onClick={this.buttonClicked} >Button</button>
      </div>
    )
  }
}

module.exports = CoordinatesButton;
