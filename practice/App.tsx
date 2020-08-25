import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Timing} from './animation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.sectionTitle}>Timing</Text>
        <Timing />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {},
  sectionTitle: {
    marginBottom: 16,
  },
});

export default App;
