import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./user.png')} />
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
    //프로필 카드를 수평축에서 중앙으로 정렬
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
    //사용자의 이미지를 수평축에서 중앙으로 정렬
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30, //프로필 카드와 원의 상단의 간격
    paddingTop: 15, //원과 안쪽 이미지 사이의 간격
  },
  cardImage: {
    width: 80,
    height: 80,
  },
});
