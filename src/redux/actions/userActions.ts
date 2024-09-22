import { ActionTypes } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
    DELETE_USER,
} from '../../Api/api';


export const deleteUser = () => async dispatch => {
    return new Promise(async (resolve, reject) => {
        const token = await AsyncStorage.getItem('token');

        try {

            await axios.delete(DELETE_USER,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.DELETE_USER, payload: res.data });
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

