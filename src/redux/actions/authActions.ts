import { ActionTypes } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
    LOGIN_URL,
    REGISTER_URL,
  } from '../../Api/api';

export const loginUser = ({identity, signPass}) => async dispatch => {
    return new Promise(async (resolve, reject) => {
      console.log('data', identity, signPass);
      try {
        await axios
          .post(LOGIN_URL, {
            identity,
            signPass,
          })
          .then(async res => {
            if (res.data.authorization.token) {
              dispatch({type: ActionTypes.LOGIN_USER, payload: res.data});
              dispatch({type: ActionTypes.SET_ROLE, payload: res.data.user.role});
              dispatch({type: ActionTypes.SET_UID, payload: res.data.user._id});
              await AsyncStorage.setItem('token', res.data.authorization.token);
              await AsyncStorage.setItem('id', res.data.user._id);
              await AsyncStorage.setItem('role', res.data.user.role);
              resolve(res.data);
            } else {
              reject(res.data);
            }
          });
      } catch (error) {
        reject(error);
      }
    });
  };

  export const registerGuest = ({email, phone, pass, fName, lName, role, fcmToken, deviceID}) => async dispatch => {
    // const fcm_token = await AsyncStorage.getItem('fcmToken');
  
    return new Promise(async (resolve, reject) => {
      try {

        const fcmInfo = [
          {
            fcmToken: fcmToken,
            deviceID: deviceID
          }
        ]

        await axios
          .post(REGISTER_URL, {
            email,
            phone,
            pass,
            fName,
            lName,
            role,
            fcmInfo,
          })
          .then(async res => {
            if (res.data.authorization.token) {
              dispatch({type: ActionTypes.REGISTER_GUEST, payload: res.data});
              dispatch({type: ActionTypes.SET_ROLE, payload: res.data.user.role});
              dispatch({type: ActionTypes.SET_UID, payload: res.data.user._id});
              await AsyncStorage.setItem('token', res.data.authorization.token);
              await AsyncStorage.setItem('id', res.data.user._id);
              await AsyncStorage.setItem('role', res.data.user.role);
              resolve(res.data);
            } else {
              reject(res.data);
            }
          });
      } catch (error) {
        reject(error);
      }
    });
  };

  export const registerOwner = ({username, email, phone, fName, lName, pass, role, fcmToken, deviceID}) => async dispatch => {
    // const fcm_token = await AsyncStorage.getItem('fcmToken');
  
    console.log('DATA', username, email, phone, fName, lName, pass, role);
    
    return new Promise(async (resolve, reject) => {
      try {
        const fcmInfo = [
          {
            fcmToken: fcmToken,
            deviceID: deviceID
          }
        ]


        await axios
          .post(REGISTER_URL, {
            username,
            email,
            phone,
            fName,
            lName,
            pass,
            role,
            fcmInfo,
          })
          .then(async res => {
            if (res.data.authorization.token) {
              dispatch({type: ActionTypes.REGISTER_OWNER, payload: res.data});
              dispatch({type: ActionTypes.SET_ROLE, payload: res.data.user.role});
              dispatch({type: ActionTypes.SET_UID, payload: res.data.user._id});
              await AsyncStorage.setItem('token', res.data.authorization.token);
              await AsyncStorage.setItem('id', res.data.user._id);
              await AsyncStorage.setItem('role', res.data.user.role);
              resolve(res.data);
            } else {
              reject(res.data);
            }
          });
      } catch (error) {
        reject(error);
      }
    });
  };

  export const setUid = (id) => {
    return {
      type: ActionTypes.SET_UID,
      payload: id,
    };
  };

  export const setRole = (role) => {
    return {
      type: ActionTypes.SET_ROLE,
      payload: role,
    };
  };

  export const resetAll = () => {
    return {
      type: ActionTypes.RESET_ALL
    };
  };