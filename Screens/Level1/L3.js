import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import CubeBlack from '../../Components/GameComponents/CubeBlack'
import ErrorModal from '../../Components/GameComponents/ErrorModal'
import Achievment from '../../Components/GameComponents/Achievment'

import {
  View,
  AsyncStorage
} from 'react-native'

class L3 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      achieve: 1
    }
  }

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', top: '12%'}} >
        <ErrorModal modalVisible={this.props.modalVisible} errorWindow={this.props.errorWindow} level={this.props.level} />
        <Achievment modalVisible={this.state.modalVisible} hideModal={this.hideModal} achieve={this.state.achieve}/>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}>
          {this.props.cubeGenerator(1, 'powderblue')}
          {this.props.cubeGenerator(2, 'powderblue')}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
          <CubeBlack />
          {this.props.cubeGenerator(3, 'darkslateblue')}
          {this.props.cubeGenerator(4, 'steelblue')}
          <CubeBlack />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}} >
          {this.props.cubeGenerator(5, 'steelblue')}
          {this.props.cubeGenerator(6, 'powderblue')}
          {this.props.cubeGenerator(7, 'darkslateblue')}
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          height: 60
        }}>
          <CubeBlack />
        </View>
        <View>
          <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
        </View>
      </View>
    )
  }
}

export default L3