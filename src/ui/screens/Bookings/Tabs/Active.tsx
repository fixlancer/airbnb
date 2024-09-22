import {
  View, Text, Dimensions, Platform, TouchableOpacity, SectionList,
  Animated, ActivityIndicator, FlatList,
  RefreshControl,
  ScrollView
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import styles from '../Styles';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import BookingCard from '../../../components/BookingCard/Index';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import CustomToast from '../../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveBooking } from '../../../../redux/actions/bookingActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '../../../../redux/store/store';
import Empty from '../../../components/Empty/Index';
import FetchError from '../../../components/FetchError/Index';
const { width, height } = Dimensions.get('window');


interface Props {
  navigation: any;
}

const Item = ({ item, index, nav }) => {

  return (
    <View style={styles.ph15}>
      <BookingCard
        bookingID={item.bookingID}
        title={item.title}
        ownerUsername={item.owner[0].username}
        chatInfo={item.chatInfo}
        bookingStatus={item.bookingStatus}
        checkIn={item.checkIn}
        checkOut={item.checkOut}
        location={item.location}
        mainPhoto={item.mainPhoto}
        navigation={nav}
      />
    </View>
  )
}

const Active: React.FC<Props> = props => {

  const { navigation } = props;


  const dispatch = useDispatch();

  const { activeBookings } = useSelector((state: RootState) => state.bookingReducers);

  const [isRefreshing, setisRefreshing] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isMiddleLoading, setisMiddleLoading] = useState(false);
  const [booking, setBooking] = useState([]);
  const [newBooking, setNewBooking] = useState([]);
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
    refreshActive();
  }


  useEffect(() => {
    if(!activeBookings.bookings){
    setisMiddleLoading(true);
    fetchActive();
    } else {
      const groupedBookings = groupByStatus(activeBookings.bookings);

      const sections = Object.keys(groupedBookings).map(status => ({
        status: status,
        data: groupedBookings[status],
      }));
      setBooking(sections);

    }

  }, [])


  function groupByStatus(bookings) {
    const groupedBookings = {};
  
    bookings.forEach(booking => {
      const { status } = booking;
      if (!groupedBookings[status]) {
        groupedBookings[status] = [];
      }
      groupedBookings[status].push(booking);
    });
  
    return groupedBookings;
  }


  const refreshActive = async () => {

    setisLoading(true);
    setError(false);

    const limit = 10;

    dispatch(getActiveBooking({page, limit}))
      .then(res => {

        const groupedBookings = groupByStatus(res?.bookings);

        const sections = Object.keys(groupedBookings).map(status => ({
          status: status,
          data: groupedBookings[status],
        }));
    
        setBooking(booking.concat(sections));
        setPage(page + 1);
        setisLoading(false);
        setisMiddleLoading(false);

        if (res?.bookings.length < limit) {
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


  const fetchActive = async () => {
    if (endReached) {
      return;
    } else {
      refreshActive();
    }
    
  };

  const renderList = React.useCallback(({ item, index }) => {

    return (
      <Item item={item} index={index} nav={navigation} />

    )

  }, [])



  const header = (section) => {
    return (
      section.status === 'Update' ? (
        <View style={[styles.pt15, styles.ph15, styles.secTitle]}>
          <Text style={[styles.largeLabel, styles.textDark]}>Updates</Text>
        </View>
      ) :  section.status === 'Pending' ? (
        <View style={[styles.pt15, styles.ph15, styles.secTitle]}>
          <Text style={[styles.largeLabel, styles.textDark]}>Upcoming reservations</Text>
        </View>
      ) : section.status === 'Ongoing' ? (
        <View style={[styles.pt15, styles.ph15, styles.secTitle]}>
          <Text style={[styles.largeLabel, styles.textDark]}>Active reservations</Text>
        </View>
      ) : null
    )
  }

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
        <SectionList
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
          sections={booking}
          contentContainerStyle={{ paddingTop: moderateScale(0), paddingHorizontal: 0, paddingBottom: moderateScale(10) }}
          renderItem={renderList}
          keyExtractor={item => item.bookingID}
          renderSectionHeader={({ section }) => header(section)}
          initialNumToRender={10}
          maintainVisibleContentPosition={{
            autoscrollToTopThreshold: 10,
            minIndexForVisible: 1,
          }}
          onEndReached={fetchActive}
          onEndReachedThreshold={0.01}
          ListFooterComponent={footerLoader}
          ListEmptyComponent={Empty}
          stickySectionHeadersEnabled={true}
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

export default Active;

export const ItemCB = React.memo(Item);
