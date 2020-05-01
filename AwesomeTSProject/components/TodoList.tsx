import React from 'react';
import {View} from 'react-native';
import {todo, todos, todoType} from '../model';
import Todo from './Todo';

type todoListProps = {
  todos: todo[];
  onToggle: (todoIndex: number) => void;
  onDelete: (todoIndex: number) => void;
  type: todoType;
};

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  type,
}: todoListProps) {
  const getVisibleTodos = (todos: todos, type: todoType) => {
    switch (type) {
      case 'All':
        return todos;
      case 'Complete':
        return todos.filter((todo) => todo.complete);
      case 'Active':
        return todos.filter((todo) => !todo.complete);
    }
  };

  const todosItems = getVisibleTodos(todos, type).map((todo, i) => {
    return (
      <Todo
        key={todo.todoIndex}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    );
  });

  return <View>{todosItems}</View>;
}
