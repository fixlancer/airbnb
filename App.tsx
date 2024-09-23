/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  
 * @format
 * @flow strict-local
 */

import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Routes';
import RoutesGuest from './src/Routes/RoutesGuest';
//import InternetConnectionAlert from "react-native-internet-connection-alert";
//import VersionCheck from 'react-native-version-check';
import { Alert, BackHandler, Linking } from 'react-native';
import { setRole, setUid } from './src/redux/actions/authActions';

import { Appearance } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

const App = ({ navigation }: any) => {


  const [userRole, setUserRole] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {

    const getData = async () => {

      try {
        const role = await AsyncStorage.getItem('role');
        const value = await AsyncStorage.getItem('token');
        const id = await AsyncStorage.getItem('id');

        if (value !== null) {
          setUserRole(role);
          // // value previously stored

          dispatch(setRole(role));
          dispatch(setUid(id));

        } else {
          setTimeout(() => {
            setUserRole("New");
          }, 500)
        }

      } catch (e) {
        setUserRole("New");
      }
    };
    getData();

  }, [])



  return (

    <PaperProvider>
      <NavigationContainer>

        {userRole === 'Host' ? (
          <Routes />
        ) : (
          <RoutesGuest />
        )}
      </NavigationContainer>
    </PaperProvider>

  );
};


export default App;
