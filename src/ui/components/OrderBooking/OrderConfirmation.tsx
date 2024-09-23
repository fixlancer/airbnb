import React, { useEffect, useState, useRef } from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    ActivityIndicator,
    Animated,
    Platform,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../DefaultTextComponent/MyText';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { createBooking } from '../../../redux/actions/bookingActions';
import Modal from 'react-native-modalbox';
import moment from 'moment';
import CustomToast from '../CustomToast/CustomToast';


const OrderConfirmation = ({ route, navigation }) => {

    const { listingID, mainPhoto,
        checkIn, checkOut,
        maxPerson, pay,
        location, dueDate,
        totalPrice,
        nite,
        basePrice,
        cautionFee,
        cleaningFee,
        cancelPolicy, amenities, safety, houseRules, dueToPay } = route.params;


    /* CUSTOM TOAST ========== */

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

    /* CUSTOM TOAST ENDS ============= */


    const dispatch = useDispatch();

    const [isLoading, setisLoading] = useState(false);
    const [isNew, setIsNew] = useState(false);

    const closeBooking = () => {
        setIsNew(false);
    }

    const openBooking = () => {
        setIsNew(true);
    }


    const bookingNew = async () => {
        openBooking();

        const data = {
            listingID,
            checkIn,
            checkOut,
            dueToPay,
        }

        setisLoading(true);

        dispatch(createBooking({ data }))
            .then(res => {
                setisLoading(false);

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Bookings' }, { name: 'BookingChat', params: {
                        bookingID: res.bookingID, myTab: 'Details'} }
                    ],
                  });

                closeBooking();

            })
            .catch((err) => {
                closeBooking();
                setisLoading(false);
                if (err.message == 'Network Error') {
                    showToast('Warning', 'Connection Error, try again');
                }
                else {
                    showToast('Warning', err.message);
                }
            })
    };


    return (

        <View style={styles.container}>
            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: '#fff',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />


                <View style={[styles.header]}>

                    <View style={[styles.RowB, { paddingBottom: 0 }]}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}>
                            <IconM
                                name={'chevron-back-outline'}
                                size={moderateScale(25)}
                                color={'#343434'}
                                style={{ marginTop: 0 }} />

                        </TouchableOpacity>
                        <Text style={styles.largeLabel}>Choose how to pay?</Text>
                        <Text></Text>
                    </View>
                </View>

                <View style={[styles.bb, styles.ph15, { paddingVertical: 10, }]}>
                    <View style={[styles.Row]}>
                        <Image
                            source={{uri: mainPhoto}}
                            style={styles.img}
                        />
                        <View>

                            {location && location.map((item, index) => (
                                <View key={index} style={styles.Row}>
                                    <IconM
                                        name={'location-outline'}
                                        size={moderateScale(18)}
                                        color={'#343434'}
                                        style={{ marginRight: 5 }}

                                    />
                                    <MyText style={[styles.userLabel, styles.mb15]}>{item.city}, {item.country} </MyText>
                                </View>
                            ))}

                            <View style={styles.Row}>
                                <IconM
                                    name={'people-outline'}
                                    size={moderateScale(18)}
                                    color={'#343434'}
                                    style={{ marginRight: 5 }}

                                />
                                <MyText style={[styles.userLabel, styles.mb15]}>{maxPerson} occupants</MyText>
                            </View>

                            <View style={styles.Row}>
                                <IconM
                                    name={'time-outline'}
                                    size={moderateScale(18)}
                                    color={'#343434'}
                                    style={{ marginRight: 5 }}

                                />
                                <MyText style={[styles.userLabel]}>{checkIn.format('D MMM YY')} - {checkOut.format('D MMM YY')}</MyText>
                            </View>

                        </View>
                    </View>
                    <View style={[styles.pt5, { width: width - 80 }]}>
                        {pay === 'Partial' ? (
                            <View style={[styles.RowB, styles.pt15, { width: width - 90 }]}>
                                <Text style={[styles.titleLabel, styles.mb10]}>Due to pay now</Text>
                                <Text style={[styles.titleLabel, styles.mb10]}>{'\u20A6'}{dueToPay}</Text>
                            </View>
                        ) : (
                            <>
                                <View style={[styles.RowB, styles.pt15, { width: width - 90 }]}>
                                    <Text style={[styles.titleLabel, styles.mb10]}>Total to pay</Text>
                                    <Text style={[styles.titleLabel, styles.mb10]}>{'\u20A6'}{dueToPay}</Text>
                                </View>
                            </>
                        )}
                    </View>
                </View>




                <ScrollView>
                    <View style={[styles.mb30]}>



                        <View style={[styles.bb, styles.ph15, { borderBottomWidth: 0, }]}>

                            <View>

                                {checkIn && checkOut ? (

                                    <>
                                        <TouchableOpacity activeOpacity={0.7}
                                            onPress={() => bookingNew()}
                                            style={styles.submitButton}>
                                            <MyText style={styles.buttonLabel}>Proceed</MyText>
                                        </TouchableOpacity>
                                    </>

                                ) : (
                                    <></>

                                )}
                            </View>

                        </View>

                    </View>
                </ScrollView>

            </SafeAreaView>




            <Modal isOpen={isNew}
                style={{ height: 200, backgroundColor: 'transparent', }}
                keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
                backdropPressToClose={false}
                swipeToClose={false}
                onClosed={closeBooking}
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

                        <Text style={[styles.extraLabel, styles.ph15, styles.mb5,]}>Please wait, processing...</Text>

                        <View style={[styles.ph15, { flex: 1, backgroundColor: '#fff' }]}>
                     <MyText style={[styles.subLabel, styles.pt10]}>We are creating your booking, please don't switch app</MyText>
                     <View style={[styles.alignCenter, styles.pt15]}>
                     <ActivityIndicator color={'#343434'} size={'small'} />
                     </View>
                  </View>

                    </SafeAreaView>

                </View>

            </Modal>


            {
                show !== 0 ? (

                    <Animated.View
                        style={{ transform: [{ translateY: slideAnim }], position: 'absolute', zIndex: 999, bottom: 0 }}>
                        <CustomToast
                            type={toastType}
                            msg={toastMsg}
                        />
                    </Animated.View>
                ) : null
            }

        </View >

    )
}


export default OrderConfirmation;