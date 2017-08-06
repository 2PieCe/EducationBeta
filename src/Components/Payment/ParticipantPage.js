/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';



var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
  },
});



class ParticipantPage extends Component {

      constructor(props) {
        super(props);

  
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            activityType: ds.cloneWithRows([
                {"activityType":"屌丝版的活动","price":"100"},
                {"activityType":"土豪版的活动","price":"1000000000"},
            ]),
            
        };
      }

  renderActivityType(rowData,sectionID,rowID,highlightID){
    return(
      <View
        style={{
          width:ScreenWidth*0.9,
          height:50,
          //borderTopWidth:0.5,
          borderBottomWidth:0.5,
          borderColor:'#e6e6e6',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
        }}
      >
        <Text
          style={{
            fontSize:14,
            color:'#676b71',
          }}
        >
          {rowData.activityType}
        </Text>

        <Text
          style={{
            fontSize:14,
            color:'#676b71',
          }}
        >
          ￥{rowData.price}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            backgroundColor:'#fcfcfc',
            flex:1,
          }}
          contentContainerStyle={{
            alignItems: 'center',
            backgroundColor:'#fcfcfc',

          }}
        >

{/*--------------请选择活动--------------*/}          
          <View
            style={{
              width:0.9*ScreenWidth,
              height:ScreenWidth*0.13,
              //backgroundColor:'red',
              //alignItems:'center',
              justifyContent:'center',
              marginBottom:30,
            }}
          >
            <Text
              style={{
                fontSize:ScreenWidth*0.06,
                fontWeight:'600',
              }}
            >
              请选择活动
            </Text>
          </View>

      {/*--------活动列表---------*/}     
          <ListView
            dataSource={this.state.activityType}
            renderRow={this.renderActivityType}
            vertical={true}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
          />

{/*--------------谁要参见--------------*/}  
          <View
            style={{
              width:0.9*ScreenWidth,
              height:ScreenWidth*0.13,
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              marginBottom:30,
              marginTop:20

            }}
          >
            <Text
              style={{
                fontSize:ScreenWidth*0.06,
                fontWeight:'600',
              }}
            >
              谁要参加
            </Text>
            <Image
              source={require('../../../img/Buttons/plus_circle.png')}
              style={{
                height:30,
                width:30,
              }}
            />

          </View>

        </ScrollView>


{/*-----------------底部框------------------*/} 
          <View
            style={{
              width:ScreenWidth,
              height:50,
              borderTopWidth:1.5,
              borderColor:'#e6e6e6',
              flexDirection:'row',
              alignItems:'center',
            }}
          >
            <View
              style={{
                flex:3,
              }}
            >
            </View>
          
            <TouchableWithoutFeedback
              //onPress={() => navigate('PaymentPage')}
            >
              <View
                style={{
                  flex:1,
                  justifyContent:'center',
                  alignItems:'center',
                  height:30,
                  //backgroundColor:'red',
                }}
              >
                <Text
                  style={{
                    color:'#ec6664',
                    fontSize:16,
                    fontWeight:'900',
                  }}
                >
                  下一步
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
      </View>

    );
  }
}


//输出组件类
module.exports = ParticipantPage;