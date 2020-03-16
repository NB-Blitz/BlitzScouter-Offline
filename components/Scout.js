import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import Counter from './Counter';
import Checkbox from './Checkbox';
import SButton from './SButton';

export default class Scout extends React.Component {

  constructor(props) {
      super(props);

    // <Text style={styles.descText}>Was the robot stable? What issues did the robot encounter? Did anything jump out at you about the robot?</Text>

    
    this.state = {
      team: parseInt(JSON.stringify(this.props.route.params.team)),
      round: parseInt(JSON.stringify(this.props.route.params.round)),
      comment: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false
    };
  }

  pad(num, size) {
		var s = num+"";
		while (s.length < size) s = "0" + s;
		return s;
	}

  getData()
  {
    var compress = '';
    compress += this.pad(this.state.team, 4) + this.pad(this.state.round, 2) + this.pad(this.state.num1, 2) + this.pad(this.state.num2, 2) + this.pad(this.state.num3, 2) + this.pad(this.state.num4, 2);
    if (this.state.check1) compress += "1"; else compress += "0";
    if (this.state.check2) compress += "1"; else compress += "0";
    if (this.state.check3) compress += "1"; else compress += "0";
    if (this.state.check4) compress += "1"; else compress += "0";
    if (this.state.check5) compress += "1"; else compress += "0";
    /*
    compress += this.state.comment.split("\"").join("'");
    compress += "\""
    */
    return compress;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40, borderBottomWidth: 1, borderColor: 'gray', width: 300, textAlign: 'center', color: '#fff'}}>{ JSON.stringify(this.state.team) }</Text>
        <Text style={styles.headerText}>Autonomous</Text>
        <Counter title='Balls Low' max='99' onUpdate={val => this.setState({num1: val})}/>
        <Counter title='Balls High' max='99' onUpdate={val => this.setState({num2: val})}/>
        <Text style={styles.headerText}>Teleoperated</Text>
        <Counter title='Balls Low' max='99' onUpdate={val => this.setState({num3: val})}/>
        <Counter title='Balls High' max='99' onUpdate={val => this.setState({num4: val})}/>
        <Checkbox title='Control Panel' onUpdate={val => this.setState({check1: val})}/>
        <Checkbox title='Climb' onUpdate={val => this.setState({check2: val})} />
        <Checkbox title='Balanced' onUpdate={val => this.setState({check3: val})} />
        <Text style={styles.headerText}>Miscellaneous</Text>
        <Checkbox title='Defensive' onUpdate={val => this.setState({check4: val})} />
        <Checkbox title='Robot Issues' onUpdate={val => this.setState({check5: val})} />
        {/*<TextInput multiline style={styles.textInput} placeholder='Comments' onChangeText={text => {this.setState({comment:text})}} />*/}
        <SButton text='Submit' onPress={() => {this.props.navigation.navigate('Data', {outputData: this.getData()});}} />
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
      fontSize: 22,
      marginTop: 5,
      marginBottom: 5,
      color: '#fff'
    },
    descText: {
      fontSize: 16,
      textAlign: 'center',
      margin: 5,
      color: '#fff'
    },
    textInput: {
      height: 60,
      width: 300,
      marginTop: 5,

      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,

      fontSize: 16,
      textAlign: 'center',
      backgroundColor: "#fff"
    }
  });