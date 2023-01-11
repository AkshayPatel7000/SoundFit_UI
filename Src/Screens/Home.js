import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import CardSection from '../Components/CardSection';
import Challenges from '../Components/Challenges';
import HomeHeader from '../Components/HomeHeader';
import Progress from '../Components/Progress';

import Container from '../Components/Container/Container';
const {height, width} = Dimensions.get('window');

const Home = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
    // return () => clearTimeout(interval);
  }, []);

  return (
    <Container style={styles.main}>
      <HomeHeader />
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={50} color={'#fe375d'} />
        </View>
      ) : (
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Challenges />
          <Progress />
          <CardSection />
        </ScrollView>
      )}
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    // flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  loader: {
    height: '100%',
    justifyContent: 'center',
  },
});
