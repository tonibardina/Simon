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

  componentWillMount () {
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

  render () {
    let counter = 0
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            this.state.ranking && this.state.ranking.map(players => {
              players.points = players.points || 0
              counter++
              return (
                <View key={counter} style={styles.users}>
                  <View style={styles.positionNum}>
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
    backgroundColor: '#0e0417',
    margin: 3,
    flexDirection: 'row',
    borderRadius: 5,
    width: 340
  },
  text: {
    color: 'white',
    padding: 10,
    fontSize: 15,
    textAlign: 'left',
  },
  positionNum: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    margin: 5,
    width: '8%'
  },
  num: {
    color: '#0e0417'
  }
})

export default Ranking
