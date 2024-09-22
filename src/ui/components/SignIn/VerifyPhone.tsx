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
    ActivityIndicator
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
import CustomToast from '../../components/CustomToast/CustomToast';


const VerifyPhone = ({ navigation, route }) => {

    const { phone } = route.params;

    const [code, setCode] = useState(0);
    const [isLoading, setisLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [role, setRole] = useState('');
    const [verified, setVerified] = useState(0)

    useEffect(() => {
        async function getuserID() {
            const id = await AsyncStorage.getItem('id');
            const role = await AsyncStorage.getItem('role');
            setRole(role);
        }
        getuserID();
    }, []);

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


    useEffect(() => {
        handleSendCode();
    }, [])



    const handleSendCode = async () => {
        if (phone) {

        } else {
           
        }
    }


    const handleVerify = async () => {

        if (!code) {
            showToast('Warning', 'Enter code received')
        } else {
            
            showToast('Success', 'Phone verified');
            setTimeout(() => {
            if (role == 'Guest') {
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
            }, 1000);
        }

    }


    return (

        <View style={[styles.container]}
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
     


                        <View style={[styles.ph15, { justifyContent:'center', alignItems:'center', flex:1, backgroundColor: '#fff' }]}>
                            
                        <Text style={[styles.extraLabel, styles.textDark, styles.mb15]}>Verify your phone number</Text>

                            <MyText style={[styles.tinyDark, styles.mb20]}>Please enter the code we sent to +234{phone}</MyText>
                            <View style={[styles.signBoxLong, styles.alignCenter, styles.mb10]}>
                                <TextInput
                                 //   value={code.toString()}
                                    placeholder="Enter code"
                                    placeholderTextColor={'#808080'}
                                    onChangeText={(text) => setCode(text)}
                                    keyboardType="numeric"
                                    maxLength={6}
                                    style={[styles.subLabel, styles.textCenter, styles.alignCenter, {width:'100%'}]}
                                />
                            </View>

                            {code.length === 6 ? (
                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => handleVerify()}
                                style={[styles.submitButton, {width:'100%'}]}><MyText style={styles.buttonLabel}>Verify</MyText>
                            </TouchableOpacity>
                            ) : (
                            <View style={[styles.submitButton, {width:'100%', opacity:0.6}]}>
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


                    </SafeAreaView >


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


                );
};

                export default VerifyPhone;