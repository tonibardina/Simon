import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import ErrorModal from '../../Components/GameComponents/ErrorModal'

import {
  View
} from 'react-native'

class L4 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sequence: [3, 5, 2, 1, 4, 7, 6, 9, 8]
    }
  }

  componentDidMount () {
    this.props.setSequence(this.state.sequence)
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', top: 40}}>
        <ErrorModal modalVisible={this.props.modalVisible} errorWindow={this.props.errorWindow} level={this.props.level} />
        <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 25}}>
          {this.props.cubeGenerator(1, 'powderblue')}
          {this.props.cubeGenerator(2, 'steelblue')}
          {this.props.cubeGenerator(3, 'darkslateblue')}
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          {this.props.cubeGenerator(4, 'darkslateblue')}
          {this.props.cubeGenerator(5, 'powderblue')}
          {this.props.cubeGenerator(6, 'steelblue')}
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
          {this.props.cubeGenerator(7, 'steelblue')}
          {this.props.cubeGenerator(8, 'darkslateblue')}
          {this.props.cubeGenerator(9, 'powderblue')}
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
        </View>
      </View>
    )
  }
}

export default L4