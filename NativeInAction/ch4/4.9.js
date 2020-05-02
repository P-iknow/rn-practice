import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* 예1: 네 곳의 모서리가 둥근 사각형*/}
        <Example style={{borderRadius: 20}}>
          <CenteredText>Example 1:{'\n'}4 Rounded Corners</CenteredText>
        </Example>

        {/* 예2: 오른 쪽 두 모서리가 둥근 사각형*/}
        <Example
          style={{borderTopRightRadius: 60, borderBottomRightRadius: 60}}>
          <CenteredText>Example 2:{'\n'}D Shape</CenteredText>
        </Example>

        {/* 예3: 양 반대 편의 모서리가 둥근 사각형 */}
        <Example style={{borderTopLeftRadius: 30, borderBottomRightRadius: 30}}>
          <CenteredText>Example 3:{'\n'}Leaf Shape</CenteredText>
        </Example>

        {/* 예4: : border radius가 각 측면의 길이의 반으로 지정된 사각형*/}
        <Example style={{borderRadius: 60}}>
          <CenteredText>Example 4:{'\n'}Circle</CenteredText>
        </Example>
      </View>
    );
  }
}

//-  중앙 정렬된 텍스트 엘리먼트(text element)를 렌더링하는 재사용 가능한 컴포넌트
const Example = (props) => (
  <View style={[styles.example, props.style]}>{props.children}</View>
);

//-  텍스트 엘리먼트(text element) 내의 텍스트를 중앙 정렬하는 스타일
const CenteredText = (props) => (
  <Text style={[styles.centeredText, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 75,
  },
  example: {
    width: 120,
    height: 120,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
    margin: 10,
  },
});
