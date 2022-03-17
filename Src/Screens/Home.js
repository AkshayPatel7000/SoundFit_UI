import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Icon} from 'react-native-eva-icons';
import HomeHeader from '../Components/HomeHeader';
import LinearGradient from 'react-native-linear-gradient';
import Challenges from '../Components/Challenges';
import Progress from '../Components/Progress';
import CardSection from '../Components/CardSection';
import respons from '../Assets/respons.json';
import CountryData from '../Assets/CountryData.json';
import courr from '../Assets/courr.json';

import {findNodeHandle} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import Container from '../Components/Container/Container';
const {height, width} = Dimensions.get('window');

const Home = () => {
  return (
    <Container style={styles.main}>
      <HomeHeader />
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Challenges />
        <Progress />
        <CardSection />
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
