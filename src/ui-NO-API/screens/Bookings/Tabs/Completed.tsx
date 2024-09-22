import { View, Text, Dimensions, Platform, TouchableOpacity, ScrollView, RefreshControl, FlatList, Animated, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useRef } from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import CustomToast from '../../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { getCompletedBooking } from '../../../../redux/actions/bookingActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BookingCard from '../../../components/BookingCard/Index';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { RootState } from '../../../../redux/store/store';
import Empty from '../../../components/Empty/Index';
import FetchError from '../../../components/FetchError/Index';
import styles from '../Styles';

const { width, height } = Dimensions.get('window');


interface Props {
  navigation: any;
}

const Item = ({ item, index, nav }) => {

  return (
    <BookingCard
      bookingID={item.bookingID}
      title={item.title}
      ownerUsername={item.ownerUsername}
      chatInfo={item.chatInfo}
      bookingStatus={item.bookingStatus}
      checkIn={item.checkIn}
      checkOut={item.checkOut}
      location={item.location}
      mainPhoto={item.mainPhoto}
      navigation={nav}
    />
  )
}

const Completed: React.FC<Props> = props => {

  const { navigation } = props;


  const dispatch = useDispatch();

  const { completedBookings } = useSelector((state: RootState) => state.bookingReducers);

  const [isRefreshing, setisRefreshing] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isMiddleLoading, setisMiddleLoading] = useState(false);
  const [booking, setBooking] = useState([]);
  const [page, setPage] = useState(0);
  const [endReached, setEndReached] = useState(false);
  const [retry, setRetry] = useState(false);
  const [error, setError] = useState(false);

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


  const handleRefresh = () => {
    setEndReached(false);
    setisMiddleLoading(true);
    refreshCompleted();
  }


  useEffect(() => {
    if(!completedBookings.bookings){
    setisMiddleLoading(true);
    fetchCompleted();
    } else {
      setBooking(completedBookings.bookings);
    }

  }, [])


  const refreshCompleted = async () => {

    setisLoading(true);
    setError(false);

    const limit = 10;

    dispatch(getCompletedBooking({page, limit}))
      .then(res => {

        setBooking(booking.concat(res.bookings));
        setPage(page + 1);
        setisLoading(false);
        setisMiddleLoading(false);

        if (res.bookings.length < limit) {
          setEndReached(true);
        }

      })
      .catch((err) => {
        setisLoading(false);
        setisMiddleLoading(false);
        setError(true);
    setEndReached(true);
        if (err.message == 'Network Error') {
          showToast('Warning', 'Connection Error, try again');
        }
        else {
          showToast('Warning', err.message);
        }
      })
  };


  const fetchCompleted = async () => {
    if (endReached) {
      return;
    } else {
      refreshCompleted()
    }
  };



  const renderComplete = React.useCallback(({ item, index }) => {

    return (
      <Item item={item} index={index} nav={navigation} />
    )

  }, [])


  const footerLoader = () => {
    return isLoading ? (

      <View style={{ justifyContent: 'center', flexDirection: 'row', alignContent: 'center', }}>
        <ActivityIndicator color={'#343434'} style={{ paddingVertical: 15 }} />
      </View>
    ) : null
  }


  return (

    <>
    {error ? (

      <FetchError setRetry={() => {
        setBooking([]);
        handleRefresh()
      }} />

    ) : (
    
    <>
      {isMiddleLoading ? (
        <ScrollView>
        <View style={{ flex: 1, width: '100%', paddingHorizontal: 5, }}>
               <View style={styles.emptyCont}>
                <SkeletonPlaceholder>
                  <SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item marginTop={8} height={moderateScale(170)} width={'100%'} borderRadius={10} />
                    <SkeletonPlaceholder.Item>
                      <SkeletonPlaceholder.Item marginTop={8} marginBottom={5} height={15} width={'80%'} borderRadius={10} />
                      <SkeletonPlaceholder.Item marginLeft={0} marginBottom={5} height={15} width={'70%'} borderRadius={10} />
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>

              </View>

              <View style={styles.emptyCont}>
                <SkeletonPlaceholder>
                  <SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item marginTop={8} height={moderateScale(170)} width={'100%'} borderRadius={10} />
                    <SkeletonPlaceholder.Item>
                      <SkeletonPlaceholder.Item marginTop={8} marginBottom={5} height={15} width={'80%'} borderRadius={10} />
                      <SkeletonPlaceholder.Item marginLeft={0} marginBottom={5} height={15} width={'70%'} borderRadius={10} />
                    </SkeletonPlaceholder.Item>
                  </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>

              </View>
        </View>
        </ScrollView>
      ) : (
        <FlatList
        refreshControl={
          <RefreshControl
            tintColor={'#343434'}
            refreshing={isRefreshing}
            onRefresh={() => {
              setBooking([]);
              handleRefresh()
            }}
          />
        }
          data={booking}
          contentContainerStyle={{ paddingTop: moderateScale(20), paddingHorizontal: 15, paddingBottom: moderateScale(10) }}
          renderItem={renderComplete}
          keyExtractor={item => item.bookingID}
          initialNumToRender={10}
          maintainVisibleContentPosition={{
            autoscrollToTopThreshold: 10,
            minIndexForVisible: 1,
          }}
          onEndReached={fetchCompleted}
          onEndReachedThreshold={0.01}
          ListFooterComponent={footerLoader}
          ListEmptyComponent={Empty}
        />
      )}

      </>
    
    )}

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

export default Completed;

export const ItemCB = React.memo(Item);
