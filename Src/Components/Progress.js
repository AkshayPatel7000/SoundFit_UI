import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Donut from './Donut';

const Progress = () => {
  const donuts = [
    {color: '#e09d3f', radius: 40, percentage: 100, type: 'distance'},
    {color: '#2279ab', radius: 40, percentage: 56, type: 'steps'},
    {color: '#28ad9a', radius: 40, percentage: 77, type: 'Calories'},
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
