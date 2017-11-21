import React, { Component } from 'react'

import {
  View,
  Image
} from 'react-native'

class Background extends Component {
  render () {
    return (
      <View syle={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <Image syle={{flex: 1, resizeMode: 'stretch', height: '100%', widh: '100%', top: 0, left: 0}} source={require('../../art/back-SE.png')} />
      </View>
    )
  }
}

export default Background
