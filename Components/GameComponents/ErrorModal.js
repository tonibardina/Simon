import React, { Component } from 'react'

import {
  View,
  Modal,
  Text,
  TouchableHighlight
} from 'react-native'

class ErrorModal extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  textStyleGenerator = () => {
    return {fontSize: 90, fontWeight: '400', color: 'white', marginBottom: 5}
  }

  showProgresion = () => {
    if (this.props.level === 1) { return <Text style={this.textStyleGenerator()}>0%</Text> }
    if (this.props.level === 2) { return <Text style={this.textStyleGenerator()}>20%</Text> }
    if (this.props.level === 3) { return <Text style={this.textStyleGenerator()}>40%</Text> }
    if (this.props.level === 4) { return <Text style={this.textStyleGenerator()}>60%</Text> }
    if (this.props.level === 5) { return <Text style={this.textStyleGenerator()}>80%</Text> }
  }

  showMotivationalText = () => {
    if (this.props.level === 1) { return 'It is too soon to give up...' }
    if (this.props.level === 2) { return 'Really? You can do it better!' }
    if (this.props.level === 3) { return 'Keep trying..You are doing well!' }
    if (this.props.level === 4) { return "Don't give up!" }
    if (this.props.level === 5) { return 'You almost got it!!' }
  }

  render () {
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.props.modalVisible}
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: 20, borderRadius: 20}}>
          <View style={{backgroundColor: 'rgba(9, 2, 17, 0.9)', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 20, shadowColor: '#000000', shadowOffset: {width: 0, height: 0}, shadowRadius: 26, shadowOpacity: 0.2}} >
            {this.showProgresion()}
            <Text style={{marginBottom: 20, color: 'white'}}>{this.showMotivationalText()}</Text>
            <TouchableHighlight style={{borderRadius: 10}} onPress={() => {
              this.props.errorWindow()
            }}>
              <Text style={{backgroundColor: 'white', fontWeight: 'bold', color: '#330066', padding: 10, width: 200, textAlign: 'center'}}>
                Restart
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
  }
}

export default ErrorModal