import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  ImageBackground,
  Alert
} from "react-native";

import Swiper from 'react-native-swiper';

import {
  IMAGE_LOGO,
  IMAGE_TEXTLOGO,
  IMAGE_TEACHER,
  IMAGE_NFC
} from '../constants/image';
import {
  COLOR_WHITE,
  COLOR_SHADOW,
  COLOR_BORDER,
  COLOR_PURPLE,
  COLOR_BLUE,
  COLOR_TEXT_GRAY,
  COLOR_BLACK,
  COLOR_PLACEHOLDER
} from '../constants/color';
import { width, height } from '../constants/size';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    id: '',
    pw: ''
  }

  static navigationOptions = ({
    header: null,
    headerStyle: {
      elevation: 0,
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      backgroundColor: 'transparent',
      shadowColor: "transparent"
    }
  });

  render() {
    const { index, id, pw } = this.state;
    return (
      <View style={{
        flex: 1,
        backgroundColor: COLOR_WHITE
      }}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          index={index}
          loop={false}
        >
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLOR_WHITE,
          }}>
            <Image source={IMAGE_LOGO} style={{
              width: 128,
              height: 128,
              borderRadius: 20,
              borderWidth: .3,
              borderColor: COLOR_BORDER,
              shadowColor: COLOR_SHADOW,
              shadowOffset: { width: 1, height: 2 },
              shadowOpacity: .8,
              shadowRadius: -10,
              justifyContent: 'center',
              alignItems: 'center',
            }}/>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 36
            }}>
              <Image source={IMAGE_TEXTLOGO} />
            </View>
            <TouchableOpacity style={{
                paddingHorizontal: 18,
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLOR_PURPLE,
                marginTop: 160,
                borderRadius: 20,
              }}>
              <Text style={{
                fontSize: 18,
                letterSpacing: -.22,
                color: COLOR_WHITE
              }}>시작하기</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLOR_WHITE,
          }}>
            <Text style={{
              fontSize: 30,
              fontWeight: '300',
              letterSpacing: -1.36,
              color: COLOR_TEXT_GRAY
            }}>본인의 아이디를 입력하세요</Text>
            <TextInput 
              style={{
                paddingVertical: 0,
                height: 30,
                borderWidth: 0,
                borderRadius: 0,
                fontSize: 24,
                minHeight: 30,
                fontWeight: '600',
                letterSpacing: .6,
                marginTop: 50,
                color: COLOR_BLACK,
                paddingHorizontal: 5,
              }}
              onChangeText={(id) => this.setState({ id: id })}
              value={id}
              placeholder='아이디'
              placeholderTextColor={COLOR_PLACEHOLDER}
              multiline={false}
            />
            <Image source={IMAGE_TEACHER} style={{
              marginTop: 50,
            }}/>
            <Text style={{
              marginTop: 50,
              fontSize: 30,
              fontWeight: '300',
              letterSpacing: -1.36,
              color: COLOR_TEXT_GRAY,
              textAlign: 'center'
            }}>
              본인의 아이디는 {'\n'}
              대시보드의 아이디입니다.
            </Text>
          </View>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLOR_WHITE,
          }}>
            <Text style={{
              fontSize: 30,
              fontWeight: '300',
              letterSpacing: -1.36,
              color: COLOR_TEXT_GRAY
            }}>개별 비밀번호를 입력하세요</Text>
            <TextInput 
              style={{
                paddingVertical: 0,
                height: 30,
                borderWidth: 0,
                borderRadius: 0,
                height: 30,
                fontSize: 24,
                fontWeight: '600',
                letterSpacing: .6,
                marginTop: 50,
                color: COLOR_BLACK,
                paddingHorizontal: 5,
              }}
              onChangeText={(pw) => this.setState({pw: pw})}
              value={pw}
              placeholder='비밀번호'
              placeholderTextColor={COLOR_PLACEHOLDER}
              secureTextEntry={true}
              multiline={false}
            />
            <Image source={IMAGE_TEACHER} style={{
              marginTop: 50,
            }}/>
            <Text style={{
              marginTop: 50,
              fontSize: 30,
              fontWeight: '300',
              letterSpacing: -1.36,
              color: COLOR_TEXT_GRAY,
              textAlign: 'center'
            }}>
              본인의 비밀번호는 {'\n'}
              대시보드의 비밀번호입니다.
            </Text>
          </View>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLOR_WHITE,
          }}>
            <Text style={{
              fontSize: 30,
              fontWeight: '300',
              letterSpacing: -1.36,
              color: COLOR_TEXT_GRAY,
              textAlign: 'center'
            }}>
              NFC리더기에{'\n'}
              휴대폰을 태그하세요
            </Text>
            <TouchableWithoutFeedback onPress={() => Alert.alert(
                "출석 완료!",
                "출석이 완료되었습니다.",
                [{ text: "확인" }]
              )} style={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              marginTop: 85
              }} >
                <Image source={IMAGE_NFC} style={{
                  marginTop: 85
                }} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => Alert.alert(
                "출석 실패!",
                "아이디나 비밀번호가 잘못되었습니다.",
                [{ text: "확인" }]
              )} style={{
              width: width,
              height: height/2,
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              position: 'absolute',
              top: 0,
              }} >
              <View style={{
              width: width,
              height: height/2,
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              position: 'absolute',
              top: 0,
              }} />
            </TouchableWithoutFeedback>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: width,
    height: height
  },
  wrapper: {
  }
});

export default HomeScreen;
