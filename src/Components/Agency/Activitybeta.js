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
  Image,
  ScrollView,
  ListView,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from "react-redux";
import Swiper from 'react-native-swiper2';
//import PopupDialog, { SlideAnimation,ScaleAnimation, DefaultAnimation }from 'react-native-popup-dialog';
//import StarRating from 'react-native-star-rating';
//import Button from 'apsl-react-native-button';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  
/*-------------------框框-----------------------*/

});


var otherPics_URLS = [
  require('../../../img/personalInfo/otherPics/1.jpg'),
  require('../../../img/personalInfo/otherPics/2.jpg'),
  require('../../../img/personalInfo/otherPics/3.jpg'),
  require('../../../img/personalInfo/otherPics/4.jpg'),

]

class Activity2 extends Component {
      
      constructor(props) {
        super(props);

  
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            otherPics: ds.cloneWithRows([
                {"img":"0"},
                {"img":"1"},
                {"img":"2"},
                {"img":"3"},
            ]),
        };
      }

      static navigationOptions = {
        //headerTintColor:'grey',
        headerStyle:{backgroundColor:'transparent'},
        headerRight:
            <View
                style={{flexDirection:'row'}}
            >
                <Image 
                    source={require('../../../img/Buttons/share.png')}
                    style={{
                        height:23,
                        width:23,
                        marginRight:20,
                    }}
                />

                <TouchableOpacity

                >
                    <Image 
                        source={require('../../../img/Buttons/heart.png')}
                        style={{
                            height:23,
                            width:23,
                            marginRight:20,
                        }}
                    />
                </TouchableOpacity>
            </View>
      };

      renderOtherpIcs(rowData,sectionID,rowID,highlightID){
        var imgSource = otherPics_URLS[rowData.img]
        return(
          <Image 
            source={imgSource} 
            style={{
              width:ScreenWidth*0.65,
              height:ScreenWidth*0.65/16*9, 
              borderRadius:10,
              marginRight:ScreenWidth*0.025,
              marginTop:5,
            }}
          />
        )
      }


  render() {
    const { navigate } = this.props.navigation;
    const ActivityData = this.props.Activity.ActivityData[0];

    return (

      <View style={{
          flex:1,
          backgroundColor:'#fcfcfc',
      }}>
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

      {/*--------------------顶层图片----------------*/}

             <Image source={require('../../../img/Activities/a6.jpg')} 
                style={{
                    width: ScreenWidth,
                    height:ScreenWidth/16*9,
                }}
                //blurRadius={100}

              >
              </Image>
         {/*--------------------顶部框框----------------*/}     
              <View
                style={{
                    width:0.95*ScreenWidth,
                    height:ScreenWidth*0.5,
                    borderRadius:10,
                    shadowOffset:{ width:2, height:2 }, 
                    shadowColor:'grey', 
                    shadowOpacity:0.2, 
                    shadowRadius:2,
                    marginTop:-ScreenWidth*0.08,
                    alignItems:'center',
                    justifyContent:'center',
                    //backgroundColor:'white',
                }}
              >
                  <View
                    style={{
                        width:0.95*ScreenWidth*0.9,
                        height:ScreenWidth*0.5,
                        justifyContent:'center',
                        //alignItems:'center',
                        //backgroundColor:'yellow',
                    }}
                  >
                    
                    {/*----------活动标题框-------------*/}
                    <View
                        style={{
                            flex:1,
                            //height:ScreenWidth*0.45/3,
                            //backgroundColor:'blue',
                            justifyContent:'center',
                            //alignItems:'center',
                        }}
                    >
                      <Text
                        style={{
                          fontSize:ScreenWidth*0.05,
                          fontWeight:'500',
                        }}
                      >
                        {ActivityData.title}
                      </Text>  
                    </View>
                
                
                {/*----------基本信息框-------------*/}  
                    <View
                        style={{
                            flex:3,
                            //backgroundColor:'yellow',
                            justifyContent:'center',
                        }}
                        //onLayout={this.renderBasicInfo}
                    >
                    
                    {/*------主办方-------*/}  
                        <View
                            style={{
                                //flex:1,
                                flexDirection:'row',
                                alignItems:'center',
                                //backgroundColor:'red',
                                height:ScreenWidth*0.08,
                                //width:0.95*ScreenWidth*0.95,
                            }}
                        >
                            <Image 
                                source={require('../../../img/Buttons/organizer.png')}
                                style={{
                                    height:18,
                                    width:18,                                    
                                }}
                            />
                            <Text
                                style={{
                                    fontSize:13,
                                    color:'#676b71',
                                    marginLeft:10,
                                }}
                            >
                                {ActivityData.agency}
                            </Text>
                        </View>                    

                    {/*------时间-------*/}  
                        <View
                            style={{
                                //flex:1,
                                flexDirection:'row',
                                alignItems:'center',
                                //backgroundColor:'red',
                                height:ScreenWidth*0.08,
                                //width:0.95*ScreenWidth*0.95,
                            }}
                        >
                            <Image 
                                source={require('../../../img/Buttons/time.png')}
                                style={{
                                    height:18,
                                    width:18,                                    
                                }}
                            />
                            <Text
                                style={{
                                    fontSize:13,
                                    color:'#676b71',
                                    marginLeft:10,
                                }}
                            >
                                2017年5月14日-2017年5月20日
                            </Text>
                        </View>
                    {/*------地点-------*/}  
                        <View
                            style={{
                                //flex:1,
                                flexDirection:'row',
                                alignItems:'center',
                                //backgroundColor:'red',
                                height:ScreenWidth*0.08,
                                //width:0.95*ScreenWidth*0.95,
                            }}
                        >
                            <Image 
                                source={require('../../../img/Buttons/location2.png')}
                                style={{
                                    height:18,
                                    width:18,                                    
                                }}
                            />
                            <Text
                                style={{
                                    fontSize:13,
                                    color:'#676b71',
                                    marginLeft:10,
                                }}
                            >
                                {ActivityData.address}
                            </Text>
                        </View>

                    {/*------面向年龄-------*/}  
                        <View
                            style={{
                                //flex:1,
                                flexDirection:'row',
                                alignItems:'center',
                                //backgroundColor:'red',
                                height:ScreenWidth*0.08,
                                //width:0.95*ScreenWidth*0.95,
                            }}
                        >
                            <Image 
                                source={require('../../../img/Buttons/people.png')}
                                style={{
                                    height:18,
                                    width:18,                                    
                                }}
                            />
                            <Text
                                style={{
                                    fontSize:13,
                                    color:'#676b71',
                                    marginLeft:10,
                                }}
                            >
                                {ActivityData.target_age}
                            </Text>
                        </View>



                    </View>



                  </View>

              </View>
{/*-------------------------------------课程介绍分割线--------------------------------------*/}
                <View
                  style={{
                    width:0.9*ScreenWidth,
                    height:0.1*ScreenWidth,
                    //backgroundColor:'blue',
                    alignItems:'flex-end',
                    justifyContent:'center',
                    flexDirection:'row',
                    marginTop:15,
                  }}
                >
                  <View
                    style={{
                      height:0.06*ScreenWidth,
                      width:(0.9*ScreenWidth-0.06*ScreenWidth)/2,
                      alignItems:'center',
                      justifyContent:'center',
                      //backgroundColor:'red',
                    }}
                  >
                    <Image
                      source={require('../../../img/string.png')}
                      style={{
                        height:1,
                        width:(0.9*ScreenWidth-0.06*ScreenWidth)/2,
                        //width:ScreenWidth*0.95,
                      }}
                    />
                  </View>

                  <Image
                    source={require('../../../img/Buttons/bulb.png')}
                    style={{
                      height:0.1*ScreenWidth,
                      width:0.1*ScreenWidth,
                    }}
                  />

                  <View
                    style={{
                      height:0.06*ScreenWidth,
                      width:(0.9*ScreenWidth-0.06*ScreenWidth)/2,
                      alignItems:'center',
                      justifyContent:'center',
                      //backgroundColor:'red',
                    }}
                  >
                    <Image
                      source={require('../../../img/string.png')}
                      style={{
                        height:1,
                        width:(0.9*ScreenWidth-0.06*ScreenWidth)/2,
                        //width:ScreenWidth*0.95,
                      }}
                    />
                  </View>
                </View>

    {/*-----------------内容介绍---------------------*/}

                <View
                    style={{
                        width:ScreenWidth*0.9,
                        alignItems:'center',
                        marginTop:10,
                    }}
                >
                    <Text
                        style={{
                            fontSize:16,
                            fontWeight:'500',

                        }}
                    >
                        [课程活动介绍]
                    </Text>
                </View>
                

                <View
                    style={{
                        width:ScreenWidth*0.9,
                        alignItems:'center',
                        marginTop:10,
                    }}
                >
                    <Text
                        style={{
                            fontSize:15,
                            fontWeight:'200',
                            textAlign:'justify',
                            marginTop:5,
                            lineHeight:30,
                        }}
                    >

                        这里写的是课程活动的各种介绍，随便乱七八糟的写，这一部分是给机构自己编辑用的，可以有文字也，可以加入照片。随便你自己喜欢的编辑。哒哒哒哒冒蓝火的加特林。
                        哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒
                        哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒
                        哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒
                        哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒
                    </Text>
                </View>

{/*-------------------------------------更多照片分割线--------------------------------------*/}
                <View
                  style={{
                    width:0.9*ScreenWidth,
                    height:0.1*ScreenWidth,
                    //backgroundColor:'blue',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'row',
                    marginTop:15,
                  }}
                >
                  <View
                    style={{
                      height:0.06*ScreenWidth,
                      //width:(0.9*ScreenWidth-0.06*ScreenWidth)/2,
                      alignItems:'center',
                      justifyContent:'center',
                      //backgroundColor:'red',
                    }}
                  >
                    <Image
                      source={require('../../../img/string.png')}
                      style={{
                        height:1,
                        width:(0.9*ScreenWidth-0.17*ScreenWidth)/2,
                        //width:ScreenWidth*0.95,
                      }}
                    />
                  </View>

                    <Text
                        style={{
                            fontSize:16,
                            fontWeight:'500',

                        }}
                    >
                    [更多照片]
                    </Text>

                  <View
                    style={{
                      height:0.06*ScreenWidth,
                      //width:(0.9*ScreenWidth-0.08*ScreenWidth)/2,
                      alignItems:'center',
                      justifyContent:'center',
                      //backgroundColor:'red',
                    }}
                  >
                    <Image
                      source={require('../../../img/string.png')}
                      style={{
                        height:1,
                        width:(0.9*ScreenWidth-0.17*ScreenWidth)/2,
                        //width:ScreenWidth*0.95,
                      }}
                    />
                  </View>
                </View>
            

            {/*------照片------*/}
                <ListView
                  dataSource={this.state.otherPics}
                  renderRow={this.renderOtherpIcs}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  removeClippedSubviews={false}
                />




{/*-------------------------------------更多信息分割线--------------------------------------*/}
                <View
                  style={{
                    width:0.9*ScreenWidth,
                    height:0.1*ScreenWidth,
                    //backgroundColor:'blue',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'row',
                    marginTop:15,
                  }}
                >
                  <View
                    style={{
                      height:0.06*ScreenWidth,
                      //width:(0.9*ScreenWidth-0.06*ScreenWidth)/2,
                      alignItems:'center',
                      justifyContent:'center',
                      //backgroundColor:'red',
                    }}
                  >
                    <Image
                      source={require('../../../img/string.png')}
                      style={{
                        height:1,
                        width:(0.9*ScreenWidth-0.08*ScreenWidth)/2,
                        //width:ScreenWidth*0.95,
                      }}
                    />
                  </View>

                  <Image
                    source={require('../../../img/Buttons/information.png')}
                    style={{
                      height:0.07*ScreenWidth,
                      width:0.07*ScreenWidth,
                    }}
                  />

                  <View
                    style={{
                      height:0.06*ScreenWidth,
                      //width:(0.9*ScreenWidth-0.08*ScreenWidth)/2,
                      alignItems:'center',
                      justifyContent:'center',
                      //backgroundColor:'red',
                    }}
                  >
                    <Image
                      source={require('../../../img/string.png')}
                      style={{
                        height:1,
                        width:(0.9*ScreenWidth-0.08*ScreenWidth)/2,
                        //width:ScreenWidth*0.95,
                      }}
                    />
                  </View>
                </View>
    {/*-----------------更多内容展示---------------------*/}    
                <View
                    style={{
                        width:ScreenWidth*0.9,
                        alignItems:'center',
                        marginTop:10,
                        marginBottom:10,
                    }}
                >
                    <Text
                        style={{
                            fontSize:16,
                            fontWeight:'500',

                        }}
                    >
                        [更多信息]
                    </Text>
                </View>    
        
        {/*--------收藏数框-----------*/}
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

              <View
                style={{
                  flexDirection:'row',
                  alignItems:'center',
                }}
              >
                <Image
                  source={require('../../../img/Buttons/heart_filled.png')}
                  style={{
                    height:16,
                    width:16,
                    marginRight:5,
                  }}
                />
                <Text
                    style={{
                        fontSize:15,
                        fontWeight:'200',
                    }}
                >
                    16人收藏
                </Text>
              </View>


                <View
                  style={{
                    flexDirection:'row',
                    marginRight:30,
                  }}
                >
                  <Image
                      source={require('../../../img/faces/1.jpg')}
                      style={{
                          height:30,
                          width:30,
                          borderRadius:15,
                          borderWidth:1,
                          borderColor:'#fcfcfc',
                          marginRight:-50,
                      }}
                  />

                  <Image
                      source={require('../../../img/faces/2.jpg')}
                      style={{
                          height:30,
                          width:30,
                          borderRadius:15,
                          borderWidth:1,
                          borderColor:'#fcfcfc',
                          //marginRight:-15,
                      }}
                  />

                  <Image
                      source={require('../../../img/faces/3.jpg')}
                      style={{
                          height:30,
                          width:30,
                          borderRadius:15,
                          borderWidth:1,
                          borderColor:'#fcfcfc',
                          marginLeft:-50,
                      }}
                  />
                </View>

            </View>        


        {/*--------信息框-----------*/}
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
                    }}
                >
                    往期活动展示
                </Text>
                <Image
                    source={require('../../../img/Buttons/forward.png')}
                    style={{
                        height:20,
                        width:20,
                    }}
                />
            </View>

        {/*--------信息框-----------*/}
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
                    }}
                >
                    协议阅读
                </Text>
                <Image
                    source={require('../../../img/Buttons/forward.png')}
                    style={{
                        height:20,
                        width:20,
                    }}
                />
            </View>






        {/*------给底部留空间------*/}
            <View
                style={{
                    height:15,
                }}
            >
            </View>
          </ScrollView>

{/*----------------------底部按钮框---------------------------*/} 

          <View
            style={{
              width:ScreenWidth,
              height:50,
              borderTopWidth:1.5,
              borderColor:'#e6e6e6',
              flexDirection:'row',

            }}
          >

        {/*----------评论------------*/}
            <View
              style={{
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
              }}
            >
              <Image
                source={require('../../../img/Buttons/comment.png')}
                style={{
                    height:20,
                    width:20,
                  }}
              />
              <Text
                style={{
                  fontSize:14,
                  marginLeft:10,
                }}
              >
                咨询
              </Text> 

            </View>

        {/*----------地图------------*/}
            <View
              style={{
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
              }}
            >
              <Image
                source={require('../../../img/Buttons/location.png')}
                style={{
                    height:20,
                    width:20,
                  }}
              />
              <Text
                style={{
                  fontSize:14,
                  marginLeft:10,
                }}
              >
                地图
              </Text> 

            </View>    

        {/*----------报名------------*/}   
            
          <TouchableWithoutFeedback
            onPress={() => navigate('NoticePage')}
          >
            <View
              style={{
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#ec6664',
              }}
            >
                <Text
                  style={{
                    fontSize:16,
                    color:'white',
                    fontWeight:'600',
                    //marginLeft:10,
                  }}
                >
                  现在报名
                </Text>           
            </View>
          </TouchableWithoutFeedback>

          </View>      
        </View>
    );
  }
}


function select(store)
{
return {
    Activity:store.Activity
  }
}

//输出组件类
export default connect(select)(Activity2);