import React, { Component } from 'react'
import FitImage from 'react-native-fit-image'

import {
  AsyncStorage,
  View,
} from 'react-native'
import Levels from './Screens/Levels'
import Level1 from './Screens/Level1/Level1'
import Level2 from './Screens/Level2/Level2'
import Login from './Screens/Login'
import Ranking from './Screens/Ranking'
import GamesMenu from './Screens/GamesMenu'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      screen: 'menu',
    }
  }

  componentDidMount () {
    //AsyncStorage.removeItem('username')
    AsyncStorage.getItem('username').then(value => {
      if (value) {
        console.log('user already registered!' + value)
      } else {
        this.setState({
          screen: 'login',
        })
      }
    })
  }

  setScreen = (value) => {
    this.setState({
      screen: value
    })
  }

  screen = () => {
    if (this.state.screen === 'menu') { return <GamesMenu setScreen={this.setScreen} /> }
    if (this.state.screen === 'levels') { return <Levels setScreen={this.setScreen} /> }
    if (this.state.screen === 'level1') { return <Level1 setScreen={this.setScreen} /> }
    if (this.state.screen === 'level2') { return <Level2 setScreen={this.setScreen} /> }
    if (this.state.screen === 'login') { return <Login setScreen={this.setScreen} /> }
    if (this.state.screen === 'ranking') { return <Ranking setScreen={this.setScreen} /> }
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#0e0417'}}>
        <FitImage originalWidth={1242} originalHeight={2678} source={require('./art/back-prueba.png')} />
        <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', top: 0, left: 0, backgroundColor: 'transparent'}}>
          {this.screen()}
        </View>
      </View>
    )
  }
}
