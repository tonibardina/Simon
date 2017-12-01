import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import ErrorModal from '../../Components/GameComponents/ErrorModal'
import ColorBlock from '../../Components/GameComponents/ColorBlock'
import Achievment from '../../Components/GameComponents/Achievment'

import {
  View,
  AsyncStorage
} from 'react-native'

class L1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      level: 1,
      greenCubes: [undefined, 1, 4, 6, 7, 9],
      modalVisible: false,
      sequence: [6, 2, 4, 3, 1, 5, 9, 7, 8],
      achieve: 3
    }
  }

  componentDidMount () {
    this.props.setSequence(this.state.sequence)
    if (this.props.userLevel === 2 || this.props.userLevel === 1 ) {
      this.setState({
        modalVisible: true
      });
    }
  }

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  }

  render () {
    return (
      <View style={{position: 'absolute', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', top: '30%'}}>
        <ErrorModal modalVisible={this.props.modalVisible} errorWindow={this.props.errorWindow} level={this.state.level} />
        <Achievment modalVisible={this.state.modalVisible} hideModal={this.hideModal} achieve={this.state.achieve}/>
        <View style={{flexDirection: 'row'}}>
          {this.props.cubeGenerator(1)}
          {this.props.cubeGenerator(2)}
          {this.props.cubeGenerator(3)}
          {this.props.cubeGenerator(4)}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.props.cubeGenerator(5)}
          <ColorBlock playing={this.props.playing} greenCubes={this.state.greenCubes} game={this.props.game} style={{margin: 2, resizeMode: 'stretch'}} />
          {this.props.cubeGenerator(6)}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.props.cubeGenerator(7)}
          {this.props.cubeGenerator(8)}
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.props.cubeGenerator(9)}
        </View>
        <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
      </View>
    )
  }
}

export default L1
