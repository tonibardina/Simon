import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import ErrorModal from '../../Components/GameComponents/ErrorModal'
import HelpCube from '../../Components/GameComponents/HelpCube'
import HelpCubeInverse from '../../Components/GameComponents/HelpCubeInverse'
import HelpCubeActivator from '../../Components/GameComponents/HelpCubeActivator'
import HelpCubeInverseActivator from '../../Components/GameComponents/HelpCubeInverseActivator'

import {
  View
} from 'react-native'

class L2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      HelpCubeIsActive: false,
      HelpCubeInverseIsActive: false,
      sequence:[1, 2, 5, 3, 4, 6, 7]
    }
  }

  componentDidMount () {
    this.props.setSequence(this.state.sequence)
  }

  setHelpCubeIsActive = () => {
    this.setState({
      HelpCubeIsActive: true
    })
  }

  setHelpCubeInverseIsActive = () => {
    this.setState({
      HelpCubeInverseIsActive: true
    })
  }

  render () {
    return (
      <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', top: '25%'}}>
        <ErrorModal modalVisible={this.props.modalVisible} errorWindow={this.props.errorWindow} level={this.props.level} />
        <View>
          {this.props.cubeGenerator(1)}
        </View>
        <View style={{flexDirection: 'row'}}>
          <HelpCubeInverseActivator number={2} activateHelp={this.setHelpCubeInverseIsActive} sequence={this.state.sequence} game={this.props.game} id={2} userResponse={this.props.userResponse} playing={this.props.playing} gameCompleted={this.props.gameCompleted} completed={this.props.completed} />
          <HelpCubeInverse isActive={this.state.HelpCubeInverseIsActive} />
          {this.props.cubeGenerator(3)}
          {this.props.cubeGenerator(4)}
        </View>
        <View style={{flexDirection: 'row'}}>
          <HelpCubeActivator number={5} activateHelp={this.setHelpCubeIsActive} sequence={this.state.sequence} game={this.props.game} id={5} userResponse={this.props.userResponse} playing={this.props.playing} gameCompleted={this.props.gameCompleted} completed={this.props.completed} />
          <HelpCube isActive={this.state.HelpCubeIsActive} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {this.props.cubeGenerator(6)}
          <View style={{width: 60, height: 60}} />
          {this.props.cubeGenerator(7)}
        </View>
        <View>
          <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
        </View>
      </View>
    )
  }
}

export default L2
