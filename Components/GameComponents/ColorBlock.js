import React, { Component } from 'react'

import {
  StyleSheet,
  Vibration,
  TouchableHighlight,
  Image,
  Text
} from 'react-native'

class ColorBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cube: null,
    }
  }

  defineStyle = () => {
    if(this.props.playing) {
      if (this.props.greenCubes.includes(this.props.game[this.props.game.length - 1])) {
        return <Image source={require('../../art/colorBlockOk.png')} style={{margin: 2, resizeMode: 'stretch'}} />
      } else {
        return <Image source={require('../../art/colorBlock.png')} style={{margin: 2, resizeMode: 'stretch'}} />
      } 
    } else{
      return <Image source={require('../../art/colorBlock.png')} style={{margin: 2, resizeMode: 'stretch'}} />
    }
  }

  render () {
    const style = this.defineStyle()
    return (
      <TouchableHighlight style={{backgroundColor: 'transparent'}} onPress={this.pressElement} underlayColor='transparent'>
        {style}
      </TouchableHighlight>
    )
  }
}

export default ColorBlock