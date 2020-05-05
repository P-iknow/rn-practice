import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* 기본 50 X 50 크기의 정사각형. 크기가 변경되지 않음 */}
        <Example style={{}}>A,1</Example>

        {/* 기본 50 X 50 크기의 정사각형의 크기를 0.5배만큼 축소함 */}
        <Example style={{transform: [{scale: 0.5}]}}>B,0.5</Example>

        {/* 기본 50 X 50 크기의 정사각형의 크기를 2배만큼 확대함 */}
        <Example style={{transform: [{scale: 2}]}}>C,2</Example>

        {/* 기본 50 X 50 크기의 정사각형의 크기를 X축 방향으로만 3배 확대 */}
        <Example style={{transform: [{scaleX: 3}]}}>D,X3</Example>

        {/* 기본 50 X 50 크기의 정사각형의 크기를 Y축 방향으로만 1.5배 확대 */}
        <Example style={{transform: [{scaleY: 1.5}]}}>E,Y1.5</Example>
      </View>
    );
  }
}

const Example = (props) => (
  <View style={[styles.example, props.style]}>
    <Text>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center',
    flex: 1,
  },
  example: {
    width: 50,
    height: 50,
    borderWidth: 2,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
