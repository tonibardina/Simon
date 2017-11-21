import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import ErrorModal from '../../Components/GameComponents/ErrorModal'
import Background from '../../Components/GameComponents/Background'
import ProgresBar from '../../Components/GameComponents/ProgresBar'

import {
  View,
  Text
} from 'react-native'

class L2 extends Component {
  constructor (props) {
    super(props)
    this.state = {level: 2}
  }
  render () {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', top: 40}}>
        <ErrorModal modalVisible={this.props.modalVisible} errorWindow={this.props.errorWindow} level={this.state.level} />
        <View style={{flexDirection: 'row', marginTop: 30}}>
          {this.props.cubeGenerator(1, 'powderblue')}
          {this.props.cubeGenerator(2, 'skyblue')}
          {this.props.cubeGenerator(3, 'steelblue')}
        </View>
        <View style={{flexDirection: 'column'}}>
          {this.props.cubeGenerator(4, 'darkslateblue')}
          {this.props.cubeGenerator(5, 'powderblue')}
        </View>
        <View>
          <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
        </View>
      </View>
    )
  }
}

export default L2