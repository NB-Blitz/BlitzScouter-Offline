import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import SButton from './SButton';
import {ToastAndroid} from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

export default class Home extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            team: 0,
            round: 0
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Blitz Scouter</Text>
            <TextInput style={styles.topInput} keyboardType='number-pad' placeholder='Team Number'  onChangeText={text => {this.setState({team: text})}} />
            <TextInput style={styles.bottomInput} keyboardType='number-pad' placeholder='Round Number' onChangeText={text => {this.setState({round: text})}} />
            <SButton text='Scout' onPress={() => {
              if (parseInt(this.state.team) > 0 && parseInt(this.state.round) > 0) {
                this.props.navigation.navigate('Scout', {team: parseInt(this.state.team), round: parseInt(this.state.round)})
              }
              else
              {
                ToastAndroid.showWithGravityAndOffset(
                  'Invalid Team or Round',
                  ToastAndroid.LONG,
                  ToastAndroid.BOTTOM,
                  25,
                  50,
                );
              }
            }} />
            <SButton text='Export' onPress={() => this.props.navigation.navigate('Export')} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1f1f1f'
    },
    headerText: {
      fontSize: 30,
      marginBottom: 20,
      color: '#fff'
    },
    topInput: {
      height: 60,
      width: 300,

      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,

      fontSize: 20,
      textAlign: 'center',
      backgroundColor: "#fff"
    },
    bottomInput: {
      height: 60,
      width: 300,
      marginBottom: 10,

      borderColor: 'gray',
      borderWidth: 1,
      borderTopWidth: 0,
      borderRadius: 5,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,

      fontSize: 20,
      textAlign: 'center',
      backgroundColor: "#fff"
    },
    buttonInput: {
      marginTop: 10,
      width: 300,
      height: 60,
    },
  });

  