/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {AuthContext} from './AuthProvider';
import AppStack from './stack/AppStack';
import AuthStack from './stack/AuthStack';

const Routes = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  const {getItem} = useAsyncStorage('@token');

  const checkIfUserIsLoggedIn = async () => {
    const item = await getItem();
    if (item !== null) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
