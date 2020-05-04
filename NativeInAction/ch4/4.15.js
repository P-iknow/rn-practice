import React, {Component} from 'react';
//react-native에서 Text컴포넌트 import
import {Image, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./user.png')} />
          </View>
          <View>
            {/* 인물 이름을 보여주는 Text컴포넌트 */}
            <Text style={styles.cardName}>John Doe</Text>
          </View>

          {/* 직업을 표시하는 Text 컴포넌트의 컨테이너.
             직업과 프로필 소개를 구분하는 하단 테두리(bottom border)을 지정 */}
          <View style={styles.cardOccupationContainer}>
            {/*직업을 표시하는 Text */}
            <Text style={styles.cardOccupation}>React Native Developer</Text>
          </View>
          <View>
            {/* 인물의 프로필 설명 */}
            <Text style={styles.cardDescription}>
              John is a really great JavaScript developer. He loves using JS to
              build React Native applications for iOS and Android.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
  },

  // 이름 표시 Text 컴포넌트의 색상은 white
  cardName: {
    color: 'white',
    marginTop: 30,
  },

  //직업을 영역의 스타일
  cardOccupationContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },

  //직업을 표시하는 Text 컴포넌트에 적용된 스타일(위치를 지정하는 스타일만 포함)
  cardOccupation: {
    marginTop: 10,
    marginBottom: 10,
  },

  //프로필 Text의 스타일
  cardDescription: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  },
});
