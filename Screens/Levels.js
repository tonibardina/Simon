import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  AsyncStorage,
  Image
} from 'react-native'

class Levels extends Component {
  constructor (props) {
    super(props)
    this.state = {
      level: ''
    }
  }

  componentDidMount () {
    AsyncStorage.getItem('level').then((value) => {
      this.setState({
        level: value,
      });
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
    AsyncStorage.getItem('level').then((value) => {
      if (value > 1) { this.props.setScreen('level2')}
    })
  }

  render () {
    return (
      <View>
        <ScrollView contentContainerStyle={{width: 1000, backgroundColor:'transparent'}} centerContent={true} showsHorizontalScrollIndicator={false}  backgroundColor={'transparent'} horitzontal={true}>
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
