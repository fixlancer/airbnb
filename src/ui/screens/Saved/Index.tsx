//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
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
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/Navbars/Navbar';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import styles from './Styles';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import ApartmentCard from '../../components/ApartmentCard/Index';

const Item = ({ item, index, navigation }) => {

  return (
    <ApartmentCard
      listingID={item.listingID}
      desc={item.desc}
      title={item.title}
      mainPhoto={item.mainPhoto}
      photos={item.photos}
      ownerID={item.ownerID}
      basePrice={item.basePrice}
      weekendPrice={item.weekendPrice}
      firstDiscount={item.firstDiscount}
      weeklyDiscount={item.weeklyDiscount}
      monthlyDiscount={item.monthlyDiscount}
      contactNumber={item.contactNumber}
      minNights={item.minNights}
      maxNights={item.maxNights}
      checkIn={item.checkIn}
      checkOut={item.checkOut}
      maxPerson={item.maxPerson}
      beds={item.beds}
      bedrooms={item.bedrooms}
      bathrooms={item.bathrooms}
      bookingType={item.bookingType}
      wifi={item.wifi}
      location={item.location}
      extraCharge={item.extraCharge}
      calendar={item.calendar}
      cancelPolicy={item.cancelPolicy}
      amenities={item.amenities}
      checkInDesc={item.checkInDesc}
      houseRules={item.houseRules}
      aboutLocation={item.aboutLocation}
      gettingAround={item.gettingAround}
      safety={item.safety}
      status={item.status}
      navigation={navigation}
      viewType={'Home'}

    />
  )
}

const Saved = ({ route, navigation }) => {

  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [newListing, setNewListing] = useState([]);


  const listings = [
    {
      id: 0,
      listingID: '3456',
      desc: 'This 3 beedroom smarthome is locate din the heart of lagos. Its the biggest luxury apartment you can ever find in the whole of west africa, 100ft tall with 100 partments to choose from',
      title: '3 bedroom smart home',
      mainPhoto: require('../../../Assets/Listings/1.jpg'),
      photos: [],
      ownerID: 456509,
      weekendPrice: 154000,
      basePrice: 104000,
      firstDiscount: 10,
      weeklyDiscount: 20,
      monthlyDiscount: 10,
      contactNumber: '0813 000 0000',
      minNights: 2,
      maxNights: 7,
      checkIn: '3:00',
      checkOut: '11:59',
      maxPerson: 5,
      beds: 5,
      bedrooms: 4,
      bathrooms: 4.5,
      bookingType: 'auto',
      wifi: [{
        network: 'eko-atlantic',
        password: 'VBFG465867',
      },
      ],
      location: [
        {
          street: 'Lekki ajah',
          city: 'Lagos',
          state: 'Lagos',
          country: 'Nigeria',
          latitude: 0,
          longitude: 0,
        }
      ],
      extraCharge: [
        {
          cleaningFee: 5000,
          cautionFee: 10000,
          extraGuest: 2,
          extraGuestPrice: 10000
        },
      ],
      calendar: [
        {
          blocked: ['2023-04-18T11:00:00.000Z', '2023-04-19T11:00:00.000Z', '2023-04-20T11:00:00.000Z'], //all blocked dates visible to guests
          autoBlocked: ['2023-04-18T11:00:00.000Z', '2023-04-19T11:00:00.000Z', '2023-04-20T11:00:00.000Z'], //all auto blocked dates
          manualBlocked: ['2023-04-25T11:00:00.000Z', '2023-04-26T11:00:00.000Z', '2023-04-27T11:00:00.000Z'], //all manually blocked dates
          //   monthBlocked: ['June', 'July']
        }
      ],
      cancelPolicy: 'Rigid',
      amenities: [
        {
          propertyType: ['Smart home', 'Duplex', 'Bungalow', 'Penthouse'],
          outsideView: ['Ocean view', 'Pool View', 'Garden view'],
          bathroom: ['shampoo', 'Hot water', 'shower', 'Bath', 'Hair dryer'],
          bedroom: ['Essentials', 'Hangers', 'Iron', 'Walk in closet'],
          entertainment: ['HD TV with Netflix', 'Video game', 'Bluetooth sound system'],
          cooling: ['Air conditiong', 'Ceiling fan', 'Standing fan'],
          internet: ['Wifi', 'Dedicated workspace'],
          safety: ['Fire extinguisher', 'First aid kit'],
          kitchen: ['Kitchen', 'Microwave', 'Refridgerator', 'Dishes', 'Cooking basics', 'Dining table'],
          outdoor: ['Private balcony', 'Private backyard - not fully fenced', 'Outdor furniture', 'BBQ grill'],
          parking: ['Free parking on premises', 'Street parking', 'Private outdoor pool'],
          locationFeatures: ['Private entrance', 'Waterfront', 'Laundromat nearby'],
          services: ['Food ordering', 'Cleaning during stay'],
          notIncluded: ['Smoke detector', 'Security cameras']
        },
      ],
      checkInDesc: 'When you arrive at the gate you are received by a receptionist, who the directs you tot your apartment',
      houseRules: [{
        petsAllowed: 0,
        maxPerson: 5,
        smoking: 0,
        party: 0,
        checkIn: '2:00',
        checkOut: '11:59',
        additionalRules: ['Keep silence fter 10pm', 'No street parking after 11pm'],
      }],
      aboutLocation: 'This edifice is located in ikoyi. In the estate you have lots of small supermarketes, many food deliver or mama put options, police sttion, ATMs and many other shops.',
      gettingAround: 'There is hailing services like Bolt and available cabs at every junction',
      safety: ['No smoke alarm', 'Must climb stairs', 'Not suitable for children or infants'],
      status: 'Active',
    },
    {
      id: 1,
      listingID: '3234556',
      desc: 'This 3 beedroom smarthome is locate din the heart of lagos. Its the biggest luxury apartment you can ever find in the whole of west africa, 100ft tall with 100 partments to choose from',
      title: '3 bedroom smart home',
      mainPhoto: require('../../../Assets/Listings/2.jpg'),
      photos: [],
      ownerID: 45556509,
      weekendPrice: 134000,
      basePrice: 124000,
      firstDiscount: 10,
      weeklyDiscount: 20,
      monthlyDiscount: 10,
      contactNumber: '0813 000 0000',
      minNights: 2,
      maxNights: 7,
      checkIn: '3:00',
      checkOut: '11:59',
      maxPerson: 5,
      beds: 5,
      bedrooms: 4,
      bathrooms: 4.5,
      bookingType: 'auto',
      wifi: [{
        network: 'eko-atlantic',
        password: 'VBFG465867',
      },
      ],
      location: [
        {
          street: 'Lekki ajah',
          city: 'Lagos',
          state: 'Lagos',
          country: 'Nigeria',
          latitude: 0,
          longitude: 0,
        }
      ],
      extraCharge: [
        {
          cleaningFee: 5000,
          cautionFee: 10000,
          extraGuest: 2,
          extraGuestPrice: 10000
        },
      ],
      calendar: [
        {
          blocked: ['2023-04-18T11:00:00.000Z', '2023-04-19T11:00:00.000Z', '2023-04-20T11:00:00.000Z'], //all blocked dates visible to guests
          autoBlocked: ['2023-04-18T11:00:00.000Z', '2023-04-19T11:00:00.000Z', '2023-04-20T11:00:00.000Z'], //all auto blocked dates
          manualBlocked: ['2023-04-25T11:00:00.000Z', '2023-04-26T11:00:00.000Z', '2023-04-27T11:00:00.000Z'], //all manually blocked dates
        }
      ],
      cancelPolicy: 'Mild',
      amenities: [
        {
          propertyType: ['Smart home', 'Duplex', 'Bungalow', 'Penthouse'],
          outsideView: ['Ocean view', 'Pool View', 'Garden view'],
          bathroom: ['shampoo', 'Hot water', 'shower', 'Bath', 'Hair dryer'],
          bedroom: ['Essentials', 'Hangers', 'Iron', 'Walk in closet'],
          entertainment: ['HD TV with Netflix', 'Video game', 'Bluetooth sound system'],
          cooling: ['Air conditiong', 'Ceiling fan', 'Standing fan'],
          internet: ['Wifi', 'Dedicated workspace'],
          safety: ['Fire extinguisher', 'First aid kit'],
          kitchen: ['Kitchen', 'Microwave', 'Refridgerator', 'Dishes', 'Cooking basics', 'Dining table'],
          outdoor: ['Private balcony', 'Private backyard - not fully fenced', 'Outdor furniture', 'BBQ grill'],
          parking: ['Free parking on premises', 'Street parking', 'Private outdoor pool'],
          locationFeatures: ['Private entrance', 'Waterfront', 'Laundromat nearby'],
          services: ['Food ordering', 'Cleaning during stay'],
          notIncluded: ['Smoke detector', 'Security cameras']
        },
      ],
      checkInDesc: 'When you arrive at the gate you are received by a receptionist, who the directs you tot your apartment',
      houseRules: [{
        petsAllowed: 0,
        maxPerson: 5,
        smoking: 0,
        party: 0,
        checkIn: '2:00',
        checkOut: '11:59',
        additionalRules: ['Keep silence fter 10pm', 'No street parking after 11pm'],
      }],
      aboutLocation: 'This edifice is located in ikoyi. In the estate you have lots of small supermarketes, many food deliver or mama put options, police sttion, ATMs and many other shops.',
      gettingAround: 'There is hailing services like Bolt and available cabs at every junction',
      safety: ['No smoke alarm', 'Must climb stairs', 'Not suitable for children or infants'],
      status: 'Active',
    },
  ]


  useEffect(() => {

    setNewListing(listings);
  }, [])


  const renderList = React.useCallback(({ item, index }) => {

    return (
      item.status === 'Active' ? (
      <Item item={item} index={index} navigation={navigation} />
      ) : null 
   
        )

  }, [])


      const fetchMore = () => {
        return (
          <></>
        )
      }


  return (

    <View style={styles.container}>
      <SafeAreaView
        style={{
          // height: height + StatusBar.currentHeight,
          // width: width,
          flex: 1,
          backgroundColor: 'transparent',
        }}
        edges={['left', 'right', 'top']}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

        <View style={[styles.newModalHeader]}>
          <Text style={[styles.extraLabel, styles.pt10, styles.textDark]}>Saved</Text>
        </View>


        <View style={{ flex: 1, backgroundColor: '#f3f5f9', }}>


          <FlatList
            data={newListing}
            contentContainerStyle={[styles.iosBar, { paddingTop: moderateScale(10), paddingHorizontal: 15, paddingBottom: RFValue(30) }]}
            renderItem={renderList}
            keyExtractor={item => item.listingID}
            //      renderSectionHeader={({section}) => header(section)}
            initialNumToRender={10}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.01}
          //     stickySectionHeadersEnabled={true}
          />


    </View>

            </SafeAreaView >

  <NavBar
    navigation={navigation}
    activePage={'saved'}
    backgroundColor={undefined}
  />

        </View>

    );
};

export default Saved;