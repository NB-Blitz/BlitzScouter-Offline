import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import QRCode from 'react-qr-code';
import { AsyncStorage } from 'react-native';
import SButton from './SButton';

export default class Export extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      outputVal: "Loading..."
    };

    const value = AsyncStorage.getItem('allData', (err, result) => {
      if (result != null)
        this.setState({outputVal: result});
      else
        this.setState({outputVal: "No Data!"});
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Export</Text>
        <View style={styles.code}><QRCode size={250} bgColor='#1f1f1f' fgColor='#fff' value={this.state.outputVal} /></View>
        <Text style={styles.outputText}>{this.state.outputVal}</Text>
        <SButton text="Clear Data" onPress={() => {AsyncStorage.removeItem('allData'); this.props.navigation.goBack();}} />
        <SButton text="Return" onPress={() => {this.props.navigation.goBack()}} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1f1f1f',
    },
    headerText: {
      fontSize: 30,
      marginBottom: 20,
      color: '#fff'
    },
    outputText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#fff',
      margin: 10,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 2,
      padding: 5,
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: 'center'
    },
    code: {
      /*
      padding: 10,
      backgroundColor: '#fff',
      width: 270
      */
    }
  });