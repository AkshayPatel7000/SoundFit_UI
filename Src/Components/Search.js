import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../Constant/Colors';
const {height, width} = Dimensions.get('window');

export default class Search extends Component {
  state = {
    animation: new Animated.Value(width * 0.1),
    viewState: true,
  };
  toggleAnimation = () => {
    if (this.state.viewState == true) {
      Animated.timing(this.state.animation, {
        toValue: width * 0.5, //arthmatic opration always be done in toValue
        timing: 1500,
        useNativeDriver: false,
      }).start(() => {
        this.setState({viewState: false});
      });
    } else {
      Animated.timing(this.state.animation, {
        toValue: width * 0.1,
        timing: 1500,
        useNativeDriver: false,
      }).start(() => {
        this.setState({viewState: true});
      });
    }
  };

  render() {
    const boxStyle = {
      width: this.state.animation,
    };

    return (
      <>
        <Animated.View style={[styles.round, boxStyle]}>
          <TextInput
            style={{
              width: 160,
              height: width * 0.1,
              paddingHorizontal: 10,
              display: !this.state.viewState ? 'flex' : 'none',
              color: COLORS.textColor,
            }}
          />
        </Animated.View>
        <TouchableOpacity
          onPress={this.toggleAnimation}
          style={{
            position: 'absolute',
            right: width * 0.07,
            top: height * 0.019,
          }}>
          <Ionicons
            name={'search'}
            color={COLORS.textColor}
            size={25}
            style={{
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  round: {
    borderRadius: Math.round(width + height) / 2,
    height: width * 0.1,
    backgroundColor: COLORS.productCardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
