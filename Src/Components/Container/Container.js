import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import AppStatusBar from '../AppStatusBar';
const Container = props => {
  const {
    contentContainerStyle = {},
    statusBarStyle = {},
    containerStyle = {},
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <AppStatusBar {...statusBarStyle} />
      <SafeAreaView
        style={[styles.contentContainerStyle, contentContainerStyle]}>
        {props.children}
      </SafeAreaView>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {flex: 1, backgroundColor: 'black'},
});
