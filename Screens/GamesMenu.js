import React, { Component } from 'react'
import FitImage from 'react-native-fit-image'

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
  }

  chooseGame1 = () => {
    this.props.setScreen('levels')
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{position: 'absolute', top: '10%', left: 0, width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Image style={{width: 200, height: 150, resizeMode: 'stretch', backgroundColor: 'transparent'}} source={require('../art/tittlex3.png')} />
        </View>
        <View style={{top: '10%'}}>
          <Text style={{backgroundColor: 'transparent', color: 'white', fontSize: 30}}>
            Hello {this.props.username} !
          </Text>
        </View>
        <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'center', borderRadius: 20, backgroundColor: '#040419', top: '65%', width: 150}}>
          <TouchableHighlight onPress={this.chooseGame1} style={{width: 100, alignItems: 'center'}}>
            <Text style={{color: 'white', padding: 10, width: 190, textAlign: 'center', fontSize: 15}}>
              START
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default GamesMenu