import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type InputProps = {
  inputValue: string;
  inputChange: (text: string) => void;
};

export default function Input({inputValue, inputChange}: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={inputValue}
        placeholder="What needs to be done?"
        placeholderTextColor="#CACACA"
        selectionColor="#666666"
        onChangeText={inputChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
