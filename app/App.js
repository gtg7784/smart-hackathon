/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import { Provider } from 'mobx-react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {
  NavigationScreenOptions,
  NavigationScreenProp,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  NavigationTabScreenOptions
} from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen'
import stores from './src/stores'

class App extends Component{
  
  componentDidMount = async () => {
    if (Platform.OS === "android") {
      const readStoragePerm = await PermissionsAndroid.check(
        "android.permission.READ_EXTERNAL_STORAGE"
      );
      if (!readStoragePerm) {
        await PermissionsAndroid.request(
          "android.permission.READ_EXTERNAL_STORAGE"
        ).then(res => {
          if (res === "denied" || res === "never_ask_again") {
            BackHandler.exitApp();
          }
        });
      }
      const writeStoragePerm = await PermissionsAndroid.check(
        "android.permission.WRITE_EXTERNAL_STORAGE"
      );
      if (!writeStoragePerm) {
        await PermissionsAndroid.request(
          "android.permission.WRITE_EXTERNAL_STORAGE"
        ).then(res => {
          if (res === "denied" || res === "never_ask_again") {
            BackHandler.exitApp();
          }
        });
      }
    }

    const netInfo = await NetInfo.isConnected.fetch();


    !netInfo &&
    Alert.alert(
      "알림",
      "인터넷이 연결되어 있지 않습니다.\n앱을 종료합니다.",
      [{ text: "확인", onPress: () => BackHandler.exitApp() }],
      { cancelable: false }
    );
  };
  
  render(){
    return (
      <Provider {...stores}>
        <AppContainer
          onNavigationStateChange={(_prev, next) => {
            currentIndex = next.index;
          }}
        />
      </Provider>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        backgroundColor: '#fff',
        shadowColor: "transparent"
      }
    })
  }
)

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeStack },
  },
  {
    defaultNavigationOptions: ({
      headerStyle: {
        elevation: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        height: 0,
        backgroundColor: 'transparent',
        shadowColor: "transparent"
      }
    })
  }
)

const MainSwitch = createSwitchNavigator({
  Home: MainStack
})

const AppContainer = createAppContainer(MainSwitch);

export default App;