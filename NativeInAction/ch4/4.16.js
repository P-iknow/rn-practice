import React, {Component} from 'react';

//react-native에서 Platform import
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <CenteredText>I am a monospaced font on both platforms</CenteredText>
          <BottomText>
            {' '}
            {/* Platform.OS를 통해서 현재 운영체제를 알아낼 수 있음  */}
            {Platform.OS}
          </BottomText>
        </View>
      </View>
    );
  }
}

const CenteredText = (props) => (
  <Text style={[styles.centeredText, props.style]}>{props.children}</Text>
);

const BottomText = (props) => (
  //절대 위치 지정
  <CenteredText style={[{position: 'absolute', bottom: 0}, props.style]}>
    {props.children}
  </CenteredText>
);

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    margin: 40,
    marginTop: 100,
    borderWidth: 1,
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
    margin: 10,
    fontSize: 24,
    //Platform.sleect를 통해 운영체제 맞는 폰트 선택
    ...Platform.select({
      ios: {
        fontFamily: 'American Typewriter',
      },
      android: {
        fontFamily: 'monospace',
      },
    }),
  },
});
