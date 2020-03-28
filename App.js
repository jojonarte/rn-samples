import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {
  state = {
    timerValue: 1, 
    isTimerStarted: false,
    status: '',
  }

  timerState = {
    timerValue: 0
  }

  /**
   * implement this
   * 1. UI should only update when timer is odd
   * 2. Try also to implement such that it updates only when it is even
   * 3. Also try implementing such that updates to the isTimerStarted is always updated when button is pressed.
   */
  // shouldComponentUpdate(nextProps,nextState) {
  //   return a boolean here
  // }

  incrementTimer = () =>  this.setState(prevState => {
    return {
      
      timerValue: prevState.timerValue+2
    }
  })

  toggleTimer = () => {
    const { isTimerStarted } = this.state;

    if (isTimerStarted) {
      clearInterval(this.timerInterval);
    } else {
      this.timerInterval = setInterval(this.incrementTimer, 1000)
    }

    this.setState({ isTimerStarted: !isTimerStarted })
    
  }


  getButtonTitle = () => this.state.isTimerStarted ? "Stop Timer" : "Start Timer"

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.timer}>
           {this.state.timerValue}
        </Text>

        <Button title={this.getButtonTitle()} onPress={this.toggleTimer} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  timer: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
