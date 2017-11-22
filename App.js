import React, { Component } from 'react'
import {
  View,
  AsyncStorage
} from 'react-native'

import GamesMenu from './Screens/GamesMenu'
import Background from './Components/GameComponents/Background'
import Levels from './Screens/Levels'
import Level1 from './Screens/Level1/Level1'
import RegisterPage from './Components/GameComponents/RegisterPage'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        username: null,
        points: 'points',
        levelsUnBlocked: 1
      },
      screen: 'noResgistered'
    }
    this.setScreen = this.setScreen.bind(this)
    this.screen = this.screen.bind(this)
    this.setUser = this.setUser.bind(this)
  }

  componentDidMount () {
    AsyncStorage.getItem('username').then((value) => {
      console.log('value--->' + value)
      this.setState({
        user: {
          username: value,
          points: 'points',
          levelsUnBlocked: 1
        }})
    }).done()
    //AsyncStorage.removeItem('username', ()=>{console.log('blabla')})
  }

  setUser (value) {
    AsyncStorage.setItem('username', value)
    this.setState({
      username: value
    })
  }

  setScreen (value) {
    this.setState({
      screen: value
    })
  }

  screen () {
    if (this.state.screen === 'menu') { return <GamesMenu setScreen={this.setScreen} username={this.state.user.username}/> }
    if (this.state.screen === 'levels') { return <Levels setScreen={this.setScreen} /> }
    if (this.state.screen === 'level1') { return <Level1 setScreen={this.setScreen} /> }
    if (this.state.screen === 'noResgistered') { return <RegisterPage setUser={this.setUser} /> }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Background />
        {this.screen()}
      </View>
    )
  }
}
