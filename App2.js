/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SuspendScreen from './SuspensionWindow/index';

console.disableYellowBox = true;

class AppScreen extends Component {

  static navigationOptions = {
    title: '首页'
  }

  onPress = () => {
    this.props.navigation.navigate('Suspend', {transition: 'freeStyle'});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>
            Link
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const TransitionConfiguration = () => {
  return {
      
  }
}

export default new StackNavigator({
  Home: {screen: AppScreen},
  Suspend: {screen: SuspendScreen}
}, {
  cardStyle: {backgroundColor: '#rgba(0,0,0,0)'},
  // transitionConfig: TransitionConfiguration,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
