import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import React from 'react';
import COLORS from '../Constant/Colors';
import ShopHeader from '../Components/ShopHeader';
import ShopCategory from '../Components/ShopCategory';
import OfferBanner from '../Components/OfferBanner';
import ShopPopularProduct from '../Components/ShopPopularProduct';
import Container from '../Components/Container/Container';
const Shop = () => {
  return (
    <Container style={styles.main}>
      <ShopHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 15, paddingTop: 20}}>
        <ShopCategory />
        <OfferBanner />
        <ShopPopularProduct />
      </ScrollView>
    </Container>
  );
};

export default Shop;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
});
