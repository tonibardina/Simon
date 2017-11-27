import React, { Component } from 'react'

import {
  StyleSheet,
  Vibration,
  TouchableHighlight,
  Image
} from 'react-native'

class Cube extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cube: null
    }
  }

  pressElement = (e) => {
    if (this.props.playing === true) {
      this.props.userResponse(this.props.id)
      const lastNumber = this.props.sequence[this.props.sequence.length - 1]
      if (this.props.id === lastNumber && this.props.game.length === this.props.sequence.length - 1) {
        this.props.gameCompleted()
      }
    }
  }

  defineStyle = () => {
    if (this.props.game.includes(this.props.id)) {
      return <Image source={require('../../art/cube-lighted.png')} style={{margin: 2, resizeMode: 'stretch'}} />
    } else {
      return <Image source={require('../../art/cubeblue-light.png')} style={{margin: 2, resizeMode: 'stretch'}} />
    }
  }

  render () {
    const style = this.defineStyle()
    return (
      <TouchableHighlight style={{backgroundColor: 'transparent'}} onPress={this.pressElement} underlayColor='transparent'>
        {style}
      </TouchableHighlight>
    )
  }
}

export default Cube
