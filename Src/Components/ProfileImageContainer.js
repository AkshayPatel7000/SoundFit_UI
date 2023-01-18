import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const ProfileImageContainer = ({
  image = 'https://lh3.googleusercontent.com/ogw/AOh-ky3F3CrzNcB2WMO2xcQ5OjMI7aW9O-38DLgBg9NE984=s128-c-mo',
}) => {
  return (
    <View style={styles.imageContaiber}>
      <View style={styles.imageView}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default ProfileImageContainer;

const styles = StyleSheet.create({
  imageContaiber: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: 120,
    height: 120,

    borderRadius: 60,
  },
  image: {width: '100%', height: '100%', borderRadius: 60},
});
