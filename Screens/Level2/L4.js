import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import ErrorModal from '../../Components/GameComponents/ErrorModal'
import CubeBlack from '../../Components/GameComponents/CubeBlack'

import {
  View
} from 'react-native'

class L4 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      level: 4,
      sequence: [2, 4, 5, 1, 3, 7, 6, 9, 8]
    }
  }

  componentDidMount () {
    this.props.setSequence(this.state.sequence)
  }

  render () {
    return (
      <View style={{position: 'absolute', backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'center', top: '18%'}}>
        <ErrorModal modalVisible={this.props.modalVisible} errorWindow={this.props.errorWindow} level={this.state.level} />
        <View style={{flexDirection: 'row'}}>
          <CubeBlack />
          {this.props.cubeGenerator(1)}
          <CubeBlack />
          <CubeBlack />
          {this.props.cubeGenerator(2)}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.props.cubeGenerator(3)}
          <CubeBlack />
          <CubeBlack />
          {this.props.cubeGenerator(4)}
          <CubeBlack />
        </View>
        <View style={{flexDirection: 'row'}}>
          <CubeBlack />
          {this.props.cubeGenerator(5)}
          {this.props.cubeGenerator(6)}
          <CubeBlack />
          <CubeBlack />
        </View>
        <View style={{flexDirection: 'row'}}>
          <CubeBlack />
          <CubeBlack />
          <CubeBlack />
          {this.props.cubeGenerator(7)}
          <CubeBlack />
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.props.cubeGenerator(8)}
          {this.props.cubeGenerator(9)}
          <CubeBlack />
          <CubeBlack />
          <CubeBlack />
        </View>
        <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
      </View>
    )
  }
}

export default L4
