import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  AsyncStorage
} from 'react-native'

class Levels extends Component {
  constructor (props) {
    super(props)
    this.state = {
      levels: ''
    }
  }

  componentDidMount () {
    //AsyncStorage.removeItem('level')
    AsyncStorage.getItem('level').then((value) => {
      this.setState({
        levels: value,
      });
    })
  }

  chooseLevel1 = () => {
    this.props.setScreen('level1')
  }

  chooseLevel2 = () => {
    AsyncStorage.getItem('level').then((value) => {
      if (value > 1) { this.props.setScreen('level2')}
    })
  }

  chooseLevel3 = () => {
    try {
      const level = AsyncStorage.getItem('level')
      if (level > 1) { this.props.setScreen('level3')}
    } catch (error){
      console.log(error)
    }
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '80%', height: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(51, 0, 102, 0.4)', borderRadius: 20}} >
        <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',}}>
          <TouchableHighlight onPress={this.chooseLevel1} style={styles.level}>
            <Text style={{color: 'white'}}>
              Level 1
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.chooseLevel2} style={this.state.levels > 1 ? styles.level : styles.levelBloqued}>
            <Text style={{color: 'white'}}>
              Level 2
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.chooseLevel3} style={this.state.levels > 2 ? styles.level : styles.levelBloqued}>
            <Text style={{color: 'white'}}>
              Level 3
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  level: {
    backgroundColor: 'rgba(153, 0, 204, 0.8)',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    width: 200,
  },
  levelBloqued: {
    backgroundColor: 'rgba(21, 0, 102, 0.8)',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    width: 200
  },
})

export default Levels
