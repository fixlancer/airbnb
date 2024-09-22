import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Animated,
  StatusBar,
  ScrollView,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/Navbars/Navbar';
import MyText from '../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { getAllListing } from '../../../redux/actions/listingActions';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { AnimatedFlatList, AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import ListingCard from '../../components/ListingCard/Index';
import Empty from '../../components/Empty/Index';
import FetchError from '../../components/FetchError/Index';
import newStyles from '../Styles/Styles';
import { useTheme } from 'react-native-paper';
import Filter from './Filter';
import Search from './Search';


const { width, height } = Dimensions.get('window');

const Item = ({ item, index, navigation }) => {

  return (
    <ListingCard
      listingID={item.listingID}
      mainPhoto={item.mainPhoto}
      title={item.title}
      owner={item.owner}
      price={item.price}
      discount={item.discount}
      location={item.location}
      calendar={item.calendar}
      navigation={navigation}
      viewType={'Home'}

    />
  )
}

const Home = ({ route, navigation }) => {

  const theme = useTheme()
  const styles = newStyles(theme);

  const { listing } = useSelector((state: RootState) => state.listingReducers);

  const bgImg = require('../../../Assets/premiumBG.png');

  const [isLoading, setisLoading] = useState(false);
  const [isMiddleLoading, setisMiddleLoading] = useState(true);
  const [listings, setListings] = useState([]);

  const [filter, setFilter] = useState(false);
  const [page, setPage] = useState(0);
  const [endReached, setEndReached] = useState(false);
  const [retry, setRetry] = useState(false);
  const [error, setError] = useState(false);

  const [loc, setLocation] = useState('');
  const [search, setSearch] = useState(false);

  const [myData, setData] = useState({data: {
    location: loc,
    bedNo: 'Any',
    checkInDay: null,
    checkOutDay: null,
    minPrice: 5000,
    maxPrice: 1000000,
    newDiscount: false,
    weeklyDiscount: false,
    monthlyDiscount: false,
    smartHome: false,
    penthouse: false,
    hotel: false,
    guestHouse: false,
    duplex: false,
    bungalow: false,
    placeType: 'Any',
    cautionFee: false,
    smoking: false,
    pool: false,
    wifi: false,
    videoGame: false,
    kitchen: false,
    washer: false,
    iron: false,
    microwave: false,
    breakfast: false,
    topRated: false,
    party: false,
    elevator: false,
    instantBooking: false,
  }});

  const dispatch = useDispatch();

  const dataList = [
    {
      listingID: 12394,
      title: '3 bedroom penthouse with beautiful pool',
      mainPhoto: require('../../../Assets/Listings/4.jpg'),
      price: [{
        basePrice: 20000,
        firstPrice: 0,
        weekendPrice: 0,
        monthlyPrice: 0,
      }],
      owner: [
        {
          username: 'ca_atlantic',
        }
      ],
      discount: [
        {
          firstDiscount: 10,
          weekendDiscount: 0,
          monthlyDiscount: 0,
        }
      ],
      location: [
        {
          street: 'B complex street',
          city: 'Toronto',
          state: 'Ontario',
          country: 'CA',
          latitude: 0,
          longitude: 0,
        }
      ],
      calendar: [
        {
          blocked: [],
          autoBlocked: [],
          manualBlocked: [],
          agreement: 0,
        }
      ],
    },
    {
      listingID: 1334,
      title: 'Luxury duplex',
      mainPhoto: require('../../../Assets/Listings/1.jpg'),
      price: [{
        basePrice: 21000,
        firstPrice: 0,
        weekendPrice: 0,
        monthlyPrice: 0,
      }],

      owner: [
        {
          username: 'pridecoast',
        }
      ],
      discount: [
        {
          firstDiscount: 10,
          weekendDiscount: 0,
          monthlyDiscount: 0,
        }
      ],
      location: [
        {
          street: 'A complex street',
          city: 'Montreal',
          state: 'Ontario',
          country: 'CA',
          latitude: 0,
          longitude: 0,
        }
      ],
      calendar: [
        {
          blocked: [],
          autoBlocked: [],
          manualBlocked: [],
          agreement: 0,
        }
      ],
    },
    {
      listingID: 13364,
      title: 'Smart 4bedroom duplex',
      mainPhoto: require('../../../Assets/Listings/3.jpg'),
      price: [{
        basePrice: 21000,
        firstPrice: 0,
        weekendPrice: 0,
        monthlyPrice: 0,
      }],

      owner: [
        {
          username: 'pridecoast',
        }
      ],
      discount: [
        {
          firstDiscount: 10,
          weekendDiscount: 0,
          monthlyDiscount: 0,
        }
      ],
      location: [
        {
          street: 'A complex street',
          city: 'Toronto',
          state: 'Ontario',
          country: 'CA',
          latitude: 0,
          longitude: 0,
        }
      ],
      calendar: [
        {
          blocked: [],
          autoBlocked: [],
          manualBlocked: [],
          agreement: 0,
        }
      ],
    },
    {
      listingID: 15334,
      title: '1bedroom smarthome duplex',
      mainPhoto: require('../../../Assets/Listings/5.jpg'),
      price: [{
        basePrice: 21000,
        firstPrice: 0,
        weekendPrice: 0,
        monthlyPrice: 0,
      }],

      owner: [
        {
          username: 'pridecoast',
        }
      ],
      discount: [
        {
          firstDiscount: 10,
          weekendDiscount: 0,
          monthlyDiscount: 0,
        }
      ],
      location: [
        {
          street: 'A complex street',
          city: 'Toronto',
          state: 'Ontario',
          country: 'CA',
          latitude: 0,
          longitude: 0,
        }
      ],
      calendar: [
        {
          blocked: [],
          autoBlocked: [],
          manualBlocked: [],
          agreement: 0,
        }
      ],
    },
  ]

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


  const data = {
    data: {
      location: loc,
      bedRooms: 'Any',
      bedNo: 'Any',
      bathNo: 'Any',
      checkInDay: null,
      checkOutDay: null,
      minPrice: 5000,
      maxPrice: 1000000,
      newDiscount: false,
      weeklyDiscount: false,
      monthlyDiscount: false,
      smartHome: false,
      penthouse: false,
      duplex: false,
      bungalow: false,
      cautionFee: false,
      smoking: false,
      pool: false,
      wifi: false,
      videoGame: false,
      kitchen: false,
      washer: false,
      iron: false,
      microwave: false,
      breakfast: false,
      cleanliness: false,
      rating: false,
      party: false,
      elevator: false,
      instantBooking: false,
    }
  };

  const handleFilter = (item) => {
    setData(item);
    handleRefresh()
  }


  const openFilter = () => {
    setFilter(true)
  }

  const closeFilter = () => {
    setFilter(false)
  }

  const handleSearch = (loc) => {
    const data = {
      data: {
        loc,
      }
    }
    setLocation(loc);
    setData(data);
    closeSearch()
    handleRefresh();
  }


  const openSearch = () => {
    setSearch(true)
  }

  const closeSearch = () => {
    setSearch(false)
  }


  const handleRefresh = () => {
    setListings([]);
    setEndReached(false);
    setisMiddleLoading(true);
    refreshListing();
  }

  useEffect(() => {
    setData(data);

    if (!listing.listings) {
      setisMiddleLoading(true);
      fetchListing();
    } else {
      setListings(listing?.listings)
    }

  }, [])


  const fetchListing = async () => {
    if (endReached) {
      return;
    } else {
      refreshListing()
    }

  };

  const refreshListing = async () => {

    setisLoading(true);
    setError(false);

    const limit = 10;

    // fetch listing using (data) state

    /*} dispatch(search({ data, page, limit }))
     .then(res => {
 
       setListings(res.listings);
       setisLoading(false);
       setisMiddleLoading(false);
       setPage(1);
       setisRefreshing(false);
 
       if (res.listings?.length < limit) {
         setEndReached(true);
       } else {
         setEndReached(false);
       }
 
     })
     .catch((err) => {
       setError(true);
       setisLoading(false);
       setisRefreshing(false);
       setEndReached(false);
       setisMiddleLoading(false);
 
       if (err.message == 'Network Error') {
         showToast('Warning', 'Connection Error, try again');
       }
       else {
         showToast('Warning', err.message);
       }
     })
     */

    setTimeout(() => {
      setListings(dataList);
      setisMiddleLoading(false)
      setisLoading(false);
    }, 500)

  };


  const renderListing = ({ item, index }) => {
    return (

      <Item item={item} index={index} navigation={navigation} />

    )
  }


  const HeaderTop = () => {
    return (

      <View style={[styles.newModalHeader, styles.mb20,]}>

        <Text numberOfLines={1} style={[styles.extraLabel, styles.fontSize24, styles.mb10, styles.mt10, styles.textDark, styles.textLeft,]}>Explore by travelling</Text>

        <View style={[styles.RowB, { zIndex: 999 }]}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={openSearch}
            style={[styles.Row, styles.shadow, styles.bgPurpleDark, styles.ph5, styles.b15, styles.mt5, { height: moderateScale(45), width: width - moderateScale(100) }]}>
            <View style={[styles.alignCenter, styles.bgGrey, styles.mt5, styles.b30, styles.width35]}>
              <IconM
                size={moderateScale(17)}
                name={'search-outline'}
                color={theme.dark ? '#fff' : '#343434'}
                style={[]}
              />
            </View>
            <MyText style={[styles.userLabel, styles.fontSize14, styles.textDark, styles.pl10, styles.textLeft, { marginTop: 11 }]}>{loc ? loc : 'Where are you going?'}</MyText>

          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => openFilter()}
            style={[styles.Row, styles.shadow, styles.bgPurpleDark, styles.alignCenter, styles.b15, styles.mt5, { width: moderateScale(45) }]}>
            <IconM
              name={'options-outline'}
              size={moderateScale(22)}
              color={theme.dark ? '#fff' : '#343434'}
              style={{ alignSelf: 'center', }} />

          </TouchableOpacity>
        </View>

      </View>

    )
  }

  const footerLoader = () => {
    return isLoading ? (

      <View style={{ justifyContent: 'center', flexDirection: 'row', alignContent: 'center', }}>
        <ActivityIndicator color={'#343434'} style={{ paddingVertical: 15 }} />
      </View>
    ) : null
  }

  const showEmpty = () => {
    return error ? null : (
      <Empty />
    )
  }


  return (

    <>

      <View style={[styles.container, styles.bgGrey]}>

        <SafeAreaView
          style={{
            // height: height + StatusBar.currentHeight,
            // width: width,
            flex: 1,
            backgroundColor: 'transparent',
          }}
          edges={['left', 'right', 'top']}>
          <StatusBar translucent barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor="transparent" />

          <HeaderTop />

          {isMiddleLoading ? (

            <>
              <ScrollView>
                <View style={[styles.bgWhite, { flex: 1, width: '100%', paddingTop: 10, paddingHorizontal: 5, }]}>
                  <View style={[styles.ph15, styles.mb20]}>
                    <SkeletonPlaceholder>
                      <SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item marginTop={8} height={moderateScale(200)} width={'100%'} borderRadius={20} />
                        <SkeletonPlaceholder.Item>
                          <SkeletonPlaceholder.Item marginTop={8} marginBottom={5} height={15} width={'40%'} borderRadius={20} />
                          <SkeletonPlaceholder.Item marginLeft={0} marginBottom={5} height={15} width={'70%'} borderRadius={20} />
                          <SkeletonPlaceholder.Item marginLeft={0} marginBottom={5} height={15} width={'50%'} borderRadius={20} />
                        </SkeletonPlaceholder.Item>
                      </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder>

                  </View>

                  <View style={styles.ph15}>
                    <SkeletonPlaceholder>
                      <SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item marginTop={8} height={moderateScale(200)} width={'100%'} borderRadius={20} />
                        <SkeletonPlaceholder.Item>
                          <SkeletonPlaceholder.Item marginTop={8} marginBottom={5} height={15} width={'40%'} borderRadius={20} />
                          <SkeletonPlaceholder.Item marginLeft={0} marginBottom={5} height={15} width={'70%'} borderRadius={20} />
                          <SkeletonPlaceholder.Item marginLeft={0} marginBottom={5} height={15} width={'50%'} borderRadius={20} />
                        </SkeletonPlaceholder.Item>
                      </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder>

                  </View>


                </View>
              </ScrollView>
            </>
          ) : (
            <>
              <FlatList
                data={listings}
                contentContainerStyle={[styles.iosBarNav, styles.bgWhite, styles.pt15, { flexGrow: 1 }]}
                renderItem={renderListing}
                keyExtractor={item => item.listingID.toString()}
                initialNumToRender={10}
                maintainVisibleContentPosition={{
                  autoscrollToTopThreshold: 10,
                  minIndexForVisible: 1,
                }}
                onEndReached={fetchListing}
                onEndReachedThreshold={0.5}
                ListEmptyComponent={showEmpty}


              />

              {error ? (

                <FetchError setRetry={() => handleRefresh()} />

              ) : null}

            </>

          )}


        </SafeAreaView>

        <Filter
          isOpen={filter}
          handleData={handleFilter}
          handleChange={closeFilter}
          loc={loc}
          data={myData}
        />

        <Search
          isOpen={search}
          handleChange={closeSearch}
          location={loc}
          handleLoc={handleSearch}
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


        {filter || search ? null : (
          <NavBar
            navigation={navigation}
            activePage={'home'}
            backgroundColor={null}
          />
        )}
      </View>

    </>

  )
}

export default Home;

export const ItemFnc = React.memo(Item);
