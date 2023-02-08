import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_BASE_URL} from './config';

const authAxios = axios.create({
  baseURL: API_BASE_URL,
});

const publicAxios = axios.create({
  baseURL: API_BASE_URL,
});

authAxios.interceptors.request.use(
  async function (config) {
    const token = await AsyncStorage.getItem('@token');
    // if (token) {
    console.log('token12', token);
    config.headers.common['x-auth-token'] = token || '';
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export {authAxios, publicAxios};
