import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* A,B,C 블록을 포함하는 라인 */}
        <View style={styles.row}>
          <Example>
            <CenteredText>A</CenteredText>
          </Example>
          <Example>
            <CenteredText>B</CenteredText>
            {/* 부모인 B블록 내에서 절대 위치를 사용해서 오른쪽 아래에 배치 */}
            <View
              style={[
                styles.tinyExample,
                {position: 'absolute', right: 0, bottom: 0},
              ]}>
              <CenteredText>E</CenteredText>
            </View>
          </Example>
          <Example>
            <CenteredText>C</CenteredText>
          </Example>
        </View>
        {/* D블록은 부모 요소의 오른쪽 하단에 배치 */}
        <Example style={{position: 'absolute', right: 0, bottom: 0}}>
          <CenteredText>D</CenteredText>
        </Example>
      </View>
    );
  }
}

const Example = (props) => (
  <View style={[styles.example, props.style]}>{props.children}</View>
);

const CenteredText = (props) => (
  <Text style={[styles.centeredText, props.style]}>{props.children}</Text>
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
    flex: 1,
    flexDirection: 'row',
  },
  example: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  tinyExample: {
    width: 30,
    height: 30,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  centeredText: {
    textAlign: 'center',
    margin: 10,
  },
});
