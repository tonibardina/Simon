import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import ErrorModal from '../../Components/GameComponents/ErrorModal'

import {
  View
} from 'react-native'

class L1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      level: 1,
      sequence: [2, 1, 4, 3]
    }
  }

  componentDidMount () {
    this.props.setSequence(this.state.sequence)
  }

  render () {
    return (
      <View style={{position: 'absolute', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', top: '30%'}}>
        <ErrorModal modalVisible={this.props.modalVisible} errorWindow={this.props.errorWindow} level={this.state.level} />
        {this.props.cubeGenerator(1)}
        {this.props.cubeGenerator(2)}
        {this.props.cubeGenerator(3)}
        {this.props.cubeGenerator(4)}
        <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
      </View>
    )
  }
}

export default L1
