import React, { Component } from 'react'
import {getUser, updateLevel} from '../Api/server'

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  AsyncStorage,
  Image,
  Alert
} from 'react-native'

class Levels extends Component {
  constructor (props) {
    super(props)
    this.state = {
      level: 1
    }
  }

  componentDidMount () {
    AsyncStorage.getItem('username').then(value => {
      if (value) {
        getUser(value)
        .then((user) => {
          let player = JSON.parse(user._bodyInit)
          player[0].level ? console.log(player[0].level) : updateLevel(value, 1)
          this.setState({
            level: player[0].level || 1
          })
          this.props.setLevel(player[0].level || 1)
        })
        .catch(err => console.log(err)) 
      }
    })
  }

  level2 = () => {
    if (this.state.level < 2 ) {
      return <Image source={require('../art/lvl2B.png')} /> 
    } else {
      return <Image source={require('../art/lvl2.png')} />
    }
  } 

  level3 = () => {
    if (this.state.level < 3) { 
      return <Image source={require('../art/lvl3B.png')} /> 
    } else {
      return <Image source={require('../art/lvl3B.png')} />
    }
  }

  chooseLevel1 = () => {
    this.props.setScreen('level1')
  }

  chooseLevel2 = () => {
    this.state.level > 1 ? this.props.setScreen('level2') : Alert.alert('Level Blocked')
  }

  goToMenu = () => {
    this.props.setScreen('menu')
  }

  render () {
    return (
      <View>
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
          <TouchableHighlight style={{marginTop: '20%'}} onPress={this.goToMenu}>
            <Image style={{width: 45, height: 45}} source={require('../art/arrow-back.png')} />
          </TouchableHighlight>
        </View>
        <ScrollView centerContent={true} contentContainerStyle={{width: 1000, alignItems: 'flex-start',}} showsHorizontalScrollIndicator={false} backgroundColor={'transparent'} horitzontal={true}>
          <View style={{left: 0, flexDirection: 'row'}} >
            <TouchableHighlight style={{marginLeft: 60, marginRight: 10}} onPress={this.chooseLevel1} underlayColor={'transparent'}>
              <Image source={require('../art/lvl1.png')} />
            </TouchableHighlight>
            <TouchableHighlight style={{marginLeft: 25, marginRight: 10}} onPress={this.chooseLevel2} underlayColor={'transparent'}>
              {this.level2()}
            </TouchableHighlight>
            <TouchableHighlight style={{marginLeft: 25}} underlayColor={'transparent'}>
              {this.level3()}
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Levels
