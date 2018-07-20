# react-native-floatWindow
纯RN仿微信悬浮窗口

## Run this project
- `npm install`

- `react-native run-ios` OR `react-native run-android`

## USAGE
### step 1
`npm install react-native-root-siblings`
### step 2
drag SuspensionWindow floder to your own floder
### step 3
```js
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import SuspendScreen from './SuspensionWindow/index'
import RootSibling from 'react-native-root-siblings'

class AppScreen extends Component {
  static navigationOptions = {
    title: '首页'
  }

  onPress = () => {
    if (this.sibling) {
      return
    }
    this.sibling = new RootSibling(<SuspendScreen close={this.close} toFloat />)
  }

  close = () => {
    this.sibling && this.sibling.destroy()
    this.sibling = undefined
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>
            Link
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
```

## Props
prop|type|default
---|:--:|---:
close|func|null
toFloat|bool|false


## Gif 
![image](https://github.com/qikong233/react-native-floatWindow/blob/master/gif/FloatWindow.gif)

# todo
- 导航栏修改样式
- 当有nav的时候滑动
- 更新内容
