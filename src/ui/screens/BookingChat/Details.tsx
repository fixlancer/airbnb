//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef, useCallback } from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Platform,
    FlatList,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './StylesD';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import moment from 'moment';
import CancelPolicy from '../Listing/CancelPolicy';

interface Props {
    listingID: any;
    contactInfo: any;
    ownerID: any;
    ownerUsername: any;
    firstName: any;
    dateOrdered: any;
    street: any;
    city: any;
    country: any;
    wifiNetwork: any;
    wifiPass: any;
    noOfNights: any;
    checkIn: any;
    checkOut: any;
    inTime: any;
    outTime: any;
    cautionFee: any;
    cleaningFee: any;
    status: any;
    duePrice: any;
    dueDate: any;
    totalPrice: any;
    basePrice: any;
    bedrooms: any;
    bathrooms: any;
    title: any;
    personAllowed: any;
    beds: any;
    checkInDesc: any;
    confirmationCode: any;
    cancelPolicy: any;
    houseRules: any;
    safety: any;
    amenities: any;
    mainPhoto: any;
    extras: any;
    openModal: any;
    userID: any;
    extrasID: any;
    cancelRequest: any;
    navigation: any;
}

const Details: React.FC<Props> = props => {

    const { 
        listingID,
        dateOrdered,
        ownerID,
        ownerUsername,
        firstName,
        contactInfo,
        mainPhoto,
        street,
        city,
        country,
        wifiNetwork,
        wifiPass,
        noOfNights,
        checkIn,
        checkOut,
        inTime,
        outTime,
        cleaningFee,
        cautionFee,
        cancelPolicy,
        houseRules,
        safety,
        amenities,
        status,
        title,
        personAllowed,
        duePrice,
        dueDate,
        totalPrice,
        basePrice,
        bathrooms,
        beds,bedrooms,
        checkInDesc,
        confirmationCode,
        openModal,
        extras,
        userID,
        extrasID,
        cancelRequest,
        navigation,
    } = props;

    const checkInD = new Date(checkIn);
    const checkInDate = `${checkInD.getDate()} ${checkInD.toLocaleDateString('default', {month : 'short'})} ${checkInD.getFullYear()}`;
 //   const checkInDate = moment(checkInD, 'D MMM YY');
    const checkOutD = new Date(checkOut);
   const checkOutDate = `${checkOutD.getDate()} ${checkOutD.toLocaleDateString('default', {month : 'short'})} ${checkOutD.getFullYear()}`;
  

   const dueInD = new Date(dueDate);
   const finalDueDate = `${dueInD.getDate()} ${dueInD.toLocaleDateString('default', {month : 'short'})} ${dueInD.getFullYear()}`;

   const [extrasAllowed, setExtrasAllowed] = useState(false);

   useEffect(() => {
    let isAllow = false;
    extras.forEach((item) => {
      if(item.paid == '0' && item.from != userID)
      isAllow = true;

      else
      isAllow = false;
    })

    if(isAllow)
    setExtrasAllowed(true);
   }, [])


   const renderExtras = ({item}) => {
       return (
           
        <TouchableOpacity activeOpacity={0.7} 
        onPress={() => {
            openModal('Extras');
            extrasID(item.id);
        }}>
        <View style={styles.RowB}> 
            <View>
            <Text style={[styles.userLabel]}>{item.price}</Text>
                <MyText style={[styles.tinyLabel]}>{item.desc} </MyText>
            </View>

            <View style={[styles.button, styles.bgWhite, {borderColor:'#ddd'}]}>
          <MyText style={[styles.buttonLabel, styles.textDark]}>Respond</MyText>
              </View>

            </View> 
        </TouchableOpacity>
       )

   }

   const seperator = () => {
       return (
           <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor:'#ddd'}} />
       )
   }

    return (

   <>
                    <View style={[styles.mb30]}>

                    <View style={[styles.bb, styles.mb10, styles.ph15, {paddingVertical:15, }]}>

                    <View style={[styles.Row]}>

                        <TouchableOpacity 
                        activeOpacity={0.7}
                        onPress={() =>  navigation.navigate('Listing', {listingID: listingID})}>
                                <Image
                                    source={{uri: mainPhoto}}
                                    style={styles.img}
                                />
                    </TouchableOpacity>

                                <View>
                                    <View style={styles.Row}>
                                        <IconM
                                            name={'people-outline'}
                                            size={moderateScale(18)}
                                            color={'#343434'}
                                            style={{ marginRight: 5 }}

                                        />
                                        <MyText style={[styles.userLabel, styles.mb10]}>{personAllowed} occupants</MyText>
                                    </View>

                                    <View style={styles.Row}>
                                        <IconM
                                            name={'md-bed-outline'}
                                            size={moderateScale(18)}
                                            color={'#343434'}
                                            style={{ marginRight: 5 }}

                                        />
                                        <MyText style={[styles.userLabel, styles.mb10]}>{beds} beds / {bedrooms} rooms</MyText>
                                    </View>

                                    <View style={styles.Row}>
                                        <Icons
                                            name={'bathtub-outline'}
                                            size={moderateScale(18)}
                                            color={'#343434'}
                                            style={{ marginRight: 5 }}

                                        />
                                        <MyText style={[styles.userLabel, styles.mb10]}>{bathrooms} bathrooms</MyText>
                                    </View>

                                </View>
                            </View>

                            
                {cancelRequest !== 1 && userID === ownerID ? (
                  <View style={[styles.cancelBG, styles.mt20, styles.ph15]}>
                    <TouchableOpacity activeOpacity={0.7}
                      onPress={() => {
                        openModal('CancelRequest');
                      }}>
                      <View style={styles.alignCenter}>
                        <View>
                          <MyText style={[styles.userLabel, styles.mb10, styles.pt10, styles.textDark]}>{firstName} requests that you cancel this booking</MyText>
                        </View>

                        <View style={[styles.buttonWhite, {width:100}]}>
                          <MyText style={[styles.buttonLabel, styles.textDark]}>Respond</MyText>
                        </View>

                      </View>
                    </TouchableOpacity>
                  </View>
                ) : null}

                    </View>

                    {extrasAllowed ? (
                        
                    <View style={[styles.bb, styles.mb10, styles.ph15, {paddingVertical:15, paddingBottom:5, }]}>
                        <Text style={[styles.largeLabel2, styles.mb30]}>Extras pending</Text>
                        <FlatList
                        data={extras}
                        keyExtractor={item => item._id}
                        renderItem={renderExtras}
                        ItemSeparatorComponent={seperator}

                        />

                    </View>

                    ): null }
                    
                    <View style={[styles.bb, styles.mb10, styles.ph15, {paddingVertical:15, paddingBottom:5, }]}>

                    <View style={[styles.mb10]}>
                    <View style={styles.lineBottom}>
                    
                            <View style={[styles.Row, styles.mb10]}>
                            <Text style={[styles.titleLabel]}>{noOfNights} nights in </Text>
                           
                             <Text style={[styles.titleLabel]}>{city}, {country} </Text>
                            
                             </View>

                             <View style={[styles.Row, styles.pl5, styles.mb10]}>
                                 <View style={[styles.point]}>
                                 <View style={{position:'absolute',left:-9, top:-5}}>
                                 <Icons
                                            name={'record-circle'}
                                            size={moderateScale(15)}
                                            color={'#1cc88a'}
                                            style={{ marginRight: 0}}

                                        />
                                 </View>
                                 </View>
                                 
                                 <View>

                             <View style={[styles.Row]}>
                             
                                        <MyText style={[styles.tinyLabel, styles.textDark, styles.mb10]}>{checkInDate} {inTime}</MyText>
                                    </View>

                                    <View style={styles.Row}>
                             
                                        <MyText style={[styles.tinyLabel, styles.textDark, styles.mb10]}>{checkOutDate} {outTime}</MyText>
                                    </View>
                                   
                                   
                                    </View>
                                    </View>

                                    </View>
                                    </View>

                             
                                    <View style={[styles.mb15]}>
                                    <TouchableOpacity activeOpacity={0.7} 
                                    onPress={() => openModal('Map')}
                                    style={styles.lineBottom}>
                                    <View style={styles.Row}>
                                    <Icons
                                            name={'map-marker'}
                                            size={moderateScale(35)}
                                            color={'#343434'}
                                            style={{ marginRight: 15}}

                                        />   
                                        <View>
                                        <Text style={[styles.userLabel]}>Get directions</Text>
                                            <MyText style={[styles.tinyLabel]}>{street}, {city} </MyText>
                                        </View>

                                        </View> 
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.mb15]}>
                                    <TouchableOpacity activeOpacity={0.7} 
                                    onPress={() => openModal('CheckIn')}
                                    style={styles.lineBottom}>

                                    <View style={styles.Row}>
                                    <Icons
                                            name={'key-chain'}
                                            size={moderateScale(35)}
                                            color={'#343434'}
                                            style={{ marginRight: 15}}

                                        />   
                                        <View>
                                        <Text style={[styles.userLabel]}>How to get inside</Text>
                                            <MyText style={[styles.tinyLabel]}>Easy check-in details</MyText>
                            
                                        </View>

                                        </View> 
                                    </TouchableOpacity>
                                </View>

                                 <View style={[styles.mb15]}>
                                    <View style={styles.lineBottom}>
                                        
                                    <View style={styles.Row}>
                                    <Icons
                                            name={'wifi'}
                                            size={moderateScale(35)}
                                            color={'#343434'}
                                            style={{ marginRight: 15}} 

                                        />   
                                        <View>
                                        <Text style={[styles.userLabel]}>Wifi connection</Text>
                                            <MyText style={[styles.tinyLabel]}>Network: {wifiNetwork}</MyText>
                                            <MyText style={[styles.tinyLabel]}>Password: {wifiPass}</MyText>
                                          
                                        </View>

                                    </View>
                                    </View>
                                </View>

                                <View style={[styles.mb15]}>
                                    <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => openModal('Rules')}
                                    style={styles.lineBottom}>
                                        
                                    <View style={styles.Row}>
                                    <Icons
                                            name={'greenhouse'}
                                            size={moderateScale(35)}
                                            color={'#343434'}
                                            style={{ marginRight: 15}} 

                                        />   
                                        <View>
                                        <Text style={[styles.userLabel]}>House rules</Text>
                                            <MyText style={[styles.tinyLabel]}>Rules to abide to during your stay</MyText>
                                            </View>

                                    </View>
                                    </TouchableOpacity>
                                </View>


                                <View style={[styles.mb15]}>
                                    <TouchableOpacity activeOpacity={0.7} 
                                    onPress={() => openModal('Amenities')}
                                    style={styles.lineBottom}>
                                        
                                    <View style={styles.Row}>
                                    <Icon
                                            name={'restaurant'}
                                            size={moderateScale(35)}
                                            color={'#343434'}
                                            style={{ marginRight: 15}} 

                                        />   
                                        <View>
                                        <Text style={[styles.userLabel]}>Apartment features</Text>
                                            <MyText style={[styles.tinyLabel]}>Features & amenities</MyText>
                                            </View>

                                    </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.mb15]}>
                                    <TouchableOpacity activeOpacity={0.7} 
                                    onPress={() => openModal('Safety')}
                                    style={styles.lineBottom}>
                                        
                                    <View style={styles.Row}>
                                    <Icons
                                            name={'shield-alert'}
                                            size={moderateScale(35)}
                                            color={'#343434'}
                                            style={{ marginRight: 15}} 

                                        />   
                                        <View>
                                            
                                        <MyText style={[styles.userLabel]}>Safety considerations</MyText>
                                            <MyText style={[styles.tinyLabel]}>Important details to consider during your stay </MyText>
                                            </View>
                                         

                                    </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.mb30]}>
                                    <TouchableOpacity activeOpacity={0.7} 
                                    onPress={() => openModal('Cancel')}>
                                        
                                    <View style={styles.Row}>
                                    <IconM
                                            name={'settings'}
                                            size={moderateScale(35)}
                                            color={'#343434'}
                                            style={{ marginRight: 15}} 

                                        />   
                                        <View>
                                        <MyText style={[styles.userLabel]}>Cancellation policies</MyText>
                                            <MyText style={[styles.tinyLabel]}>Details on cancellations</MyText>
                                            </View>
                                      

                                    </View>
                                    </TouchableOpacity>
                                </View>

                             </View>
                        
                        
                             <View style={[styles.bb, styles.ph15, {paddingVertical:15, paddingBottom:5, }]}>
                                 
                            <Text style={[styles.largeLabel2, styles.mb30]}>What would you like to do?</Text>

                            {userID !== ownerID ? (

                            <View style={[styles.mb10]}>
                                    <TouchableOpacity activeOpacity={0.7} 
                                    onPress={() => openModal('Send')}
                                    style={styles.bgGrey}>
                                        
                                    <View style={styles.Row}>
                                    <IconM
                                            name={'cash-outline'}
                                            size={moderateScale(25)}
                                            color={'#808080'}
                                            style={{ marginRight: 12}} 

                                        />   
                                        <View>
                                            
                                        <MyText style={[styles.userLabel]}>Send Money</MyText>
                                            <MyText style={[styles.tinyLabel]}>For extra services</MyText>
                                            </View>
                                         

                                    </View>
                                    </TouchableOpacity>
                                </View>
                            ) : (

                                <View style={[styles.mb10]}>
                                    <TouchableOpacity activeOpacity={0.7} 
                                    onPress={() => openModal('Request')}
                                    style={styles.bgGrey}>
                                        
                                    <View style={styles.Row}>
                                    <IconM
                                            name={'cash-outline'}
                                            size={moderateScale(25)}
                                            color={'#808080'}
                                            style={{ marginRight: 12}} 

                                        />   
                                        <View>
                                            
                                        <MyText style={[styles.userLabel]}>Request Money</MyText>
                                            <MyText style={[styles.tinyLabel]}>For extra services</MyText>
                                            </View>
                                         

                                    </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                                
                                <View style={[styles.mb10]}>
                                    <TouchableOpacity activeOpacity={0.7} 
                                    onPress={() => openModal('Safety')}
                                    style={styles.bgGrey}>
                                        
                                    <View style={styles.Row}>
                                    <Icon
                                            name={'support-agent'}
                                            size={moderateScale(25)}
                                            color={'#808080'}
                                            style={{ marginRight: 12}} 

                                        />   
                                        <View>
                                            
                                        <MyText style={[styles.userLabel]}>Get Help</MyText>
                                            <MyText style={[styles.tinyLabel]}>Get in touch with our Support team</MyText>
                                            </View>
                                         

                                    </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.mb30]}>
                                    <TouchableOpacity activeOpacity={0.7} 
                                    onPress={() => openModal('CancelGuest')}
                                    style={styles.bgGrey}>
                                        
                                    <View style={styles.Row}>
                                    <Icon
                                            name={'block-flipped'}
                                            size={moderateScale(25)}
                                            color={'#808080'}
                                            style={{ marginRight: 12}} 

                                        />   
                                        <View>
                                            
                                        <MyText style={[styles.userLabel]}>Cancel Booking</MyText>
                                            <MyText style={[styles.tinyLabel]}>This booking has a {cancelPolicy} cancellation policy</MyText>
                                            </View>
                                         

                                    </View>
                                    </TouchableOpacity>
                                </View>

                            </View>


                        
                        <View style={[styles.bb, {borderBottomWidth:0, }]}>
                            <Text style={[styles.largeLabel2, styles.pl15, styles.mb30]}>Payment Summary</Text>

                            
                            <View style={[ styles.ph15]}>
                                <View style={[styles.RowB, styles.mb15, styles.lineBottom]}>
                                    <MyText style={[styles.userLabel]}>{'\u20A6'}{basePrice} x {noOfNights} nights</MyText>

                                    <MyText style={[styles.userLabel]}>{'\u20A6'}{basePrice * noOfNights}</MyText>

                                </View>
                            </View>

                            
                            {cleaningFee > 0 ? (
                                <View style={[styles.ph15]}>
                                <View style={[styles.RowB, styles.mb15, styles.lineBottom]}>
                                        <MyText style={[styles.userLabel]}>Cleaning fee</MyText>

                                        <MyText style={[styles.userLabel]}>{'\u20A6'}{cleaningFee}</MyText>

                                    </View>
                                </View>
                            ) : null}

                            {cautionFee > 0 ? (
                                <View style={[styles.ph15]}>
                                <View style={[styles.RowB, styles.mb15, styles.lineBottom]}>
                                    <MyText style={[styles.userLabel]}>Caution Fee</MyText>
                                    <MyText style={[styles.userLabel]}>{'\u20A6'}{cautionFee}</MyText>
                                </View>
                                </View>
                                ): null}
                            


                            {duePrice > 0 ? (
                                <>
                                    <View style={[styles.RowB, styles.mb10, styles.ph15]}>
                                        <MyText style={[styles.userLabel]}>Amount paid </MyText>
                                        <MyText style={[styles.userLabel]}>{'\u20A6'}{totalPrice - duePrice}</MyText>
                                    </View>

                                    <View style={[styles.RowB, styles.ph15]}>
                                        <Text style={[styles.userLabel]}>Amount Due on {finalDueDate}</Text>
                                        <Text style={[styles.userLabel]}>{'\u20A6'}{duePrice}</Text>
                                    </View>
                                </>

                            ) : (
                                <>
                                <View style={[styles.RowB, styles.ph15]}>
                                    <Text style={[styles.userLabel]}>Total Paid</Text>
                                    <MyText style={[styles.userLabel]}>{'\u20A6'}{totalPrice}</MyText>
                                </View>

                                </>

                            )}

                        </View>


                    </View>
            

        </>

    )
}


export default Details;