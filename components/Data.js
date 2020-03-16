import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AsyncStorage } from 'react-native';

export default class Data extends React.Component {

  constructor(props) {
      super(props);

    // Get Data
    this.state = {
      team: parseInt(JSON.stringify(this.props.route.params.team)),
      round: parseInt(JSON.stringify(this.props.route.params.round))
    }
      
    const value = AsyncStorage.getItem('allData', (err, result) => {
      if (result != null)
        AsyncStorage.setItem('allData', String(result + this.props.route.params.outputData));
      else
        AsyncStorage.setItem('allData', String(this.props.route.params.outputData));
    });

    

    

    // Return
    this.props.navigation.goBack();
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{this.props.route.params.outputData}</Text>
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
    },
    headerText: {
      fontSize: 30,
      marginBottom: 20,
    }
  });
  