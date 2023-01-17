import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-eva-icons';
const {height, width} = Dimensions.get('window');
const ProfileHeader = ({title = 'Profile'}) => {
  const onPress = () => {};
  return (
    <View style={styles.header}>
      <View></View>
      <View>
        <Text style={styles.Day}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.editContainer}>
        <Text style={styles.Edit}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  Day: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  editContainer: {alignItems: 'baseline', justifyContent: 'flex-end'},
  Edit: {
    color: '#03adfc',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Date: {
    color: 'white',
    fontSize: 12,
    textAlign: 'auto',
    // fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignContent: 'center',
    marginVertical: 20,

    elevation: 6,
    // marginBottom: 30,
  },
});
