import {StyleSheet, Text, View, Dimensions, Alert, Image} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-eva-icons';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../Constant/Colors';
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
