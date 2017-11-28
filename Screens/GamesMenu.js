import React, { Component } from 'react'
import FitImage from 'react-native-fit-image'

import {
  View,
  TouchableHighlight,
  Image,
  Text,
  StyleSheet
} from 'react-native'

class GamesMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  goToLevels = () => {
    this.props.setScreen('levels')
  }

  rankingPosition = () => {
    fetch('http://localhost:3000/getPosition', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.username
      })
    })
    .then(response => {
      console.log(response._bodyText)
      return response._bodyText
    })
    .catch((err) => {console.log(err)})
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{position: 'absolute', top: '10%', left: 0, width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Image style={{width: 200, height: 150, resizeMode: 'stretch', backgroundColor: 'transparent'}} source={require('../art/tittlex3.png')} />
        </View>
        <View>
          <Text style={styles.number}>
            3
          </Text>
        </View>
        <View>
          <TouchableHighlight onPress={this.goToLevels} style={styles.button}>
            <Text style={styles.text}>
              START
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.chooseGame1} style={styles.button}>
            <Text style={styles.text}>
              RANKING
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
    backgroundColor: '#040419',
    borderRadius: 7
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
    fontWeight: '1000'
    textAlign: 'center'
  }
})
export default GamesMenu