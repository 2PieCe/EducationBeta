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
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
  },
});



class NoticePage extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          
{/*----------大标题------------*/}
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
              查看参加者须知
            </Text>
          </View>


          
{/*----------联系要求------------*/}

          <View
            style={{
              width:0.9*ScreenWidth,
              //height:ScreenWidth*0.13,
              //backgroundColor:'red',
              //alignItems:'center',
              //justifyContent:'center',
              //marginBottom:30,
            }}
          >
            <Text
              style={{
                fontSize:14,
                fontWeight:'200',
                color:'#494949',
                textAlign:'justify',
                lineHeight:20,
              }}             
            >
              请在报名前与主办方取得联系，以免哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈*********************

            </Text>

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
                        fontSize:15,
                        fontWeight:'200',
                        color:'#494949',
                    }}
                >
                    联系方式
                </Text>
                <Image
                    source={require('../../../img/Buttons/forward.png')}
                    style={{
                        height:20,
                        width:20,
                    }}
                />
            </View>
          </View>


{/*----------服务条款------------*/}

          <View
            style={{
              width:0.9*ScreenWidth,
              //height:ScreenWidth*0.13,
              //backgroundColor:'red',
              //alignItems:'center',
              //justifyContent:'center',
              //marginBottom:30,
              marginTop:20,
              flex:1,
            }}
          >
            <Text
              style={{
                  fontSize:16,
                  fontWeight:'400',
                  //color:'#494949',
              }}
            >
              服务条款

            </Text>
            
            <Text
              style={{
                  fontSize:14,
                  fontWeight:'200',
                  color:'#494949',
                  marginTop:20,
                  lineHeight:20,
              }}
            >
              如果报名，即表示您同意XXXX附加服务条款、报名者免责声明和退订政策。

            </Text>
          </View>

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
              onPress={() => navigate('PaymentPage')}
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
                  接受
                </Text>

              </View>
            </TouchableWithoutFeedback>
          </View>
      </View>
    );
  }
}


//输出组件类
module.exports = NoticePage;