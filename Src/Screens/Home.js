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
import {
  getActivityData,
  getAuth,
  getBreathingData,
  getProfileData,
  getRefreshToken,
  getSleepData,
} from '../Utils/FitbitService';
import {observer} from 'mobx-react-lite';
import {fitStore} from '../Store/AuthStore/FitStore';

// const {height, width} = Dimensions.get('window');

const Home = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (fitStore?.userData?.auth?.accessToken) {
        getRefreshToken().then(() => {
          setTimeout(() => {
            getActivityData();
            // getBreathingData();
            // getProfileData();
            getSleepData();
          }, 500);
        });
      }
      if (fitStore?.userData?.auth?.accessToken === undefined) {
        getAuth();
      }
    }, 500);
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

export default observer(Home);

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
