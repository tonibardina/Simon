import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import ErrorModal from '../../Components/GameComponents/ErrorModal'

import {
  View
} from 'react-native'

class L2 extends Component {
  render () {
    return (
      <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', top: '35%'}}>
        <ErrorModal modalVisible={this.props.modalVisible} errorWindow={this.props.errorWindow} level={this.props.level} />
        <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
          {this.props.cubeGenerator(1)}
          {this.props.cubeGenerator(2)}
          {this.props.cubeGenerator(3)}
        </View>
        <View style={{flexDirection: 'column'}}>
          {this.props.cubeGenerator(4)}
          {this.props.cubeGenerator(5)}
        </View>
        <View>
          <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
        </View>
      </View>
    )
  }
}

export default L2
