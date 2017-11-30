import React, { Component } from 'react'
import {updateLevel} from '../../Api/server'

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  AsyncStorage
} from 'react-native'

class LevelCompleted extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  nextLevel = () => {
    AsyncStorage.getItem('username').then((value) => {
      updateLevel(value, 2)
    })
    this.props.setScreen('level2')
  }

  goToMenu = () => {
    AsyncStorage.getItem('username').then((value) => {
      updateLevel(value, 2)
    })
    this.props.setScreen('menu')
  }

  render () {
    return (
      <View>
        <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.tittle}>
            Congratulations!
          </Text>
          <Text style={{margin: 25, backgroundColor: 'transparent', color: 'white'}}>
            You just completed Level 1!
          </Text>
          <TouchableHighlight style={styles.levelUp} underlayColor={'white'} onPress={this.nextLevel} >
            <Text style={{color: 'white'}}>
              Next Level !
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.return} underlayColor={'white'} onPress={this.props.goToMenu} >
            <Text style={{color: 'white'}}>
              Menu
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tittle: {
    fontSize: 33,
    fontWeight: '300',
    marginBottom: 10,
    backgroundColor: 'transparent',
    color: 'white'
  },
  levelUp: {
    backgroundColor: 'rgba(153, 51, 153, 0.6)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    width: 200
  },
  return: {
    backgroundColor: 'rgba(51, 0, 102, 0.8)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    width: 200
  }
})

export default LevelCompleted