/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from "react-native";
import { StackNavigator } from "react-navigation";
import SuspendScreen from "./SuspensionWindow/index";
import RootSibling from "react-native-root-siblings";

console.disableYellowBox = true;

class AppScreen extends Component {
  static navigationOptions = {
    title: "首页"
  };

  onPress = () => {
    if (this.sibling) {
      return;
    }
    this.sibling = new RootSibling(
      <SuspendScreen close={this.close} toFloat backgroundColor="skyblue" >
        <Text>Hey Guy!</Text>
      </SuspendScreen>
    );
  };

  close = () => {
    this.sibling && this.sibling.destroy();
    this.sibling = undefined;
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>Link</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const App = new StackNavigator({
  Home: { screen: AppScreen },
  Suspend: { screen: SuspendScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default AppScreen;
