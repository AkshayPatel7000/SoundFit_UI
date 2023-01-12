import React, {useEffect} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const Donut = ({
  percentage = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = 'tomato',
  delay = 0,
  textColor,
  max = 100,
  type = 'Distance',
}) => {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;
  const animation = toValue => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  useEffect(() => {
    animation(percentage);

    animated.addListener(
      v => {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circumference - (circumference * maxPerc) / 100;
        if (inputRef?.current) {
          inputRef.current.setNativeProps({
            text: `${v.value.toFixed(2)}`,
          });
        }
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [max, percentage],
    );

    return () => {
      animated.removeAllListeners();
    };
  });
  return (
    <View style={{width: radius * 2, height: radius * 2}}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          {fontSize: radius / 3, color: textColor ?? color},
          styles.text,
        ]}
      />

      <Text
        style={{
          color: 'white',
          alignSelf: 'center',
          marginTop: 15,
          textTransform: 'uppercase',
          fontSize: 12,
        }}>
        {type}
      </Text>
    </View>
  );
};

export default Donut;

const styles = StyleSheet.create({
  text: {fontWeight: '900', textAlign: 'center'},
});
