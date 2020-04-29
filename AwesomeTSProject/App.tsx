import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import Button from './components/Button';

declare const global: {HermesInternal: null | {}};

type todo = {
  title: string;
  todoIndex: number;
  complete: boolean;
};

let todoIndex: number = 0;

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<todo[]>([]);
  const [type, setType] = useState('All');

  const inputChange = (inputValue: string) => {
    console.log(`input value: ${inputValue}`);
    setInputValue(inputValue);
  };

  const submitTodo = () => {
    if (inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    console.dir(todos);
  }, [todos]);

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input
          inputChange={(text: string) => inputChange(text)}
          inputValue={inputValue}
        />
        <Button submitTodo={submitTodo} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
