import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BG from '../Assets/BG.jpg';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

export default function Login() {
  return (
    <ImageBackground style={styles.container} source={BG} resizeMode="cover">
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.loginBtn}>
            <LinearGradient
              colors={['#d446c8', '#6e2769', '#30122e']}
              style={{
                width: width * 0.8,
                height: 60,
                borderRadius: 20,
                padding: 10,
                alignItems: 'center'
              }}>
              <Text style={styles.BtnTxt}>Login with FitBit</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    height: 40,
  },
  BtnTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlignVertical: 'center'
  },
});
