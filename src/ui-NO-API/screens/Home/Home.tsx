import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  //  ScrollView,
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
import styles from './Styles';
//import { FlatList } from '@gemcook/react-native-animated-scroll-view';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { getAllListing } from '../../../redux/actions/listingActions';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { AnimatedFlatList, AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import ListingCard from '../../components/ListingCard/Index';
import Empty from '../../components/Empty/Index';
import FetchError from '../../components/FetchError/Index';

const { width, height } = Dimensions.get('window');

const Item = ({ item, index, navigation }) => {

  return (
    <ListingCard
      listingID={item.listingID}
      title={item.title}
      mainPhoto={item.mainPhoto}
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


  const { listing } = useSelector((state: RootState) => state.listingReducers);

  const bgImg = require('../../../Assets/premiumBG.png');

  const [isRefreshing, setisRefreshing] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isMiddleLoading, setisMiddleLoading] = useState(true);
  const [listings, setListings] = useState([]);

  const [page, setPage] = useState(0);
  const [endReached, setEndReached] = useState(false);
  const [retry, setRetry] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

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
    setListings([]);
    setEndReached(false);
    setisMiddleLoading(true);
    refreshListing();
   }


  useEffect(() => {
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

    dispatch(getAllListing({ page, limit }))
      .then(res => {

        setListings(listings.concat(res.listings));
        setPage(page + 1);
        setisLoading(false);
        setisRefreshing(false);
        setisMiddleLoading(false);

        if (res.listings.length < limit) {
          setEndReached(true);
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
  };



  const topData = [
    {
      id: 0,
      desc: 'Smart homes',
      img: require('../../../Assets/Listings/2.jpg')
    },
    {
      id: 1,
      desc: 'Discounts',
      img: require('../../../Assets/Listings/2.jpg')
    },
    {
      id: 2,
      desc: '3 beds or more',
      img: require('../../../Assets/Listings/1.jpg')
    },
    {
      id: 3,
      desc: 'Swimming pool',
      img: require('../../../Assets/Listings/4.jpg')
    },
    {
      id: 4,
      desc: 'Party allowed',
      img: require('../../../Assets/Listings/2.jpg')
    },
    {
      id: 5,
      desc: 'No caution fee',
      img: require('../../../Assets/Listings/3.jpg')
    },
  ]






  const renderListing = ({ item, index }) => {
    return (

      <Item item={item} index={index} navigation={navigation} />

    )
  }


  const RenderHeader = () => {
    return (

      <View style={[styles.header,]}>

        <Image
          source={require('../../../Assets/logo-fixlancer.png')}
          style={styles.image}
        />

        <View style={[styles.RowB]}>

          <TouchableOpacity onPress={() => navigation.navigate('ModalSearch')}
            style={[styles.Row, styles.bgSearch]}>
            <IconM
              size={moderateScale(17)}
              name={'search-outline'}
              color={'#808080'}
              style={{}}
            />
            <MyText style={[styles.subLabel, styles.textDark, { marginTop: 1, marginRight: 3, paddingLeft: 10, }]}>Where are you going?</MyText>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={[styles.RowB, styles.pt20, styles.ph15]}>

              {topData && topData.map((item) => {
                return (
                  <View key={item.id} style={{ width: (width - 60) / 2, marginRight: 15 }}>
                    <Image
                      source={item.img}
                      style={styles.img}
                      imageStyle={{ borderRadius: 50 }}
                    />
                    <Text style={[styles.mediumLabel, styles.textDark, styles.textLeft]}>{item.desc}</Text>
                  </View>
                )

              })
              }

            </View>
          </ScrollView>
        </ScrollView>

      </View>

    )
  }


  const HeaderTop = () => {
    return (

      <View style={[styles.header2, styles.pl10]}>

        <View style={[styles.RowB, { zIndex: 999 }]}>
          <Text style={[styles.titleLabel2, { color: '#fff' }]}>Explore</Text>

          <TouchableOpacity onPress={() => navigation.navigate('ModalSearch')}
            style={[styles.Row, { marginRight: 15, marginTop: 2, }]}>
            <IconM
              size={moderateScale(17)}
              name={'search-outline'}
              color={'#fff'}
              style={{}}
            />
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

      <View style={styles.container}>
        <Image
          source={bgImg}
          style={styles.accountBG}
        />
        <SafeAreaView
          style={{
            // height: height + StatusBar.currentHeight,
            // width: width,
            flex: 1,
            backgroundColor: 'transparent',
          }}
          edges={['left', 'right', 'top']}>
          <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />



          {isMiddleLoading ? (

            <>
            <ScrollView>
              <RenderHeader />
              <View style={{ flex: 1, width: '100%', backgroundColor: '#fff', paddingTop: 0, paddingHorizontal: 5, }}>
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
            </>
          ) : (
            <>

              <View style={{ flex: 1, backgroundColor: 'transparent', }}>

                <FlatList
                  refreshControl={
                    <RefreshControl
                      tintColor={'#343434'}
                      refreshing={isRefreshing}
                      onRefresh={() => handleRefresh()}
                    />
                  }
                  data={listings}
                  contentContainerStyle={{ paddingBottom: moderateScale(10) }}
                  renderItem={renderListing}
                  keyExtractor={item => item.listingID}
                  initialNumToRender={10}
                  maintainVisibleContentPosition={{
                    autoscrollToTopThreshold: 10,
                    minIndexForVisible: 1,
                  }}
                  onEndReached={fetchListing}
                  onEndReachedThreshold={0.5}
                  ListHeaderComponent={RenderHeader}
                  ListFooterComponent={footerLoader}
                  ListEmptyComponent={showEmpty}

                /*    HeaderNavbarComponent={<RenderHeader />}
                    TopNavBarComponent={<HeaderTop />}
                    headerMaxHeight={moderateScale(400)}
                    topBarHeight={moderateScale(50)}
                    */
                />

                {error ? (

                  <FetchError setRetry={() => handleRefresh()} />

                ) : null}

              </View>



              {/*}     <View style={styles.modal}>
          <TouchableOpacity onPress={() => navigation.navigate('ModalSearch')}>
            <View style={styles.bgGrey}>
              <View style={styles.Row}>
                <View style={styles.bgIcon}>
                  <IconM
                    size={RFValue(18)}
                    name={'location-outline'}
                    color={'#343434'}
                  />
                </View>

                <Text style={styles.titleLabel}>Where to?</Text>

              </View>
            </View>
          </TouchableOpacity>
        </View>
      */}

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

      </View>

      <NavBar
        navigation={navigation}
        activePage={'home'}
        backgroundColor={undefined}
      />

    </>

  );
};

export default Home;

export const ItemFnc = React.memo(Item);
