import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './Card';

const CardSection = ({res, way, Kcal, heart, sleeping, movement, height}) => {
  const cards = [
    {
      cardArray: ['#28ad9a', '#1f8778', '#082420'],
      icon: 'walk-outline',
      iconGrad: ['#082420', '#1f8778', '#28ad9a'],
      CardTitle: 'Steps Count',
      Description: 'Total steps taken',
      Duration: res?.value,
    },
    {
      cardArray: ['#2279ab', '#164c6b', '#081a24'],
      icon: 'moon-outline',
      iconGrad: ['#081a24', '#164c6b', '#2279ab'],
      Duration: sleeping?.value,
      Description: 'Total sleep taken',
      CardTitle: 'Sleep',
    },
    {
      cardArray: ['#e09d3f', '#8c6227', '#3b2910'],
      icon: 'walk-outline',
      iconGrad: ['#3b2910', '#8c6227', '#e09d3f'],
      CardTitle: 'Calories',
      Duration: Kcal?.calorie,
    },
    {
      cardArray: ['#d446c8', '#6e2769', '#30122e'],
      icon: 'fitness-outline',
      iconGrad: ['#30122e', '#6e2769', '#d446c8'],
      CardTitle: 'Heart Rate',
      Duration: heart?.value,
    },
    {
      cardArray: ['#b1d43f', '#7d962c', '#262e0d'],
      icon: 'speedometer-outline',
      iconGrad: ['#262e0d', '#7d962c', '#b1d43f'],
      CardTitle: 'Move Minutes',
      Duration: `${movement?.duration} min`,
    },
    {
      cardArray: ['#6cc9e0', '#307d91', '#0d272e'],
      icon: 'snow-outline',
      iconGrad: ['#0d272e', '#307d91', '#6cc9e0'],
      CardTitle: 'Height',
      Duration: `${height?.value} cm`,
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
