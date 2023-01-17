import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileInfoFields = ({keys = '-', Value = '-'}) => {
  var ifValue =
    Value === null || Value === undefined || Value == '' ? '-' : Value;
  var ifkeys = keys === null || keys === undefined || keys == '' ? '-' : keys;
  return (
    <View style={styles.textInfoContaimer}>
      <View>
        <Text style={styles.key}>{ifkeys}</Text>
      </View>
      <View>
        <Text style={styles.value}>{ifValue}</Text>
      </View>
    </View>
  );
};

export default ProfileInfoFields;

const styles = StyleSheet.create({
  textInfoContaimer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginBottom: '7%',
    marginVertical: '3.5%',
  },
  key: {color: 'gray', fontWeight: '700', textTransform: 'capitalize'},
  value: {color: '#fff', fontWeight: '700', textTransform: 'capitalize'},
});
