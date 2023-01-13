import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import React, {useState, useEffect} from 'react';
import { authStore } from '../Store/AuthStore/AuthStore';
import Donut from './Donut';

const Progress = () => {
 
  const donuts = [
    {color: '#e09d3f', radius: 40, percentage: authStore?.userData?.distance?.distance, type: 'distance'},
    {color: '#2279ab', radius: 40, percentage: authStore?.userData?.steps?.value, type: 'steps'},
    {color: '#28ad9a', radius: 40, percentage: authStore?.userData?.calorie?.calorie, type: 'Calories'},
  ];
  return (
    <View>
      <Text style={styles.heading}>
        Hey Akshay, here's your progress of the day.
      </Text>
      <View style={styles.donut}>
        {donuts.map(donut => (
          <TouchableOpacity key={`${donut.percentage}${donut.color}`}>
            <Donut
              percentage={donut.percentage}
              color={donut.color}
              type={donut.type}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  heading: {fontSize: 12, color: 'white'},
  donut: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
});
