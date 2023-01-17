import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileInfoFields from './ProfileInfoFields';
import moment from 'moment';

const ProfileDetailContainer = () => {
  return (
    <>
      <View style={[styles.cardContainer, {marginTop: 30}]}>
        <ProfileInfoFields Value={'Super'} />
        <ProfileInfoFields keys={'Gender'} Value={'Man'} />
        <ProfileInfoFields
          keys={'DOB'}
          Value={moment().format('DD MMM YYYY')}
        />
        <ProfileInfoFields keys={'Location'} Value={'Indore'} />
        <ProfileInfoFields keys={'Interests'} Value={'-'} />
        <ProfileInfoFields keys={'Height'} Value={'165 cms'} />
        <ProfileInfoFields keys={'Weight'} Value={'60 Kg'} />
        <ProfileInfoFields keys={'Unit'} Value={'Metric (cm/kg)'} />
      </View>
      <View style={styles.cardContainer}>
        <ProfileInfoFields keys={'Email'} Value={'example@gmail.com'} />
        <ProfileInfoFields keys={'Mobile'} Value={'8435492116'} />
      </View>
    </>
  );
};

export default ProfileDetailContainer;

const styles = StyleSheet.create({
  cardContainer: {
    width: '92%',
    backgroundColor: 'rgba(136, 129, 129, 0.29)',
    marginTop: 12,
    borderRadius: 28,
    // height: '60%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
});
