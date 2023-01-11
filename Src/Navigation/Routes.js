import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import AuthStack from './AuthStack/AuthStack';

//LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
        animationEnabled={true}
        screenOptions={{
          headerShown: false,
        }}>
        {AuthStack(Stack)}
        {/* {null== null
        ? AppStack(Stack)
        : AuthStack(Stack)} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
