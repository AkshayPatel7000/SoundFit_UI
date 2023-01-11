import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
const AppStatusBar = props => {
  const {
    backgroundColor = 'black',
    statusBarHeight = StatusBar.currentHeight,
    ...statusBarProps
  } = props;
  return (
    <View
      style={{
        //height: statusBarHeight,
        backgroundColor,
      }}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle={'light-content'}
          {...statusBarProps}
        />
      </SafeAreaView>
    </View>
  );
};

export default AppStatusBar;
