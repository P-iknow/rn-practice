//5.10
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* flexWrap 속성 값에 nowrap으로 지정. 정사각형이 벗어남 */}
        <NoWrapContainer>
          <Example>A nowrap</Example>
          <Example>1</Example>
          <Example>2</Example>
          <Example>3</Example>
          <Example>4</Example>
        </NoWrapContainer>
        {/* flexWrap 속성 값에 wrap으로 지정. 정사각형이 유지되어 새로운 줄에서 시작 */}
        <WrapContainer>
          <Example>B wrap</Example>
          <Example>1</Example>
          <Example>2</Example>
          <Example>3</Example>
          <Example>4</Example>
        </WrapContainer>
      </View>
    );
  }
}

//첫 번째 예에 noWrapContainer 스타일을 적용
const NoWrapContainer = (props) => (
  <View style={[styles.noWrapContainer, props.style]}>{props.children}</View>
);

// 두 번째 예에 wrapContainer 스타일을 적용
const WrapContainer = (props) => (
  <View style={[styles.wrapContainer, props.style]}>{props.children}</View>
);

const Example = (props) => (
  <View style={[styles.example, props.style]}>
    <Text>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
  },
  //flexDirection 속성에는 row, flexWrap 속성에는 nowrap을 지정
  noWrapContainer: {
    backgroundColor: '#ededed',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    borderWidth: 1,
    margin: 10,
  },

  //flexDirection 속성에는 row, flexWrap 속성에는 wrap을 지정
  wrapContainer: {
    backgroundColor: '#ededed',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    margin: 10,
  },
  example: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#666666',
  },
});
