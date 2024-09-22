import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import MyText from '../DefaultTextComponent/MyText';
import SignIn from '../SignIn/Index';
import { useDispatch, useSelector } from 'react-redux';
import { resetAll } from '../../../redux/actions/authActions';
import { RootState } from '../../../redux/store/store';
import { useTheme } from 'react-native-paper';
import newStyles from '../../screens/Styles/Styles';

const Navbar = ({ navigation, activePage, backgroundColor }) => {

  
  const dispatch = useDispatch();
  const [isSignin, setSignIn] = useState(false);

  
  const { userRole } = useSelector((state: RootState) => state.authReducers);


  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('id');
    await AsyncStorage.clear();
    navigation.reset({
      index: 1,
      routes: [{ name: 'Home' }]
    })

    dispatch(resetAll())

  }


  const openSignIn = () => {
    setSignIn(true)
  }

  const closeSignIn = () => {
    setSignIn(false);
  }

  const theme = useTheme()
  const styles = newStyles(theme);


  return (
    <Fragment>
      <View style={[styles.absolute, styles.bottomIOS, styles.left30, styles.right30, ]}>
        <View style={[styles.mb10, styles.b15, styles.pt10, styles.pb10, styles.bgPurpleDark, styles.ph10, styles.borderWidthDark, { flexDirection: 'row', justifyContent: 'space-between', }]}>
        {userRole === 'Host' ? (
        <>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
          style={[styles.alignCenter, styles.b30, activePage === 'dashboard' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
         <Icon
            name={'stats-chart'}
            color={activePage === 'dashboard' ? '#fff' : '#717171'}
            size={moderateScale(21)}
          />
           </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Inbox');
          }}
          style={[styles.alignCenter, styles.b30, activePage === 'inbox' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
          <Icon
            name={'chatbubbles-outline'}
            color={activePage === 'inbox' ? '#fff' : '#717171'}
            size={moderateScale(21)}
          />

          </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Bookings');
          }}
          style={[styles.alignCenter, styles.b30, activePage === 'trip' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
          <IconA
              name={'appstore-o'}
              color={activePage === 'trip' ? '#fff' : '#717171'}
              size={moderateScale(20)}
            />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('OwnerListings');
          }}
          style={[styles.alignCenter, styles.b30, activePage === 'ownerListings' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
          <IconM
              name={'home-city-outline'}
              color={activePage === 'trip' ? '#fff' : '#717171'}
              size={moderateScale(22)}
            />
       </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Settings');
          }}
          style={[styles.alignCenter, styles.b30, activePage === 'settings' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
          <Icon
            name={'settings-outline'}
            color={activePage === 'settings' ? '#fff' : '#717171'}
            size={moderateScale(21)}
          /> 
        </TouchableOpacity>
        </>
        ) : (
          <>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={[styles.alignCenter, styles.b30, activePage === 'home' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
           <Icon
              name={'search-outline'}
              color={activePage === 'home' ? '#fff' : '#717171'}
              size={moderateScale(21)}
            />
    
             </TouchableOpacity>
  
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Inbox');
            }}
            style={[styles.alignCenter, styles.b30, activePage === 'inbox' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
            <Icon
              name={'chatbubbles-outline'}
              color={activePage === 'inbox' ? '#fff' : '#717171'}
              size={moderateScale(21)}
            />
  
            </TouchableOpacity>
  
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Bookings') }
            style={[styles.alignCenter, styles.b30, activePage === 'trip' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
            <IconA
              name={'appstore-o'}
              color={activePage === 'trip' ? '#fff' : '#717171'}
              size={moderateScale(20)}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Saved');
            }}
            style={[styles.alignCenter, styles.b30, activePage === 'saved' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
            <Icon
              name={'bookmark-outline'}
              color={activePage === 'saved' ? '#fff' : '#717171'}
              size={moderateScale(21)}
            /> 
         </TouchableOpacity>
  
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={openSignIn}
            style={[styles.alignCenter, styles.b30, activePage === 'settings' ? styles.bgPurple : null, {width:moderateScale(35), height:moderateScale(35)}]}>
            <Icon
              name={'settings-outline'}
              color={activePage === 'settings' ? '#fff' : '#717171'}
              size={moderateScale(21)}
            /> 
          </TouchableOpacity>
          </>
        )}

        </View>
      </View>

      <SignIn
        isOpen={isSignin}
        handleChange={closeSignIn}
        refresh={'No'}
        isRefresh={''}
        navigation={navigation}
      />
    </Fragment>
  );
};

export default Navbar;
