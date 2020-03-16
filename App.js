// Imports
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './components/Home';
import Scout from './components/Scout';
import Data from './components/Data';
import Export from './components/Export';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// HTML
export default class App extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      teamNum: 123,
      roundNum: 0,
      val1: false
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Scout" component={Scout} />
          <Stack.Screen name="Data" component={Data} />
          <Stack.Screen name="Export" component={Export} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// CSS
const styles = StyleSheet.create({
  container: {
    
  },
});