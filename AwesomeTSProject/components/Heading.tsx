import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Heading() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100',
  },
});
