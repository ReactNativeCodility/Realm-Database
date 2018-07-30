import React, { Component } from 'react';
import {
  Text, View, ToastAndroid, TextInput, TouchableOpacity, StatusBar
} from 'react-native';
import styles from './css/styles';
import { StackNavigator } from 'react-navigation';
import ListActivity from './activities/ListActivity';

var Realm = require('realm');
let realm;

class App extends Component {

  static navigationOptions = {
    //title : 'App',
    header: null,
  };

  ListActivity = () => {
    this.props.navigation.navigate('List');
  }

  constructor() {
    super();
    this.state = {
      EmployeeName: '',
      Designation: '',
      Project: ''
    }
    realm = new Realm({
      schema: [{
        name: 'Employee_Info',
        properties:
        {
          emp_id: { type: 'int', default: 0 },
          emp_name: 'string',
          designation: 'string',
          project: 'string'
        }
      }]
    });
  }

  addEmployee = () => {
    if (this.state.EmployeeName.trim() === "") {
      ToastAndroid.show('Enter Employee Name..!!', ToastAndroid.SHORT);
      return;
    }
    if (this.state.Designation.trim() === "") {
      ToastAndroid.show('Enter Designation..!!', ToastAndroid.SHORT);
      return;
    }
    if (this.state.Project.trim() === "") {
      ToastAndroid.show('Enter Project..!!', ToastAndroid.SHORT);
      return;
    }
    realm.write(() => {
      var ID = realm.objects('Employee_Info').length + 1;

      realm.create('Employee_Info', {
        emp_id: ID,
        emp_name: this.state.EmployeeName,
        designation: this.state.Designation,
        project: this.state.Project
      });
    });
    alert("Employee added successfully..!!");
  }

  render() {
    /* var EMP_INFO = realm.objects('Employee_Info');
    var json = JSON.stringify(EMP_INFO); */
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#2471A3"
          barStyle="light-content"
        />
        <Text style={styles.textHeader}>
          React Native Codility
        </Text>
        <View style={{ backgroundColor: '#2471A3', width: '100%', height: 1 }} />

        <View style={[styles.MainContainer, {margin:15}]}>
          <TextInput
            placeholder="Enter Employee Name"
            style={styles.TextInputStyle}
            underlineColorAndroid="transparent"
            onChangeText={(text) => { this.setState({ EmployeeName: text }) }}
          />

          <TextInput
            placeholder="Enter Employee Designation"
            style={styles.TextInputStyle}
            underlineColorAndroid="transparent"
            onChangeText={(text) => { this.setState({ Designation: text }) }}
          />

          <TextInput
            placeholder="Enter Project"
            style={styles.TextInputStyle}
            underlineColorAndroid="transparent"
            onChangeText={(text) => { this.setState({ Project: text }) }}
          />

          <TouchableOpacity onPress={this.addEmployee} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}>ADD EMPLOYEE </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.ListActivity} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}>EMPLOYEE LIST </Text>
          </TouchableOpacity>

          {/*  <Text style={{marginTop: 10}}>{json}</Text> */}

        </View>
      </View>
    );
  }
}

export default Project = StackNavigator(
  {
    First: { screen: App },
    List: { screen: ListActivity }
  });
