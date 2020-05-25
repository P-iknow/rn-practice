import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../theme';

export default function CenterMessage({message}) {
  return (
    <View style={styles.emptyContainer}>
      <Text stlye={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 10,
    borderBottomWidth: 2,
    boderBottomColor: colors.primary,
  },
  message: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
