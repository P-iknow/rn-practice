import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.exampleContainer}>
          {/* A 예: 변경된 부분 없음. 마진과 패딩 없음 */}
          <Example style={{}}>
            <CenteredText>A</CenteredText>
          </Example>
        </View>
        <View style={styles.exampleContainer}>
          {/* B 예: marginTop을 paddingTop으로 변경*/}
          <Example style={{paddingTop: 50}}>
            <CenteredText>B</CenteredText>
          </Example>
        </View>
        <View style={styles.exampleContainer}>
          {/*  C 예: marginTop과 marginLeft을 각각 paddingTop과 paddingLeft으로 변경*/}
          <Example style={{paddingTop: 50, paddingLeft: 10}}>
            <CenteredText>C</CenteredText>
          </Example>
        </View>
        <View style={styles.exampleContainer}>
          {/* D 예: marginLeft와 marginTop을 각각 paddingLeft와 marginTop으로 변경. 음수 값은 그대로 적용 */}
          <Example style={{paddingLeft: -10, paddingTop: -10}}>
            <CenteredText>D</CenteredText>
          </Example>
        </View>
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
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 75,
  },
  exampleContainer: {
    borderWidth: 1,
    width: 120,
    height: 120,
    marginLeft: 20,
    marginBottom: 20,
  },
  example: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
    overflow: 'visible',
  },
  //Text component에 boarder와 background 색상지정
  centeredText: {
    textAlign: 'center',
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'lightgrey',
  },
});
