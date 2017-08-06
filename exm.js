import React, { Component } from 'react';
import {
     StyleSheet,
     Text,
     View,
     ListView,
     TouchableHighlight
} from 'react-native';

class helloRN extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10']),
    };
  }

  _onPressButton() {
    console.log("On Press")
  }

  render() {
    return (
      <ListView style = {styles.container}
        dataSource={this.state.dataSource}
        renderRow={
          (rowData) => <TouchableHighlight 
                          style = {styles.rowStyle} 
                          underlayColor = '#008b8b' 
                          onPress = {this._onPressButton}
                        >
                          <Text style = {styles.rowText}>{rowData}</Text>
                       </TouchableHighlight>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    rowText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    rowStyle: {
        backgroundColor: '#333333',
        flex: 1,
        height: 100,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = helloRN