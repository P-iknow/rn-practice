import React, {Component} from 'react';

//react-native에서 Image 컴포넌트 가져오기
import {Image, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            {/*  user.png 파일은 앱의 코드와 같은 디렉토리에 위치함 */}
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
  // 프로필 카드에 border 속성 추가하기
  cardContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  // 이미지 컨테이너(image container)는 120 X 120 크기의 정사각형.
  // borderRadius 속성을 60(120의 반)으로 지정해서 원으로 나타남
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //이미지에 적용한 스타일
  cardImage: {
    width: 80,
    height: 80,
  },
});
