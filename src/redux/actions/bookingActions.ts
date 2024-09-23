import { ActionTypes } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
    CREATE_BOOKING,
    ACTIVE_BOOKING,
    UNREAD_BOOKING,
    COMPLETED_BOOKING,
    CANCELLED_BOOKING,
    BOOKING_DETAILS,
    BOOKING_CHAT,
    NEW_CHAT,
  } from '../../Api/api';

export const createBooking = (data: any) => async dispatch => {
    return new Promise(async (resolve, reject) => {

        const token = await AsyncStorage.getItem('token');

        let axiosConfig = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          };

      try {

          await axios.post(CREATE_BOOKING, data, axiosConfig).then(async res => {
            if (res.status === 200) {
              dispatch({ type: ActionTypes.CREATE_BOOKING, payload: res.data });
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


export const getUnreadBooking = ({id, page, limit}) => async dispatch  =>  {
    return new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');

      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        
         await axios
          .get(`${UNREAD_BOOKING}/${id}/${page}/${limit}`, axiosConfig)
          .then(async res => {
            if (res.status === 200) {
            dispatch({ type: ActionTypes.GET_UNREAD_BOOKING,payload: res.data });
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

     
export const getActiveBooking = ({page, limit}) => async dispatch  =>  {
    return new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');

      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        
         await axios
          .get(`${ACTIVE_BOOKING}?page=${page}&limit=${limit}`, axiosConfig)
          .then(async res => {
            if (res.status === 200) {
            dispatch({ type: ActionTypes.GET_ACTIVE_BOOKING,payload: res.data });
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


  
export const getCompletedBooking = ({page, limit}) => async dispatch  =>  {
    return new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');

      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        
         await axios
          .get(`${COMPLETED_BOOKING}?page=${page}&limit=${limit}`, axiosConfig)
          .then(async res => {
            if (res.status === 200) {
            dispatch({ type: ActionTypes.GET_COMPLETED_BOOKING,payload: res.data });
              resolve(res.data);
            } else {
              reject(res.data);
              
            }
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };


  
export const getCancelledBooking = ({page, limit}) => async dispatch  =>  {
    return new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');

      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        
         await axios
          .get(`${CANCELLED_BOOKING}?page=${page}&limit=${limit}`, axiosConfig)
          .then(async res => {
            if (res.status === 200) {
            dispatch({ type: ActionTypes.GET_CANCELLED_BOOKING,payload: res.data });
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


  
export const getBookingByID = ({bookingID}) => async dispatch  =>  {
    return new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');

      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        
         await axios
          .get(`${BOOKING_DETAILS}/${bookingID}`, axiosConfig)
          .then(async res => {
            if (res.status === 200) {
            dispatch({ type: ActionTypes.GET_BOOKING_BY_ID,payload: res.data });
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



  export const getBookingChat = ({bookingID, page, limit}) => async dispatch  =>  {
    return new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');

      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        
         await axios
          .get(`${BOOKING_CHAT}/${bookingID}?page=${page}&limit=${limit}`, axiosConfig)
          .then(async res => {
            if (res.status === 200) {
            dispatch({ type: ActionTypes.GET_BOOKING_CHAT,payload: res.data });
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

  export const createNewChat = (data: any) => async dispatch  =>  {
    return new Promise(async (resolve, reject) => {
      const token = await AsyncStorage.getItem('token');
      console.log('DATATAT', data);

      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        
         await axios
          .post(`${NEW_CHAT}`, data, axiosConfig)
          .then(async res => {
            if (res.status === 200) {
            dispatch({ type: ActionTypes.CREATE_NEW_CHAT,payload: res.data });
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