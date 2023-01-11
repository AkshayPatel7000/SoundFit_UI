import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
const {height, width} = Dimensions.get('window');

const OfferBanner = () => {
  return (
    <View style={{paddingHorizontal: 0, width: width}}>
      <Image
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0997/6284/files/image_2022_03_14T10_21_14_226Z_1200x.png?v=1647253396',
        }}
        style={{width: '100%', height: 200, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default OfferBanner;

const styles = StyleSheet.create({});
