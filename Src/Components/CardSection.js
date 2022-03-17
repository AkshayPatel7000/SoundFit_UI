import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Card from './Card';

const CardSection = () => {
  const cards = [
    {
      cardArray: ['#28ad9a', '#1f8778', '#082420'],
      icon: 'barbell-outline',
      iconGrad: ['#1f8778', '#28ad9a', '#28ad9a'],
      CardTitle: 'Steps Count',
      Description: 'Total steps taken',
    },
    {
      cardArray: ['#2279ab', '#164c6b', '#081a24'],
      icon: 'moon-outline',
      iconGrad: ['#081a24', '#164c6b', '#2279ab'],
    },
    {
      cardArray: ['#e09d3f', '#8c6227', '#3b2910'],
      icon: 'walk-outline',
      iconGrad: ['#3b2910', '#8c6227', '#e09d3f'],
    },
    {
      cardArray: ['#d446c8', '#6e2769', '#30122e'],
      icon: 'fitness-outline',
      iconGrad: ['#30122e', '#6e2769', '#d446c8'],
    },
    {
      cardArray: ['#b1d43f', '#7d962c', '#262e0d'],
      icon: 'speedometer-outline',
      iconGrad: ['#262e0d', '#7d962c', '#b1d43f'],
    },
    {
      cardArray: ['#6cc9e0', '#307d91', '#0d272e'],
      icon: 'snow-outline',
      iconGrad: ['#0d272e', '#307d91', '#6cc9e0'],
      CardTitle: 's',
      Duration: 's',
      Description: 's',
    },
  ];
  return (
    <View
      style={{
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}>
      {cards.map((item, i) => (
        <Card
          key={`${item.cardArray} ${i}`}
          cardArray={item.cardArray}
          icon={item.icon}
          iconGrad={item.iconGrad}
          CardTitle={item.CardTitle}
          Description={item.Description}
          Duration={item.Duration}
        />
      ))}
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({});
