import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({setType, type}) => (
  <View style={styles.container}>
    <TabBarItem type={type} title="All" setType={() => setType('All')} />
    <TabBarItem
      type={type}
      border
      title="Active"
      setType={() => setType('Active')}
    />
    <TabBarItem
      type={type}
      border
      title="Complete"
      setType={() => setType('Complete')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderBottomColor: '#dddddd',
  },
});

export default TabBar;
