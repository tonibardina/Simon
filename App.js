import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import GamesMenu from './Screens/GamesMenu'
import Background from './Components/GameComponents/Background'
import Levels from './Screens/Levels'
import Level1 from './Screens/Level1/Level1'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      screen: 'menu'
    }
    this.setScreen = this.setScreen.bind(this)
    this.screen = this.screen.bind(this)
  }

  setScreen (value) {
    this.setState({
      screen: value
    })
  }

  screen () {
    if (this.state.screen === 'menu') { return <GamesMenu setScreen={this.setScreen} /> }
    if (this.state.screen === 'levels') { return <Levels setScreen={this.setScreen} /> }
    if (this.state.screen === 'level1') { return <Level1 setScreen={this.setScreen} /> }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Background />
        <View style={{position: 'absolute', width: '100%', height: '100%', alignItems: 'center', top: 0, left: 0, backgroundColor: 'transparent'}}>
          {this.screen()}
        </View>
      </View>
    )
  }
}
