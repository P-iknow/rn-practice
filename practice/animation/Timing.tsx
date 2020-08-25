import React, {useRef, useEffect} from 'react';
import {View, Animated} from 'react-native';

const Timing = () => {
  let fadeAnim = useRef(new Animated.Value(0));

  const fadeIn = () => {
    //fadeAnim.setValue(0);
    Animated.timing(fadeAnim.current, {
      toValue: 1,
      duration: 4000,
      //easing : Easing.bounce,
      //delay: 200,
      useNativeDriver: true,
    }).start(() => fadeIn());
  };

  useEffect(() => {
    fadeIn();
  });
  return (
    <View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          opacity: fadeAnim.current,
        }}
      />
    </View>
  );
};

export default Timing;
