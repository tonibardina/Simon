import React, { Component } from 'react'

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
      level: ''
    }
  }

  componentDidMount () {
    AsyncStorage.getItem('username').then(value => {
      if (value) {
        fetch('http://localhost:3000/getUser', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: value
          })
        })
        .then((user) => {
          let player = JSON.parse(user._bodyInit)
          this.setState({
            level: player[0].level
          })
        })  
      }
    })
  }

  level2 = () => {
    if (this.state.level < 2) { 
      return <Image source={require('../art/lvl2B.png')} /> 
    } else {
      return <Image source={require('../art/lvl2.png')} />
    }
  } 

  level3 = () => {
    if (this.state.level < 3) { 
      return <Image source={require('../art/lvl3B.png')} /> 
    } else {
      console.log('in progres...')
    }
  }

  chooseLevel1 = () => {
    this.props.setScreen('level1')
  }

  chooseLevel2 = () => {
    this.state.level > 1 ? his.props.setScreen('level2') : Alert.alert('Level Bloqued')
  }

  render () {
    return (
      <View>
        <ScrollView centerContent={true} contentContainerStyle={{width: 1000, backgroundColor:'transparent', alignItems: 'flex-start',}} showsHorizontalScrollIndicator={false}  backgroundColor={'transparent'} horitzontal={true}>
          <View style={{left: 0, flexDirection: 'row'}} >
            <TouchableHighlight style={{marginLeft: 60, marginRight: 10}} onPress={this.chooseLevel1} underlayColor={'transparent'}>
              <Image source={require('../art/lvl1.png')} />
            </TouchableHighlight>
            <TouchableHighlight style={{marginLeft: 25, marginRight: 10}} onPress={this.chooseLevel2} underlayColor={'transparent'}>
              {this.level2()}
            </TouchableHighlight>
            <TouchableHighlight style={{marginLeft: 25}} onPress={this.chooseLevel3} underlayColor={'transparent'}>
              {this.level3()}
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Levels
