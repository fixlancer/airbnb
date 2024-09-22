import { View, Text, Dimensions, Platform, StyleSheet, TouchableOpacity, ScrollView, StatusBar, ActivityIndicator, } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import MyText from '../DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../screens/Listing/Styles';
import Modal from 'react-native-modalbox';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import CalendarPicker from 'react-native-calendar-picker';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('window');

interface Props {
    isOpen: any;
    maxNights: any;
    checkInD: any;
    checkOutD: any;
    nite: any;
    minNights: any;
    calendar: any;
    iniCheckIn: any,
    iniCheckOut: any;
    iniNites: any;
    maxBookingDate: any;
    handleChange: any;
}

const CalendarModal: React.FC<Props> = props => {
    const { isOpen, handleChange, maxNights, minNights, maxBookingDate, checkInD, checkOutD, nite, calendar, iniCheckIn, iniCheckOut, iniNites } = props;

    const minDate = new Date();
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate2, setCheckOutDate2] = useState(null);
    const [checkInDate2, setCheckInDate2] = useState(null);
    const [mNights, setMNights] = useState(maxNights);
    const [blocked, setBlocked] = useState([]);
    const [maxD, setMaxD] = useState('');
    const [isLoading, setIsLoading] = useState(false);


 //   const maxDate = new Date(2024, 7, 4);
    const minRange = minNights;
    const maxRange = mNights;


    const refCal = useRef(null);

    const handleDate = (date, type) => {
        const futureDate = new Date (minDate.setDate(minDate.getDate() + maxBookingDate));
        if (type === 'END_DATE') {
            if (date)
                setCheckOutDate(date);
                setCheckOutDate2(date.format('D MMM YY'));
                setMaxD(futureDate);

        } else {
            if (date) {
                setCheckInDate(date);
                setCheckInDate2(date.format('D MMM YY'));
                setCheckOutDate2(null);
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

    const diffDays = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 3600 * 24);

    const clearDates = () => {
        
        const futureDate = new Date (minDate.setDate(minDate.getDate() + maxBookingDate));
        refCal.current.resetSelections()
        setCheckInDate(null)
        setCheckOutDate(null);        
        setCheckInDate2(null)
        setCheckOutDate2(null);
        checkInD(null);
        checkOutD(null);
        setMaxD(futureDate);
    }

    const close = () => {
        checkInD(iniCheckIn);
        checkOutD(iniCheckOut);
        nite(iniNites);
        handleChange();
    }

    const submitDate = () => {
    setIsLoading(true);

    setTimeout(() => {
    checkInD(checkInDate);
        checkOutD(checkOutDate);
        nite(diffDays);
        handleChange();
        setIsLoading(false);
    }, 10);
    }



    useEffect(() => {
        calendar && calendar.map((item) => {
            setBlocked(item.blocked);
        });

        const futureDate = new Date (minDate.setDate(minDate.getDate() + maxBookingDate));
        setMaxD(futureDate);


    }, [])

    return (

        <Modal isOpen={isOpen}
            style={{ backgroundColor: '#fff' }}
            keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
            swipeToClose={false}
            onClosed={handleChange}
            backdropOpacity={1}
            backdropColor="white"
            position="top">


            <View style={styles.container}>

                <SafeAreaView
                    style={{
                        height: height,
                        width: width,
                        flex: 1,
                        backgroundColor: '#fff',
                    }}
                    edges={['left', 'right', 'top']}>
                    <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

                    <View style={[styles.modalHeader2]}>
        <TouchableOpacity
            onPress={() => close()}>
            <IconM
                name={'close-circle-outline'}
                size={moderateScale(25)}
                color={'#343434'}
                style={{ marginTop: 0, }} />

        </TouchableOpacity>
        </View>        
                    <View style={[styles.bb, styles.ph15, {paddingVertical:10, paddingBottom:10, borderBottomWidth:0,}]}>
                        {checkOutDate && checkOutDate ? (
                            <Text style={styles.largeLabel}>{diffDays} nights</Text>
                        ) : (
                            <Text style={styles.largeLabel}>When is your arrival??</Text>
                        )}
                        {checkInDate ? (
                            <MyText style={styles.subLabel}>{checkInDate2} - {checkOutDate ? checkOutDate2 : 'Add check-out'}</MyText>
                        ) : (
                            <MyText style={[styles.subLabel, { color: '#808080' }]}>Select check-in date</MyText>
                        )}

                        <View style={styles.pt15}>
                            <CalendarPicker
                                width={width - 5}
                                allowRangeSelection={true}
                                minDate={minDate}
                                maxDate={maxD}
                                minRangeDuration={minRange}
                                maxRangeDuration={maxRange}
                                todayBackgroundColor='#fff'
                                todayTextStyle={{ color: '#343434' }}
                                previousTitleStyle={{ color: '#343434' }}
                                nextTitleStyle={{ color: '#343434' }}
                                dayLabelsWrapper={{
                                    borderTopColor: '#ddd',
                                    borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: 0
                                }}
                                selectedRangeStyle={{ backgroundColor: '#F4DBF8' }}
                                selectedRangeStartTextStyle={{ color: '#fff' }}
                                selectedRangeEndTextStyle={{ color: '#fff' }}
                                disabledDatesTextStyle={{ textDecorationLine: 'line-through' }}
                                selectedDisabledDatesTextStyle={{ textDecorationLine: 'none' }}
                                selectedRangeStartStyle={{ backgroundColor: '#7E178E' }}
                                selectedRangeEndStyle={{ backgroundColor: '#7E178E' }}
                                textStyle={{ fontFamily: 'Nunito-Regular' }}
                                restrictMonthNavigation={true}
                                disabledDates={blocked}
                                onDateChange={handleDate}
                                ref={refCal}
                            />
                        </View>


                    </View>

                </SafeAreaView>

                <View style={[styles.RowB, styles.ph15, styles.pt10, styles.bottomBar]}>

                    <View>

                        {checkInDate ? (
                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => clearDates()}
                            >
                                <Text style={[styles.moreLabel, styles.pt5, { color: '#343434' }]}>Clear dates</Text>
                            </TouchableOpacity>
                        ) : (

                            <TouchableOpacity activeOpacity={0.7} onPress={() => close()} >
                                <Text style={[styles.moreLabel, styles.pt5, { color: '#343434' }]}>Close</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    {checkInDate && checkOutDate ? (
                        <>
                    {isLoading? (
                        <TouchableOpacity activeOpacity={0.7}
                        style={[styles.submitButton]}>
                        <MyText style={styles.buttonLabel}><ActivityIndicator size={'small'} color='#fff' /></MyText>
                    </TouchableOpacity>
                    ) : (
                    <TouchableOpacity activeOpacity={0.7}
                           onPress={() =>  submitDate()}
                        style={styles.submitButton}>
                        <MyText style={styles.buttonLabel}>Save & Proceed</MyText>
                    </TouchableOpacity>
                    )}
                    </>
                    ) : (
                        <TouchableOpacity activeOpacity={0.7}
                        style={[styles.submitButton, {opacity:0.6}]}>
                        <MyText style={styles.buttonLabel}>Save & Proceed</MyText>
                    </TouchableOpacity>
                    )}

                </View>


            </View>

        </Modal>

    )
}

export default CalendarModal;