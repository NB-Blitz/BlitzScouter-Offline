import React from 'react';
import { StyleSheet, View, Text, CheckBox } from 'react-native';

export default class Checkbox extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        check: false
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckBox style={{tintColor: '#fff'}} value={this.state.check} onValueChange={() => {this.setState({check: !this.state.check}); this.props.onUpdate(!this.state.check); }} />
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      maxHeight: 35,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1, flexDirection: 'row'
    },
    headerText: {
      fontSize: 20,
      margin: 10,
      color: '#fff'
    }
  });