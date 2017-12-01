import React, { Component } from 'react'
import FitImage from 'react-native-fit-image'

import {
  View,
  TouchableHighlight,
  Image,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

class GamesMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      position: 0
    }
  }

  componentDidMount () {
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

  goToLevels = () => {
    this.props.setScreen('levels')
  }

  goToRanking = () => {
    this.props.setScreen('ranking')
  }

  logOut = () => {
    AsyncStorage.removeItem('username').then(this.props.setScreen('login'))
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{position: 'absolute', top: '10%', left: 0, width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Image style={{width: '80%', height: '27%', resizeMode: 'stretch', backgroundColor: 'transparent'}} source={require('../art/tittlex3.png')} />
        </View>
        <View style={{marginTop: '40%'}}>
          <TouchableHighlight onPress={this.goToLevels} style={styles.button}>
            <Text style={styles.text}>
              PLAY
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goToRanking} style={styles.button}>
            <Text style={styles.text}>
              RANKING
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.logOut} style={styles.button}>
            <Text style={styles.text}>
              LOGOUT
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: 200,
    margin: 10,
    backgroundColor: '#b94add',
    borderRadius: 13,
    padding: 5,
  },
  text: {
    color: 'white',
    padding: 10,
    width: 190,
    fontSize: 15,
    textAlign: 'center'
  },
  number: {
    color: 'white',
    padding: 10,
    width: 190,
    fontSize: 85,
    textAlign: 'center'
  }
})
export default GamesMenu