import { View, Text, Dimensions, Platform, TouchableOpacity, ScrollView, FlatList, Animated, RefreshControl, ActivityIndicator } from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import styles from '../Styles';
import ApartmentCard from '../../../components/ApartmentCard/Index';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import CustomToast from '../../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPendingListing } from '../../../../redux/actions/listingActions';
import FetchError from '../../../components/FetchError/Index';
import MyText from '../../../components/DefaultTextComponent/MyText';
import Empty from '../../../components/Empty/Index';
const { width, height } = Dimensions.get('window');

interface Props {
  navigation: any;
  setPending: any;
}

const Item = ({ item, index, navigation, refresh }) => {

  return (
    <ApartmentCard
    listingID={item.listingID}
    title={item.title}
    mainPhoto={item.mainPhoto}
    price={item.price}
    discount={item.discount}
    location={item.location}
    maxBookingDate={item.maxBookingDate}
    calendar={item.calendar}
    status={item.status}
    navigation={navigation}
    refresh={refresh}
    viewType={'Home'}

    />
  )
}

const Pending: React.FC<Props> = props => {

  const { navigation, setPending } = props;

  const { pendingListing } = useSelector((state: RootState) => state.listingReducers);

  const dispatch = useDispatch();

  const [isRefreshing, setisRefreshing] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isMiddleLoading, setisMiddleLoading] = useState(false);
  const [listing, setListing] = useState([]);
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
  refreshPending();
 }


  useEffect(() => {
    if (pendingListing.listings?.length > 0) {
      setListing(pendingListing.listings)
    } else {
         setisMiddleLoading(true);
         fetchPending();
       }

  }, [])


  const refreshPending = async () => {

    setisLoading(true);
    setError(false);

    const limit = 10;

    dispatch(getPendingListing({ page, limit }))
      .then(res => {

        setListing(listing.concat(res.listings));
        setPage(page + 1);
        setisLoading(false);
        setisMiddleLoading(false);

        if (res.listings.length < limit) {
          setEndReached(true);
        }

      })
      .catch((err) => {
        setError(true);
        setisLoading(false);
        setEndReached(false);
        setisMiddleLoading(false);
        if (err.message == 'Network Error') {
          showToast('Warning', 'Connection Error, try again');
        }
        else {
          showToast('Warning', err.message);
        }
      })
  };

  const fetchPending = async () => {
    if (endReached) {
      return;
    } else {
    refreshPending();
    }
  };



  const footerLoader = () => {
    return isLoading ? (

      <View style={styles.alignCenter}>
        <ActivityIndicator color={'#343434'} style={{ paddingVertical: 15 }} />
      </View>
    ) : null
  }

  const renderPending = React.useCallback(({ item, index }) => {

    return (

      <Item item={item} index={index} navigation={navigation} refresh={handleRefresh}/>

    )

  }, [])


  return (

    <>
      {error ? (

        <FetchError setRetry={() => {
          setListing([]);
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
                      setListing([]);
                      handleRefresh()
                    }}
                />
            }
              data={listing}
              contentContainerStyle={{ paddingTop: moderateScale(20), paddingHorizontal: 15, paddingBottom: moderateScale(10) }}
              renderItem={renderPending}
              keyExtractor={item => item.listingID}
              initialNumToRender={10}
              maintainVisibleContentPosition={{
                autoscrollToTopThreshold: 10,
                minIndexForVisible: 1,
              }}
              onEndReached={fetchPending}
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

export default Pending;

export const ItemCB = React.memo(Item);
