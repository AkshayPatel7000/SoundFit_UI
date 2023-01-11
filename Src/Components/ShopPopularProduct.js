import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import COLORS from '../Constant/Colors';
const {height, width} = Dimensions.get('window');

const ShopPopularProduct = () => {
  const renderItem = () => {
    return (
      <View
        style={{
          margin: 10,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            width: width / 2.4,
            height: 150,
            backgroundColor: COLORS.productCardBackground,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            source={{
              uri: 'https://cdn.shopify.com/s/files/1/0997/6284/files/banner_6dfd25d2-894e-41bf-b2aa-7e133ddabdf7_360x.png?v=1628860894',
            }}
            style={{width: 100, height: 100}}
          />
        </View>
        <Text style={styles.productName}>Hello</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.HeadingText}>Popular Product</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={renderItem}
        //contentContainerStyle={{margin: 20}}
      />
    </View>
  );
};

export default ShopPopularProduct;

const styles = StyleSheet.create({
  HeadingText: {
    color: COLORS.textColor,
    paddingLeft: 10,
    fontWeight: '500',
    fontSize: 14,
  },
  productName: {
    color: COLORS.textColor,
    fontSize: 12,
  },
});
