import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

const Challenges = () => {
  return (
    <View>
      <View style={styles.title}>
        <Icon name="flag-outline" fill="white" width={25} height={25} />
        <Text style={styles.Challenges}>Challenges</Text>
      </View>

      <ImageBackground
        imageStyle={{borderRadius: 20, resizeMode: 'cover'}}
        resizeMode="cover"
        source={require('../Assets/Colorfit_Pro_3_Fitness_Watch_1024x1024.jpg')}
        style={styles.image}>
        <LinearGradient
          colors={['#0000001A', '#000000C2', '#000000FF']}
          style={styles.linearGradient}>
          <Text style={styles.steps}>Step up your fitness game</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Challenges;

const styles = StyleSheet.create({
  Challenges: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: width - 50,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 15,
  },
  steps: {
    marginLeft: 20,
    color: 'white',
    marginVertical: 10,
    fontWeight: '600',
  },
  linearGradient: {
    flex: 1,
    opacity: 0.8,
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
});
