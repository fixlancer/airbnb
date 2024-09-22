import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar,
    ScrollView,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    ActivityIndicator,
    Animated,
    RefreshControl
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AmenitiesModal from './Modals/AmenitiesModal';
import RulesModal from './Modals/RulesModal';
import AboutLocationModal from './Modals/AboutLocation';
import AboutModal from './Modals/About';
import SafetyModal from './Modals/SafetyModal';
import PhotosModal from './Modals/PhotosModal';
import SignIn from '../../components/SignIn/Index';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { getListingByID } from '../../../redux/actions/listingActions';
import CustomToast from '../../components/CustomToast/CustomToast';
import FetchError from '../../components/FetchError/Index';
import ViewListing from './ViewListing';
import IconM from 'react-native-vector-icons/Ionicons';
import newStyles from '../Styles/Styles';
import { useTheme } from 'react-native-paper';
const { width, height } = Dimensions.get('screen');


const Listing = ({ navigation, route }) => {

    const { listingID } = route.params;

 //   const { listingby_ID } = useSelector((state: RootState) => state.listingReducers);
 //   const { uid } = useSelector((state: RootState) => state.authReducers);

 
 const theme = useTheme()
 const styles = newStyles(theme);

    const [error, setError] = useState(false);

    const [isLoading, setIsLoading] = React.useState(false);
    const [isRefresh, setisRefreshing] = useState(true);
    const [isMiddleLoading, setisMiddleLoading] = useState(false);
    const [listData, setListData] = useState([]);
    const [location, setLocation] = useState([]);
    const [listingby_ID, setList] = useState({listing:
        {
            listingID: listingID,
            desc: 'Very cozy apartment',
            title: '3 bedroom penthouse with beautiful pool',
            mainPhoto: require('../../../Assets/Listings/4.jpg'),
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
            owner: [
              {
                username: 'ca_atlantic',
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
            maxPerson: 4,
            beds: 3,
            bedrooms: 2,
            bathrooms: 2.5,
            bookingType: 'Instant',
            longBooking: true,
            wifi: [{
                network: '',
                password: '',
            },
            ],
            location: [
                {
                    street: 'Balmuto street',
                    city: 'Toronto',
                    state: 'Ontario',
                    country: 'Canada',
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
            aboutLocation: 'Access to malls',
            safety: [{
                noise: 0,
                stairs: 0,
                children: -1,
                infant: -1,
            }],
        }
    })



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
    
    const [isAmenities, setIsAmenities] = useState(false);
    const [isRules, setIsRules] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isAboutLoc, setIsAboutLoc] = useState(false);
    const [isSafety, setIsSafety] = useState(false);
    const [isPhotos, setIsPhotos] = useState(false);
    const [isSignin, setSignIn] = useState(false);


    const closeSignIn = () => {
        setSignIn(false);
    }

    
    const closeAmenities = () => {
        setIsAmenities(false)
    }
    
    const closeRules = () => {
        setIsRules(false)
    }
    const closeSafety = () => {
        setIsSafety(false)
    }
    
    const closeAbout = () => {
        setIsAbout(false)
    }
    
    const closeAboutLoc = () => {
        setIsAboutLoc(false)
    }
    
    const closePhotos = () => {
        setIsPhotos(false)
    }
    

    const dispatch = useDispatch();


    useEffect(() => {
        fetchList();
      
    }, [])

    const handleRefresh = () => {
        fetchList();
    }

    const fetchList = async () => {
        
 /*       setError(false);
        setisMiddleLoading(true);

        dispatch(getListingByID({ listingID }))
            .then(res => {

                setisRefreshing(false);
                setisMiddleLoading(false);
                setListData(res.listing);
                setLocation(res.listing.location);
            })
            .catch(err => {
                setisRefreshing(false);
                setisMiddleLoading(false);
                setError(true);
                if (err.message == 'Network Error') {
                    showToast('Warning', 'Connection Error, try again');
                }
                else {
                    showToast('Warning', err.message);
                }
            })
            */
    }


    const Header = () => {

        return (
            <>
                <View style={[styles.newModalHeader, styles.mb15, styles.RowB]}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[styles.b30, styles.alignCenter, styles.bgWhite, styles.borderDark, styles.mt10, {width: moderateScale(30), height : moderateScale(30)}]}>
                <IconM
                    name={'chevron-back'}
                    size={moderateScale(15)}
                    color={theme.dark ? '#fff' : '#343434'}
                    style={{ }} />

            </TouchableOpacity>

            {isMiddleLoading ? null : (
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                                <View style={[styles.alignCenter, styles.bgWhite, styles.borderDark, styles.b30, styles.mt10, {height:moderateScale(30), width:moderateScale(30)}]}>
                    <IconM
                                size={moderateScale(18)}
                                name={'heart-outline'}
                                color={'#b0b0b0'}
                                style={{marginTop:1,}}
                            />
                    </View>
                            </TouchableOpacity>
                            )}

        </View>
            </>
        )
    }



    return (

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

            <Header/>


        {error ? (
  
          <FetchError setRetry={() => handleRefresh()} />
  
        ) : (

        <>
            {isMiddleLoading ? (
                <>
                    <View style={[{ flex: 1, }, styles.alignCenter]}>
                        <View style={styles.loader}>
                        <ActivityIndicator size={'small'} color={'#fff'} />
                        </View>
                    </View>

                </>

            ) : (

           //     listingby_ID.listing ? (
                
                <ViewListing
                navigation={navigation} 
                setIsPhotos={() => setIsPhotos(true)}
                setIsAmenities={() => setIsAmenities(true)}
                setIsRules={() => setIsRules(true)}
                setIsAbout={() => setIsAbout(true)}
                setIsAboutLoc={() => setIsAboutLoc(true)}
                setIsSafety={() => setIsSafety(true)}
                setSignIn={() => setSignIn(true)}
                setisRefreshing={() => setisRefreshing(true)}
                refresh={handleRefresh}
             //   userID={uid}
                listingby_ID={listingby_ID}

                />
           //     ) : null 

            )}

            </>

        )}
        
        
        </SafeAreaView>
                
                    <AmenitiesModal
                        isOpen={isAmenities}
                        data={listingby_ID.listing?.amenities}
                        bgColor={'#fff'}
                        handleChange={closeAmenities}
                    />

                    <RulesModal
                        isOpen={isRules}
                        data={listingby_ID.listing?.houseRules}
                        bgColor={'#fff'}
                        handleChange={closeRules}
                    />

                    <AboutModal
                        isOpen={isAbout}
                        data={listingby_ID.listing?.desc}
                        bgColor={'#fff'}
                        handleChange={closeAbout}
                    />

                    <AboutLocationModal
                        isOpen={isAboutLoc}
                        data={listingby_ID?.listing?.aboutLocation}
                        city={listingby_ID?.listing?.location[0].city}
                        country={listingby_ID?.listing?.location[0].country}
                        bgColor={'#fff'}
                        handleChange={closeAboutLoc}
                    />

                    <SafetyModal
                        isOpen={isSafety}
                        data={listingby_ID.listing?.amenities[0].notIncluded}
                        bgColor={'#fff'}
                        handleChange={closeSafety}
                    />

                    <PhotosModal
                        isOpen={isPhotos}
                        data={listingby_ID.listing?.photos}
                        handleChange={closePhotos}
                    />
                    
                

            <SignIn
                isOpen={isSignin}
                handleChange={closeSignIn}
                refresh={'Yes'}
                isRefresh={() => setisRefreshing(true)}
                navigation={navigation}
            />

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

    );
};


export default Listing;
