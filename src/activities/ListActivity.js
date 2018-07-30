import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, ListView, YellowBox, StatusBar
} from 'react-native';
import styles from '../css/styles';

var Realm = require('realm');
let realm;

export default class ListActivity extends Component {
  static navigationOptions = {
    title: 'ListActivity',
    headerTintColor: '#2471A3',
  };

  constructor() {
    super();
    YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
      ]);
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
    var myData = realm.objects('Employee_Info');
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(myData),
    };
  }

  getEmployeeItem(emp_name) {
    alert(emp_name);
  }

  ListItemSeparator = () => {
    return (
      <View
        style={{ height: 1, width: "100%", backgroundColor: "#2471A3" }} />
    );
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <StatusBar
          backgroundColor="#2471A3"
          barStyle="light-content"
        />

        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.ListItemSeparator}
          renderRow={(rowData) => <View style={{ flex: 1, flexDirection: 'column', width: '100%', backgroundColor: '#fff' }} >

            <TouchableOpacity onPress={this.getEmployeeItem.bind(this, rowData.emp_name)}
              style={{ width: 400, padding: 10 }}>

              <Text style={styles.textViewContainer} >{'Id = ' + rowData.emp_id}</Text>

              <Text style={styles.textViewContainer} >{'Name = ' + rowData.emp_name}</Text>

              <Text style={styles.textViewContainer} >{'Designation = ' + rowData.designation}</Text>

              <Text style={styles.textViewContainer} >{'Project = ' + rowData.project}</Text>

            </TouchableOpacity>

          </View>}

        />

      </View>
    );
  }
}