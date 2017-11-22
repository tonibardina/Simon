import React, { Component } from 'react'

import {
  View,
  TouchableHighlight,
  Image,
  Text
} from 'react-native'

class GamesMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.chooseGame1 = this.chooseGame1.bind(this)
  }

  chooseGame1 () {
    this.props.setScreen('levels')
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{position: 'absolute', top: 40, left: 0, width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Image style={{width: 200, height: 150, resizeMode: 'stretch', backgroundColor: 'transparent'}} source={require('../art/tittlex3.png')} />
        </View>
        <View>
          <Text style={{color: 'white', fontSize: 30}}>
            Hello {this.props.username} !
          </Text>
        </View>
        <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight onPress={this.chooseGame1} style={{width: 100, alignItems: 'center', borderRadius: 20, top: 150}}>
            <Image source={require('../art/startButton.png')} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default GamesMenu