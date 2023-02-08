/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      {/* <Stack.Screen
        name="Login"
        component={Login}
      /> */}
    </Stack.Navigator>
  );
}

export default AuthStack;
