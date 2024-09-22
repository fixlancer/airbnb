//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef, useCallback } from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    //  ScrollView,
    TouchableWithoutFeedback,
    FlatList,
    StatusBar,
    Platform,
    TextInput,
    RefreshControl,
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
import moment from 'moment';
import CalendarModal from './CalendarModal';
import ConfidenceGuarantee from '../ConfidenceGuarantee/Index';
import RulesModal from '../../screens/Listing/Modals/RulesModal';
import CancelPolicyModal from '../../screens/Listing/Modals/CancelPolicyModal';

const OrderBooking = ({ route, navigation }) => {

    const { listingID, mainPhoto, basePrice, minNights, maxNights, selectedNites, title,
        checkIn, checkOut, maxPerson, bookingType, location, extraCharge,
        safety, amenities, maxBookingDate,
        calendar, cancelPolicy, houseRules } = route.params;

    const [pay, setPay] = useState('Full');
    const [cautionFee, setCautionFee] = useState(0);
    const [cleaning, setCleaning] = useState(0);
    const [cautionDesc, setCautionDesc] = useState(false);
    const [dueDate, setDueDate] = useState('');

    const [checkInDate, setCheckInDate] = useState(checkIn);
    const [checkOutDate, setCheckOutDate] = useState(checkOut);
    const [nites, setNite] = useState(selectedNites);


    /*  const date = moment();
      const dateCreated = date.format('D MMM YY');
      const newDate = moment(dateCreated, 'D MMM YY');
      const dateb = moment(checkOutDate, 'D MMM YY');
  
      const diffDays = dateb.diff(newDate, 'days'); //get day between dates
  
  
      //RIGID
      const date1 = moment(checkInDate, 'D MMM YY');
      const subtractDate = checkInDate && date1.subtract(7, 'days');
      const newSubDate = checkInDate && subtractDate.format('D MMM YY');
  
  
      //MILD
      const date11 = moment(checkInDate, 'D MMM YY');
  
      const subDate = checkInDate && date11.subtract(4, 'days');
      const newSubDate2 = checkInDate && subDate.format('D MMM YY');
  
  
      //FLEXIBLE
      const date111 = moment(checkInDate, 'D MMM YY');
  
      const sub3 = checkInDate && date111.subtract(2, 'days');
      const newSubDate3 = checkInDate && sub3.format('D MMM YY');
  */

   //  const checkIn2 = moment(checkInDate, 'D MMM YY');
   //  const checkOut2 = moment(checkOutDate, 'D MMM YY');

      const date = new Date();
      const dateCreated = date;  
      
    const diffDays = (new Date(checkOutDate) - new Date(dateCreated)) / (1000 * 3600 * 24);


    //RIGID
    let date1 = new Date(checkInDate);
    date1.setDate(date1.getDate() - 7);
    const nSd = moment(date1, 'D MMM YY');
    const newSubDate = nSd.format('D MMM YY');


    //MILD
    let date11 = new Date(checkInDate);
    date11.setDate(date11.getDate() - 4);
    const nSd2 = moment(date11, 'D MMM YY');
    const newSubDate2 = nSd2.format('D MMM YY');


    //FLEXIBLE
    let date111 = new Date(checkInDate);
    date111.setDate(date111.getDate() - 2);
    const nSd3 = moment(date111, 'D MMM YY');
    const newSubDate3 = nSd3.format('D MMM YY');


    useEffect(() => {
        extraCharge && extraCharge.map((i, index) => {
            setCautionFee(i.cautionFee);
            setCleaning(i.cleaningFee);
        })

        if (cancelPolicy === 'Rigid') {
            setDueDate(newSubDate);
        }
        if (cancelPolicy === 'Mild') {
            setDueDate(newSubDate2)
        }
        if (cancelPolicy === 'Flexible') {
            setDueDate(newSubDate3)
        }

    }, [])


    const totalPrice = basePrice * nites + cautionFee + cleaning;
    const partialPrice = totalPrice / 2;

    const [isConfidence, setIsConfidence] = useState(false);
    const [isCalendar, setIsCalendar] = useState(false);
    const [isRules, setIsRules] = useState(false);
    const [isCancel, setIsCancel] = useState(false);
    const [isGuestCancel, setIsGuestCancel] = useState(false);


    const closeRules = () => {
        setIsRules(false)
    }

    const closeCancel = () => {
        setIsCancel(false);
    }

    const closeConfidence = () => {
        setIsConfidence(false);
    }

    const closeCalendar = () => {
        setIsCalendar(false);
    }



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
                        <Text style={styles.largeLabel}>Booking details</Text>
                        <Text></Text>
                    </View>
                </View>


                <ScrollView>
                    <View style={[styles.mb30]}>

                        <View style={[styles.bb, styles.ph15, { paddingVertical: 10, paddingBottom: 10, borderBottomWidth: 0, }]}>
                            <View style={[styles.Row]}>
                                <Image
                                    source={{uri: mainPhoto}}
                                    style={styles.img}
                                />
                                <View>


                                    <View style={styles.Row}>
                                        <IconM
                                            name={'location-outline'}
                                            size={moderateScale(18)}
                                            color={'#343434'}
                                            style={{ marginRight: 5 }}

                                        />

                                        {location && location.map((item, index) => (
                                            <View key={index}>
                                                <MyText style={[styles.userLabel, styles.mb15]}>{item.city}, {item.country} </MyText>
                                            </View>
                                        ))}
                                    </View>

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
                                        <MyText style={[styles.userLabel]}>{checkInDate.format('D MMM YY')} - {checkOutDate.format('D MMM YY')}</MyText>
                                    </View>

                                    <TouchableOpacity activeOpacity={0.9}
                                        onPress={() => setIsCalendar(true)}>
                                        <Text style={[styles.moreLabel]}>Edit dates</Text>

                                    </TouchableOpacity>

                                </View>
                            </View>


                        </View>

                        <View style={[styles.bb]}>

                            <Text style={[styles.largeLabel, styles.pl15, styles.mb30]}>Mode of payment</Text>

                            <View style={styles.lineBottom}>
                                <TouchableOpacity activeOpacity={0.9}
                                    onPress={() => setPay('Full')}
                                    style={[styles.RowB, styles.ph15]}>
                                    <View>
                                        <View style={[styles.Row, styles.mb10]}>
                                            <IconM
                                                name={pay === 'Full' ? 'radio-button-on' : 'radio-button-off'}
                                                size={moderateScale(20)}
                                                color={pay === 'Full' ? '#7E178E' : '#808080'}
                                                style={{ marginRight: 15 }}

                                            />
                                            <View>
                                                <Text style={[styles.userLabel]}>Full payment</Text>
                                                <MyText style={[styles.tinyLabel, styles.mb10]}>Pay the total price now</MyText>
                                            </View>
                                        </View>

                                    </View>

                                    <View>
                                        <Text style={[styles.userLabel, styles.mb10]}>{'\u20A6'}{totalPrice}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {cancelPolicy === 'NonRefundable' ? null : (

                                diffDays >= 14 ? (

                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={() => setPay('Partial')}
                                        style={[styles.RowB, styles.ph15,]}>
                                        <View style={{ width: '60%' }}>
                                            <View
                                                style={[styles.Row, styles.mb10]}
                                            >
                                                <IconM
                                                    name={pay === 'Partial' ? 'radio-button-on' : 'radio-button-off'}
                                                    size={moderateScale(20)}
                                                    color={pay === 'Partial' ? '#7E178E' : '#808080'}
                                                    style={{ marginRight: 15 }}

                                                />
                                                <View>
                                                    <Text style={[styles.userLabel]}>Partial payment</Text>
                                                    <MyText style={[styles.tinyLabel, styles.mb10, { width: width - 100 }]}>Pay {'\u20A6'}{totalPrice / 2} now, and pay the rest
                                                        on {dueDate}</MyText>
                                                </View>
                                            </View>

                                        </View>

                                        <View>
                                            <Text style={[styles.userLabel, styles.mb10]}>{'\u20A6'}{totalPrice / 2}</Text>
                                        </View>
                                    </TouchableOpacity>

                                ) : (
                                    <View
                                        style={[styles.RowB, styles.ph15, { opacity: 0.5 }]}>
                                        <View style={{ width: '60%' }}>
                                            <View
                                                style={[styles.Row, styles.mb10]}
                                            >
                                                <IconM
                                                    name={pay === 'Partial' ? 'radio-button-on' : 'radio-button-off'}
                                                    size={moderateScale(20)}
                                                    color={pay === 'Partial' ? '#7E178E' : '#808080'}
                                                    style={{ marginRight: 15 }}

                                                />
                                                <View>
                                                    <Text style={[styles.userLabel]}>Partial payment</Text>
                                                    <MyText style={[styles.tinyLabel, styles.mb10, { width: width - 100 }]}>Your order is not eligible for partial payment</MyText>
                                                </View>
                                            </View>

                                        </View>

                                        <View>
                                            <Text style={[styles.userLabel, styles.mb10]}>{'\u20A6'}{totalPrice / 2}</Text>
                                        </View>
                                    </View>
                                )
                            )}

                        </View>

                        <View style={[styles.bb]}>
                            <View style={[styles.Row, styles.ph15, { paddingBottom: 0 }]}>

                                <IconM
                                    name={'shield-checkmark'}
                                    size={moderateScale(40)}
                                    color={'#1cc88a'}
                                    style={{ marginRight: 15, }}
                                />

                                <View>
                                    <Text style={[styles.largeLabel, {}]}>Book with Confidence</Text>

                                    <MyText style={[styles.tinyLabel, { width: width - 80 }]}>From the moment you book until your stay is complete, we're here to help your stay go right</MyText>
                                    <TouchableOpacity activeOpacity={0.7}

                                        onPress={() => setIsConfidence(true)}>
                                        <Text style={[styles.moreLabel, styles.pt5]}>Learn more</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>




                        <View style={[styles.bb, styles.mb30]}>
                            <Text style={[styles.largeLabel, styles.pl15, styles.mb30]}>Summary</Text>

                            <View style={styles.lineBottom}>
                                <View style={[styles.RowB, styles.mb10, styles.ph15]}>
                                    <MyText style={[styles.userLabel]}>{'\u20A6'}{basePrice} x {nites} nights</MyText>

                                    <MyText style={[styles.userLabel]}>{'\u20A6'}{basePrice * nites}</MyText>

                                </View>
                            </View>

                            {cleaning > 0 ? (
                                <View style={styles.lineBottom}>
                                    <View style={[styles.RowB, styles.mb10, styles.ph15]}>
                                        <MyText style={[styles.userLabel]}>Cleaning fee</MyText>

                                        <MyText style={[styles.userLabel]}>{'\u20A6'}{cleaning}</MyText>

                                    </View>
                                </View>
                            ) : null}

                            {cautionFee > 0 ? (
                                <View style={styles.lineBottom}>
                                    <View style={[styles.RowB, styles.mb10, styles.ph15]}>
                                        <View style={styles.Row}>
                                            <MyText style={[styles.userLabel]}>Caution fee </MyText>
                                            <TouchableOpacity
                                                onPress={() => setCautionDesc(!cautionDesc)}>
                                                <IconM
                                                    name={'help-circle'}
                                                    size={moderateScale(18)}
                                                    color={'#343434'}
                                                    style={{ marginLeft: 10 }}

                                                />
                                            </TouchableOpacity>
                                        </View>

                                        <MyText style={[styles.userLabel]}>{'\u20A6'}{cautionFee}</MyText>
                                    </View>

                                    {cautionDesc ? (

                                        <MyText style={[styles.tinyLabel, styles.pl15, {}]}>Most property owners request you pay a caution fee upfront when
                                            making a booking. {"\n"}This fee is refunded automatically at the end of your stay if no property damage is recorded.
                                        </MyText>
                                    ) : null}
                                </View>
                            ) : null}

                            {pay === 'Partial' ? (
                                <>
                                    <View style={[styles.RowB, styles.mb10, styles.ph15]}>
                                        <Text style={[styles.titleLabel]}>Due now </Text>
                                        <Text style={[styles.titleLabel]}>{'\u20A6'}{partialPrice}</Text>
                                    </View>

                                    <View style={[styles.RowB, styles.mb10, styles.ph15]}>
                                        <MyText style={[styles.userLabel]}>Due on {dueDate}</MyText>
                                        <MyText style={[styles.userLabel]}>{'\u20A6'}{partialPrice}</MyText>
                                    </View>
                                </>

                            ) : (
                                <View style={[styles.RowB, styles.ph15]}>
                                    <Text style={[styles.titleLabel]}>Total to pay </Text>
                                    <Text style={[styles.titleLabel]}>{'\u20A6'}{totalPrice}</Text>
                                </View>

                            )}

                        </View>

                        <View style={[styles.ph15,]}>

                            <View>

                                {checkInDate && checkOutDate ? (

                                    <>
                                        <TouchableOpacity
                                            onPress={() => setIsRules(true)}
                                            style={[styles.RowB, styles.mb20]}>
                                            <MyText style={[styles.subLabel]}>House Rules </MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => setIsCancel(true)}
                                            style={[styles.RowB, styles.mb20]}>
                                            <MyText style={[styles.subLabel]}>Cancellation Policy </MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity

                                            style={[styles.RowB, styles.mb20]}>
                                            <MyText style={[styles.subLabel]}>Guest Cancellation Policy </MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                        <MyText style={[styles.tinyDark, styles.mb20, styles.pt10]}>I agree to the <Text style={styles.tinyMoreLabel}>House Rules</Text>, <Text style={styles.tinyMoreLabel}>Cancellation Policy</Text> and the <Text style={styles.tinyMoreLabel}>Guest Cancellation Policy</Text>. I
                                            also agree to pay the total amount shown.</MyText>

                                        <TouchableOpacity activeOpacity={0.7}
                                            onPress={() => navigation.navigate('OrderConfirmation', {
                                                listingID: listingID,
                                                nite: nites,
                                                houseRules: houseRules,
                                                cancelPolicy: cancelPolicy,
                                                amenities: amenities,
                                                safety: safety,
                                                mainPhoto: mainPhoto,
                                                location: location,
                                                daysApart: diffDays,
                                                pay: pay,
                                                dueDate: dueDate,
                                                dueToPay: pay === 'Partial' ? partialPrice : totalPrice,
                                                totalPrice: totalPrice,
                                                basePrice: basePrice,
                                                cautionFee: cautionFee,
                                                cleaningFee: cleaning,
                                                checkIn: checkInDate,
                                                checkOut: checkOutDate,
                                                maxPerson: maxPerson,

                                            })}

                                            style={styles.submitButton}>
                                            <MyText style={styles.buttonLabel}>Proceed to Pay</MyText>
                                        </TouchableOpacity>

                                    </>
                                ) : (
                                    <View style={styles.RowB}>
                                        <MyText style={[styles.subLabel, { color: '#808080', marginTop: 10, }]}>
                                            Add dates to continue</MyText>

                                        <TouchableOpacity activeOpacity={0.7}
                                            style={[styles.submitButton, { opacity: 0.6 }]}>
                                            <MyText style={styles.buttonLabel}>Add Date</MyText>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>

                        </View>

                    </View>
                </ScrollView>

            </SafeAreaView>


            <ConfidenceGuarantee
                isOpen={isConfidence}
                handleChange={closeConfidence}
            />

            <RulesModal
                isOpen={isRules}
                data={houseRules}
                bgColor={'#fff'}
                handleChange={closeRules}
            />


            <CancelPolicyModal
                isOpen={isCancel}
                item={cancelPolicy}
                dateCreated={dateCreated}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                bgColor={'#fff'}
                handleChange={closeCancel}
            />

            <CalendarModal
                isOpen={isCalendar}
                maxNights={maxNights}
                checkInD={(text) => setCheckInDate(text)}
                checkOutD={(text) => setCheckOutDate(text)}
                nite={(text) => setNite(text)}
                minNights={minNights}
                maxBookingDate={maxBookingDate}
                calendar={calendar}
                iniCheckIn={checkIn}
                iniCheckOut={checkOut}
                iniNites={selectedNites}
                handleChange={closeCalendar}
            />

        </View>

    )
}


export default OrderBooking;