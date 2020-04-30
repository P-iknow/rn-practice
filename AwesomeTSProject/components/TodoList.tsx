import React from 'react';
import {View} from 'react-native';
import {todo} from '../model';
import Todo from './Todo';

type todoListProps = {
  todos: todo[];
};

export default function TodoList({todos}: todoListProps) {
  const todosItems = todos.map((todo, i) => {
    return <Todo key={todo.todoIndex} todo={todo} />;
  });
  return <View>{todosItems}</View>;
}
