import React, { Component } from 'react'

import {
  View,
  Image
} from 'react-native'

class Planet extends Component {
  render () {
    return (
      <View style={{height: 10, width: 10, position: 'absolute', backgroundColor: 'red'}}>
        <Image source={require('../../art/planet.png')} style={{resizeMode: 'stretch'}} />
      </View>
    )
  }
}

export default Planet
