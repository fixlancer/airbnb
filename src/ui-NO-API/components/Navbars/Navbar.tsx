import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import MyText from '../DefaultTextComponent/MyText';
import styles from './Styles';
import SignIn from '../SignIn/Index';
import { useDispatch, useSelector } from 'react-redux';
import { resetAll } from '../../../redux/actions/authActions';
import { RootState } from '../../../redux/store/store';

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

  return (
    <Fragment>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#fff',
          paddingTop: 0,
          paddingBottom: Platform.OS === 'ios' ? 30 : 0,
          width: '100%',
          height: Platform.OS === 'ios' ? moderateScale(95) : moderateScale(65),
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderTopColor: '#ddd',
          borderTopWidth: StyleSheet.hairlineWidth
        }}>

        {userRole === 'Guest' ? (
          <>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ height: moderateScale(25) }}>
                <Icons
                  name={'roofing'}
                  size={moderateScale(22)}
                  color={activePage === 'home' ? '#7E178E' : '#343434'}
                  style={{ marginTop: 0 }} />
              </View>

              <MyText style={[styles.subLabel, styles.textCenter]}>Explore</MyText>
            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ModalSearch')}
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ height: moderateScale(25) }}>
                <Icon
                  name={'search-outline'}
                  size={moderateScale(22)}
                  color={'#343434'}
                  style={{ marginTop: 0 }} />
              </View>

              <MyText style={[styles.subLabel, styles.textCenter]}>Search</MyText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Bookings')}
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ height: moderateScale(25) }}>
                <IconM
                  name={activePage === 'bookings' ? 'shopping' : 'shopping-outline'}
                  size={moderateScale(20)}
                  color={activePage === 'bookings' ? '#7E178E' : '#343434'}
                  style={{ marginTop: 0 }} />
              </View>

              <MyText style={[styles.subLabel, styles.textCenter]}>Bookings</MyText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                handleLogout();
              }}
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ height: moderateScale(25) }}>

                <Icon
                  name={activePage === 'settings' ? 'settings' : 'settings-outline'}
                  size={moderateScale(20)}
                  color={activePage === 'account' ? '#7E178E' : '#343434'}
                  style={{ marginTop: 0 }} />
              </View>

              <MyText style={[styles.subLabel, styles.textCenter]}>Logout</MyText>

            </TouchableOpacity>
          </>
        ) : userRole === 'Owner' ? (
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ height: moderateScale(25) }}>
                <Icons
                  name={activePage === 'dashboard' ? 'insert-chart' : 'bar-chart'}
                  size={moderateScale(22)}
                  color={activePage === 'dashboard' ? '#7E178E' : '#343434'}
                  style={{ marginTop: 0 }} />
              </View>
              <MyText style={[styles.subLabel, styles.textCenter]}>Insights</MyText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Bookings')}
              style={{ justifyContent: 'center', alignItems: 'center' }}>

              <View style={{ height: moderateScale(25) }}>
                <IconM
                  name={activePage === 'bookings' ? 'shopping' : 'shopping-outline'}
                  size={moderateScale(20)}
                  color={activePage === 'bookings' ? '#7E178E' : '#343434'}
                  style={{ marginTop: 0.5 }} />
              </View>

              <MyText style={[styles.subLabel, styles.textCenter]}>Bookings</MyText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('OwnerListings');
              }}
              style={{ justifyContent: 'center', alignItems: 'center' }}>

              <View style={{ height: moderateScale(25) }}>
                <Icon
                  name={activePage === 'ownerlistings' ? 'list-circle' : 'list-circle-outline'}
                  size={moderateScale(23)}
                  color={activePage === 'ownerlistings' ? '#7E178E' : '#343434'}
                  style={{ marginTop: -1 }} />
              </View>

              <MyText style={[styles.subLabel, styles.textCenter]}>Listings</MyText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                //  openSignIn();
                handleLogout();
              }}
              style={{ justifyContent: 'center', alignItems: 'center' }}>

              <View style={{ height: moderateScale(25) }}>
                <Icon
                  name={activePage === 'settings' ? 'settings' : 'settings-outline'}
                  size={moderateScale(20)}
                  color={activePage === 'account' ? '#7E178E' : '#343434'}
                  style={{ marginTop: 0 }} />
              </View>
              <MyText style={[styles.subLabel, styles.textCenter]}>Logout</MyText>

            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ height: moderateScale(25) }}>
                <Icons
                  name={'roofing'}
                  size={moderateScale(22)}
                  color={activePage === 'home' ? '#7E178E' : '#343434'}
                  style={{ marginTop: 0 }} />
              </View>

              <MyText style={[styles.subLabel, styles.textCenter]}>Explore</MyText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ModalSearch')}
              style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ height: moderateScale(25) }}>
                <Icon
                  name={'search-outline'}
                  size={moderateScale(22)}
                  color={'#343434'}
                  style={{ marginTop: 0 }} />
              </View>

              <MyText style={[styles.subLabel, styles.textCenter]}>Search</MyText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                openSignIn();
              }}
              style={{ justifyContent: 'center', alignItems: 'center' }}>

              <View style={{ height: moderateScale(25) }}>
                <Icon
                  name={'person-outline'}
                  size={moderateScale(20)}
                  color={activePage === 'signin' ? '#7E178E' : '#343434'}
                  style={{ marginTop: 0 }} />
              </View>
              <MyText style={[styles.subLabel, styles.textCenter]}>Account</MyText>

            </TouchableOpacity>
          </>
        )}
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
