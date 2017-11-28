import React, { Component } from 'react'
import t from 'tcomb-form-native'

import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Alert,
  AsyncStorage
} from 'react-native'

var Form = t.form.Form
var options = {
  fields: {
    name: {
      placeholder: 'Awesome user name!',
      autoFocus: true,
      clearButtonMode: 'always',
      keyboardAppearance: 'dark',
      spellCheck: false
    },
    password: {
      placeholder: 'Something you wont forget..',
      secureTextEntry: true,
      clearButtonMode: 'always',
      keyboardAppearance: 'dark',
      spellCheck: false
    },
  }
}

var Person = t.struct({
  name: t.String,
  password: t.String,
  rememberMe: t.Boolean,
})

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  login = () => {
    let value = this.refs.form.getValue();
    if (value) {
      fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: value.name,
        password: value.password
      })
    })
    .then((response) =>{if (response.ok) {
      Alert.alert(`Welcome ${value.name}!`)
      value.rememberMe ? AsyncStorage.setItem('username', value.name)
      .then(() => {
        this.props.setScreen('menu')
      }) 
      : this.props.setScreen('menu')
    } else {
      Alert.alert('Incorrect username or password!')
    }})
    .catch((err) => {console.log(err)})
    }
  }

  signin = () => {
    let value = this.refs.form.getValue();
    if (value) {
      fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: value.name,
        password: value.password
      })
    })
    .then((response) =>{if (response.ok) {
      Alert.alert(`Welcome ${value.name}!`)
      value.rememberMe ? AsyncStorage.setItem('username', value.name)
      .then(() => {
        this.props.setScreen('menu')
      }) 
      : this.props.setScreen('menu')
    } else {
      Alert.alert('User already exists!')
    }})
    .catch((err) => {console.log(err)})
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.login} underlayColor='#ffc93c'>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonSign} onPress={this.signin} underlayColor='#ffc93c'>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#ab48cc',
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonSign: {
    height: 36,
    backgroundColor: '#9e68ce',
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

export default Login