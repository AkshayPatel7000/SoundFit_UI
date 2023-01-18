import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../Components/Container/Container';
import ProfileHeader from '../Components/ProfileHeader';
import ProfileImageContainer from '../Components/ProfileImageContainer';
import ProfileDetailContainer from '../Components/ProfileDetailContainer';

const Settings = () => {
  return (
    <Container style={styles.main}>
      <ProfileHeader />
      <ScrollView contentContainerStyle={{paddingVertical: 20}}>
        <ProfileImageContainer
          image={
            'https://lh3.googleusercontent.com/ogw/AOh-ky3F3CrzNcB2WMO2xcQ5OjMI7aW9O-38DLgBg9NE984=s128-c-mo'
          }
        />

        <ProfileDetailContainer />
      </ScrollView>
    </Container>
  );
};

export default Settings;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    // flex: 1,
  },
});
