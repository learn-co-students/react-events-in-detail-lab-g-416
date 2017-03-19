import React, { Component } from 'react';

class DelayedButton extends React.Component {
  constructor() {
    super();
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    e.persist();
    setTimeout(() =>{
      this.props.onDelayedClick(e);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.clickEvent}>click</button>
    );
  }
}

module.exports = DelayedButton;
