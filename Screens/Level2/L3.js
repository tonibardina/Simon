import React, { Component } from 'react'
import Go from '../../Components/GameComponents/Go'
import ErrorModal from '../../Components/GameComponents/ErrorModal'
import ColorBlock from '../../Components/GameComponents/ColorBlock'
import Achievment from '../../Components/GameComponents/Achievment'

import {
  View,
  AsyncStorage
} from 'react-native'

class L3 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      level: 3,
      greenCubes: [undefined, 3, 8, 7, 11],
      greenCubes2: [4, 2, 5, 4, 10, 13],
      achieve: 3,
      modalVisible: false,
      sequence: [1, 3, 2, 5, 4, 8, 6, 7, 9, 11, 10, 13, 12]
    }
  }

  componentDidMount () {
    this.props.setSequence(this.state.sequence)
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
          {this.props.cubeGenerator(5)}
        </View>
        <View style={{flexDirection: 'row'}}>
          <ColorBlock playing={this.props.playing} greenCubes={this.state.greenCubes} game={this.props.game} style={{margin: 2, resizeMode: 'stretch'}} />
          {this.props.cubeGenerator(6)}
          {this.props.cubeGenerator(7)}
          {this.props.cubeGenerator(8)}
          <ColorBlock playing={this.props.playing} greenCubes={this.state.greenCubes2} game={this.props.game} style={{margin: 2, resizeMode: 'stretch'}} />
        </View>
        <View style={{flexDirection: 'row'}}>
          {this.props.cubeGenerator(9)}
          {this.props.cubeGenerator(10)}
          {this.props.cubeGenerator(11)}
          {this.props.cubeGenerator(12)}
          {this.props.cubeGenerator(13)}
        </View>
        <Go startGame={this.props.startSequence} clicked={this.props.clicked} />
      </View>
    )
  }
}

export default L3