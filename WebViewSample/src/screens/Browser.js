import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const LoadingIndicatorView = () => {
  return (
    <ActivityIndicator
      color="#009b88"
      size="large"
      style={styles.ActivityIndicatorStyle}
    />
  );
};

function Browser({route}) {
  const {link} = route.params;

  return (
    <WebView
      source={{uri: link}}
      renderLoading={LoadingIndicatorView}
      startInLoadingState={true}
    />
  );
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Browser;
