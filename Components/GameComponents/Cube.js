
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
    this.styles = StyleSheet.create({
      cube: {
        width: props.size,
        height: props.size,
        backgroundColor: props.color
      },
      lighted: {
        width: props.size,
        height: props.size,
        backgroundColor: 'orange'
      },
      error: {
        width: props.size,
        height: props.size,
        backgroundColor: '#dc143c'
      }
    })
    this.pressElement = this.pressElement.bind(this)
  }

  pressElement (e) {
    if (this.props.playing === true) {
      const lastNumber = this.props.sequence[this.props.sequence.length - 1]
      if (this.props.id === lastNumber && this.props.game.length === this.props.sequence.length - 1) {
        this.props.userResponse(this.props.id)
        this.props.gameCompleted()
      } else if (this.props.playing) {
        this.props.userResponse(this.props.id)
      } else if (this.props.game[this.props.game.length] !== this.props.id) {
        return Vibration.vibrate()
      }
    }
  }

  defineStyle () {
    if (this.props.game.includes(this.props.id)) {
      return <Image source={require('../../art/cube-lighted.png')} style={{margin: 2}} />
    } else {
      return <Image source={require('../../art/cubeblue-light.png')} style={{margin: 2}} />
    }
  }

  render () {
    const style = this.defineStyle()
    return (
      <TouchableHighlight onPress={this.pressElement} underlayColor='transparent'>
        {style}
      </TouchableHighlight>
    )
  }
}

export default Cube
