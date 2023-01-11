import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Container from '../Components/Container/Container';
import OfferBanner from '../Components/OfferBanner';
import ShopCategory from '../Components/ShopCategory';
import ShopHeader from '../Components/ShopHeader';
import ShopPopularProduct from '../Components/ShopPopularProduct';
import COLORS from '../Constant/Colors';
const Shop = () => {
  return (
    <Container style={styles.main}>
      <ShopHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, paddingTop: 20}}>
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
