import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} from 'react-native'

class HelpCubeActivator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      HelpCubeActivator: null
    }
    this.styles = StyleSheet.create({
      HelpCubeActivator: {
        width: 60,
        height: 60,
        backgroundColor: props.color
      },
      lighted: {
        width: 60,
        height: 60,
        backgroundColor: 'orange'
      },
      error: {
        width: 60,
        height: 60,
        backgroundColor: '#dc143c'
      }
    })
    this.pressElement = this.pressElement.bind(this)
  }

  pressElement (e) {
    (this.props.id === 8 && this.props.sequence[this.props.game.length] === 8) ? this.props.activateHelp() : console.log(this.props.id)
    if (this.props.playing === true) {
      const lastNumber = this.props.sequence[this.props.sequence.length - 1]
      if (this.props.id === lastNumber && this.props.game.length === this.props.sequence.length - 1) {
        this.props.userResponse(this.props.id)
        this.props.gameCompleted()
      } else if (this.props.playing) {
        this.props.userResponse(this.props.id)
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
      <TouchableHighlight onPress={this.pressElement} underlayColor='white'>
        {style}
      </TouchableHighlight>
    )
  }
}

export default HelpCubeActivator
