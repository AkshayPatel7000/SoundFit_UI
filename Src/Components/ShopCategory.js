import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../Constant/Colors';
import ShopCategoriesCard from './ShopCategoriesCard';

const ShopCategory = () => {
  var cards = [
    {
      image:
        'https://cdn.shopify.com/s/files/1/0997/6284/files/banner_6dfd25d2-894e-41bf-b2aa-7e133ddabdf7_360x.png?v=1628860894',
      Title: 'Smart Watches',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0997/6284/files/Mask_Group_7_360x.png?v=1612690910',
      Title: 'Truly Wireless Eaebuds',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0997/6284/files/Mask_Group-3_d51a1e9a-a1f0-4bbf-838d-322f6ee4272b_360x.png?v=1612690782',
      Title: 'Bluetooth Neckbands',
    },
    {
      image:
        'https://cdn.shopify.com/s/files/1/0997/6284/files/Noise_Smart_Wearables_Accessories_360x.png?v=1613499955',
      Title: 'Accessories',
    },
  ];
  return (
    <View style={styles.main}>
      <Text style={styles.HeadingText}>Categories</Text>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        {cards.map((item, i) => (
          <ShopCategoriesCard
            key={`${item.cardArray} ${i}`}
            image={item.image}
            Title={item.Title}
          />
        ))}
      </View>
    </View>
  );
};

export default ShopCategory;

const styles = StyleSheet.create({
  main: {
    //paddingVertical: 0,
  },
  HeadingText: {
    color: COLORS.textColor,
    paddingLeft: 10,
    fontWeight: '500',
    fontSize: 14,
  },
});
