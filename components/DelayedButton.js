const React = require('react')

class DelayedButton extends React.Component{

	constructor(props){
		super();
		this.clickEvent = this.clickEvent.bind(this);
	}
	
	clickEvent(event){
		event.persist();
		setTimeout(()=>{
			this.props.onDelayedClick(event);		
		}, this.props.delay);
	}

	render(){
		return(
			<button onClick = {this.clickEvent}>Delayed Button</button>
		);
	}
}

DelayedButton.defaultProps = {
	delay: 0
}

module.exports = DelayedButton;
