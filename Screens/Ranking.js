import React, { Component } from 'react'
import { getRanking } from '../Api/server'

import {
  View,
  TouchableHighlight,
  Image,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'

class Ranking extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ranking: false
    }
  }

  goToLevels = () => {
    this.props.setScreen('levels')
  }

  componentDidMount () {
    getRanking()
    .then((info) => {
      let players = JSON.parse(info._bodyInit)
      this.setState({
        ranking: players
      })
    })
    .catch(err => console.log)
  }

  goToMenu = () => {
    this.props.setScreen('menu')
  }

  render () {
    let counter = 0
    return (
      <View style={styles.container}>
        <View style={{width: '100%', height: '15%', backgroundColor: '#e8c223', padding: 15, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between',}}>
          <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
            Simon Best Players
          </Text>
          <View>
            <TouchableHighlight onPress={this.goToMenu}>
              <Image style={{width: 45, height: 45}} source={require('../art/arrow-back.png')} />
            </TouchableHighlight>
          </View>
        </View>
        <ScrollView padding={5} paddingTop={15} backgroundColor={'#0e0408'} width={'100%'} showsVerticalScrollIndicator={false}>
          {
            this.state.ranking && this.state.ranking.map(players => {
              players.points = players.points || 0
              counter++
              return (
                <View key={counter} style={styles.users}>
                  <View style={counter < 4 ? styles.bests : styles.positionNum}>
                    <Text style={styles.num}>
                     {counter} 
                    </Text>
                  </View>
                  <Text style={styles.text}>
                    {players.username}: {players.points}
                  </Text> 
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  users: {
    backgroundColor: 'white',
    margin: 3,
    flexDirection: 'row',
    width: '90%',
    height: 60,
    borderRadius: 16,
    marginLeft: '5%',
  },
  text: {
    color: '#0e0417',
    padding: 10,
    fontSize: 15,
    textAlign: 'left',
    marginTop: '3%'
  },
  positionNum: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ab48cc',
    borderRadius: 10,
    margin: 5,
    width: '15%'
  },
  bests: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8c223',
    borderRadius: 10,
    margin: 5,
    width: '15%'
  },
  num: {
    color: 'white'
  }
})

export default Ranking
