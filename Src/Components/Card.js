import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
const Card = ({
  cardArray = ['#28ad9a', '#1f8778', '#082420'],
  icon = 'FontAwesome',
  iconGrad = ['#28ad9a', '#1f8778', '#082420'],
  CardTitle = 'Sleep',
  Duration = '-',
  Description = '',
}) => (
  <LinearGradient
    colors={cardArray}
    style={{
      width: width / 2.4,
      height: 160,
      backgroundColor: 'red',
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
    }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <LinearGradient
        colors={iconGrad}
        style={{
          borderRadius: Math.round(width + height) / 2,
          width: width * 0.12,
          height: width * 0.12,
          backgroundColor: '#1f8778',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcon name={icon} color="white" size={20} />
      </LinearGradient>
      <Icon
        name="arrow-ios-forward-outline"
        fill="white"
        width={20}
        height={20}
      />
    </View>
    <View style={{marginVertical: 20, justifyContent: 'space-evenly'}}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
        {CardTitle}
      </Text>
      <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
        {Duration}
      </Text>
      <Text style={{color: 'white', fontSize: 12, fontWeight: '300'}}>
        {Description}
      </Text>
    </View>
  </LinearGradient>
);

export default Card;

const styles = StyleSheet.create({});
