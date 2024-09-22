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
import styles from './Styles';
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
const { width, height } = Dimensions.get('screen');


const Listing = ({ navigation, route }) => {

    const { listingID } = route.params;

    const { listingby_ID } = useSelector((state: RootState) => state.listingReducers);
    const { uid } = useSelector((state: RootState) => state.authReducers);

    const [error, setError] = useState(false);

    const [isLoading, setIsLoading] = React.useState(false);
    const [isRefresh, setisRefreshing] = useState(true);
    const [isMiddleLoading, setisMiddleLoading] = useState(false);
    const [listData, setListData] = useState([]);
    const [location, setLocation] = useState([]);



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
        
        setError(false);
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
    }


    const Header = () => {

        return (
            <>

                <View style={styles.header}>
                    <View style={styles.RowB}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                                <IconM
                                    name={'close-circle-outline'}
                                    size={moderateScale(25)}
                                    color={'#343434'}
                                    style={{ marginTop: 0 }} />
                            </TouchableOpacity>

                            {isMiddleLoading ? null : (
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                                <IconM
                                    name={'heart-outline'}
                                    size={moderateScale(25)}
                                    color={'#343434'}
                                    style={{ alignSelf: 'center' }} />
                            </TouchableOpacity>
                            )}
                    </View>
                </View>
            </>
        )
    }



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

                <Header />

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

                listingby_ID.listing ? (
                
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
                userID={uid}

                />
                ) : null 

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
        </>

    );
};


export default Listing;
