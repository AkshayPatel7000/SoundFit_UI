import React from 'react';
import {Animated} from 'react-native';
import BottomTabs from '../BottomTabs/BottomTabs';

export default Stack => {
  const forFade = ({current, next}) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0,
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });

    return {
      leftButtonStyle: {opacity},
      rightButtonStyle: {opacity},
      titleStyle: {opacity},
      backgroundStyle: {opacity},
    };
  };

  return (
    <>
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{cardStyleInterpolator: forFade}}
      />
    </>
  );
};
