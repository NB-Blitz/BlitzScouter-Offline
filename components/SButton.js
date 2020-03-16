import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class SButton extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
    <TouchableOpacity style={styles.buttonInput} onPress={this.props.onPress}><Text style={styles.buttonText}>{this.props.text}</Text></TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  buttonInput: {
    width: 300,
    height: 60,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2
  },
  buttonText: {
    color:'#fff',
    textAlign: 'center',
    fontSize: 18
  }
  });