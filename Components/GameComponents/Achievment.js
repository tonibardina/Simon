import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
  Text,
  Image
} from 'react-native'

class Achievment extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  hideModal = () => {
    this.props.hideModal()
  }

  whatAchieveIsUnlocked = () => {
    if (this.props.achieve === 1) { return require('../../art/instruction1.png')}
    if (this.props.achieve === 2) { return require('../../art/instruction2.png')}
    if (this.props.achieve === 3) { return require('../../art/instruction3.png')}
  }

  instructions = () => {
    const text1= 'The asteroid...it doesnt do anything yet...'
    const text2= 'The Arrow guides you and help you finding the next cube!'
    const text3= 'The Color Block turns green when the next block is near of it'
    if (this.props.achieve === 1) { return text1 }
    if (this.props.achieve === 2) { return text2 }
    if (this.props.achieve === 3) { return text3 }
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
            <Image style={{width: 220, height: 260, marginBottom: 20, marginTop: 10}} source={this.whatAchieveIsUnlocked()} />
            <Text style={{marginBottom: 20, color: 'white', textAlign: 'center'}}>New Block Unlocked!{"\n"}
            {this.instructions()}</Text>
            <TouchableHighlight style={{borderRadius: 10, marginBottom: 10}} onPress={() => {this.hideModal()} }>
              <Text style={{backgroundColor: 'white', fontWeight: 'bold', color: '#330066', padding: 10, width: 200, textAlign: 'center'}}>
                Continue
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({

})

export default Achievment
