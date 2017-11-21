import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Image
} from 'react-native'

class ProgresBar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.setProgres = this.setProgres.bind(this)
  }

  setProgres () {
    if (this.props.value === 1) { return <Image style={{marginTop: 10, marginBottom: 10, width: 290, height: 17, resizeMode: 'stretch'}} source={require('../../art/bar5.png')} /> }
    if (this.props.value === 2) { return <Image style={{marginTop: 10, marginBottom: 10, width: 290, height: 17, resizeMode: 'stretch'}} source={require('../../art/bar4.png')} /> }
    if (this.props.value === 3) { return <Image style={{marginTop: 10, marginBottom: 10, width: 290, height: 17, resizeMode: 'stretch'}} source={require('../../art/bar3.png')} /> }
    if (this.props.value === 4) { return <Image style={{marginTop: 10, marginBottom: 10, width: 290, height: 17, resizeMode: 'stretch'}} source={require('../../art/bar2.png')} /> }
    if (this.props.value === 5) { return <Image style={{marginTop: 10, marginBottom: 10, width: 290, height: 17, resizeMode: 'stretch'}} source={require('../../art/bar.png')} /> }
  }

  render () {
    return (
      <View style={{backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
        {this.setProgres()}
      </View>
    )
  }
}

export default ProgresBar
