import React, { Component } from 'react'

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
    let response = fetch('https://nameless-refuge-10092.herokuapp.com/getRanking', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((info) => {
      let players = JSON.parse(info._bodyInit)
      this.setState({
        ranking: players,
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
        <View>
          <TouchableHighlight onPress={this.goToMenu}>
            <Image style={{width: 45, height: 45}} source={require('../art/arrow-back.png')} />
          </TouchableHighlight>
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
    height: '50%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  users: {
    backgroundColor: 'white',
    margin: 3,
    flexDirection: 'row',
    width: '90%',
    height: '7%',
    borderRadius: 16,
    marginLeft: '4%',
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
    backgroundColor: '#0e0417',
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
