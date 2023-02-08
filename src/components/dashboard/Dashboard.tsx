/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {API_BASE_URL, endPoints, version} from '../../helper/config';
import {AuthContext} from '../../navigation/AuthProvider';
import Header from '../header/Header';
import Footer from './Footer';
import GameDay from './GameDay';
import Goals from './Goals';
import Transactions from './Transactions';

const Dashboard = () => {
  const [token, setToken] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const {setIsLoggedIn} = useContext(AuthContext);

  const getToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      setToken(storedToken || '');
      handleGetListApiCall();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  const Logout = async () => {
    AsyncStorage.removeItem('@token');
    setIsLoggedIn(false);
  };

  const handleGetListApiCall = async () => {
    try {
      console.log('token', token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `${API_BASE_URL}/${version}/${endPoints.getList.game}`,
        config,
      );
      setCode(response.data.data);
    } catch (e: any) {
      if (e.response.data.errorCode === 4) {
        console.log('Token expired, logging out...');
        await AsyncStorage.removeItem('token');
        setToken('');
        Logout();
      } else {
        console.error(e);
      }
    }
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={['#B87FA9', '#9C599F', '#9A5AA8']}
        style={styles.linearGradient}>
        <BoxRoot>
          <Header />
        </BoxRoot>
      </LinearGradient>
      <View style={styles.container}>
        <View style={styles.mtop} />
        <Transactions />
        <View style={styles.mtop} />

        <Goals />
        <View style={styles.mtop} />

        <GameDay
          handleGetListApiCall={() => {
            handleGetListApiCall();
          }}
          code={code}
        />
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  linearGradient: {
    height: 423,
  },
  mtop: {
    marginTop: 10,
  },
});

const BoxRoot = styled.View`
  padding: 11.7px;
`;

export default Dashboard;
