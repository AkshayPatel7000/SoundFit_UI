/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './Src/Components/ActionSheet';

import {Icon} from 'react-native-eva-icons';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Home from './Src/Screens/Home';
import Routes from './Src/Navigation/Routes';
import {observer} from 'mobx-react';
import {authStore} from './Src/Store/AuthStore/AuthStore';
import RNBootSplash from 'react-native-bootsplash';
import ActionChild from './Src/Components/ActionChild';
const App = observer(() => {
  const ref = React.useRef(null);
  useEffect(() => {
    onPress();
  }, [authStore.userData.actionSheet]);
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);

  const onPress = React.useCallback(() => {
    const isActive = ref?.current?.isActive();

    if (!isActive) {
      ref?.current?.scrollTo(-240);
    } else {
      ref?.current?.scrollTo(0);
    }
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheet ref={ref}>
        <ActionChild />
      </BottomSheet>
      <Routes />
    </GestureHandlerRootView>
  );
});
export default App;
