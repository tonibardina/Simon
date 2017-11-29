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
    this.state = {
      position: 0
    }
  }

  goToLevels = () => {
    this.props.setScreen('levels')
  }

  goToRanking = () => {
    this.props.setScreen('ranking')
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{position: 'absolute', top: '10%', left: 0, width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Image style={{width: '80%', height: '30%', resizeMode: 'stretch', backgroundColor: 'transparent'}} source={require('../art/tittlex3.png')} />
        </View>
        <View>
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
    textAlign: 'center'
  }
})
export default GamesMenu