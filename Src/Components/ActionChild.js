import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import LinearGradient from 'react-native-linear-gradient';
const ActionChild = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <View style={styles.imageView}>
          <Image
            source={require('../Assets/21458-NTQL9F.png')}
            style={{
              width: '100%',
              height: '100%',
            }}></Image>
        </View>
        <View style={styles.cartContext}>
          <Text
            style={[
              styles.DvcInfo,
              {
                fontWeight: '300',
              },
            ]}>
            Connected Device
          </Text>
          <View style={styles.DvcView}>
            <Text
              style={[
                styles.DvcInfo,
                {
                  paddingRight: 5,
                },
              ]}>
              NoiseFit Evolve 2
            </Text>
            <Icon name={'flash'} fill={'#1b9be3'} width={15} height={15} />
            <Text style={styles.DvcInfo}>92%</Text>
          </View>
          <Text style={styles.txt}>Last Synced at: 12:52 PM,14 Mar 2022</Text>
          <Text style={styles.txt}>Firmware version :4.3.308B.53</Text>

          <LinearGradient
            colors={['#21b9db', '#1e6575', '#1b3b42']}
            style={{width: '90%', borderRadius: 50, marginVertical: 10}}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Unpair</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default ActionChild;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  cardView: {
    width: '90%',
    height: Platform.OS === 'ios' ? '20%' : '25%',
    backgroundColor: '#404040',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageView: {
    height: '90%',
    width: '30%',
    padding: 15,
    alignSelf: 'center',
  },
  cartContext: {
    height: '100%',
    width: '70%',
    paddingVertical: 20,
  },
  btn: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  btnText: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  txt: {
    fontWeight: '300',
    paddingTop: 5,
    fontSize: 10,
    color: 'white',
  },
  DvcInfo: {
    fontWeight: '900',
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'white',
  },
  DvcView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
});
