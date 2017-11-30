import React, { Component } from 'react'
import L1 from './L1'
import L2 from './L2'
import L3 from './L3'
import L4 from './L4'
import L5 from './L5'
import LevelCompleted from './LevelCompleted'
import Cube from '../../Components/GameComponents/Cube'
import ProgresBar from '../../Components/GameComponents/ProgresBar'

import {
  View,
  Text,
  AsyncStorage,
  Vibration
} from 'react-native'

class Level1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lvl: 1,
      playing: false,
      sequence: [2, 1, 4, 3],
      game: [],
      counter: 0,
      completed: false,
      modalVisible: false,
      clicked: false,
    }
  }

  //Preparing components

  cubeGenerator = (num) => {
    return <Cube sequence={this.state.sequence} game={this.state.game} id={num} userResponse={this.userResponse} playing={this.state.playing} gameCompleted={this.gameCompleted} completed={this.state.completed} size={60} />
  }

  getLevelStructure = () => {
    if (this.state.lvl !== 'end') {
      return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'transparent', width: 400 }}>
          <View style={{backgroundColor: '#210b38', justifyContent: 'flex-start', alignItems: 'center', width: '100%'}}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: '500', top: '38%', marginBottom: '9%'}}>
              Level {this.state.lvl}
            </Text>
            <ProgresBar value={this.state.lvl} />
          </View>
          {this.getLevels()}
        </View>
      )
    } else {
      return <LevelCompleted goToMenu={this.goToMenu} nextLevel={this.nextLevel} setScreen={this.props.setScreen} />
    }
  }

  getLevels = () => {
    if (this.state.lvl === 1) { return <L1 changeLevel={this.changeLevel} level={this.state.lvl} modalVisible={this.state.modalVisible} startSequence={this.startSequence} clicked={this.state.clicked} cubeGenerator={this.cubeGenerator} errorWindow={this.errorWindow} /> }
    if (this.state.lvl === 2) { return <L2 changeLevel={this.changeLevel} level={this.state.lvl} modalVisible={this.state.modalVisible} startSequence={this.startSequence} clicked={this.state.clicked} cubeGenerator={this.cubeGenerator} errorWindow={this.errorWindow} /> }
    if (this.state.lvl === 3) { return <L3 changeLevel={this.changeLevel} level={this.state.lvl} modalVisible={this.state.modalVisible} startSequence={this.startSequence} clicked={this.state.clicked} cubeGenerator={this.cubeGenerator} errorWindow={this.errorWindow} /> }
    if (this.state.lvl === 4) { return <L4 changeLevel={this.changeLevel} level={this.state.lvl} modalVisible={this.state.modalVisible} startSequence={this.startSequence} clicked={this.state.clicked} cubeGenerator={this.cubeGenerator} errorWindow={this.errorWindow} /> }
    if (this.state.lvl === 5) { return <L5 changeLevel={this.changeLevel} level={this.state.lvl} modalVisible={this.state.modalVisible} startSequence={this.startSequence} clicked={this.state.clicked} cubeGenerator={this.cubeGenerator} errorWindow={this.errorWindow} game={this.state.game} playing={this.state.playing} gameCompleted={this.gameCompleted} sequence={this.state.sequence} userResponse={this.userResponse} /> }
  }

  // Game progress

  startSequence = () => {
    this.setState({
      game: [],
      playing: false,
      clicked: true,
      counter: 0
    })
    let intervalId = setInterval(() => {
      this.setState({
        game: [...this.state.game, this.state.sequence[this.state.counter]]
      })
      this.setState({
        counter: this.state.counter + 1
      })
      if (this.state.counter > this.state.sequence.length) {
        clearInterval(intervalId)
        this.gameIsInCurse()
      }
    }, 350)
  }

  gameIsInCurse = () => {
    this.setState({
      game: [],
      counter: 0,
      playing: true
    })
  }

  userResponse = (cube) => {
    if (cube !== this.state.sequence[this.state.counter] && cube !== this.state.sequence[this.state.counter - 1]) {
      this.setState({
        game: [],
        modalVisible: true
      })
    } else if (cube === this.state.sequence[this.state.counter]) {
      this.setState({
        game: [...this.state.game, cube],
        counter: this.state.counter + 1
      })
    }
  }

  errorWindow = () => {
    Vibration.vibrate()
    this.setState({
      lvl: 1,
      modalVisible: false,
      clicked: false,
      sequence: [2, 1, 4, 3],
      game: [],
      playing: false
    })
    this.changeLevel(1)
  }

  gameCompleted = () => {
    let sequences = [
      ['jojo'],
      [2, 1, 4, 3],
      [3, 5, 2, 1, 4],
      [3, 5, 2, 1, 4, 7, 6],
      [3, 5, 2, 1, 4, 7, 6, 9, 8],
      [3, 5, 2, 4, 7, 6, 9, 8, 1],
      [1, 4, 2, 3, 6, 5, 8, 7, 10, 9, 11]
    ]
    if (this.state.lvl === 5) {
      this.setState({
        lvl: 'end'
      })
    } else {
      this.setState({
        sequence: sequences[this.state.lvl + 1],
        lvl: this.state.lvl + 1,
        playing: false,
        game: [],
        counter: 0,
        completed: false,
        modalVisible: false,
        clicked: false,
      })
    }
  }

  // ----GAME END-------

  changeLevel = (number) => {
    this.setState({
      lvl: number
    })
  }

  goToMenu = () => {
    AsyncStorage.getItem('level').then((value) => {
      if (!value) {
        AsyncStorage.setItem('level', '2')
      } else {
      }
    })
    this.props.setScreen('menu')
  }

  render () {
    return (
      <View>
        {this.getLevelStructure()}
      </View>
    )
  }
}

export default Level1
