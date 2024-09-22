import { View, Text, Dimensions, Platform, TouchableOpacity, Animated, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import MyText from '../../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { createListing } from '../../../../redux/actions/listingActions';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomToast from '../../../components/CustomToast/CustomToast';
import styles from '../Styles';
const { width, height } = Dimensions.get('window');

interface Props {
    formData: any;
    setFormData: any;
    navigation: any;
}

const Publish: React.FC<Props> = props => {
    const { formData, navigation, setFormData } = props;
    const [isLoading, setisLoading] = useState(false);

    
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

    const publish = () => {
        
        const desc = formData[0].desc;
        const title = formData[0].title;
        const mainPhoto = formData[0].mainPhoto;
        const IDverify = formData[0].IDverify;
        const photos = formData[0].photos;
        const price = formData[0].price;
        const discount = formData[0].discount;
        const contactInfo = formData[0].contactInfo;
        const minNights = formData[0].minNights;
        const maxNights = formData[0].maxNights;
        const maxBookingDate = formData[0].maxBookingDate;
        const checkIn = formData[0].checkIn;
        const checkOut = formData[0].checkOut;
        const maxPerson = formData[0].maxPerson;
        const beds = formData[0].beds;
        const bedrooms = formData[0].bedrooms;
        const bathrooms = formData[0].bathrooms;
        const bookingType = formData[0].bookingType;
        const longBooking = formData[0].longBooking;
        const wifi = formData[0].wifi;
        const location = formData[0].location;
        const extraCharge = formData[0].extraCharge;
        const calendar = formData[0].calendar;
        const cancelPolicy = formData[0].cancelPolicy;
        const amenities = formData[0].amenities
        const directions = formData[0].directions;
        const houseRules = formData[0].houseRules
        const aboutLocation = formData[0].aboutLocation;
        const safety = formData[0].safety;

        const data = {
            listingID: '',
            desc,
            title,
            mainPhoto,
            IDverify,
            photos,
            price,
            discount,
            contactInfo,
            minNights,
            maxNights,
            maxBookingDate,
            checkIn,
            checkOut,
            maxPerson,
            beds,
            bedrooms,
            bathrooms,
            bookingType,
            longBooking,
            wifi,
            location,
            extraCharge,
            calendar,
            cancelPolicy,
            amenities,
            directions,
            houseRules,
            aboutLocation,
            safety,
        };

        setisLoading(true);

        dispatch(createListing({ data }))
            .then(res => {

                setisLoading(false);
                setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'OwnerListings' }]
                })
            }, 500);

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


    
return (
        <>

            <ScrollView style={styles.ph15}>
                <View style={[styles.pt10, styles.alignCenter]}>

                    <Text style={[styles.largeLabel, styles.textCenter, styles.mb10]}>Its time to publish</Text>
                    <MyText style={[styles.userLabel, styles.textCenter, styles.mb20]}>Your listing will be submitted for review and will be available for bookings once approved.</MyText>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            publish();
                        }}
                        style={[styles.button, styles.Row, styles.alignCenter]}>
                        {isLoading ? (
                            <>
                        <MyText style={[styles.buttonLabel, styles.ph15]}>Publishing</MyText>
                        <ActivityIndicator size={"small"} color={'#fff'} />
                        </>
                        ) : (<MyText style={[styles.buttonLabel, styles.ph15]}>Publish</MyText>) }
                     
                    </TouchableOpacity>


 


                </View>
            </ScrollView>

            {show !== 0 ? (

                <Animated.View
                    style={{ transform: [{ translateY: slideAnim }], position: 'absolute', zIndex: 999, bottom: 0 }}>
                    <CustomToast
                        type={toastType}
                        msg={toastMsg}
                    />
                </Animated.View>
            ) : null}

        </>
    )
}

export default Publish;