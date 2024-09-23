import {
    View, Text, Dimensions, Platform, StyleSheet, TouchableOpacity, ScrollView, StatusBar,
    Animated, ActivityIndicator,
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import MyText from '../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalendarPicker from 'react-native-calendar-picker';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { addBlockedDate, removeBlockedDate } from '../../../redux/actions/listingActions';
const { width, height } = Dimensions.get('window');


const Calendar = ({ navigation, route }) => {
    const { listingID, calendar, maxBookingDate, title } = route.params;
    
    const minDate = new Date();

    const [checkOutDate, setCheckOutDate] = useState(null);
    const [checkInDate, setCheckInDate] = useState(null);
    const [blocked, setBlocked] = useState([]);
    const [maxD, setMaxD] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [newCalendar, setNewCalendar] = useState([]);
    const [newMBlocked, setNewMBlocked] = useState([]);

    const [customD, setCustomD] = useState([]);



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

    const refCal = useRef(null);

    useEffect(() => {
        setNewCalendar(calendar);
    }, [])



    const handleDate = (date, type) => {
             
        const futureDate = new Date(minDate.setDate(minDate.getDate() + maxBookingDate));

        if (type === 'END_DATE') {
            if (date)
                setCheckOutDate(date);
            setMaxD(futureDate);

        } else {
            if (date) {
                setCheckInDate(date);
                setCheckOutDate(null);

            }
        }

    }

    useEffect(() => {  
        if(checkInDate){      
        let closest = Infinity;
        blocked.forEach(function (d) {
            const myDate = new Date(d);
            if (myDate > checkInDate && (myDate < new Date(closest) || myDate < closest)) {
                closest = d;
            }
        }
        )

        setMaxD(closest);
    }

    }, [checkInDate])


    useEffect(() => {

        const futureDate = new Date(minDate.setDate(minDate.getDate() + maxBookingDate));
        setMaxD(futureDate);

    }, [])


    useEffect(() => {

        newCalendar && newCalendar.map((item) => {
            setBlocked(item.autoBlocked);

            let customDay = [];
            item.manualBlocked && item.manualBlocked.map((i, index) => {
                customDay.push({
                    date: i,
                    style: { backgroundColor: '#343434', },
                    textStyle: { color: '#fff' },
                    containerStyle: [],
                    allowDisabled: true,
                })
            })

            item.autoBlocked && item.autoBlocked.map((i, index) => {
                customDay.push({
                    date: i,
                    style: { backgroundColor: '#8a8a8a', },
                    textStyle: { color: '#fff' },
                    todayTextStyle: {color: '#fff'},
                    containerStyle: [],
                    allowDisabled: true,
                })
            })

            setCustomD(customDay);

        });

    }, [newCalendar]);


    /* UNBLOCK DATES AND SEND TO API ****/

    const removeCal = async () => {

        if (newMBlocked.length > 0) {

            setisLoading(true);

            const data = {
                    listingID: listingID,
                    dates: newMBlocked
            
            }

            dispatch(removeBlockedDate({data}))
                .then(res => {

                    const updatedData = [...newCalendar];
                    newMBlocked.forEach(item => {
                        updatedData[0].manualBlocked.splice(updatedData[0].manualBlocked.indexOf("" + item), 1);
                    })
                    setNewCalendar(updatedData);
            
                    setisLoading(false);
                    clearDates();

                    showToast('Success', 'Dates unblocked');

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
        } else {
            showToast('Warning', 'You can only unblock dates that are blocked');
        }
    };


    const unBlockDate = () => {

        const dates = [];
        setNewMBlocked([]);

        const checkIn = new Date(checkInDate);
        const checkOut = checkOutDate ? new Date(checkOutDate) : new Date(checkInDate);

        // Loop through all the dates between the start and end dates
        while (checkIn <= checkOut) {
            dates.push(new Date(checkIn));
            checkIn.setDate(checkIn.getDate() + 1)
        }

        return dates.forEach(item => {

            //   const updatedData = [...DBcalendar];
            //   const updatedBlocked = [...newMBlocked];
            const foundItem = newCalendar[0].manualBlocked.includes("" + item);
            let shouldRemove = false;

            if (foundItem !== false) {
                shouldRemove = true;
            }

            if (shouldRemove) {
                //      updatedData[0].manualBlocked.push("" + item);
                // updatedData[0].manualBlocked.splice(item, 1);
                // updatedData[0].blocked.splice(item, 1);
                newMBlocked.push("" + item)

            } else { }
         //   setDBcalendar(updatedData);
        }), removeCal();

    }

    /* UNBLOCK DATES AND SEND TO API ****/


    /* BLOCK DATES AND SEND TO API ****/

    const addCal = async () => {

        if (newMBlocked.length > 0) {

            setisLoading(true);

            const data = {
                    listingID: listingID,
                    dates: newMBlocked
            }

            dispatch(addBlockedDate({data}))
                .then(res => {

                    const updatedData = [...newCalendar];
                    newMBlocked.forEach(item => {
                        updatedData[0].manualBlocked.push("" + item);
                    })
                    setNewCalendar(updatedData);
                    setisLoading(false);
                    clearDates();

                    showToast('Success', 'Dates blocked');

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
        } else {
            showToast('Warning', 'You can only block dates that are available');
        }
    };


    const blockDate = () => {

        const dates = [];
        setNewMBlocked([]);

        const checkIn = new Date(checkInDate);
        const checkOut = checkOutDate ? new Date(checkOutDate) : new Date(checkInDate);

        // Loop through all the dates between the start and end dates
        while (checkIn <= checkOut) {
            dates.push(new Date(checkIn));
            checkIn.setDate(checkIn.getDate() + 1)
        }

        return dates.forEach(item => {

            //   const updatedBlocked = [...newMBlocked];
            const foundItem = newCalendar[0].manualBlocked.includes("" + item);
            let shouldAdd = true;

            if (foundItem !== false) {
                shouldAdd = false;
            }

            if (shouldAdd) {
             newMBlocked.push("" + item)

            } else { }
            

        }), addCal();

    }

    /* BLOCK DATES AND SEND TO API ****/



    const clearDates = () => {
        const futureDate = new Date(minDate.setDate(minDate.getDate() + 365));
        refCal.current.resetSelections()
        setCheckInDate(null);
        setCheckOutDate(null);
        setMaxD(futureDate);
    }


    return (

        <View style={styles.container}>

            <SafeAreaView
                style={{
                    height: height,
                    width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

                <View style={[styles.newModalHeader, {}]}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack(null)}>
                        <IconM
                            name={'close-circle-outline'}
                            size={moderateScale(25)}
                            color={'#fff'}
                            style={{ marginTop: 0, }} />

                    </TouchableOpacity>
                    <Text numberOfLines={1} style={[styles.largeLabel, styles.textWhite, styles.pt15]}>Calendar - {title}</Text>
                </View>

                <View style={[styles.midBg]}>

                    <View style={[styles.Row, styles.ph15, styles.pt10, styles.mb10]}>
                        <View style={styles.calBg}>
                            <MyText style={[styles.noLabel, styles.textWhite,]}>13</MyText>
                        </View>
                        <MyText style={[styles.tinyDark, { marginTop: 4, }]}>Dates booked</MyText>
                    </View>

                    <View style={[styles.Row, styles.ph15,]}>
                        <View style={styles.calBg2}>
                            <MyText style={[styles.mediumLabel, styles.textWhite,]}>13</MyText>
                        </View>
                        <MyText style={[styles.tinyDark, { marginTop: 4, }]}>Dates you manually blocked</MyText>
                    </View>


                    <View style={styles.ph15}>
                        {checkInDate ? (
                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => clearDates()}
                            >
                                <Text style={[styles.moreLabel, styles.mb10, { textAlign: 'right', color: '#343434' }]}>Clear dates</Text>
                            </TouchableOpacity>
                        ) : (
                            <Text style={[styles.moreLabel, styles.mb10, { textAlign: 'right', color: '#343434' }]}></Text>
                        )}
                    </View>
                    <View style={styles.pt5}>
                        <CalendarPicker
                            width={width - 5}
                            allowRangeSelection={true}
                            minDate={minDate}
                            maxDate={maxD}
                            todayBackgroundColor='#fff'
                            todayTextStyle={{ color: '#343434' }}
                            previousTitleStyle={{ color: '#343434' }}
                            nextTitleStyle={{ color: '#343434' }}
                            dayLabelsWrapper={{
                                borderTopColor: '#ddd',
                                borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: 0
                            }}
                            selectedRangeStyle={{ backgroundColor: '#fce1e0' }}
                            selectedRangeStartTextStyle={{ color: '#343434' }}
                            selectedRangeEndTextStyle={{ color: '#343434' }}
                            disabledDatesTextStyle={{ textDecorationLine: 'line-through' }}
                            selectedDisabledDatesTextStyle={{ textDecorationLine: 'none' }}
                            selectedRangeStartStyle={{ backgroundColor: '#fce1e0' }}
                            selectedRangeEndStyle={{ backgroundColor: '#fce1e0' }}
                            textStyle={{ fontFamily: 'Nunito-Regular' }}
                            restrictMonthNavigation={true}
                            disabledDates={blocked}
                            customDatesStyles={customD}
                            onDateChange={handleDate}
                            ref={refCal}
                        />
                    </View>







                </View>

            </SafeAreaView>

            <View style={[styles.ph15, styles.pt10, styles.bottomBar]}>

                {checkInDate ? (
                    <>
                        {isLoading ? (

                            <ActivityIndicator size={'small'} color='#343434' />

                        ) : (
                            <View style={styles.RowB}>
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => blockDate()}
                                    style={[styles.submitButton, { backgroundColor: '#343434' }]}>
                                    <MyText style={styles.buttonLabel}>Block</MyText>
                                </TouchableOpacity>


                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => unBlockDate()}
                                    style={[styles.submitButton, { backgroundColor: '#1cc88a' }]}>
                                    <MyText style={styles.buttonLabel}>Make Available</MyText>
                                </TouchableOpacity>

                            </View>
                        )}
                    </>
                ) : (

                    <MyText style={[styles.mediumLabel, styles.textCenter]}>Select a date or dates you wish to block or unblock</MyText>

                )}

            </View>

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

    )
}

export default Calendar;