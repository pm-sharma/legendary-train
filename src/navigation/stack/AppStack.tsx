import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';

const Stack = createStackNavigator();
export default function AppStack() {
  let routeNameState = 'dashborad';

  if (routeNameState !== '') {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false, presentation: 'card'}}
        initialRouteName={routeNameState}>
        {/* <Stack.Screen
          name="Componenent"
          component={Componenent}
          options={{gestureEnabled: false}}
        /> */}
      </Stack.Navigator>
    );
  } else {
    return <View />;
  }
}
