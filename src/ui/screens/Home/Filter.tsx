import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar,
    ScrollView,
    StyleSheet,
    LayoutAnimation,
    UIManager,
    Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modalbox';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { useTheme } from 'react-native-paper';
import newStyles from '../Styles/Styles';
import RangeSlider from 'rn-range-slider';
import MyText from '../../components/DefaultTextComponent/MyText';
import CalendarPicker from 'react-native-calendar-picker';
import HeaderClose from '../../components/Header/HeaderClose';

const { width, height } = Dimensions.get('screen');

interface Props {
    isOpen: any;
    loc: any;
    handleData: any;
    handleChange: any;
    data: any;
}

const Filter: React.FC<Props> = props => {
    const { isOpen, handleChange, handleData, data, loc } = props;

    const theme = useTheme()
    const styles = newStyles(theme);

    const [tempData, setTempData] = useState(data.data);
    const [onDate, setOnDate] = useState(false);
    const [checkOut, setCheckOut] = useState(tempData.checkOutDay)
    const [checkIn, setCheckIn] = useState(tempData.checkInDay)
    const [checkOutDate, setCheckOutDate] = useState(tempData.checkOutDay)
    const [checkInDate, setCheckInDate] = useState(tempData.checkInDay)

    const minDate = new Date();
    const maxDate = new Date(2024, 7, 4);
    const minRange = 1;
    const maxRange = 365;
    const refCal = useRef(null);

    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }


    /* PRICE RANGE ***/

    const Thumb = ({ name }) => {
        return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
    };

    const Label = ({ text }) => {
        return (
            <View style={styles.labelRoot}><MyText style={[styles.subLabel, { color: '#fff' }]}>{text}</MyText></View>
        )
    }

    const Notch = () => {
        return <View style={styles.nRoot} />
    }

    const renderThumb = useCallback((name: 'high' | 'low') => <Thumb name={name} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const renderRail = useCallback(() => <View style={styles.rootRail} />, []);
    const renderRailSelected = useCallback(() => <View style={styles.root} />, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);

    /* PRICE RANGE ***/

    const place = [
        {
            id: 0,
            name: 'Any',
            text: 'Filter by any type of place, rooms or an entire house'
        },
        {
            id: 1,
            name: 'Room',
            text: 'A room in a house with access to shared spaces'
        },
        {
            id: 2,
            name: 'Entire house',
            text: 'A house all to yourself'
        },
    ]


    const numbers = [
        {
            id: 0,
            name: 'Any',
        },
        {
            id: 1,
            name: '1',
        },
        {
            id: 2,
            name: '2'
        },
        {
            id: 3,
            name: '3',
        },
        {
            id: 4,
            name: '4',
        },
        {
            id: 5,
            name: '5'
        },
        {
            id: 6,
            name: '6'
        },
        {
            id: 7,
            name: '7+',
        },
    ]

    const handleToggle = (key) => {
        setTempData({ ...tempData, [key]: !tempData[key] })
    }
    const handleBedRoomsToggle = (key) => {
        setTempData({ ...tempData, bedRooms: tempData === key ? !tempData.bedRooms : key })
    }

    const handleBedToggle = (key) => {
        setTempData({ ...tempData, bedNo: tempData === key ? !tempData.bedNo : key })
    }

    const handleBathToggle = (key) => {
        setTempData({ ...tempData, bathNo: tempData === key ? !tempData.bathNo : key })
    }

    const handlePlaceToggle = (key) => {
        setTempData({ ...tempData, placeType: tempData === key ? !tempData.placeType : key })
    }

    const handleCheckIn = (key) => {
        setTempData({ ...tempData, checkInDay: tempData === key ? !tempData.checkInDay : key })
    }

    const handleCheckOut = (key) => {
        setTempData({ ...tempData, checkOutDay: tempData === key ? !tempData.checkOutDay : key })
    }


    const handleFilter = () => {
        handleData({ data: tempData });
        handleChange();
    }


    const handleDate = (date, type) => {
        if (type === 'END_DATE') {
            if (date)
                setCheckOut(date.format('D MMM YY'));
            setCheckOutDate(date);
        } else {
            if (date)
                setCheckIn(date.format('D MMM YY'));
            setCheckInDate(date);
            setCheckOut(null);
        }
    }

    const submitDate = () => {
        handleCheckIn(checkInDate)
        handleCheckOut(checkOutDate);
        addDates()
    }

    const clearDates = () => {
        setCheckOut(null);
        setCheckIn(null);
        handleCheckIn(null)
        handleCheckOut(null);
    }

    const addDates = () => {
        setOnDate(!onDate);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    const clearAll = () => {
        setTempData({data: {
            location: loc,
            bedRooms: 'Any',
            bedNo: 'Any',
            bathNo: 'Any',
            checkInDay: null,
            checkOutDay: null,
            minPrice: 5000,
            maxPrice: 1000000,
            newDiscount: false,
            weeklyDiscount: false,
            monthlyDiscount: false,
            smartHome: false,
            penthouse: false,
            hotel: false,
            guestHouse: false,
            duplex: false,
            bungalow: false,
            placeType: 'Any',
            cautionFee: false,
            smoking: false,
            pool: false,
            wifi: false,
            videoGame: false,
            kitchen: false,
            washer: false,
            iron: false,
            microwave: false,
            breakfast: false,
            topRated: false,
            party: false,
            elevator: false,
            instantBooking: false,
        }}
        )
    }

    const close = () => {
        setTempData(data.data);
        handleChange();
    }


    return (

        <Modal isOpen={isOpen}
            style={{ backgroundColor: '#fff' }}
            keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
            swipeToClose={false}
            onClosed={close}
            backdropOpacity={1}
            backdropColor="transparent"
            position="top">


            <View style={[styles.container]}>

                <SafeAreaView
                    style={{
                        height: height,
                        width: width,
                        flex: 1,
                        backgroundColor: 'transparent',
                    }}
                    edges={['left', 'right', 'top']}>
                    <StatusBar translucent barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor="transparent" />

                    <HeaderClose headerTitle={'Filter search'} route={close} />

                    <ScrollView style={{ width: width }}>
                        <View style={[styles.midBg, { width: '100%' }]}>

                            <View style={[styles.mb30, styles.mt20]}>


                                <View style={[onDate ? styles.ph5 : [styles.lineBottomLight, styles.ph15], styles.pb20, styles.mb30]}>

                                    <View style={[styles.Row, styles.alignCenter, styles.bgGrey, onDate ? styles.pv15 : null, styles.borderWidthDark, styles.b8, styles.mt5, { minHeight: moderateScale(45), width: '100%' }]}>

                                        {!onDate ? (

                                            <TouchableOpacity
                                                onPress={() => addDates()}
                                                activeOpacity={0.9}
                                                style={[styles.alignCenter,]}>
                                                <View>
                                                    {checkIn ? (
                                                        <MyText style={styles.subLabel}>{checkIn} - {checkOut ? checkOut : 'Add check-out'}</MyText>
                                                    ) : (
                                                        <View style={[styles.Row]}>
                                                            <IconM
                                                                name={'calendar-outline'}
                                                                size={moderateScale(18)}
                                                                color={theme.dark ? '#fff' : '#343434'}
                                                                style={[styles.mr10]} />
                                                            <MyText style={[styles.subLabel]}>Add trip dates</MyText>
                                                        </View>
                                                    )}
                                                </View>

                                            </TouchableOpacity>
                                        ) : (
                                            <View style={[]}>
                                                <TouchableOpacity
                                                    onPress={() => addDates()}
                                                    activeOpacity={0.9}
                                                    style={[styles.RowB, styles.ph15, styles.mb5]}>

                                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb5]}>When is your trip?</Text>
                                                    <View style={[styles.b30, styles.RowB, styles.alignCenter, styles.bgWhite, styles.borderDark, { width: moderateScale(30), height: moderateScale(30) }]}>
                                                        <IconM
                                                            name={'close'}
                                                            size={moderateScale(15)}
                                                            color={theme.dark ? '#fff' : '#222'}
                                                            style={{}} />
                                                    </View>
                                                </TouchableOpacity>

                                                {checkIn ? (
                                                    <MyText style={[styles.ph15, styles.subLabel, styles.fontSize12, styles.textDark]}>{checkIn} - {checkOut ? checkOut : 'Add check-out'}</MyText>
                                                ) : (
                                                    <MyText style={[styles.ph15, styles.subLabel, styles.fontSize12, styles.textDark]}>Add dates of your trip</MyText>
                                                )}

                                                <View style={[styles.mt20, styles.pt10]}>
                                                    <CalendarPicker
                                                        width={width - 5}
                                                        allowRangeSelection={true}
                                                        minDate={minDate}
                                                        maxDate={maxDate}
                                                        minRangeDuration={minRange}
                                                        maxRangeDuration={maxRange}
                                                        todayBackgroundColor={'#fff'}
                                                        todayTextStyle={[styles.textDarkAll]}
                                                        previousTitleStyle={[styles.textDark]}
                                                        nextTitleStyle={[styles.textDark]}
                                                        dayLabelsWrapper={{
                                                            borderTopColor: '#ddd',
                                                            borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: 0
                                                        }}
                                                        selectedRangeStyle={{ backgroundColor: '#ddd' }}
                                                        selectedRangeStartTextStyle={{ color: '#fff' }}
                                                        selectedRangeEndTextStyle={{ color: '#fff' }}
                                                        disabledDatesTextStyle={{ textDecorationLine: 'line-through' }}
                                                        selectedDisabledDatesTextStyle={{ textDecorationLine: 'none' }}
                                                        selectedRangeStartStyle={[styles.bgPurple]}
                                                        selectedRangeEndStyle={[styles.bgPurple]}
                                                        textStyle={[styles.textDark, styles.fontSemi]}
                                                        restrictMonthNavigation={true}
                                                        onDateChange={handleDate}
                                                        ref={refCal}
                                                    />
                                                </View>

                                                <View style={[styles.RowB, styles.ph15, styles.pt20, styles.pb10]}>
                                                    <TouchableOpacity
                                                        onPress={clearDates}
                                                        activeOpacity={0.7}>
                                                        <Text style={[styles.lineLabel, styles.pt10]}>Reset</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity
                                                        onPress={() => submitDate()}
                                                        style={[styles.submitButton, styles.bgPurple,  {}]}>
                                                        <MyText style={[styles.buttonLabel,]}>Save dates</MyText>
                                                    </TouchableOpacity>

                                                </View>
                                            </View>
                                        )}

                                    </View>
                                </View>

                                {!onDate ? (
                                    <>
                                <View style={[styles.ph15, styles.pb20, styles.lineBottomLight, styles.mb30]}>
                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb10]}>Type of place</Text>

                                    {place && place.map((item) => {
                                        return (
                                            <View key={item.id}>
                                                {tempData.placeType === item.name ? (
                                                    <MyText style={[styles.fontLight, styles.textGrey, styles.mb20, styles.fontSize11, { width: width - 10 }]}>{item.text}</MyText>
                                                ) : null}

                                            </View>
                                        )
                                    })
                                    }

                                    <View style={[styles.Row,]}>
                                        {place && place.map((item) => {
                                            return (
                                                <View key={item.id}>
                                                    <TouchableOpacity
                                                        activeOpacity={0.9}
                                                        onPress={() => {
                                                            handlePlaceToggle(item.name);
                                                            //   setGetCount(Number(getCount) + 1);
                                                        }}
                                                        style={[styles.alignCenter, styles.mb30, styles.mr10, tempData.placeType === item.name ? [styles.bgPurple, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight], styles.ph20, styles.pv15, styles.b8, {}]}>
                                                        <Icon
                                                            name={item.name === 'Any' ? 'roofing' : item.name === 'Room' ? 'meeting-room' : 'house'}
                                                            size={moderateScale(22)}
                                                            color={tempData.placeType === item.name ? '#fff' : '#717171'}
                                                            style={[styles.mb10]}

                                                        />
                                                        <MyText style={[styles.titleLabel, tempData.placeType === item.name ? styles.textWhite : styles.textDark]}>{item.name}</MyText>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })}

                                    </View>
                                </View>




                                <View style={[styles.ph15, styles.pb20, styles.lineBottomLight, styles.mb30]}>
                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb15]}>Property type</Text>

                                    <View style={[styles.Wrap,]}>

                                        <TouchableOpacity
                                            style={[styles.Row, styles.mb10, styles.p10, styles.ph15, styles.mr10, styles.b8, tempData.smartHome ? [styles.bgPurpleFilter, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight]]}
                                            onPress={() => {
                                                handleToggle('smartHome');
                                                //    setGetCount(Number(getCount) + 1);
                                            }}>

                                            <MyText style={[styles.subLabel, styles.fontSize13, tempData.smartHome ? styles.textPurple : styles.textDark, {}]}>Smart home</MyText>

                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[styles.Row, styles.mb10, styles.p10, styles.ph15, styles.mr10, styles.b8, tempData.penthouse ? [styles.bgPurpleFilter, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight]]}
                                            onPress={() => {
                                                handleToggle('penthouse');
                                                //   setGetCount(Number(getCount) + 1);
                                            }}>

                                            <MyText style={[styles.subLabel, styles.fontSize13, tempData.penthouse ? styles.textPurple : styles.textDark, {}]}>Penthouse</MyText>

                                        </TouchableOpacity>


                                        <TouchableOpacity
                                            style={[styles.Row, styles.mb10, styles.p10, styles.ph15, styles.mr10, styles.b8, tempData.hotel ? [styles.bgPurpleFilter, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight]]}
                                            onPress={() => {
                                                handleToggle('hotel');
                                                //   setGetCount(Number(getCount) + 1);
                                            }}>

                                            <MyText style={[styles.subLabel, styles.fontSize13, tempData.hotel ? styles.textPurple : styles.textDark, {}]}>Hotel</MyText>

                                        </TouchableOpacity>



                                        <TouchableOpacity
                                            style={[styles.Row, styles.alignCenter, styles.mb10, styles.ph15, styles.p10, styles.mr10, styles.b8, tempData.duplex ? [styles.bgPurpleFilter, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight]]}
                                            onPress={() => {
                                                handleToggle('duplex');
                                                //    setGetCount(Number(getCount) + 1);
                                            }}>

                                            <MyText style={[styles.subLabel, styles.fontSize13, tempData.duplex ? styles.textPurple : styles.textDark, {}]}>Duplex</MyText>

                                        </TouchableOpacity>


                                        <TouchableOpacity
                                            style={[styles.Row, styles.mb10, styles.p10, styles.ph15, styles.mr10, styles.b8, tempData.guestHouse ? [styles.bgPurpleFilter, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight]]}
                                            onPress={() => {
                                                handleToggle('guestHouse');
                                                //   setGetCount(Number(getCount) + 1);
                                            }}>

                                            <MyText style={[styles.subLabel, styles.fontSize13, tempData.guestHouse ? styles.textPurple : styles.textDark, {}]}>Guest house</MyText>

                                        </TouchableOpacity>



                                        <TouchableOpacity
                                            style={[styles.Row, styles.mb10, styles.p10, styles.mr10, styles.b8, tempData.bungalow ? [styles.bgPurpleFilter, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight]]}
                                            onPress={() => {
                                                handleToggle('bungalow');
                                                //   setGetCount(Number(getCount) + 1);
                                            }}>
                                            <MyText style={[styles.subLabel, styles.fontSize13, tempData.bungalow ? styles.textPurple : styles.textDark, {}]}>Bungalow</MyText>

                                        </TouchableOpacity>

                                    </View>
                                </View>


                                <View style={[styles.pl15, styles.pb20, styles.lineBottomLight, styles.mb30]}>
                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb15]}>Rooms and beds</Text>

                                    <MyText style={[styles.subLabel, styles.mb15]}>Bedrooms</MyText>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        {numbers && numbers.map((item) => {
                                            return (
                                                <View key={item.id}>
                                                    <TouchableOpacity
                                                        activeOpacity={0.9}
                                                        onPress={() => {
                                                            handleBedRoomsToggle(item.name);
                                                            //   setGetCount(Number(getCount) + 1);
                                                        }}
                                                        style={[styles.alignCenter, styles.mb30, styles.mr10, tempData.bedRooms === item.name ? styles.bgPurple : [styles.bgWhite, styles.borderWidthLight], styles.ph15, styles.pv10, styles.b30]}>

                                                        <MyText style={[styles.titleLabel, tempData.bedRooms === item.name ? styles.textWhite : styles.textDark]}>{item.name}</MyText>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })}
                                    </ScrollView>

                                    <MyText style={[styles.subLabel, styles.mb15]}>Beds</MyText>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        {numbers && numbers.map((item) => {
                                            return (
                                                <View key={item.id}>
                                                    <TouchableOpacity
                                                        activeOpacity={0.9}
                                                        onPress={() => {
                                                            handleBedToggle(item.name);
                                                            //   setGetCount(Number(getCount) + 1);
                                                        }}
                                                        style={[styles.alignCenter, styles.mb30, styles.mr10, tempData.bedNo === item.name ? styles.bgPurple : [styles.bgWhite, styles.borderWidthLight], styles.ph15, styles.pv10, styles.b30, {}]}>

                                                        <MyText style={[styles.titleLabel, tempData.bedNo === item.name ? styles.textWhite : styles.textDark]}>{item.name}</MyText>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })}
                                    </ScrollView>

                                    <MyText style={[styles.subLabel, styles.mb15]}>Bathrooms</MyText>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        {numbers && numbers.map((item) => {
                                            return (
                                                <View key={item.id}>
                                                    <TouchableOpacity
                                                        activeOpacity={0.9}
                                                        onPress={() => {
                                                            handleBathToggle(item.name);
                                                            //   setGetCount(Number(getCount) + 1);
                                                        }}
                                                        style={[styles.alignCenter, styles.mb30, styles.mr10, tempData.bathNo === item.name ? [styles.bgPurple] : [styles.bgWhite, styles.borderWidthLight], styles.ph15, styles.pv10, styles.b30, {}]}>

                                                        <MyText style={[styles.titleLabel, tempData.bathNo === item.name ? styles.textWhite : styles.textDark]}>{item.name}</MyText>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })}
                                    </ScrollView>
                                </View>


                                <View style={[styles.ph15, styles.pb20, styles.lineBottomLight, styles.mb30]}>
                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb15]}>Discount</Text>


                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb20]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('weeklyDiscount');
                                            //    setGetCount(Number(getCount) + 1);
                                        }}>
                                        <View>
                                            <MyText style={[styles.subLabel, {}]}>Weekly discount</MyText>
                                            <MyText style={[styles.fontLight, styles.textGrey, styles.fontSize11, { width: width - 100 }]}>Properties with discount for staying more than 7 nights</MyText>
                                        </View>

                                        <Switch
                                            trackColor={{ false: '#c2c3c1', true: '#6510A4' }}
                                            thumbColor={tempData.weeklyDiscount ? '#fff' : '#f2f2f2'}
                                            onValueChange={() => handleToggle('weeklyDiscount')}
                                            value={tempData.weeklyDiscount}
                                        />
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('monthlyDiscount');
                                            //    setGetCount(Number(getCount) + 1);
                                        }}>
                                        <View>
                                            <MyText style={[styles.subLabel, {}]}>Monthly discount</MyText>
                                            <MyText style={[styles.fontLight, styles.pv5, styles.textGrey, styles.fontSize11, { width: width - 100 }]}>Properties with discount for staying more than a month</MyText>
                                        </View>
                                        <Switch
                                            trackColor={{ false: '#c2c3c1', true: '#6510A4' }}
                                            thumbColor={tempData.monthlyDiscount ? '#fff' : '#f2f2f2'}
                                            onValueChange={() => handleToggle('monthlyDiscount')}
                                            value={tempData.monthlyDiscount}
                                        />
                                    </TouchableOpacity>

                                </View>



                                <View style={[styles.ph15, styles.pb20, styles.lineBottomLight, styles.mb30]}>
                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb10]}>Property reviews</Text>

                                    <View style={[]}>
                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={() => {
                                                handleToggle('topRated');
                                                //   setGetCount(Number(getCount) + 1);
                                            }}
                                            style={[styles.mb15, styles.bgWhite, tempData.topRated ? [styles.borderWidthPurple] : [styles.borderWidthLight], styles.ph20, styles.pv15, styles.b8, { width: '100%' }]}>
                                            <Icons
                                                name={'progress-star'}
                                                size={moderateScale(35)}
                                                color={theme.dark ? '#fff' : '#222222'}
                                                style={[styles.mb10]}

                                            />
                                            <MyText style={[styles.titleLabel, styles.fontSize15, styles.textDark]}>Top rated</MyText>
                                            <MyText style={[styles.fontLight, styles.pv5, styles.textGrey, styles.fontSize11, styles.pv5, { width: '100%' }]}>Most rated homes according to guests</MyText>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={() => {
                                                handleToggle('newDiscount');
                                                //   setGetCount(Number(getCount) + 1);
                                            }}
                                            style={[styles.mb10, styles.bgWhite, tempData.newDiscount ? [styles.borderWidthPurple] : [styles.borderWidthLight], styles.ph20, styles.pv15, styles.b8, { width: '100%' }]}>
                                            <Icons
                                                name={'trophy-award'}
                                                size={moderateScale(30)}
                                                color={theme.dark ? '#fff' : '#222222'}
                                                style={[styles.mb10]}

                                            />
                                            <MyText style={[styles.titleLabel, styles.fontSize15, styles.textDark]}>New listings</MyText>
                                            <MyText style={[styles.fontLight, styles.pv5, styles.textGrey, styles.fontSize11, styles.pv5, { width: '100%' }]}>Newly listed properties with amazing discounts</MyText>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                                <View style={[styles.ph15, styles.pb20, styles.lineBottomLight, styles.mb30]}>
                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb15]}>Features and amenities</Text>

                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('wifi');
                                            //    setGetCount(Number(getCount) + 1);
                                        }}>
                                        <MyText style={[styles.subLabel, {}]}>Wifi</MyText>

                                        <IconM
                                            name={tempData.wifi ? 'checkmark-circle' : 'radio-button-off'}
                                            size={moderateScale(25)}
                                            color={tempData.wifi ? '#6510A4' : '#717171'}
                                            style={{ marginTop: -2 }} />
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('videoGame');
                                            //    setGetCount(Number(getCount) + 1);
                                        }}>
                                        <MyText style={[styles.subLabel, {}]}>Video Game</MyText>
                                        <IconM
                                            name={tempData.videoGame ? 'checkmark-circle' : 'radio-button-off'}
                                            size={moderateScale(25)}
                                            color={tempData.videoGame ? '#6510A4' : '#717171'}
                                            style={{ marginTop: -2 }} />
                                    </TouchableOpacity>



                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('kitchen');
                                            //    setGetCount(Number(getCount) + 1);
                                        }}>
                                        <MyText style={[styles.subLabel, {}]}>Kitchen</MyText>
                                        <IconM
                                            name={tempData.kitchen ? 'checkmark-circle' : 'radio-button-off'}
                                            size={moderateScale(25)}
                                            color={tempData.kitchen ? '#6510A4' : '#717171'}
                                            style={{ marginTop: -2 }} />
                                    </TouchableOpacity>



                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('pool');
                                            //   setGetCount(Number(getCount) + 1);
                                        }}>
                                        <MyText style={[styles.subLabel, {}]}>Swimming pool</MyText>
                                        <IconM
                                            name={tempData.pool ? 'checkmark-circle' : 'radio-button-off'}
                                            size={moderateScale(25)}
                                            color={tempData.pool ? '#6510A4' : '#717171'}
                                            style={{ marginTop: -2 }} />
                                    </TouchableOpacity>



                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('washer');
                                            //    setGetCount(Number(getCount) + 1);
                                        }}>
                                        <MyText style={[styles.subLabel, {}]}>Washing machine</MyText>
                                        <IconM
                                            name={tempData.washer ? 'checkmark-circle' : 'radio-button-off'}
                                            size={moderateScale(25)}
                                            color={tempData.washer ? '#6510A4' : '#717171'}
                                            style={{ marginTop: -2 }} />
                                    </TouchableOpacity>



                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('iron');
                                            //    setGetCount(Number(getCount) + 1);
                                        }}>
                                        <MyText style={[styles.subLabel, {}]}>Iron</MyText>
                                        <IconM
                                            name={tempData.iron ? 'checkmark-circle' : 'radio-button-off'}
                                            size={moderateScale(25)}
                                            color={tempData.iron ? '#6510A4' : '#717171'}
                                            style={{ marginTop: -2 }} />
                                    </TouchableOpacity>



                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('microwave');
                                            //    setGetCount(Number(getCount) + 1);
                                        }}>
                                        <MyText style={[styles.subLabel, {}]}>Microwave</MyText>
                                        <IconM
                                            name={tempData.microwave ? 'checkmark-circle' : 'radio-button-off'}
                                            size={moderateScale(25)}
                                            color={tempData.microwave ? '#6510A4' : '#717171'}
                                            style={{ marginTop: -2 }} />
                                    </TouchableOpacity>



                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('elevator');
                                            //   setGetCount(Number(getCount) + 1);
                                        }}>
                                        <MyText style={[styles.subLabel, {}]}>Elevator</MyText>
                                        <IconM
                                            name={tempData.elevator ? 'checkmark-circle' : 'radio-button-off'}
                                            size={moderateScale(25)}
                                            color={tempData.elevator ? '#6510A4' : '#717171'}
                                            style={{ marginTop: -2 }} />
                                    </TouchableOpacity>

                                </View>




                                <View style={[styles.ph15, styles.pb20, styles.lineBottomLight, styles.mb30]}>
                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb15]}>House rules</Text>

                                    <View style={[styles.Wrap,]}>

                                        <TouchableOpacity
                                            style={[styles.Row, styles.mb10, styles.p10, styles.ph15, styles.mr10, styles.b8, tempData.smoking ? [styles.bgPurpleFilter, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight]]}
                                            onPress={() => {
                                                handleToggle('smoking');
                                                //    setGetCount(Number(getCount) + 1);
                                            }}>

                                            <MyText style={[styles.subLabel, styles.fontSize13, tempData.smoking ? styles.textPurple : styles.textDark, {}]}>Smoking allowed</MyText>

                                        </TouchableOpacity>


                                        <TouchableOpacity
                                            style={[styles.Row, styles.mb10, styles.p10, styles.ph15, styles.mr10, styles.b8, tempData.cautionFee ? [styles.bgPurpleFilter, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight]]}
                                            onPress={() => {
                                                handleToggle('cautionFee');
                                                //    setGetCount(Number(getCount) + 1);
                                            }}>

                                            <MyText style={[styles.subLabel, styles.fontSize13, tempData.cautionFee ? styles.textPurple : styles.textDark, {}]}>No caution fee</MyText>

                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[styles.Row, styles.mb10, styles.p10, styles.ph15, styles.mr10, styles.b8, tempData.party ? [styles.bgPurpleFilter, styles.borderWidthPurple] : [styles.bgWhite, styles.borderWidthLight]]}
                                            onPress={() => {
                                                handleToggle('party');
                                                //    setGetCount(Number(getCount) + 1);
                                            }}>

                                            <MyText style={[styles.subLabel, styles.fontSize13, tempData.party ? styles.textPurple : styles.textDark, {}]}>Party or events allowed</MyText>

                                        </TouchableOpacity>


                                    </View>
                                </View>



                                <View style={[styles.ph15, styles.pb20, styles.lineBottomLight, styles.mb30]}>
                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb15]}>Additional services</Text>

                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('breakfast');
                                            //    setGetCount(Number(getCount) + 1);
                                        }}>

                                        <View>
                                            <MyText style={[styles.subLabel, {}]}>Breakfast</MyText>
                                            <MyText style={[styles.fontLight, styles.pv5, styles.textGrey, styles.fontSize11, { width: width - 100 }]}>Free breakfast every morning all through your stay</MyText>
                                        </View>
                                        <Switch
                                            trackColor={{ false: '#c2c3c1', true: '#6510A4' }}
                                            thumbColor={tempData.breakfast ? '#fff' : '#f2f2f2'}
                                            onValueChange={() => handleToggle('breakfast')}
                                            value={tempData.breakfast}
                                        />
                                    </TouchableOpacity>
                                </View>



                                <View style={[styles.ph15, styles.mb30]}>
                                    <Text style={[styles.largeLabel2, styles.fontSize18, styles.mb15]}>Booking option</Text>


                                    <TouchableOpacity
                                        style={[styles.RowB, styles.mb15]}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            handleToggle('instantBooking');
                                            //   setGetCount(Number(getCount) + 1);
                                        }}>
                                        <View>
                                            <MyText style={[styles.subLabel, {}]}>Instant booking</MyText>
                                            <MyText style={[styles.fontLight, styles.pv5, styles.textGrey, styles.fontSize12, { width: width - 100 }]}>Book without waiting for host approval</MyText>
                                        </View>
                                        <Switch
                                            trackColor={{ false: '#c2c3c1', true: '#6510A4' }}
                                            thumbColor={tempData.instantBooking ? '#fff' : '#f2f2f2'}
                                            onValueChange={() => handleToggle('instantBooking')}
                                            value={tempData.instantBooking}
                                        />
                                    </TouchableOpacity>
                                </View>

                                </>
                                ) : null }

                            </View>


                        </View>

                    </ScrollView>

                    {!onDate ? (
                    <View style={[styles.RowB, styles.ph15, styles.pt10, styles.bottomBar]}>
                        <TouchableOpacity
                            onPress={clearAll}
                            activeOpacity={0.7}>
                            <Text style={[styles.lineLabel, styles.pt10]}>Clear all</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleFilter()}
                            style={[styles.submitButton, styles.bgPurple, styles.b8, {}]}>
                            <MyText style={styles.buttonLabel}>Show results</MyText>
                        </TouchableOpacity>

                    </View>
                    
                    ) : null }

                </SafeAreaView>

            </View >

        </Modal >
    );
};


export default Filter;