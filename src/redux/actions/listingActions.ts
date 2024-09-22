import { ActionTypes } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
    CREATE_LISTING,
    DRAFT_LISTING,
    DELETE_LISTING,
    UPDATE_LISTING,
    ALL_LISTING,
    PENDING_LISTING,
    ACTIVE_LISTING,
    DECLINED_LISTING,
    FILTER_LISTING,
    FILTER_COUNT,
    LISTING_BY_ID,
    ADD_BLOCKED_DATE,
    REMOVE_BLOCKED_DATE,
} from '../../Api/api';




export const addBlockedDate = ( data: any ) => async dispatch => {
    return new Promise(async (resolve, reject) => {
        const token = await AsyncStorage.getItem('token');

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        try {

            await axios.post(`${ADD_BLOCKED_DATE}`, data, axiosConfig).then(async res => {
                if (res.status === 200) {
                    dispatch({ type: ActionTypes.ADD_BLOCKED_DATE, payload: res.data });
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



export const removeBlockedDate = (data: any ) => async dispatch => {
    return new Promise(async (resolve, reject) => {
        const token = await AsyncStorage.getItem('token');

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        try {

            await axios.post(`${REMOVE_BLOCKED_DATE}`, data, axiosConfig).then(async res => {
                if (res.status === 200) {
                    dispatch({ type: ActionTypes.REMOVE_BLOCKED_DATE, payload: res.data });
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


export const deleteListing = ( data: any) => async dispatch => {
    return new Promise(async (resolve, reject) => {
        const token = await AsyncStorage.getItem('token');
 
        try {

            await axios.delete(DELETE_LISTING,
                {
                    data,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.DELETE_LISTING, payload: res.data });
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




export const updateListing = (data: any) => async dispatch => {
    return new Promise(async (resolve, reject) => {
        const token = await AsyncStorage.getItem('token');

        
        console.log('dataa', data);
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        try {

            await axios.post(`${UPDATE_LISTING}`, data, axiosConfig).then(async res => {
                if (res.status === 200) {
                    dispatch({ type: ActionTypes.UPDATE_LISTING, payload: res.data });
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




export const createListing = (data: any) => async dispatch => {
    return new Promise(async (resolve, reject) => {
        const token = await AsyncStorage.getItem('token');

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            

            await axios.post(CREATE_LISTING, data, axiosConfig).then(async res => {
                if (res.status === 200) {
                    dispatch({ type: ActionTypes.CREATE_LISTING, payload: res.data });
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


export const getAllListing = ({ page, limit }) => async dispatch => {
    return new Promise(async (resolve, reject) => {

        try {

            await axios
                .get(`${ALL_LISTING}?page=${page}&limit=${limit}`)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.GET_ALL_LISTING, payload: res.data });
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



export const getPendingListing = ({ page, limit }) => async dispatch => {
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
                .get(`${PENDING_LISTING}?page=${page}&limit=${limit}`, axiosConfig)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.GET_PENDING_LISTING, payload: res.data });
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


export const getDraftListing = () => async dispatch => {
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
                .get(`${DRAFT_LISTING}`, axiosConfig)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.GET_DRAFT_LISTING, payload: res.data });
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



export const getActiveListing = ({ page, limit }) => async dispatch => {
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
                .get(`${ACTIVE_LISTING}?page=${page}&limit=${limit}`, axiosConfig)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.GET_ACTIVE_LISTING, payload: res.data });
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



export const getDeclinedListing = ({ page, limit }) => async dispatch => {
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
                .get(`${DECLINED_LISTING}?page=${page}&limit=${limit}`, axiosConfig)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.GET_DECLINED_LISTING, payload: res.data });
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



export const getListingByID = ({ listingID }) => async dispatch => {
    return new Promise(async (resolve, reject) => {

        try {

            await axios
                .get(`${LISTING_BY_ID}/${listingID}`)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({ type: ActionTypes.GET_LISTING_BY_ID, payload: res.data });
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


export const listingFilter = ({data, page, limit}) => async dispatch => {
    return new Promise(async (resolve, reject) => {

        console.log('MYLISTING', data)
        try {

            await axios.post(`${FILTER_LISTING}/${page}/${limit}`, data)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({
                            type: ActionTypes.FILTER_LISTING,
                            payload: res.data,
                        });
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

export const countFilter = (data: any) => async dispatch => {
    return new Promise(async (resolve, reject) => {
        
        try {

            await axios.post(`${FILTER_COUNT}`, data)
                .then(async res => {
                    if (res.status === 200) {
                        dispatch({
                            type: ActionTypes.FILTER_COUNT,
                            payload: res.data,
                        });
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