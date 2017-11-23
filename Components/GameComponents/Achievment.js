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
    if (this.props.achieve === 1) { return require('../../art/cube-brick.png')}
      if (this.props.achieve === 2) { return require('../../art/help-cube.png')}
  }

  render () {
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.props.modalVisible}
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: 20, borderRadius: 20}}>
          <View style={{backgroundColor: 'rgba(51, 0, 102, 0.9)', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 20, shadowColor: '#000000', shadowOffset: {width: 0, height: 0}, shadowRadius: 26, shadowOpacity: 0.2}} >
            <Image style={{width: 80, height: 80, marginBottom: 20}} source={this.whatAchieveIsUnlocked()} />
            <Text style={{marginBottom: 20, color: 'white'}}>New Block Unlocked!</Text>
            <TouchableHighlight style={{borderRadius: 10}} onPress={() => {this.hideModal()} }>
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
