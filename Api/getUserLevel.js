import {
  AsyncStorage,
} from 'react-native'

function getUserLevel () {
  fetch('http://localhost:3000/getUser', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: AsyncStorage.getItem('username')
    })
  })
  .then(user => {
    let player = JSON.parse(user._bodyInit)
    return player[0].level
  })
}

module.exports = getUserLevel
