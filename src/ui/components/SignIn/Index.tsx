import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform,
  TextInput,
  RefreshControl,
  ScrollView,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');
import Modal from 'react-native-modalbox';
import styles from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { registerOwner } from '../../../redux/actions/authActions';
import { registerGuest } from '../../../redux/actions/authActions';
import { loginUser } from '../../../redux/actions/authActions';
import CustomToast from '../../components/CustomToast/CustomToast';
interface Props {
  isOpen: any;
  handleChange: any,
  refresh: any;
  isRefresh: any;
  navigation: any;
}

const SignIn: React.FC<Props> = props => {

  const { isOpen, handleChange, refresh, isRefresh, navigation } = props;
  const [page, setPage] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [identity, setIdentity] = useState('');
  const [signPass, setSignPass] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [myRole, setmyRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [register, setRegister] = useState(0);
  const [owner, setOwner] = useState(-1);
  const [type, setType] = useState(1);
  const [verify, setVerify] = useState(0);
  const [isVerified, setisVerified] = useState(0);
  const [code, setCode] = useState(0);


  /* CUSTOM TOAST STARTS */

  const [toastType, setToastType] = useState('success');
  const [toastMsg, setToastMsg] = useState('');
  const [show, setShow] = useState(0);

  const slideAnim = useRef(new Animated.Value(120)).current;

  const animateToast = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 120,
        duration: 200,
        useNativeDriver: true,
      }).start();
      setShow(0);
    }, 3500);
  };

  const showToast = (type, msg) => {
    setToastType(type);
    setToastMsg(msg);
    setShow(1);
    animateToast();
  };

  /* CUSTOM TOAST ENDS */

  const dispatch = useDispatch();


  const handleSignin = async () => {

    if (!identity) {
      showToast('Warning', 'Enter your username, phone or email')
    } else if (signPass == '') {
      showToast('Warning', 'Your password is required')
    } else {

      setisLoading(true);
      const fcmToken = 'testfcm3456';
      const deviceID = 'deviceID5374647';

      dispatch(loginUser({ identity, signPass }))
        .then(res => {

          setisLoading(false);
          handleChange();

          if (refresh == 'No') {
            if (res.user.role == 'Owner') {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Dashboard' }]
              })
            } else {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }]
              })
            }
          } else {
            isRefresh();
          }

        })
        .catch((err) => {
          setisLoading(false);

          if (err.message == 'Network Error') {
            showToast('Warning', 'Connection Error, try again');
          }
          else {
            showToast('Warning', err.message);
          }
        })
    }

  }

  const reg = () => {
    if (!fName) {
      showToast('Warning', 'Enter your first name')
    } else if (!lName) {
      showToast('Warning', 'Enter your last name')
    } else if (!phone) {
      showToast('Warning', 'Enter a valid phone number')
    } else {
      setPage(page + 1)
    }
  }

  const handleGuestReg = async () => {
    const role = 'Guest';
    setmyRole('Guest');

    if (!email) {
      showToast('Warning', 'Enter a valid email address')
    } else if (pass == '') {
      showToast('Warning', 'Your Password is required')
    } else if (pass != pass2) {
      showToast('Warning', 'Password and Repeat password must match')
    } else {

      setisLoading(true);
      const fcmToken = 'testfcm3456';
      const deviceID = 'deviceID5374647';

      dispatch(registerGuest({ email, phone, fName, lName, pass, role, fcmToken, deviceID }))
        .then(res => {

          setisLoading(false);
          showToast('Success', 'Registration successful');
          setVerify(1);

        })
        .catch((err) => {
          setisLoading(false);

          if (err.message == 'Network Error') {
            showToast('Warning', 'Connection Error, try again');
          }
          else {
            showToast('Warning', err.message);
          }
        })
    }

  }



  const handleOwnerReg = async () => {
    const role = 'Owner';
    setmyRole('Guest');

    if (!username) {
      showToast('Warning', 'Enter your username')
    } else if (!email) {
      showToast('Warning', 'Enter a valid email address')
    } else if (pass == '') {
      showToast('Warning', 'Your Password is required')
    } else if (pass != pass2) {
      showToast('Warning', 'Password and Repeat password must match')
    } else {

      setisLoading(true);
      const fcmToken = 'testfcm3456';
      const deviceID = 'deviceID5374647';

      dispatch(registerOwner({ username, email, phone, fName, lName, pass, role, fcmToken, deviceID }))
        .then(res => {

          setisLoading(false);
          showToast('Success', 'Registration successful');
          setVerify(1);

        })
        .catch((err) => {
          setisLoading(false);

          if (err.message == 'Network Error') {
            showToast('Warning', 'Connection Error, try again');
          }
          else {
            showToast('Warning', err.message);
          }
        })
    }

  }

  const handleSendCode = async () => {
    if (phone) {

    } else {

    }
  }


  const handleVerify = async () => {

    if (!code) {
      showToast('Warning', 'Enter code received')
    } else {

      setisVerified(1);

      setTimeout(() => {
        handleChange();
        if (refresh == 'No') {
          if (myRole === 'Guest') {
            navigation.reset({
              index: 1,
              routes: [{ name: 'Home' }]
            })

          } else {
            navigation.reset({
              index: 1,
              routes: [{ name: 'Dashboard' }]
            })
          }
        } else {
          isRefresh();
        }

      }, 1000);
    }

  }


  return (

    <Modal isOpen={isOpen}
      style={{ height: '68%', backgroundColor: 'transparent', }}
      keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
      backdropPressToClose={false}
      swipeToClose={false}
      onClosed={handleChange}
      backdropOpacity={0.5}
      backdropColor="#000"
      position="bottom">

      <View style={[styles.container, { borderTopLeftRadius: 20, borderTopRightRadius: 20 }]}
        pointerEvents={isLoading ? "none" : "auto"}>
        <SafeAreaView
          style={{
            // height: height + StatusBar.currentHeight,
            // width: width,
            flex: 1,
            backgroundColor: 'transparent',
          }}
          edges={['left', 'right', 'top']}>
          <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />


          <View style={styles.ph15}>
            <TouchableOpacity
              onPress={() => handleChange()}>
              <IconM
                name={'close-circle-outline'}
                size={moderateScale(25)}
                color={'#343434'}
                style={{ marginBottom: 10, }} />

            </TouchableOpacity>
          </View>

          <ScrollView keyboardShouldPersistTaps='handled'>

            {verify === 1 ? (
              <>
                {isVerified === 0 ? (
                  <>
                    <View style={[styles.newModalHeader]}>
                      <Text style={[styles.extraLabel, styles.textDark, styles.mb5,]}>Verify phone number</Text>
                    </View>


                    <View style={[styles.ph15, { backgroundColor: '#fff' }]}>

                      <MyText style={[styles.tinyDark, styles.mb20]}>Please enter the code we sent to +234{phone}</MyText>
                      <View style={[styles.signBoxLong, styles.alignCenter, styles.mb10]}>
                        <TextInput
                          //   value={code.toString()}
                          placeholder="Enter code"
                          placeholderTextColor={'#808080'}
                          onChangeText={(text) => setCode(text)}
                          keyboardType="numeric"
                          maxLength={6}
                          style={[styles.subLabel, styles.textCenter, styles.alignCenter, { width: '100%' }]}
                        />
                      </View>

                      {code.length === 6 ? (
                        <TouchableOpacity activeOpacity={0.7}
                          onPress={() => handleVerify()}
                          style={[styles.submitButton, { width: '100%' }]}><MyText style={styles.buttonLabel}>Verify</MyText>
                        </TouchableOpacity>
                      ) : (
                        <View style={[styles.submitButton, { width: '100%', opacity: 0.6 }]}>
                          <MyText style={styles.buttonLabel}>Verify</MyText>
                        </View>
                      )}

                      <View style={[styles.alignCenter, styles.pt15]}>
                        <TouchableOpacity activeOpacity={0.7}
                          //   onPress={() => setPage(page - 1)}
                          style={styles.Row}>

                          <MyText style={[styles.buttonLabel, styles.textDark, styles.pt10]}>Send code again</MyText>
                        </TouchableOpacity>
                      </View>


                    </View>
                  </>
                ) : (

                  <View style={[styles.ph15, styles.alignCenter, { flex: 1, backgroundColor: '#fff' }]}>
                    <IconM
                      name={'checkmark-circle'}
                      size={moderateScale(42)}
                      color={'#1cc88a'}
                      style={[{ marginRight: 0 }, styles.alignCenter]}
                    />
                    <MyText style={[styles.subLabel, styles.textCenter, styles.pt10]}>Phone verified</MyText>
                  </View>

                )}

              </>

            ) : (
              <>

                {register === 1 ? (
                  <>
                    {type === 1 ? (
                      <>
                        <View style={[styles.newModalHeader]}>
                          <Text style={[styles.extraLabel, styles.textDark, styles.mb5,]}>Select account type</Text>
                          <MyText style={[styles.tinyLabel, styles.mb20]}>We'll fit the experience to your needs</MyText>
                        </View>

                        <View style={[styles.ph15, { backgroundColor: '#fff' }]}>
                          <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                              setOwner(0);
                            }}
                            style={[styles.Row, styles.mb5]}>
                            <View style={{ width: '100%' }}>
                              <View
                                style={[styles.Row, styles.mb20]}
                              >
                                <IconM
                                  name={owner === 0 ? 'radio-button-on' : 'radio-button-off'}
                                  size={moderateScale(22)}
                                  color={owner === 0 ? '#7E178E' : '#808080'}
                                  style={{ marginRight: 15 }}

                                />
                                <View>
                                  <MyText style={[styles.subLabel]}>Guest</MyText>
                                  <MyText style={styles.tinyLabel}>Users who want to book apartments</MyText>

                                </View>
                              </View>

                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                              setOwner(1)
                            }}
                            style={[styles.Row, styles.mb5]}>
                            <View style={{ width: '100%' }}>
                              <View
                                style={[styles.Row, styles.mb20]}
                              >
                                <IconM
                                  name={owner === 1 ? 'radio-button-on' : 'radio-button-off'}
                                  size={moderateScale(22)}
                                  color={owner === 1 ? '#7E178E' : '#808080'}
                                  style={{ marginRight: 15 }}

                                />
                                <View>
                                  <MyText style={[styles.subLabel]}>Host</MyText>
                                  <MyText style={styles.tinyLabel}>Users who want to list their apartments</MyText>

                                </View>
                              </View>

                            </View>
                          </TouchableOpacity>
                          {owner !== -1 ? (
                            <TouchableOpacity activeOpacity={0.7}
                              onPress={() => setType(0)}
                              style={styles.submitButton}><MyText style={styles.buttonLabel}>Continue</MyText>
                            </TouchableOpacity>
                          ) : (

                            <TouchableOpacity activeOpacity={0.7}
                              disabled={true}
                              style={[styles.submitButton, styles.disabled]}><MyText style={styles.buttonLabel}>Continue</MyText>
                            </TouchableOpacity>
                          )}

                          <TouchableOpacity activeOpacity={0.7}
                            onPress={() => {
                              setIdentity('');
                              setPass('');
                              setSignPass('');
                              setRegister(0)
                              setType(1);
                              setOwner(-1);
                            }}
                            style={[styles.pt30, Platform.OS === 'ios' ? styles.mb30 : null, styles.alignCenter, styles.Row]}>
                            <MyText style={styles.moreLabel}>Signin</MyText>
                          </TouchableOpacity>
                        </View>

                      </>

                    ) : (
                      <>
                        <View style={[styles.newModalHeader, styles.RowB]}>
                          <Text style={[styles.extraLabel, styles.textDark, styles.mb10,]}>
                            {page === 0 ? 'Tell us about you' : page === 1 ? 'Set up login details' : null}</Text>

                          <TouchableOpacity activeOpacity={0.7}
                            onPress={() => {
                              setIdentity('');
                              setPass('');
                              setSignPass('');
                              setRegister(0);
                              setOwner(-1);

                            }}
                            style={[]}>
                            <MyText style={[styles.tinyDark,]}>Have an acount?</MyText>
                            <MyText style={[styles.moreLabel, { textAlign: 'right' }]}>Sign In</MyText>
                          </TouchableOpacity>
                        </View>

                        <View style={[styles.ph15, { backgroundColor: '#fff' }]}>
                          {page === 0 ? (
                            <>
                              <View style={[styles.RowB, styles.mb10]}>
                                <View style={[styles.signBox]}>
                                  <TextInput
                                    value={fName}
                                    placeholder="First Name"
                                    placeholderTextColor={'#808080'}
                                    style={styles.subLabel}
                                    onChangeText={(text) => setFName(text.trim())}
                                  />
                                </View>

                                <View style={styles.signBox}>
                                  <TextInput
                                    value={lName}
                                    placeholder="Last Name"
                                    placeholderTextColor={'#808080'}
                                    onChangeText={(text) => setLName(text.trim())}
                                    style={styles.subLabel}
                                  />
                                </View>
                              </View>

                              <View style={[styles.signBoxLong, styles.Row, styles.mb10]}>
                                <MyText style={[styles.userLabel, styles.pl5, styles.pt15]}>+234</MyText>
                                <TextInput
                                  value={phone.toString()}
                                  placeholder="xxx xxx xxxx"
                                  maxLength={10}
                                  placeholderTextColor={'#808080'}
                                  keyboardType="numeric"
                                  onChangeText={(text) => setPhone(text)}
                                  style={[styles.subLabel, { width: '80%' }]}
                                />
                              </View>

                            </>
                          ) : page === 1 ? (
                            <>
                              {owner === 1 ? (
                                <View style={[styles.signBoxLong, styles.mb10]}>
                                  <TextInput
                                    value={username}
                                    placeholder="Username"
                                    placeholderTextColor={'#808080'}
                                    onChangeText={(text) => setUsername(text.trim())}
                                    style={styles.subLabel}
                                  />
                                </View>
                              ) : null}
                              <View style={[styles.signBoxLong, styles.mb10]}>
                                <TextInput
                                  value={email}
                                  placeholder="Email address"
                                  placeholderTextColor={'#808080'}
                                  onChangeText={(text) => setEmail(text.trim())}
                                  style={styles.subLabel}
                                />
                              </View>
                              <View style={[styles.RowB, styles.mb10]}>

                                <View style={styles.signBox}>
                                  <TextInput
                                    value={pass}
                                    placeholder="Password"
                                    placeholderTextColor={'#808080'}
                                    onChangeText={(text) => setPass(text)}
                                    secureTextEntry
                                    style={styles.subLabel}
                                  />
                                </View>

                                <View style={[styles.signBox]}>
                                  <TextInput
                                    value={pass2}
                                    placeholder="Repeat Password"
                                    onChangeText={(text) => setPass2(text)}
                                    placeholderTextColor={'#808080'}
                                    secureTextEntry
                                    style={styles.subLabel}
                                  />
                                </View>
                              </View>
                            </>
                          ) : null}


                          {page === 0 ? (

                            <TouchableOpacity activeOpacity={0.7}
                              onPress={() => reg()}
                              style={styles.submitButton}><MyText style={styles.buttonLabel}>Continue</MyText>
                            </TouchableOpacity>

                          ) : page === 1 ? (
                            <View style={[styles.RowB, { width: '100%' }]}>
                              <TouchableOpacity activeOpacity={0.7}
                                onPress={() => setPage(page - 1)}
                                style={[styles.button, { width: '30%' }]}>
                                <MyText style={[styles.buttonLabel, styles.textPurple]}>Previous</MyText>
                              </TouchableOpacity>

                              <TouchableOpacity activeOpacity={0.7}
                                onPress={() => { owner === 1 ? handleOwnerReg() : handleGuestReg() }}
                                style={[styles.submitButton, { width: '68%' }]}><MyText style={styles.buttonLabel}>Create account</MyText>
                              </TouchableOpacity>

                            </View>


                          ) : null}

                        </View>

                        <TouchableOpacity activeOpacity={0.7}
                          onPress={() => setType(1)}
                          style={[styles.pt30, Platform.OS === 'ios' ? styles.mb30 : null, styles.alignCenter, styles.Row]}>
                          <MyText style={styles.moreLabel}>Change account type</MyText>
                        </TouchableOpacity>
                      </>
                    )}
                  </>
                ) : register === 0 ? (

                  <>
                    <View style={[styles.newModalHeader]}>
                      <Text style={[styles.extraLabel, styles.textDark, styles.mb10]}>Sign in to your account</Text>
                    </View>


                    <View style={[styles.ph15, { backgroundColor: '#fff' }]}>

                      <View style={[styles.signBoxLong, styles.mb10]}>
                        <TextInput
                          value={identity}
                          placeholder="Username, Phone, or Email"
                          placeholderTextColor={'#808080'}
                          onChangeText={(text) => setIdentity(text.trim())}
                          style={styles.subLabel}
                        />
                      </View>
                      <View style={[styles.signBoxLong, styles.mb10]}>
                        <TextInput
                          value={signPass}
                          placeholder="Password"
                          placeholderTextColor={'#808080'}
                          onChangeText={(text) => setSignPass(text)}
                          secureTextEntry
                          style={styles.subLabel}
                        />
                      </View>

                      <TouchableOpacity activeOpacity={0.7}
                        onPress={() => {
                          handleSignin();
                        }}
                        style={styles.submitButton}>
                        <MyText style={styles.buttonLabel}>Login</MyText>
                      </TouchableOpacity>

                      <TouchableOpacity activeOpacity={0.7}
                        onPress={() => setRegister(1)}
                        style={[styles.pt30, styles.alignCenter, styles.Row]}>
                        <MyText style={[styles.userLabel, styles.mr10]}>Don't have an account yet?</MyText>

                        <MyText style={styles.moreLabel}>Register</MyText>
                      </TouchableOpacity>

                    </View>

                  </>

                ) : null}

              </>

            )}

          </ScrollView>
        </SafeAreaView >


        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator color={'white'} size={'large'} />
          </View>
        ) : null}


        {show !== 0 ? (

          <Animated.View
            style={{ transform: [{ translateY: slideAnim }], position: 'absolute', zIndex: 999, bottom: 0 }}>
            <CustomToast
              type={toastType}
              msg={toastMsg}
            />
          </Animated.View>
        ) : null}


      </View>
    </Modal>

  );
};

export default SignIn;