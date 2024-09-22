import React, { useContext, useEffect, useCallback, useMemo, useState, useRef } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  FlatList,
  SectionList,
  Animated,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import MyText from '../../components/DefaultTextComponent/MyText';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Details from '../BookingChat/Details';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import CancelPolicyModal from '../Listing/Modals/CancelPolicyModal';
import AmenitiesModal from '../Listing/Modals/AmenitiesModal';
import SafetyModal from '../Listing/Modals/SafetyModal';
import RulesModal from '../Listing/Modals/RulesModal';
import MapModal from './Modals/MapModal';
import CheckInModal from './Modals/CheckInModal';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNewChat, getBookingByID, getBookingChat } from '../../../redux/actions/bookingActions';
import FetchError from '../../components/FetchError/Index';
import moment from 'moment';
import SendModal from '../BookingChat/Modals/SendMoney';
import RequestModal from '../BookingChat/Modals/RequestMoney';
import CancelBooking from '../BookingChat/Modals/CancelBooking';
import ExtrasRespond from '../BookingChat/Modals/ExtrasRespond';
import CancelRequest from '../BookingChat/Modals/CancelRequest';
const { width, height } = Dimensions.get('window');


const BookingDetails = ({ route, navigation }) => {
	
  
  const { bookingID } = route.params;
  
    const [error, setError] = useState(false);

  const [isRefresh, setisRefreshing] = useState(true);
  const [isMiddleLoading, setisMiddleLoading] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [newisLoading, setnewisLoading] = useState(false);

  const { booking_details } = useSelector((state: RootState) => state.bookingReducers);

  const { uid } = useSelector((state: RootState) => state.authReducers);

  const basePrice = booking_details.booking?.basePrice;
  const totalPrice = booking_details.booking?.totalPrice;
  const duePrice = booking_details.booking?.duePrice;
  const amountPaid = totalPrice - duePrice;
  const cautionFee = booking_details.booking?.cautionFee;
  const cleaningFee = booking_details.booking?.cleaningFee;
  const noOfNights = booking_details.booking?.noOfNights;
  const dateOrdered = booking_details.booking?.dateOrdered;


  const [chatData, setChatData] = useState([]);

  const [receiverID, setReceiverID] = useState(0);
  const [endReached, setEndReached] = useState(false);
  const [page, setPage] = useState(0);
  const [errorChat, setErrorChat] = useState(false);


  const [msg, setMsg] = useState('');
  const scrollViewRef = useRef();
  const [upload, setUpload] = useState([]);

  const [rated, setRated] = useState(null);
  const [cancelled, setCancelled] = useState(null);
  const [cancelRequest, setCancelRequest] = useState(0);
  const [extrasID, setExtrasID] = useState(0);

  const currentUser = 'username_of_buyer';

  const onCancelUser = currentUser;

  const [isAmenities, setIsAmenities] = useState(false);
  const [isRules, setIsRules] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const [isSafety, setIsSafety] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [isCancelGuest, setIsCancelGuest] = useState(false);
  const [isExtras, setIsExtras] = useState(false);
  const [isCancelRequest, setIsCancelRequest] = useState(false);


  const closeMap = () => {
    setIsMap(false);
  }

  const closeCheckIn = () => {
    setIsCheckIn(false);
  }

  const closeCancel = () => {
    setIsCancel(false);
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

  const closeSend = () => {
    setIsSend(false)
  }

  const closeRequest = () => {
    setIsRequest(false)
  }

  const closeCancelGuest = () => {
    setIsCancelGuest(false)
  }

  const closeExtras = () => {
    setIsExtras(false)
  }

  const closeCancelRequest = () => {
    setIsCancelRequest(false)
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

  const handleModal = (text) => {
    if (text == 'Map') {
      setIsMap(true);
    }
    if (text == 'CheckIn') {
      setIsCheckIn(true);
    }
    if (text == 'Cancel') {
      setIsCancel(true);
    }
    if (text == 'Amenities') {
      setIsAmenities(true);
    }
    if (text == 'Rules') {
      setIsRules(true);
    }
    if (text == 'Safety') {
      setIsSafety(true);
    }
    if (text == 'Send') {
      setIsSend(true);
    }
    if (text == 'Request') {
      setIsRequest(true);
    }
    if (text == 'CancelRequest') {
      setIsCancelRequest(true);
    }


    if (text == 'CancelGuest') {
      setIsCancelGuest(true);
    }

    if (text == 'Extras') {
      setIsExtras(true);
    }

  }


return (


<View style={[styles.container, {backgroundColor:bgColor}]}>

<SafeAreaView
style={{
  height: height,
  width: width,
  flex: 1,
  backgroundColor: 'transparent',
}}
edges={['left', 'right', 'top']}>
<StatusBar translucent barStyle={bgColor === '#fff' ? 'dark-content' : "light-content"} backgroundColor="transparent" />


<View style={[styles.newModalHeader, {backgroundColor:bgColor}]}>
        <TouchableOpacity
            onPress={() => handleChange()}>
            <IconM
                name={'close-circle-outline'}
                size={moderateScale(25)}
                color={bgColor === '#fff' ? '#343434' : '#fff'}
                style={{ marginTop: 0, }} />

        </TouchableOpacity>
        <Text style={[styles.largeLabel,  bgColor === '#fff' ? [styles.textDark, styles.pt15] : [styles.textWhite, styles.pt30]]}>Booking details</Text>
</View>

<View style={[bgColor === '#fff' ? styles.bgStraight : styles.bgCurve]} /> 

            {isMiddleLoading ? (
              <View style={styles.loaderFlex}>
                <View style={styles.loaderMiddle}>
                  <ActivityIndicator size={'small'} color={'#fff'} />
                </View>
              </View>
            ) : (

              <>
                  <ScrollView style={[styles.bgScroll]}
                    refreshControl={
                      <RefreshControl
                        tintColor={'#343434'}
                        refreshing={isRefresh}
                        onRefresh={() => handleRefresh()}
                      />
                    }>
					<TouchableOpacity activeOpacity={1}>

                    <View style={styles.midBg}>

                      <Details
                        listingID={booking_details.booking?.listingID}
                        street={booking_details.booking?.location[0].street}
                        city={booking_details.booking?.location[0].city}
                        country={booking_details.booking?.location[0].country}
                        contactInfo={booking_details.booking?.contactInfo}
                        ownerID={booking_details.booking?.owner[0].id}
                        ownerUsername={booking_details.booking?.owner[0].username}
                        firstName={booking_details.booking?.guest[0].firstName}
                        wifiNetwork={booking_details.booking?.wifi[0].network}
                        wifiPass={booking_details.booking?.wifi[0].password}
                        mainPhoto={booking_details.booking?.mainPhoto}
                        noOfNights={booking_details.booking?.noOfNights}
                        checkIn={booking_details.booking?.checkIn}
                        checkOut={booking_details.booking?.checkOut}
                        inTime={booking_details.booking?.inTime}
                        outTime={booking_details.booking?.outTime}
                        cautionFee={booking_details.booking?.cautionFee}
                        cleaningFee={booking_details.booking?.cleaningFee}
                        status={booking_details.booking?.status}
                        duePrice={booking_details.booking?.duePrice}
                        dueDate={booking_details.booking?.dueDate}
                        cancelPolicy={booking_details.booking?.cancelPolicy}
                        houseRules={booking_details.booking?.houseRules}
                        safety={booking_details.booking?.safety}
                        amenities={booking_details.booking?.amenities}
                        totalPrice={booking_details.booking?.totalPrice}
                        basePrice={booking_details.booking?.basePrice}
                        bathrooms={booking_details.booking?.bathrooms}
                        beds={booking_details.booking?.beds}
                        bedrooms={booking_details.booking?.bedrooms}
                        title={booking_details.booking?.title}
                        personAllowed={booking_details.booking?.personAllowed}
                        checkInDesc={booking_details.booking?.checkInDesc}
                        confirmationCode={booking_details.booking?.confirmationCode}
                        dateOrdered={booking_details.booking?.dateOrdered}
                        extras={booking_details.booking?.extras}
                        openModal={(text) => handleModal(text)}
                        userID={uid}
                        extrasID={(item) => setExtrasID(item)}
                        cancelRequest={cancelRequest}
                        navigation={navigation}
                      />
                    </View>

					</TouchableOpacity>
                  </ScrollView>
				  ) : null}

              </>
            )}

</SafeAreaView>


</View>          


)
}

export default BookingDetails;