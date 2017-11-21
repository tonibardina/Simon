import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} from 'react-native'

class CubeBlack extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cube: null
    }
  }

  render () {
    return (
      <TouchableHighlight underlayColor='white'>
        <Image style={{margin: 2, width:60, height: 60, resizeMode: 'stretch'}} source={require('../../art/cube-brick.png')}/>
      </TouchableHighlight>
    )
  }
}


export default CubeBlack
