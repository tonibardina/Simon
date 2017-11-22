import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

class Levels extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.chooseLevel1 = this.chooseLevel1.bind(this)
  }

  chooseLevel1 () {
    this.props.setScreen('level1')
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} >
        <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableHighlight onPress={this.chooseLevel1} style={styles.level1}>
            <Text style={{color: 'white'}}>
              Level 1
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.level2}>
            <Text style={{color: 'white'}}>
              Working on skylab...
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.level3}>
            <Text style={{color: 'white'}}>
              Working on skylab...
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  level1: {
    backgroundColor: 'rgba(255, 204, 51, 2)',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    width: 200,
    shadowColor: '#ffffcc',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 18,
    shadowOpacity: 0.2
  },
  level2: {
    backgroundColor: 'rgba(204, 204, 204, 2)',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    width: 200
  },
  level3: {
    backgroundColor: 'rgba(204, 204, 204, 2)',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    width: 200
  }

})

export default Levels
