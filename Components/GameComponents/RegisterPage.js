import React, { Component } from 'react'

import {
  View,
  Image,
  TouchableHighlight,
  Text,
  TextInput
} from 'react-native'

class RegisterPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.registerDone = this.registerDone.bind(this)
    this.setUsername = this.setUsername.bind(this)
  }

  setUsername (value) {
    this.props.setUser(value)
  }

  registerDone () {
    this.props.setScreen('menu')
  }

  render () {
    return (
      <View style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 0,
        left: 0,
        backgroundColor: 'transparent'
      }}>
        <Image style={{width: 200, height: 150, resizeMode: 'stretch', backgroundColor: 'transparent', top: '19%'}} source={require('../../art/tittlex3.png')} />
        <Text style={{color: 'white', backgroundColor: '#130721', padding: 15, borderRadius: 2, top: '21%', width: '100%', textAlign: 'center'}}>
          Hello, how do you want me to call you?
        </Text>
        <TextInput
          style={{marginTop: 20, height: 30, width: 200, backgroundColor: 'white', borderWidth: 1, top: '20%'}}
          onChangeText={this.setUsername}
        />
        <TouchableHighlight onPress={this.registerDone} style={{width: 100, alignItems: 'center', borderRadius: 20, top: 150}}>
          <Text style={{color: 'white', fontSize: 20}}>
            START
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default RegisterPage