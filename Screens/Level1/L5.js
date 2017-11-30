import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import ErrorModal from '../../Components/GameComponents/ErrorModal'
import HelpCube from '../../Components/GameComponents/HelpCube'
import HelpCubeActivator from '../../Components/GameComponents/HelpCubeActivator'
import Achievment from '../../Components/GameComponents/Achievment'

import {
  View,
  AsyncStorage
} from 'react-native'

class L5 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      HelpCubeIsActive: false,
      achieve: 2,
      modalVisible: false
    }
  }

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  }

  setHelpCubeIsActive = () => {
    this.setState({
      HelpCubeIsActive: true
    })
  }

  render () {
    return (
      <View style={{position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', top: 40}}>
        <View style={{alignItems: 'flex-end'}}>
          <ErrorModal modalVisible={this.props.modalVisible} errorWindow={this.props.errorWindow} level={this.props.level} />
          <Achievment modalVisible={this.state.modalVisible} hideModal={this.hideModal} achieve={this.state.achieve}/>
          <View style={{flexDirection: 'row'}}>
            {this.props.cubeGenerator(1, 'powderblue')}
          </View>
          <View style={{flexDirection: 'row'}}>
            {this.props.cubeGenerator(2, 'darkslateblue')}
            {this.props.cubeGenerator(3, 'steelblue')}
          </View>
          <View style={{flexDirection: 'row'}}>
            {this.props.cubeGenerator(4, 'powderblue')}
            {this.props.cubeGenerator(5, 'steelblue')}
            <HelpCube isActive={this.state.HelpCubeIsActive} />
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent'
          }}>
            {this.props.cubeGenerator(6, 'steelblue')}
            {this.props.cubeGenerator(7, 'darkslateblue')}
            <HelpCubeActivator number={8} activateHelp={this.setHelpCubeIsActive} sequence={this.props.sequence} game={this.props.game} id={8} userResponse={this.props.userResponse} playing={this.props.playing} gameCompleted={this.props.gameCompleted} completed={this.props.completed} />
            {this.props.cubeGenerator(9, 'steelblue')}
          </View>
        </View>
        <View>
          <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
        </View>
      </View>
    )
  }
}

export default L5