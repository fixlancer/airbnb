//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useRef, useState } from 'react';
import {
    Image,
    FlatList,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StyleSheet,
    Animated,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import CustomToast from '../../components/CustomToast/CustomToast';

const SignIn = ({ route, navigation }) => {

    const bgImg = require('../../../Assets/mic.jpg');
    const [isLoading, setisLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

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

    const handleSubmit = () => {
        if (userName == '') {
           // setError('Enter a Username or Email');
            showToast('Warning', 'Enter a Username or Email')
        } else if (pass == '') {
           // setError('Your password is required');
           showToast('Warning', 'Your Password is required. Please enter your password to continue')
        } else {
            setisLoading(true);

            setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Dashboard' }]
                  })
                  
                setisLoading(false);
            }, 200);
        }
    }

    return (

        <View style={[styles.container, { backgroundColor: '#000' }]}
        pointerEvents={isLoading ? "none" : "auto"}>
            {/*  <Image
                        source={bgImg}
                        style={styles.signinBG}
                    />
            */}
    
    {show !== 0 ? (

      <Animated.View
        style={{transform: [{translateY: slideAnim}], position:'absolute', zIndex:999, top:0}}>
        <CustomToast
          type={toastType}
          msg={toastMsg}
        />
      </Animated.View>
            ) : null }

            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

                <View style={{ paddingHorizontal: 20, marginBottom: 50, paddingTop: 40 }}>
                    <Image
                        style={{
                            // marginTop: 10,
                            // marginBottom: 10,
                            position: 'relative',
                            width: 30,
                            justifyContent: 'center', alignSelf: 'center',
                            //  right:40,
                            // top:35,
                            marginBottom: 20,
                            height: 30,
                        }}
                        imageStyle={{}}
                        source={require('../../../Assets/icon.png')}
                    />



                    <Text style={[styles.titleLabel, { fontSize: RFValue(30), color: '#fff', textAlign: 'center' }]}>The World is {"\n"}waiting</Text>

                </View>


                    <View style={styles.loginBg}>
                    <ScrollView style={styles.scrollBg}>
                    <View style={{paddingTop:10}}>
                    <MyText style={[styles.titleLabel, { textAlign: 'center', color: 'white', fontSize: RFValue(15), marginBottom:10, }]}>Login to Continue</MyText>
                    </View>
                    
                    {error ? (
                        
                    <View style={styles.errorBg}>
                    <MyText style={styles.errorLabel}>{error}</MyText>
                    </View>

                    ) : null }


                    <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.drop}>
                            <TextInput
                                style={styles.text}
                                onChangeText={(text) => setUserName(text)}
                                placeholder="Username or Email"
                                value={userName}
                                placeholderTextColor={'#808080'}
                            />
                        </View>

                        <View style={styles.drop}>
                            <TextInput
                                style={styles.text}
                                onChangeText={(text) => setPass(text)}
                                placeholder="Password"
                                placeholderTextColor={'#808080'}
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => handleSubmit()}
                            style={[styles.button, { width: '100%', backgroundColor: '#f27415', marginBottom: 15 }]}>
                            <MyText style={[styles.buttonLabel, {}]}>Login</MyText>
                        </TouchableOpacity>

                    </View>

                    <View style={{ paddingHorizontal: 5 }}>
                        <View style={styles.RowB}>
                            <TouchableOpacity
                                style={{}}>
                                <MyText style={styles.buttonLabel}>Reset Passsword</MyText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('AccountType')}
                                style={{}}>
                                <MyText style={styles.buttonLabel}>Create an Account</MyText>
                            </TouchableOpacity>
                        </View>
                    </View>

                
                </ScrollView>
                </View>

            </SafeAreaView>

            {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={'white'} size={'large'} />
        </View>
      ) : null}
      
      
        </View>

    )
}

export default SignIn;