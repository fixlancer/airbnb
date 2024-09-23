import { View, Text, Dimensions, Platform, TouchableOpacity, 
StyleSheet, StatusBar, ActivityIndicator, Image, RefreshControl } from 'react-native'
import React, { useEffect, useState, useRef } from 'react';
import MyText from '../../components/DefaultTextComponent/MyText';
import styles from './Styles';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import CancelPolicy from './CancelPolicy';
import Amenities from './Amenities';
import Rules from './Rules';
import Safety from './Safety';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

interface Props {
  navigation: any;
  setIsPhotos: any;
  setIsAmenities: any;
  setIsRules: any;
  setIsAbout: any;
  setIsAboutLoc: any;
  setIsSafety: any;
  setSignIn: any;
  setisRefreshing: any;
  refresh: any;
  userID: any;
}

const ViewListing: React.FC<Props> = props => {

  const {navigation,userID, setIsPhotos, refresh, setIsAmenities, setIsRules, setIsAbout, setIsAboutLoc, setIsSafety, setSignIn, setisRefreshing} = props;

  const { listingby_ID } = useSelector((state: RootState) => state.listingReducers);


  const minDate = new Date();

  const[listData, setListData] = useState([]);
      const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const [checkInDate2, setCheckInDate2] = useState(null);
    const [checkOutDate2, setCheckOutDate2] = useState(null);
    const [maxNights, setMaxNights] = useState(7);
    const [minRange, setMinRange] = useState(1);
    const [blocked, setBlocked] = useState([]);
    const [maxD, setMaxD] = useState('');
    const [maxBookdate, setMaxBookDate] = useState(0);


    /* 
     const [desc, setDesc] = useState('');
     const [photos, setPhotos] = useState([]);
     const [amenities, setAmenities] = useState([]);
     const [location, setLocation] = useState([]);
     const [safety, setSafety] = useState([]);
     const [aboutLocation, setAboutLocation] = useState('');
     const [houseRules, setHouseRules] = useState([]);
     const [calendar, setCalender] = useState([]);
     */

    const [nite, setNite] = useState(0);


    const maxRange = maxNights;

  const date = new Date();
  const dateCreated = date;

  const refCal = useRef(null);


  useEffect(() => {

}, [maxNights])


useEffect(() => {
        listingby_ID.listing?.calendar.map((item) => {
        setBlocked(item.blocked);

    })

    /*    const newD = item.blocked.map((i)=> {
            var d = new Date(i);
            return `${d.getDate()+1} ${d.toLocaleDateString('default', {month : 'short'})} ${d.getFullYear()}`;
        })
        setNewBlocked(newD);
     //   console.log(newD);
     */

     if(maxBookdate){
    const futureDate = new Date(minDate.setDate(minDate.getDate() + maxBookdate));
    setMaxD(futureDate);
     }


}, [])


useEffect(() => {

    setListData(listingby_ID.listing);
    setMaxNights(listingby_ID.listing?.maxNights);
    setMinRange(listingby_ID.listing?.minNights);
    setMaxBookDate(listingby_ID.listing?.maxBookingDate)

}, []);


useEffect(() => {
    if (checkInDate) {
        let closest = Infinity;
        listingby_ID.listing?.blocked?.length > 0 ? (
            listingby_ID.listing?.blocked?.forEach(function (d) {
            const myDate = new Date(d);
            if (myDate > checkInDate && (myDate < new Date(closest) || myDate < closest)) {
                closest = d;
            }
        }
        )
        ) : null

        setMaxD(closest);
    }

}, [checkInDate])


useEffect(() => {

    if (checkOutDate) {
        const diffDays = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 3600 * 24);
        setNite(diffDays);
    }

}, [checkOutDate]);


const handleDate = (date, type) => {

    const futureDate = new Date(minDate.setDate(minDate.getDate() + maxBookdate));

    if (type === 'END_DATE') {
        if (date)
            setCheckOutDate2(date.format('D MMM YY'));
        setCheckOutDate(date);
        setMaxD(futureDate);

    } else {
        if (date) {
            setCheckInDate2(date.format('D MMM YY'));
            setCheckInDate(date);
            setCheckOutDate2(null);
            setCheckOutDate(null);

        }
    }

}



useFocusEffect(
    React.useCallback(() => {
        const goBack = () => {

        }

        return () => goBack();

    }, [])
)


const clearDates = () => {

    const futureDate = new Date(minDate.setDate(minDate.getDate() + maxBookdate));
    refCal.current.resetSelections()
    setCheckInDate(null)
    setCheckOutDate(null);
    setCheckInDate2(null)
    setCheckOutDate2(null);
    setMaxD(futureDate);
}



const Header = () => {

    return (
        <>

            <View style={styles.header}>
                <View style={styles.RowB}>
                    <View style={[styles.bgLay, {}]}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                            <Icon
                                name={'arrow-back-ios'}
                                size={moderateScale(20)}
                                color={'#fff'}
                                style={{ marginLeft: 4, alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>


                    <View style={[styles.bgLay, { marginTop: 0, }]}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                            <IconM
                                name={'heart-outline'}
                                size={moderateScale(20)}
                                color={'#fff'}
                                style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}




const HeaderTop = () => {

    return (

        <>
            <SafeAreaView
                style={{
                    height: height,
                    width: width,
                    flex: 1,
                    backgroundColor: '#fff',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

                <View style={[styles.header2, { backgroundColor: '#fff', marginTop: -60, height: 'auto', paddingTop: moderateScale(35) }]}>

                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Icon
                            name={'arrow-back-ios'}
                            size={moderateScale(20)}
                            color={'#343434'}
                            style={{ marginLeft: 4, }} />
                    </TouchableOpacity>


                </View>
            </SafeAreaView>
        </>
    )
}


    return (


                    <>
                        <AnimatedScrollView
                            HeaderNavbarComponent={<Header />}
                            TopNavBarComponent={<HeaderTop />}
                            topBarHeight={moderateScale(70)}
                            headerMaxHeight={moderateScale(280)}
                            headerImage={{uri: listingby_ID.listing?.mainPhoto}}
                        >


                            <View style={styles.midBg}>
                                <View style={[styles.pl10, styles.bgDark]}>

                                    <View style={[styles.Row,]}>

                                        {listingby_ID.listing?.photos.slice(0, 5).map((item, index) => {
                                            return (
                                                <TouchableOpacity activeOpacity={0.7} key={index}>
                                                    <Image
                                                        source={{uri: item}}
                                                        style={styles.imgs}
                                                        imageStyle={{ borderRadius: 50 }}
                                                    />
                                                </TouchableOpacity>
                                            )

                                        })
                                        }

                                    </View>
                                    {listingby_ID.listing?.photos.length > 3 ? (
                                    <TouchableOpacity activeOpacity={0.7} style={{
                                        position: 'absolute', right: 0, backgroundColor: 'rgba(0, 0, 0 , 0.8)', height: moderateScale(70), alignItems: 'center', justifyContent: 'center',
                                        top: 5, width: moderateScale(60), borderTopLeftRadius: 10, borderBottomLeftRadius: 10
                                    }}
                                        onPress={() => setIsPhotos()}>

                                        <Text style={[styles.extraLabel, styles.textCenter, { color: '#fff', }]}>{listingby_ID.listing?.photos.length - 3}+</Text>
                                    </TouchableOpacity>
                                    ) : null }
                                </View>

                                <View style={[styles.ph15, styles.bb]}>
                                    <Text style={[styles.largeLabel, styles.mb10]}>{listingby_ID.listing?.title}</Text>

                                    <View style={[styles.mb20]}>
                                        <View style={[styles.Row, { width: '88%' }]}>
                                            <IconM
                                                size={moderateScale(15)}
                                                name={'location-outline'}
                                                color={'#343434'}
                                                style={{ marginRight: 5, }}
                                            />

                                            {listingby_ID.listing?.location.map((item, index) => (
                                                <View key={index}>
                                                    <Text style={[styles.tinyDark, { maxWidth: '100%' }]}>{item.street}, {item.city} </Text>
                                                </View>
                                            ))}
                                        </View>

                                        <View style={{ position: 'absolute', right: 0, }}>
                                            <TouchableOpacity activeOpacity={0.7}
                                                style={{ width: 'auto' }}>
                                                <MyText style={[styles.tinyDark, { textAlign: 'right', textDecorationLine: 'underline' }]}>View on map</MyText>
                                            </TouchableOpacity>
                                        </View>

                                    </View>


                                    <View style={[styles.Row, styles.mb20, styles.bgOver]}>
                                        <View style={[styles.bgItem, { borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: '#ddd', }]}>
                                            <IconM
                                                size={moderateScale(20)}
                                                name={'people'}
                                                color={'#343434'}
                                                style={{ marginBottom: 5 }}
                                            />
                                            <MyText style={styles.mediumLabel}>{listingby_ID.listing?.maxPerson} occupants</MyText>
                                        </View>

                                        <View style={[styles.bgItem, styles.ph15, { borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: '#ddd', }]}>
                                            <IconM
                                                size={moderateScale(20)}
                                                name={'md-bed'}
                                                color={'#343434'}
                                                style={{ marginBottom: 5 }}
                                            />
                                            <MyText style={styles.mediumLabel}>{listingby_ID.listing?.beds} beds / {listingby_ID.listing?.bedrooms} rooms</MyText>
                                        </View>

                                        <View style={styles.bgItem}>
                                            <Icon
                                                size={moderateScale(20)}
                                                name={'bathtub'}
                                                color={'#343434'}
                                                style={{ marginBottom: 5 }}
                                            />
                                            <MyText style={styles.mediumLabel}>{listingby_ID.listing?.bathrooms} bathrooms</MyText>
                                        </View>

                                    </View>



                                    <Text numberOfLines={4} style={[styles.subLabel]}>{listingby_ID.listing?.desc}</Text>
                                    <TouchableOpacity activeOpacity={0.7}

                                        onPress={() => setIsAbout()}>
                                        <Text style={styles.moreLabel}>See more</Text>
                                    </TouchableOpacity>
                                </View>



                                <View style={[styles.ph15, styles.bb]}>
                                    <Text style={[styles.largeLabel, styles.mb10]}>Apartment features</Text>

                                    <Amenities item={listingby_ID.listing?.amenities} />

                                    <TouchableOpacity activeOpacity={0.7}
                                        onPress={() => setIsAmenities(true)}
                                    >
                                        <Text style={[styles.moreLabel, styles.pt15]}>See all features</Text>
                                    </TouchableOpacity>

                                </View>



                                <View style={[styles.ph15, styles.bb]}>
                                    <Text style={[styles.largeLabel, styles.mb10]}>About the location</Text>

                                    <MyText style={[styles.tinyLabel, styles.mb20]}>Details on how to check-in and directions to this apartment will be made known to you immediately after booking.</MyText>

                                    <Text style={[styles.largeLabel2]}>{listingby_ID.listing?.location[0].city}, {listingby_ID.listing?.location[0].country} </Text>

                                    <Text numberOfLines={4} style={[styles.subLabel]}>{listingby_ID.listing?.aboutLocation}</Text>

                                    <TouchableOpacity activeOpacity={0.7}

                                        onPress={() => setIsAboutLoc()}>
                                        <Text style={[styles.moreLabel, styles.pt15]}>See more</Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={[styles.bb, styles.ph15]}>
                                    {checkOutDate && checkOutDate ? (
                                        <Text style={styles.largeLabel}>{nite} nights</Text>
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
                                            //   customDatesStyles={customD}
                                            onDateChange={handleDate}
                                            ref={refCal}
                                        />
                                    </View>

                                    <TouchableOpacity activeOpacity={0.7}
                                        onPress={() => clearDates()}
                                    >
                                        <Text style={[styles.moreLabel, styles.pt15, { color: '#343434' }]}>Clear dates</Text>
                                    </TouchableOpacity>

                                </View>


                                <View style={[styles.ph15, styles.bb]}>
                                    <Text style={[styles.largeLabel, styles.mb10]}>House rules</Text>

                                    {listingby_ID.listing?.houseRules.map((item, index) => (
                                        <View key={index}>
                                            <Rules item={item} />
                                        </View>
                                    ))}

                                    <TouchableOpacity activeOpacity={0.7}
                                        onPress={() => setIsRules()}>
                                        <Text style={[styles.moreLabel, styles.pt15]}>See more</Text>
                                    </TouchableOpacity>

                                </View>


                                <View style={[styles.ph15, styles.bb]}>
                                    <Text style={[styles.largeLabel, styles.mb10]}>Safety considerations</Text>

                                    {listingby_ID.listing?.amenities[0].notIncluded.slice(0, 2).map((item, index) => (
                                        <View key={index}>
                                            <Safety item={item} />
                                        </View>
                                    ))}



                                    <TouchableOpacity activeOpacity={0.7}
                                        onPress={() => setIsSafety()}>
                                        <Text style={[styles.moreLabel, styles.pt15]}>See more</Text>
                                    </TouchableOpacity>
                                </View>



                                <View style={[styles.ph15, styles.bb]}>
                                    <Text style={[styles.largeLabel, styles.mb10]}>Cancellation policy</Text>
                                    {checkInDate && checkOutDate ? (
                                        <>
                                            <MyText style={[styles.tinyLabel, styles.mb10]}>Please only book this space if you are comfortable with the owner’s cancellation policies.</MyText>

                                            <Text style={[styles.largeLabel2, styles.mb10, styles.pt10]}>Cancel:</Text>
                                        </>
                                    ) : (
                                        <MyText style={[styles.tinyLabel, styles.mb10, {}]}>
                                            Add dates of your stay to get cancellation details for this apartment</MyText>
                                    )}


                                    <CancelPolicy item={listingby_ID.listing?.cancelPolicy} checkInDate={checkInDate} checkOutDate={checkOutDate} dateCreated={dateCreated} />

                                </View>


                                <View style={[styles.ph15, styles.bb]}>

                                    <View style={[styles.Row, styles.mb10]}>
                                        <IconM
                                            size={moderateScale(15)}
                                            name={'star'}
                                            color={'#F2A715'}
                                            style={{ marginTop: 1, marginRight: 5, }}
                                        />
                                        <Text style={[styles.largeLabel2, styles.mb10]}>4.1 (235 reviews)</Text>
                                    </View>


                                    <View style={[styles.reviewBox, styles.ph15]}>
                                        <View style={[styles.RowB, styles.mb10]}>
                                            <View style={styles.Row}>
                                                <IconM
                                                    size={moderateScale(15)}
                                                    name={'star'}
                                                    color={'#F2A715'}
                                                    style={{ marginTop: 2, marginRight: 5, }}
                                                />

                                                <Text style={[styles.subLabel,]}>4.5</Text>
                                            </View>

                                            <View>
                                                <Text style={[styles.userLabel, styles.pb5]}>{listingby_ID.listing?.owner[0].username}</Text>
                                            </View>
                                        </View>
                                        <Text numberOfLines={4} style={[styles.subLabel]}>{listingby_ID.listing?.desc}</Text>
                                    </View>
                                </View>


                                <View style={[styles.ph15, styles.bb2]}>
                                    <Text style={[styles.largeLabel, styles.mb10]}>Recommended for you</Text>


                                </View>

                            </View>


                        </AnimatedScrollView>


                        <View style={[styles.ph15, styles.pt10, styles.bottomBar]}>

                            <View>

                                {userID === '' ? (

                                    <View style={styles.RowB}>
                                        <TouchableOpacity activeOpacity={0.7}
                                        //</View>  onPress={() => setIsCalendar(true)}
                                        >
                                            <MyText style={[styles.userLabel, { color: '#343434', marginTop: 10, }]}>
                                                Please sign in to see price</MyText>
                                        </TouchableOpacity>

                                        <TouchableOpacity activeOpacity={0.7}
                                            onPress={() => setSignIn()}
                                            style={[styles.submitButton]}>
                                            <MyText style={styles.buttonLabel}>Sign In / Register</MyText>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <>
                                        {checkInDate && checkOutDate ? (
                                            <View style={styles.RowB}>
                                                <View>
                                                    <Text style={[styles.titleLabel]}>{'\u20A6'}{listingby_ID.listing?.price[0].basePrice} <MyText style={[styles.tinyLabel]}>/ night</MyText></Text>
                                                    <MyText style={[styles.mediumLabel,]}>{checkInDate2} - {checkOutDate2}</MyText>
                                                </View>

                                                <TouchableOpacity activeOpacity={0.7}
                                                    onPress={() => navigation.navigate('OrderBooking', {
                                                        listingID: listingby_ID.listing?.listingID, title: listingby_ID.listing?.title,
                                                        //  maxDay: maxD,
                                                        maxBookingDate: listingby_ID.listing?.maxBookingDate,
                                                        minNights: listingby_ID.listing?.minNights,
                                                        maxNights: maxNights, selectedNites: nite,
                                                        basePrice: listingby_ID.listing?.price[0].basePrice,
                                                        extraCharge: listingby_ID.listing?.extraCharge,
                                                        mainPhoto: listingby_ID.listing?.mainPhoto,
                                                        checkIn: checkInDate, checkOut: checkOutDate,
                                                        bookingType: listingby_ID.listing?.bookingType,
                                                        amenities: listingby_ID.listing?.amenities,
                                                        calendar: listingby_ID.listing?.calendar,
                                                        location: listingby_ID.listing?.location,
                                                        houseRules: listingby_ID.listing?.houseRules,
                                                        cancelPolicy: listingby_ID.listing?.cancelPolicy,
                                                        safety: listingby_ID.listing?.amenities.notIncluded,
                                                        maxPerson: listingby_ID.listing?.maxPerson
                                                    })}

                                                    style={styles.submitButton}>
                                                    <MyText style={styles.buttonLabel}>Book Now</MyText>
                                                </TouchableOpacity>
                                            </View>
                                        ) : (
                                            <View style={styles.RowB}>
                                                <TouchableOpacity activeOpacity={0.7}
                                                //</View>  onPress={() => setIsCalendar(true)}
                                                >
                                                    <MyText style={[styles.userLabel, { color: '#343434', marginTop: 10, }]}>
                                                        Add dates to see price</MyText>
                                                </TouchableOpacity>

                                                <TouchableOpacity activeOpacity={0.7}
                                                    style={[styles.submitButton, { opacity: 0.6 }]}>
                                                    <MyText style={styles.buttonLabel}>Book Now</MyText>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                    </>
                                )}
                            </View>


                        </View>

                  
            
        </>
    )
}

export default ViewListing;
