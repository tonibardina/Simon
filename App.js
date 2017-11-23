import React, { Component } from 'react'
import {
  AsyncStorage,
  View
} from 'react-native'
import GamesMenu from './Screens/GamesMenu'
import Background from './Components/GameComponents/Background'
import Levels from './Screens/Levels'
import Level1 from './Screens/Level1/Level1'
import Level2 from './Screens/Level2/Level2'
import RegisterPage from './Components/GameComponents/RegisterPage'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      screen: 'menu',
      user: {
        username: null,
        points: 'points',
        levelsUnBlocked: 1
      }
    }
    this.setScreen = this.setScreen.bind(this)
    this.screen = this.screen.bind(this)
    this.setUser = this.setUser.bind(this)
  }

  componentDidMount () {
    //AsyncStorage.removeItem('username')
    AsyncStorage.getItem('level').then((value) => { console.log('-------->' + value) })
    if (this.state.screen === 'noregistered' || this.state.screen === 'menu') {
      AsyncStorage.getItem('username').then((value) => {
        if (value === null) {
          this.setState({
            screen: 'noregistered'
          })
        } else {
          this.setState({
            user: {
              username: value,
              points: 'points',
              levelsUnBlocked: 1
            },
            screen: 'menu'
          })
        }
      })
    }
  }

  setUser (value) {
    AsyncStorage.setItem('username', value)
    this.setState({
      user: {
        username: value,
        points: 'points',
        levelsUnBlocked: 1
      }
    })
  }

  setScreen (value) {
    this.setState({
      screen: value
    })
  }

  screen () {
    if (this.state.screen === 'menu') { return <GamesMenu setScreen={this.setScreen} username={this.state.user.username} /> }
    if (this.state.screen === 'levels') { return <Levels setScreen={this.setScreen} /> }
    if (this.state.screen === 'level1') { return <Level1 setScreen={this.setScreen} /> }
    if (this.state.screen === 'level2') { return <Level2 setScreen={this.setScreen} /> }
    if (this.state.screen === 'noregistered') { return <RegisterPage setUser={this.setUser} setScreen={this.setScreen} /> }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Background />
        <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', top: 0, left: 0, backgroundColor: 'transparent'}}>
          {this.screen()}
        </View>
      </View>
    )
  }
}
