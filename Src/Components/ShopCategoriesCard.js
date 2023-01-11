import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import COLORS from '../Constant/Colors';
const {height, width} = Dimensions.get('window');
const ShopCategoriesCard = ({image = '-', Title = ''}) => (
  <View style={{flexDirection: 'column', alignItems: 'center'}}>
    <View
      style={{
        borderRadius: Math.round(width + height) / 2,
        width: width * 0.35,
        height: width * 0.35,
        backgroundColor: COLORS.productCardBackground,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      <Image
        source={{
          uri: image,
        }}
        style={{width: 90, height: 90}}
      />
    </View>
    <Text style={{color: COLORS.textColor, fontSize: 13}}>{Title}</Text>
  </View>
);

export default ShopCategoriesCard;

const styles = StyleSheet.create({});
