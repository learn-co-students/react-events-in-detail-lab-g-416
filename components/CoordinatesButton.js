const React = require('react');

class CoordinatesButton extends React.Component{

	constructor(props){
		super();
		this.clickEvent = this.clickEvent.bind(this);
	}


	clickEvent(event){
		this.props.onReceiveCoordinates([event.clientX, event.clientY]);
	}

	render(){
		return(
			<button onClick = {this.clickEvent}>Coordinates Button</button>
		);
	}
}

module.exports = CoordinatesButton;
