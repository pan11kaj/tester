import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FoodScreen from './Screens/FoodScreen';
import GadgetsScreen from './Screens/Gadgets';
import OP from './Screens/OnlineProduct';
import HomeScreen from './Screens/HomeScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'pink' }}>
        <AppContainer/>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  GadgetsScreen: GadgetsScreen,
  FoodScreen: FoodScreen,
  OP: OP,
});

const AppContainer = createAppContainer(AppNavigator);
