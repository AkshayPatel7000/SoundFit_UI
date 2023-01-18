import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import moment from 'moment';
import {authStore} from '../Store/AuthStore/AuthStore';
import { getRevoke } from '../Utils/FitbitService';
const {height, width} = Dimensions.get('window');

const HomeHeader = () => {
  const [Date, setDate] = useState(moment().format('DD MMMM YYYY'));
  const ref = useRef(null);

  const onPress = useCallback(() => {
    authStore.setActionSheet(!authStore.userData.actionSheet);
    // const isActive = ref?.current?.isActive();
    // console.log(isActive);
    // if (!isActive) {
    //   ref?.current?.scrollTo(-260);
    // } else {
    //   ref?.current?.scrollTo(0);
    // }
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <View style={styles.header}>
        <View>
          <Text style={styles.Day}>Today</Text>
          <Text style={styles.Date}>{Date}</Text>
        </View>
        <TouchableOpacity onPress={()=>{getRevoke()}}>
          <Image
            source={require('../Assets/21458-NTQL9F.png')}
            style={{width: 25, height: 28}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  Day: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Date: {
    color: 'white',
    fontSize: 12,
    // fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignContent: 'center',
    marginVertical: 20,
    marginBottom: 30,
  },
});
