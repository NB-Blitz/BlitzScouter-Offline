import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Counter extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        count: 0
      }
  }

  update(amt)
  {
    var num = this.state.count + amt;
    if (!(num < 0 || num > parseInt(this.props.max)))
    {
      this.setState({count: num});
      this.props.onUpdate(num);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.state.count}</Text>
        <TouchableOpacity onPress={() => {this.update(1)}}>
          <View style={styles.plus}><Text>+</Text></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.update(-1)}}>
          <View style={styles.minus}><Text>-</Text></View>
        </TouchableOpacity>
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      maxHeight: 50,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1, flexDirection: 'row'
    },
    headerText: {
      fontSize: 20,
      margin: 10,
      color: '#fff'
    },
    plus: {
      height: 50,
      width: 50,
      borderWidth: 1,
      borderRadius: 5,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRightWidth: 0,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    minus: {
      height: 50,
      width: 50,
      borderWidth: 1,
      borderRadius: 5,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });