import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

type buttonProps = {
  submitTodo: () => void;
};

export default function Button({submitTodo}: buttonProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        underlayColor="#efefef"
        style={styles.button}
        onPress={submitTodo}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    width: 100,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});
