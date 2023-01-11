import {
  Animated, Dimensions, StyleSheet,
  Text,
  View
} from 'react-native';

import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../Constant/Colors';
import Search from './Search';

const {height, width} = Dimensions.get('window');

const ShopHeader = () => {
  const fadeAnim = React.useRef(new Animated.Value(0.1)).current;
  const fadeAnim1 = useState(new Animated.Value(0.1))[0];

  const [viewState, setViewState] = useState(true);
  const toggleAnimation = () => {
    if (viewState == true) {
      Animated.timing(fadeAnim1, {
        toValue: 0.9,
        timing: 1500,
        useNativeDriver: false,
      }).start(() => {
        setViewState(false);
      });
    } else {
      Animated.timing(fadeAnim1, {
        toValue: 0.1,
        timing: 1500,
        useNativeDriver: false,
      }).start(() => {
        setViewState(true);
      });
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width,
          height: 60,
          alignItems: 'flex-end',
          paddingBottom: 10,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons
            name={'md-logo-stencil'}
            color={COLORS.textColor}
            size={30}
          />
          <Text
            style={{
              color: COLORS.textColor,
              paddingLeft: 10,
              fontWeight: '800',
              fontSize: 18,
            }}>
            SoundFit
          </Text>
        </View>

        <Search />
      </View>
    </>
  );
};

export default ShopHeader;

const styles = StyleSheet.create({
  round: {
    borderRadius: Math.round(width + height) / 2,

    height: width * 0.1,
    backgroundColor: '#1f8778',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
