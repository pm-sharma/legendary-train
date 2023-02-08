import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Dashboard from './src/components/dashboard/Dashboard';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.setItem('@token', 'tokenvalue');
      console.log('first');
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView>
      <Dashboard />
    </SafeAreaView>
  );
};

export default App;
