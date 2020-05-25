import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Example style={{}}>A</Example>

        {/* X 축으로 45도 기울이기 */}
        <Example style={{transform: [{skewX: '45deg'}]}}>B X45</Example>

        {/* X축으로 -45도 기울이기*/}
        <Example style={{transform: [{skewX: '-45deg'}]}}>C X-45</Example>

        {/* Y축으로 45도 기울이기*/}
        <Example style={{transform: [{skewY: '50deg'}]}}>D Y45</Example>

        {/*Y축으로 -45도 기울이기 */}
        <Example style={{transform: [{skewY: '-45deg'}]}}>E Y-45</Example>
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
    marginTop: 50,
    alignItems: 'center',
    flex: 1,
  },
  example: {
    width: 75,
    height: 75,
    borderWidth: 2,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});