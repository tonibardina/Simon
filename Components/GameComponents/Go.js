import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image
} from 'react-native'

class CountDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'GO!'
    }
    this.go = this.go.bind(this)
    this.defineStyle = this.defineStyle.bind(this)
  }

  go () {
    !this.props.clicked ? this.props.startGame() : ''
    this.setState({
      clicked: true
    })
  }

  defineStyle () {
    if (!this.props.clicked) {
      return <Image style={{width: 60, height: 60, resizeMode: 'stretch', marginTop: 40}} source={require('../../art/goButton.png')} />
    } else {
      return <Image style={{width: 60, height: 60, resizeMode: 'stretch', marginTop: 40}} source={require('../../art/goButton-blocked.png')} />
    }
  }

  render () {
    return (
      <TouchableHighlight onPress={this.go} underlayColor='transparent' style={{borderRadius: 15}}>
        {this.defineStyle()}
      </TouchableHighlight>
    )
  }
}

export default CountDown
