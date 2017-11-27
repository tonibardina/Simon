import React, { Component } from 'react'
import t from 'tcomb-form-native'

import {
  View,
  Image,
  TouchableHighlight,
  Text,
  TextInput
} from 'react-native'

class RegisterPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.registerDone = this.registerDone.bind(this)
    this.setUsername = this.setUsername.bind(this)
  }

  setUsername (value) {
    this.props.setUser(value)
  }

  registerDone () {
    this.props.setScreen('menu')
  }

  render () {
    return (
      
    )
  }
}

export default RegisterPage