import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef, useCallback } from 'react';
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
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import RangeSlider from 'rn-range-slider';
import ListingCard from '../../components/ListingCard/Index';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { countFilter, listingFilter } from '../../../redux/actions/listingActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '../../../redux/store/store';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Empty from '../../components/Empty/Index';
import FetchError from '../../components/FetchError/Index';

const Item = ({ item, index, navigation }) => {

  return (
    <ListingCard
      listingID={item.listingID}
      title={item.title}
      mainPhoto={item.mainPhoto}
      owner={item.owner}
      price={item.price}
      location={item.location}
      calendar={item.calendar}
      discount={item.discount}
      navigation={navigation}
      viewType={'Home'}

    />
  )
}

const Search = ({ route, navigation }) => {

  const { checkIn, checkOut, loc, beds } = route.params;
  const inputRef = useRef(null);

  const [count, setCount] = useState(0);

  const [location, setLocation] = useState(loc);
  const [filter, setFilter] = useState(false);
  const [bedNo, setBedNo] = useState(beds);
  const [checkInDay, setCheckInDay] = useState(checkIn);
  const [checkOutDay, setCheckOutDay] = useState(checkOut);

  const [minPrice, setMinPrice] = useState(5000);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minError, setMinError] = useState(false);
  const [maxError, setMaxError] = useState(false);
  const [newDiscount, setNewDiscount] = useState(false);
  const [weeklyDiscount, setWeeklyDiscount] = useState(false);
  const [monthlyDiscount, setMonthlyDiscount] = useState(false);
  const [smartHome, setSmartHome] = useState(false);
  const [penthouse, setPenthouse] = useState(false);
  const [duplex, setDuplex] = useState(false);
  const [bungalow, setBungalow] = useState(false);
  const [cautionFee, setCautionFee] = useState(false);
  const [cautionDesc, setCautionDesc] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [pool, setPool] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [videoGame, SetVideoGame] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [washer, setWasher] = useState(false);
  const [iron, setIron] = useState(false);
  const [microwave, setMicrowave] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [cleanliness, setCleanliness] = useState(false);
  const [rating, setRating] = useState(false);
  const [party, setParty] = useState(false);
  const [elevator, setElevator] = useState(false);
  const [instantBooking, setInstantBooking] = useState(false);
  //  const [bathrooms, setBathrooms] = useState('Any');
  const [listings, setListings] = useState([]);

  const [isRefreshing, setisRefreshing] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isMiddleLoading, setisMiddleLoading] = useState(true);


  const { filterCount } = useSelector((state: RootState) => state.listingReducers);
  const { filterListing } = useSelector((state: RootState) => state.listingReducers);


  const handleMin = text => {
    setMinPrice(text);
    setMinError(false);
    setGetCount(Number(getCount) + 1);
  }

  const handleMax = text => {
    setMaxPrice(text);
    setMaxError(false);
    setGetCount(Number(getCount) + 1);
  }


  const handlePrice = useCallback((low, high) => {
    setMinPrice(low);
    setMaxPrice(high);
    setGetCount(Number(getCount) + 1);
  }, [])


  /* PRICE RANGE ***/


  const Thumb = ({ name }) => {
    return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
  };

  const Label = ({ text }) => {
    return (
      <View style={styles.labelRoot}><MyText style={[styles.subLabel, { color: '#fff' }]}>{text}</MyText></View>
    )
  }

  const Notch = () => {
    return <View style={styles.nRoot} />
  }

  const renderThumb = useCallback((name: 'high' | 'low') => <Thumb name={name} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const renderRail = useCallback(() => <View style={styles.rootRail} />, []);
  const renderRailSelected = useCallback(() => <View style={styles.root} />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);

  /* PRICE RANGE ***/



  useEffect(() => {

    setLocation(loc);
    setBedNo(beds);
    setCheckInDay(checkIn);
    setCheckOutDay(checkOut)
  }, [])



  const [page, setPage] = useState(1);
  const [endReached, setEndReached] = useState(false);
  const [retry, setRetry] = useState(0);
  const [error, setError] = useState(false);
  const [getCount, setGetCount] = useState(0);

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

  

  useEffect(() => {

    if (retry != 0) {
      setListings([]);

      if(filterCount?.filterCount == 0){
        setListings([]);
        setEndReached(true);
      } else {
        fetchNewListing();
      }

    }
  }, [retry])


  const handleRefresh = () => {
    setListings([]);
    setEndReached(false);
    setisMiddleLoading(true);
    fetchNewListing();
   }


  useEffect(() => {

    setisMiddleLoading(true);
    fetchListing();

  }, [])



  const fetchCount = async () => {

    const data = {
      location,
      bedNo,
      checkInDay,
      checkOutDay,
      minPrice,
      maxPrice,
      newDiscount,
      weeklyDiscount,
      monthlyDiscount,
      smartHome,
      penthouse,
      duplex,
      bungalow,
      cautionFee,
      smoking,
      pool,
      wifi,
      videoGame,
      kitchen,
      washer,
      iron,
      microwave,
      breakfast,
      cleanliness,
      rating,
      party,
      elevator,
      instantBooking,
    };

    dispatch(countFilter({ data }))
      .then(res => {
        setCount(res.filterCount);      
        
        if(filterCount?.filterCount == 0){
          setEndReached(true);
        } else {
          setEndReached(false);
        }
      })
  }


  useEffect(() => {
    if(filterCount?.filterCount){
    setCount(filterCount?.filterCount);
    } else {
      fetchCount();
    }

  }, [])

  useEffect(() => {
    if(getCount != 0)
    setEndReached(false);
    fetchCount();

  }, [getCount])


  const fetchListing = async () => {
    if (endReached) {
      return;
    } else {
      fetchNewListing()
    }
  };

  const fetchNewListing = async () => {

    setisLoading(true);
    setError(false);

    const limit = 10;

    const data = {
      data: {
        location,
        bedNo,
        checkInDay,
        checkOutDay,
        minPrice,
        maxPrice,
        newDiscount,
        weeklyDiscount,
        monthlyDiscount,
        smartHome,
        penthouse,
        duplex,
        bungalow,
        cautionFee,
        smoking,
        pool,
        wifi,
        videoGame,
        kitchen,
        washer,
        iron,
        microwave,
        breakfast,
        cleanliness,
        rating,
        party,
        elevator,
        instantBooking,
      }
    };

    dispatch(listingFilter({ data, page, limit }))
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

  };



  const openFilter = () => {
    setFilter(true)
  }

  const closeFilter = () => {
    setFilter(false)
  }


  const numbers = [
    {
      id: 0,
      name: 'Any',
    },
    {
      id: 1,
      name: '1',
    },
    {
      id: 2,
      name: '2'
    },
    {
      id: 3,
      name: '3',
    },
    {
      id: 4,
      name: '4',
    },
    {
      id: 5,
      name: '5'
    },
    {
      id: 6,
      name: '6'
    },
    {
      id: 7,
      name: '7+',
    },
  ]




  const renderListing = ({ item, index }) => {
    return (

      <Item item={item} index={index} navigation={navigation} />

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

  const handleFilter = () => {
    setRetry(Number(retry) +1);
    setListings([]);
    closeFilter();
  }

  return (

    <View style={styles.container}>
      <SafeAreaView
        style={{
          // height: height + StatusBar.currentHeight,
          // width: width,
          flex: 1,
          backgroundColor: '#fff',
        }}
        edges={['left', 'right', 'top']}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />


        <View style={[styles.header]}>

          <View style={[styles.RowB, { paddingBottom: 10 }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <IconM
                name={'chevron-back-outline'}
                size={moderateScale(25)}
                color={'#343434'}
                style={{ marginTop: 5 }} />

            </TouchableOpacity>
            <View style={styles.drop}>
              <TextInput
                style={styles.text}
                placeholder="Search location"
                placeholderTextColor={'#343434'}
                value={location}
                onChangeText={(text) => setLocation(text)}
                onSubmitEditing={() => setisRefreshing(true)}
              />
            </View>

            <TouchableOpacity
              style={styles.roundBg}
              onPress={() => openFilter()}>
              <IconM
                name={'options-outline'}
                size={moderateScale(20)}
                color={'#343434'}
                style={{ alignSelf: 'center', }} />

            </TouchableOpacity>

          </View>

          <ScrollView>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
              <View style={[styles.RowB]}>



                {checkInDay ? (

                  <TouchableOpacity
                    onPress={() => {
                      setCheckInDay(null);
                      setCheckOutDay(null);
                      setGetCount(Number(getCount) + 1);
                      setisRefreshing(true);
                    }}
                    style={[styles.bgFilter]}>
                    {checkOutDay ? (
                      <Text style={styles.mediumLabel}>{checkInDay} - {checkOutDay}</Text>
                    ) : (
                      <Text style={styles.mediumLabel}>{checkInDay} - {checkOutDay}</Text>
                    )}
                    <IconM
                      name={'close-circle'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{ marginLeft: 10 }} />
                  </TouchableOpacity>

                ) : null}



                {bedNo !== 'Any' ? (

                  <TouchableOpacity
                    onPress={() => {
                      setBedNo('Any');
                      setGetCount(Number(getCount) + 1);
                      setisRefreshing(true);
                    }}
                    style={[styles.bgFilter]}>
                    <Text style={styles.mediumLabel}>{bedNo} bedroom</Text>
                    <IconM
                      name={'close-circle'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{ marginLeft: 10 }} />
                  </TouchableOpacity>

                ) : null}



              </View>
            </ScrollView>
          </ScrollView>

        </View>


        <View style={{ flex: 1, backgroundColor: '#f3f5f9', }}>


          {error ? (

            <FetchError setRetry={() => setRetry(retry +1)} />

          ) : (
            <>

              {isMiddleLoading ? (
                <ScrollView>
                  <View style={{ flex: 1, width: '100%', backgroundColor: '#f3f5f9', paddingTop: 0, paddingHorizontal: 5, }}>
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
                      onRefresh={() => handleRefresh()}
                    />
                  }
                  data={listings}
                  contentContainerStyle={{ paddingTop: 10, paddingBottom: moderateScale(10) }}
                  renderItem={renderListing}
                  maintainVisibleContentPosition={{
                    autoscrollToTopThreshold: 10,
                    minIndexForVisible: 1,
                  }}
                  keyExtractor={item => item.listingID}
                  initialNumToRender={10}
                  onEndReached={fetchListing}
                  onEndReachedThreshold={0.5}
                  ListFooterComponent={footerLoader}
                  ListEmptyComponent={showEmpty}
                />

              )}

            </>
          )}

        </View>

      </SafeAreaView>


      <Modal isOpen={filter}
        style={{ backgroundColor: '#fff' }}
        keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
        swipeToClose={false}
        onClosed={closeFilter}
        backdropOpacity={1}
        backdropColor="white"
        position="top">


        <View style={styles.container}>

          <SafeAreaView
            style={{
              height: height,
              width: width,
              flex: 1,
              backgroundColor: '#fff',
            }}
            edges={['left', 'right', 'top']}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

            <View style={[styles.modalHeader, styles.RowB]}>
              <TouchableOpacity
                onPress={() => closeFilter()}>
                <IconM
                  name={'close-circle-outline'}
                  size={moderateScale(25)}
                  color={'#343434'}
                  style={{ marginTop: 0, }} />

              </TouchableOpacity>
              <Text style={styles.largeLabel}>Filter Search</Text>
              <Text></Text>
            </View>

            <ScrollView style={{ width: '100%' }}>
              <View style={{ backgroundColor: '#fff', width: '100%', }}>

                <View style={[styles.mb30,]}>

                  <View style={[styles.pl15, styles.mb20]}>
                    <Text style={styles.largeLabel2}>Price range</Text>
                    {minError ? (
                      <MyText style={[styles.tinyLabel, { color: '#ff0000' }]}>Min. price needs to be lower than max. price</MyText>
                    ) : maxError ? (
                      <MyText style={[styles.tinyLabel, { color: '#ff0000' }]}>Max. price needs to be greater than min. price</MyText>
                    ) : null}

                    <View style={styles.Row}>

                      <View style={[{ marginRight: 10 }, styles.drop2]}>
                        <TextInput
                          style={styles.mainText}
                          placeholder="Min"
                          placeholderTextColor={'#808080'}
                          value={minPrice.toString()}
                          ref={inputRef}
                          keyboardType="numeric"
                          onChangeText={(text) => {
                            parseInt(text) > maxPrice ? setMinError(true) : handleMin(parseInt(text));
                          }}

                        />
                      </View>

                      <View style={[{}, styles.drop2]}>

                        <TextInput
                          style={styles.mainText}
                          placeholder="Max"
                          placeholderTextColor={'#808080'}
                          value={maxPrice.toString()}
                          ref={inputRef}
                          keyboardType="number-pad"
                          onChangeText={(text) => {
                            parseInt(text) < minPrice ? setMaxError(true) : handleMax(parseInt(text));
                          }}

                        />
                      </View>
                    </View>

                  </View>

                  <View style={[styles.ph15, styles.mb40, { width: '98%', justifyContent: 'center', }]}>
                    <RangeSlider
                      style={{}}
                      min={minPrice}
                      max={maxPrice}
                      minRange={20000}
                      step={2}
                      disableRange={false}
                      renderRail={renderRail}
                      renderThumb={renderThumb}
                      renderRailSelected={renderRailSelected}
                      renderLabel={renderLabel}
                      renderNotch={renderNotch}
                      floatingLabel
                      onValueChanged={handlePrice}


                    />
                  </View>


                  <View style={[styles.pl15, styles.mb30]}>
                    <Text style={styles.largeLabel2}>Discount</Text>


                    <TouchableOpacity
                      style={[styles.Row, styles.mb10,]}
                      onPress={() => {
                        setNewDiscount(!newDiscount);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={newDiscount ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={newDiscount ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <View>
                        <MyText style={[styles.subLabel, {}]}>New listing discount</MyText>
                        <MyText style={[styles.tinyLabel, {}]}>New listings offer as high as 20% discounts for the first 3 bookings</MyText>
                      </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setWeeklyDiscount(!weeklyDiscount);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={weeklyDiscount ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={weeklyDiscount ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <View>
                        <MyText style={[styles.subLabel, {}]}>Weekly discount</MyText>
                        <MyText style={[styles.tinyLabel, {}]}>Properties with discount for staying more than 7 nights</MyText>
                      </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setMonthlyDiscount(!monthlyDiscount);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={monthlyDiscount ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={monthlyDiscount ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <View>
                        <MyText style={[styles.subLabel, {}]}>Monthly discount</MyText>
                        <MyText style={[styles.tinyLabel, {}]}>Properties with discount for staying more than a month</MyText>
                      </View>
                    </TouchableOpacity>

                  </View>


                  <View style={[styles.pl15, styles.mb30]}>
                    <Text style={styles.largeLabel2}>Luxury type</Text>

                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setSmartHome(!smartHome);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={smartHome ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={smartHome ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Smart homes</MyText>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setPenthouse(!penthouse);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={penthouse ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={penthouse ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Penthouse</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setDuplex(!duplex);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={duplex ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={duplex ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Duplex</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setBungalow(!bungalow);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={bungalow ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={bungalow ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Bungalow</MyText>
                    </TouchableOpacity>


                  </View>


                  <View style={[styles.pl15, styles.mb40]}>
                    <Text style={styles.largeLabel2}>Bedrooms</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      {numbers && numbers.map((item) => {
                        return (
                          <View key={item.id}>
                            <TouchableOpacity
                              onPress={() => {
                                setBedNo(item.name);
                                setGetCount(Number(getCount) + 1);
                              }}
                              style={[styles.button, { backgroundColor: bedNo === item.name ? '#7E178E' : '#fff', borderColor: bedNo === item.name ? '#7E178E' : '#ddd' }]}>

                              <MyText style={[styles.subLabel, { color: bedNo === item.name ? '#fff' : '#343434' }]}>{item.name}</MyText>
                            </TouchableOpacity>
                          </View>
                        )
                      })}
                    </ScrollView>
                  </View>


                  <View style={[styles.pl15, styles.mb30]}>
                    <Text style={styles.largeLabel2}>Features and Amenities</Text>

                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setWifi(!wifi);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={wifi ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={wifi ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Wifi</MyText>
                    </TouchableOpacity>


                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        SetVideoGame(!videoGame);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={videoGame ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={videoGame ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Video Game</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setKitchen(!kitchen);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={kitchen ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={kitchen ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Kitchen</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setPool(!pool);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={pool ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={pool ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Swimming pool</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setWasher(!washer);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={washer ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={washer ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Washing machine</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setIron(!iron);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={iron ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={iron ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Iron</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setMicrowave(!microwave);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={microwave ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={microwave ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Microwave</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setElevator(!elevator);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={elevator ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={elevator ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Elevator</MyText>
                    </TouchableOpacity>

                  </View>



                  <View style={[styles.pl15, styles.mb30]}>
                    <Text style={styles.largeLabel2}>House rules</Text>


                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setSmoking(!smoking);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={smoking ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={smoking ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Smoking allowed</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setParty(!party);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={party ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={party ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <MyText style={[styles.subLabel, {}]}>Party or events allowed</MyText>
                    </TouchableOpacity>



                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setCautionFee(!cautionFee);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={cautionFee ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={cautionFee ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />

                      <View>
                        <View style={styles.Row}>
                          <MyText style={[styles.subLabel, {}]}>No caution fee</MyText>
                          <TouchableOpacity
                            onPress={() => {
                              setCautionDesc(!cautionDesc);
                              setGetCount(Number(getCount) + 1);
                            }}>
                            <IconM
                              name={'information-circle'}
                              size={moderateScale(20)}
                              color={'#343434'}
                              style={{ marginLeft: 10 }}

                            />
                          </TouchableOpacity>

                        </View>

                        {cautionDesc ? (

                          <MyText style={[styles.tinyLabel, {}]}>Most property owners request you pay a caution fee upfront when
                            making a booking. {"\n"}This fee is refunded automatically at the end of your stay if no property damage is recorded.
                            {"\n"}{"\n"}By ticking this option you will only see properties with no upfront caution fee. {"\n"}{"\n"}
                            This does not mean you won't pay for any damages you did during your stay.</MyText>
                        ) : null}
                      </View>
                    </TouchableOpacity>


                  </View>


                  <View style={[styles.pl15, styles.mb30]}>
                    <Text style={styles.largeLabel2}>Additional services</Text>


                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setBreakfast(!breakfast);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={breakfast ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={breakfast ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <View>
                        <View>
                          <MyText style={[styles.subLabel, {}]}>Breakfast</MyText>
                          <MyText style={[styles.tinyLabel, {}]}>Free breakfast every morning all through your stay</MyText>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>


                  <View style={[styles.pl15, styles.mb30]}>
                    <Text style={styles.largeLabel2}>Booking option</Text>


                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setInstantBooking(!instantBooking);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={instantBooking ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={instantBooking ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <View>
                        <View>
                          <MyText style={[styles.subLabel, {}]}>Instant booking</MyText>
                          <MyText style={[styles.tinyLabel, {}]}>Book without waiting for owner approval</MyText>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>


                  <View style={[styles.pl15, styles.mb30]}>
                    <Text style={styles.largeLabel2}>Property reviews</Text>


                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setCleanliness(!cleanliness);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={cleanliness ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={cleanliness ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <View>
                        <MyText style={[styles.subLabel, {}]}>Highly rated for cleanliness</MyText>
                        <MyText style={[styles.tinyLabel, {}]}>Guest rated 4+ stars</MyText>
                      </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                      style={[styles.Row, styles.mb10]}
                      onPress={() => {
                        setRating(!rating);
                        setGetCount(Number(getCount) + 1);
                      }}
                    >
                      <IconM
                        name={rating ? 'checkbox' : 'square-outline'}
                        size={moderateScale(22)}
                        color={rating ? '#7E178E' : '#808080'}
                        style={{ marginRight: 15 }}

                      />
                      <View>
                        <MyText style={[styles.subLabel, {}]}>Overall ratings</MyText>
                        <MyText style={[styles.tinyLabel, {}]}>Guest rated 4+ stars</MyText>
                      </View>
                    </TouchableOpacity>

                  </View>


                </View>



              </View>

            </ScrollView>

          </SafeAreaView>


          <View style={[styles.RowB, styles.ph15, styles.pt10, styles.bottomBar]}>

            <MyText style={[styles.subLabel, styles.pt10]}>{count} listings</MyText>


            <TouchableOpacity
              onPress={() => handleFilter()}
              style={[styles.submitButton, {}]}>
              <MyText style={styles.buttonLabel}>Done</MyText>
            </TouchableOpacity>


          </View>

        </View>

      </Modal>


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

export default Search;

export const ItemC = React.memo(Item);
