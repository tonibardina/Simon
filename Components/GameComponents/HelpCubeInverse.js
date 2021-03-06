import React, { Component } from 'react'

import {
  TouchableHighlight,
  Image
} from 'react-native'

class HelpCubeInverse extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cube: 'HELP ME PLEASE!!!'
    }
  }

  setHelp () {
    const helpUser = <Image source={require('../../art/help-cubeInverse.png')} style={{height: 60, width: 60, margin: 2}} />
    const block = <Image style={{margin: 2, width: 60, height: 60, resizeMode: 'stretch'}} source={require('../../art/cube-brick.png')} />
    let cube = this.props.isActive ? helpUser : block
    return cube
  }

  render () {
    return (
      <TouchableHighlight underlayColor='white'>
        {this.setHelp()}
      </TouchableHighlight>
    )
  }
}

export default HelpCubeInverse
