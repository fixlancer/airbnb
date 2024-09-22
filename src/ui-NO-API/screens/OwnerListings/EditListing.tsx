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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
const { width, height } = Dimensions.get('window');
import FetchError from '../../components/FetchError/Index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { getListingByID, updateListing } from '../../../redux/actions/listingActions';
import CustomToast from '../../components/CustomToast/CustomToast';
import Title from './EditForms/Title';
import Person from './EditForms/Person';
import Loc from './EditForms/Loc';
import Map from './EditForms/Map';
import AboutLoc from './EditForms/AboutLoc';
import Directions from './EditForms/Directions';
import Desc from './EditForms/Desc';
import Amenities from './EditForms/Amenities';
import Rules from './EditForms/Rules';
import Booking from './EditForms/Booking';
import Booking2 from './EditForms/Booking2';
import Policies from './EditForms/Policies';
import Pricing from './EditForms/Pricing';
import Discount from './EditForms/Discount';
import Extras from './EditForms/Extras';
import Photos from './EditForms/Photos';
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
        default:
            return <Title formData={formData} setFormData={(item) => setFormData(item)} />
    }
}

const EditListing = ({ route, navigation }) => {

    const { listingID } = route.params;

    const [isPolicy, setisPolicy] = useState(false);
    const [isUpload, setisUpload] = useState(false);
    const [localimg, setLocalimg] = useState([]);
    const [imgUrl, setImgUrl] = useState([]);

    const [isLoading, setisLoading] = useState(false);
 //   const [isMiddleLoading, setisMiddleLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isRender, setIsRender] = useState(0);

    const dispatch = useDispatch();

    const [formData, setFormData] = useState([])

    const closeUpload = () => {
        setisUpload(false)
    }

    const closePolicy = () => {
        setisPolicy(false)
    }

    useEffect(() => {
        const updatedData = [...formData];
        if(formData.length > 0 ){
        updatedData[0].photos = imgUrl;
        }
        setFormData(updatedData);
    
    }, [imgUrl])


    const handleRefresh = () => {
        loadListing();
    }
    

    useEffect(() => {
        loadListing();
    }, [])

    const loadListing = async () => {

        setError(false);
     //   setisMiddleLoading(true);

        dispatch(getListingByID({ listingID }))
            .then(res => {
                setFormData(res?.listing);
            })
            .catch(err => {
            //    setisMiddleLoading(false);
                setError(true);
                if (err.message == 'Network Error') {
                    showToast('Warning', 'Connection Error, try again');
                }
                else {
                    showToast('Warning', err.message);
                }
            })
    }


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
    const [percent, setPercent] = useState(6.25);

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
        setPercent(percent + 6.25);
    }


    const handlePrev = () => {

        setPage(page - 1);
        setPercent(percent - 6.25);
    }

    const handleSave = () => {
        const desc =  formData?.desc;
        const title =  formData?.title;
        const mainPhoto =  formData?.mainPhoto;
        const IDverify =  formData?.IDverify;
        const photos =  formData?.photos;
        const price =  formData?.price;
        const discount =  formData?.discount;
        const contactInfo =  formData?.contactInfo;
        const minNights =  formData?.minNights;
        const maxNights =  formData?.maxNights;
        const maxBookingDate =  formData?.maxBookingDate;
        const checkIn =  formData?.checkIn;
        const checkOut =  formData?.checkOut;
        const maxPerson =  formData?.maxPerson;
        const beds =  formData?.beds;
        const bedrooms =  formData?.bedrooms;
        const bathrooms =  formData?.bathrooms;
        const bookingType =  formData?.bookingType;
        const longBooking =  formData?.longBooking;
        const wifi =  formData?.wifi;
        const location =  formData?.location;
        const extraCharge =  formData?.extraCharge;
        const calendar =  formData?.calendar;
        const cancelPolicy =  formData?.cancelPolicy;
        const amenities =  formData?.amenities
        const directions =  formData?.directions;
        const houseRules =  formData?.houseRules
        const aboutLocation =  formData?.aboutLocation;
        const safety =  formData?.safety;

        const data = {
            listingID,
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

        dispatch(updateListing({ data }))
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


                {error ? (

                    <FetchError setRetry={() => handleRefresh()} />

                ) : (
                    <>

                        {formData?.length === 0 ? (
                            <>
                                <View style={[styles.newModalHeader, styles.bgWhite]}>
                                    <TouchableOpacity
                                        onPress={() => navigation.goBack()}>
                                        <IconM
                                            name={'close-circle-outline'}
                                            size={moderateScale(25)}
                                            color={'#343434'}
                                            style={{ marginTop: 0, }} />

                                    </TouchableOpacity>
                                </View>
                                <View style={[{ flex: 1, }, styles.alignCenter]}>
                                    <View style={styles.loader}>
                                        <ActivityIndicator size={'small'} color={'#fff'} />
                                    </View>
                                </View>

                            </>

                        ) : (
                            <>
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
                                            {isLoading ? (
                                                <>
                                                    <Text style={[styles.userLabel, styles.textPurple, styles.mr5]}>Saving</Text>
                                                    <ActivityIndicator size={"small"} color={'#7E178E'} />
                                                </>
                                            ) : (<Text style={[styles.userLabel, styles.textPurple]}>Save & Exit</Text>)
                                            }

                                    </TouchableOpacity>

                                </View>


                                <View style={[{ flex: 1, backgroundColor: '#fff', }]}>
                                    
                                    
                                    <FormItem
                                        formData={formData}
                                        setFormData={setFormData}
                                        page={page}
                                        setisPolicy={setisPolicy}
                                        setisUpload={setisUpload}
                                        setLocalimg={setLocalimg}
                                        imgUrl={imgUrl}
                                        navigation={navigation} />
                                   
                                </View>

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

                                                {page <= 14 ? (
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
                            </>
                        )}

                    </>
                )}

            </SafeAreaView>


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

export default EditListing;