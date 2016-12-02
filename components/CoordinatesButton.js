const React = require('react')

class CoordinatesButton extends React.Component {
  constructor () {
    super()

    this.createEl = this.createEl.bind(this)
  }

  createEl (event) {
    return this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render () {
    return (
      <button onClick={this.createEl}>Get Mouse Coords</button>
    )
  }
}

module.exports = CoordinatesButton
