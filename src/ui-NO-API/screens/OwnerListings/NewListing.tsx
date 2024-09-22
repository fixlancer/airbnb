//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useState, useRef, useCallback, useEffect } from 'react';
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
    Animated,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { createListing } from '../../../redux/actions/listingActions';
import CustomToast from '../../components/CustomToast/CustomToast';
import Title from './Forms/Title';
import Person from './Forms/Person';
import Loc from './Forms/Loc';
import Map from './Forms/Map';
import AboutLoc from './Forms/AboutLoc';
import Directions from './Forms/Directions';
import Desc from './Forms/Desc';
import Amenities from './Forms/Amenities';
import Rules from './Forms/Rules';
import Booking from './Forms/Booking';
import Booking2 from './Forms/Booking2';
import Policies from './Forms/Policies';
import Pricing from './Forms/Pricing';
import Discount from './Forms/Discount';
import Extras from './Forms/Extras';
import Photos from './Forms/Photos';
import Calendar from './Forms/Calendar';
import Publish from './Forms/Publish';
import PolicyLearn from '../../components/PolicyLearn/Index';
import PhotoUpload from '../../components/PhotoUpload/Index';

const FormItem = ({ page, formData, setFormData, setisPolicy, setisUpload, setLocalimg, imgUrl, navigation }) => {
    switch (page) {
        case 0:
            return <Title formData={formData} setFormData={(item) => setFormData(item)} />
        case 1:
            return <Person formData={formData} setFormData={(item) => setFormData(item)} />
        case 2:
            return <Loc formData={formData} setFormData={(item) => setFormData(item)} />
        case 3:
            return <Map formData={formData} setFormData={(item) => setFormData(item)} />
        case 4:
            return <AboutLoc formData={formData} setFormData={(item) => setFormData(item)} />
        case 5:
            return <Directions formData={formData} setFormData={(item) => setFormData(item)} />
        case 6:
            return <Desc formData={formData} setFormData={(item) => setFormData(item)} />
        case 7:
            return <Amenities formData={formData} setFormData={(item) => setFormData(item)} />
        case 8:
            return <Booking formData={formData} setFormData={(item) => setFormData(item)} />
        case 9:
            return <Booking2 formData={formData} setFormData={(item) => setFormData(item)} />
        case 10:
            return <Rules formData={formData} setFormData={(item) => setFormData(item)} />
        case 11:
            return <Policies formData={formData} setFormData={(item) => setFormData(item)} setPolicyLearn={() => setisPolicy(true)} />
        case 12:
            return <Pricing formData={formData} setFormData={(item) => setFormData(item)} />
        case 13:
            return <Discount formData={formData} setFormData={(item) => setFormData(item)} />
        case 14:
            return <Extras formData={formData} setFormData={(item) => setFormData(item)} />
        case 15:
            return <Photos formData={formData} setFormData={(item) => setFormData(item)} setUpload={() => setisUpload(true)} setLocalimg={(value) => setLocalimg(value)} imgUrl={imgUrl} />
        case 16:
            return <Calendar formData={formData} setFormData={(item) => setFormData(item)} />
        case 17:
            return <Publish formData={formData} setFormData={(item) => setFormData(item)} navigation={navigation} />
        default:
            return <Title formData={formData} setFormData={(item) => setFormData(item)} />
    }
}

const NewListing = ({ route, navigation }) => {

    const [isLoading, setisLoading] = useState(false);
    const [isPolicy, setisPolicy] = useState(false);
    const [isUpload, setisUpload] = useState(false);
    const [localimg, setLocalimg] = useState([]);
    const [imgUrl, setImgUrl] = useState([]);

    const dispatch = useDispatch();


    const [formData, setFormData] = useState([
        {
            listingID: '',
            desc: '',
            title: '',
            mainPhoto: null,
            IDverify: 0,
            photos: [],
            price: [{
                basePrice: 20000,
                firstPrice: 0,
                weekendPrice: 0,
                monthlyPrice: 0,
            }],
            discount: [
                {
                    firstDiscount: 10,
                    weekendDiscount: 0,
                    monthlyDiscount: 0,
                }
            ],
            contactInfo: [{
                name: '',
                phone: '',
                isVerified: 0,
            }],
            minNights: 1,
            maxNights: 7,
            maxBookingDate: 1095,
            checkIn: '2PM',
            checkOut: '11AM',
            maxPerson: 0,
            beds: 0,
            bedrooms: 0,
            bathrooms: 0,
            bookingType: 'Instant',
            longBooking: true,
            wifi: [{
                network: '',
                password: '',
            },
            ],
            location: [
                {
                    street: '',
                    city: '',
                    state: '',
                    country: 'Nigeria',
                    latitude: 0,
                    longitude: 0,
                }
            ],
            extraCharge: [
                {
                    cleaningFee: '',
                    cautionFee: '',
                },
            ],
            calendar: [
                {
                    blocked: [],
                    autoBlocked: [],
                    manualBlocked: [],
                    agreement: 0,
                }
            ],
            cancelPolicy: 'Mild',
            amenities: [
                {
                    propertyType: [],
                    outsideView: [],
                    bathroom: [],
                    bedroom: [],
                    entertainment: [],
                    cooling: [],
                    internet: [],
                    safety: [],
                    kitchen: [],
                    outdoor: [],
                    parking: [],
                    services: [],
                    notIncluded: []
                },
            ],
            directions: '',
            houseRules: [{
                petsAllowed: -1,
                maxPerson: -1,
                smoking: -1,
                party: -1,
                checkIn: '2PM',
                checkOut: '11AM',
                additionalRules: [],
            }],
            aboutLocation: '',
            safety: [{
                noise: 0,
                stairs: 0,
                children: -1,
                infant: -1,
            }],
        }
    ])

    const closeUpload = () => {
        setisUpload(false)
    }

    const closePolicy = () => {
        setisPolicy(false)
    }

    useEffect(() => {
        const updatedData = [...formData];
        updatedData[0].photos = imgUrl;
        setFormData(updatedData);
    }, [imgUrl])

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

        
    const [page, setPage] = useState(0);
    const [percent, setPercent] = useState(5.55);

    const handleNext = () => {

        /*     if (page == 0) {
                 if (formData[0].title == '') {
                     showToast('Warning', 'Please enter a title');
                 } else if (formData[0].amenities[0].propertyType.length > 0) {
                     setPage(page + 1);
                 } else {
                     showToast('Warning', 'Please select atleast one type of apartment');
                 }
             }
     
             if (page == 1) {
                 if (formData[0].maxPerson == 0) {
                     showToast('Warning', 'Please select the number of persons that can stay');
                 } else if (formData[0].bedrooms == 0) {
                     showToast('Warning', 'Please select the number of bedrooms');
                 } else if (formData[0].beds == 0) {
                     showToast('Warning', 'Please select the number of beds');
                 } else if (formData[0].bathrooms == 0) {
                     showToast('Warning', 'Please select the number of bathrooms');
                 } else {
                     setPage(page + 1);
                 }
             }
     
             if (page == 2) {
                 if (formData[0].location[0].street == '') {
                     showToast('Warning', 'Please enter the street your place is located');
                 } else if (formData[0].location[0].city == '') {
                     showToast('Warning', 'Please enter the city your place is located');
                 } else if (formData[0].location[0].state == '') {
                     showToast('Warning', 'Please enter the state your place is located');
                 } else {
                     setPage(page + 1);
                 }
             }
     
             if (page == 3) {
                 if (formData[0].location[0].longitude == 0) {
                     showToast('Warning', 'Please put the pin the map');
                 } else {
                     setPage(page + 1);
                 }
             }
     
     
              if (page == 4) {
                 if (formData[0].aboutLocation.length < 10 ) {
                     showToast('Warning', 'Please enter atleast 10 characters');
                 } else {
                     setPage(page + 1);
                 }
             }

             if (page == 5) {
                 if (formData[0].directions.length < 10 ) {
                     showToast('Warning', 'Please enter atleast 10 characters');
                 } else if((formData[0].contactInfo[0].name = '' ) {
                     showToast('Warning', 'Contact name must be filled');
                 } else if((formData[0].contactInfo[0].phone = '' ) {
                    showToast('Warning', 'Contact phone must be filled');
                 } else if((formData[0].contactInfo[0].isVerified = 0 ) {
                    showToast('Warning', 'Contact number must be verified');
                 } else {
                     setPage(page + 1);
                 }
             }
  
              if (page == 6) {
              if (formData[0].desc.length < 10) {
                  showToast('Warning', 'Please enter atleast 10 characters');
              } else {
                  setPage(page + 1);
              }
          }
        */

        setPage(page + 1);
        setPercent(percent + 5.55);
    }


    const handlePrev = () => {

        setPage(page - 1);
        setPercent(percent - 5.55);
    }

    const handleSave = () => {

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
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'OwnerListings' }]
                })

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

        <View style={[styles.container, styles.bgWhite]}>
            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

                <View style={[styles.newModalHeader, styles.RowB, styles.bgWhite]}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <IconM
                            name={'close-circle-outline'}
                            size={moderateScale(25)}
                            color={'#343434'}
                            style={{ marginTop: 0, }} />

                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.7}
                        onPress={() => handleSave()}
                        style={[styles.Row, styles.pt5]}>
                        {page !== 17 ? (

                            isLoading ? (
                                <>
                                    <Text style={[styles.userLabel, styles.textPurple, styles.mr5]}>Saving</Text>
                                    <ActivityIndicator size={"small"} color={'#7E178E'} />
                                </>
                            ) : (<Text style={[styles.userLabel, styles.textPurple]}>Save & Exit</Text>)

                        ) : null}
                    </TouchableOpacity>

                </View>


                <View style={[{ flex: 1, backgroundColor: '#fff', }]}>

<FormItem formData={formData} setFormData={setFormData} page={page} setisPolicy={setisPolicy} setisUpload={setisUpload} setLocalimg={setLocalimg} imgUrl={imgUrl} navigation={navigation} />

                </View>

            </SafeAreaView>

            <View>
                <View style={[styles.progressBar, { width: "" + percent + "%" }]} />
                <View style={[styles.pt10, styles.ph15, styles.bottomBar]}>
                    <View>

                        <View style={styles.RowB}>
                            {page > 0 ? (

                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => handlePrev()}
                                    style={styles.Row}>
                                    <Icon
                                        name={'arrow-back-ios'}
                                        size={moderateScale(17)}
                                        color={'#343434'}
                                        style={{ marginRight: 0, marginTop: 10 }}

                                    />
                                    <MyText style={[styles.buttonLabel, styles.textDark, styles.pt10]}>Back</MyText>
                                </TouchableOpacity>
                            ) : (<MyText></MyText>)}

                            {page !== 17 ? (
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => handleNext()}
                                    style={styles.button}>
                                    <MyText style={styles.buttonLabel}>{page === 3 ? 'Continue' : 'Next'}</MyText>
                                </TouchableOpacity>
                            ) : null}
                        </View>

                    </View>
                </View>
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


            <PolicyLearn
                isOpen={isPolicy}
                handleChange={closePolicy}
            />


            <PhotoUpload
                isOpen={isUpload}
                handleChange={closeUpload}
                localimg={localimg}
                setImgUrl={(value) => setImgUrl(value)}
            />
        </View>

    );
};

export default NewListing;