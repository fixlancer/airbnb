import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import MyText from '../DefaultTextComponent/MyText'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

interface Props {
    bookingID: any;
    title: any;
    mainPhoto: any;
    checkIn: any;
    checkOut: any;
    ownerUsername: any,
    chatInfo: any;
    bookingStatus: any;
    location: any;
    navigation: any;
}

const BookingCard: React.FC<Props> = props => {
    const { bookingID, mainPhoto, title, ownerUsername, bookingStatus, chatInfo, checkIn, checkOut, location, navigation, } = props;

    const date = moment();
    const dday = date.format('D MMM YY');
    const newDate = moment(dday, 'D MMM YYYY');
    const checkInD = new Date(checkIn);
    const checkInDate = `${checkInD.getDate() } ${checkInD.toLocaleDateString('default', { month: 'short' })} ${checkInD.getFullYear()}`;
    //   const checkInDate = moment(checkInD, 'D MMM YY');
    const checkOutD = new Date(checkOut);
    const checkOutDate = `${checkOutD.getDate()} ${checkOutD.toLocaleDateString('default', { month: 'short' })} ${checkOutD.getFullYear()}`;

    const datea = moment(checkInDate, 'D MMM YYYY');
    const dateb = moment(checkOutDate, 'D MMM YYYY');

    const diffDays = dateb.diff(newDate, 'days'); //get day between dates
    const diffIn = datea.diff(newDate, 'days') //get days before check

    const [userID, setUserID] = useState('');

    useEffect(() => {
        const getData = async () => {
          try {
            const id = await AsyncStorage.getItem('id');
      
            if (id) {
              setUserID(id);
            }
      
          } catch (e) {
              return;
          }
        };
        
        getData();
    
      }, [])

    return (
        <>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('BookingChat', { bookingID: bookingID, myTab: 'Chat' })}
                style={[styles.bookBox, styles.mb20]}
            >
                <View>

                    {bookingStatus === '[Pending]' ? (
                        <View style={styles.stats}>
                            <Text style={[styles.statsLabel,]}>Check-in in {diffIn} days</Text>
                        </View>
                    ) : bookingStatus === 'Ongoing' ? (
                        <View style={styles.mb45}>
                        <View style={[styles.stats2]}>
                            <Text style={[styles.statsLabel, styles.textWhite]}>Check-out in {diffDays} days</Text>
                        </View>
                        </View>
                    ) : bookingStatus === 'Completed' ? (
                        <View style={styles.mb45}>
                        <View style={[styles.stats2, { backgroundColor: '#1cc88a' }]}>
                            <Text style={[styles.statsLabel, styles.textWhite,]}>Completed</Text>
                        </View>
                        </View>
                    ) : bookingStatus === 'Cancelled' ? (
                        <View style={styles.mb45}>
                        <View style={[styles.stats2, { backgroundColor: '#343434' }]}>
                            <Text style={[styles.statsLabel, styles.textWhite,]}>Cancelled</Text>
                        </View>
                        </View>
                    ) : null}


                    {/*
            {datea === newDate ? (
                <View style={styles.stats}>
           <Text style={[styles.statsLabel,]}>Check-in today</Text>
           </View>
                    ) : null }
                    
            {datea > newDate ? (
                        <View style={styles.stats}>
           <Text style={[styles.statsLabel,]}>Check-in in {diffIn} days</Text>
                      </View>
                      
           ) : null }
           
           {dateb === newDate ? (
                <View style={styles.stats}>
           <Text style={[styles.statsLabel,]}>Check-out today</Text>
           </View>
                    ) : null }
           
           {dateb > newDate ? (
                     <View style={styles.stats}>
           <Text style={[styles.statsLabel,]}>Check-out in {diffDays} days</Text>
                      </View>
           ) : null }

           {dateb < newDate ? (
            <View style={[styles.stats, {backgroundColor:'#1cc88a'}]}>
       <Text style={[styles.statsLabel, styles.textWhite,]}>Completed</Text>
                  </View>
           ) : null }
                 
*/ }
                    {chatInfo.length > 0 ? chatInfo.map((item, index) => (
                        <View key={index}>
                            {item.unread > 0 && item.receiverID === userID ? (
                                <View style={[styles.Row, styles.notifBg]}>
                                    <IconM
                                        name={'chatbubbles-sharp'}
                                        size={moderateScale(15)}
                                        color={'#fff'}
                                        style={{ marginRight: 3 }}

                                    />
                                    <Text style={[styles.notif, styles.textWhite]}>{item.unread}</Text>
                                </View>
                            ) : null}
                        </View>
                    )) : ''}
                     {bookingStatus !== 'Ongoing' ? (
                    <Image
                        source={{ uri: mainPhoto }}
                        style={styles.img}
                        imageStyle={{ borderRadius: 0 }}
                    />
                     ) : null }
                </View>

                
                <View style={[styles.ph25,]}>
                    <View style={styles.lineBottom}>
                        <View style={[styles.RowB]}>
                        
                     {bookingStatus !== 'Pending' ? (
                        <View style={{marginRight:10}}> 
                    <Image
                        source={{ uri: mainPhoto }}
                        style={styles.img2}
                        imageStyle={{ borderRadius: 0,}}
                    />
                        </View>
                     ): null }

                        <View style={{width:'83%'}}>
                        <Text numberOfLines={1} style={[styles.largeLabel, styles.textLeft]}>{title}</Text>
                        <MyText style={[styles.tinyDark, styles.textLeft]}>by {ownerUsername}</MyText>
                        </View>
                        </View>

                    </View>

                    {bookingStatus === 'Pending' ? (
                    <View style={styles.lineBottom}>
                        <View style={[styles.RowB, styles.mb10, styles.pt10]}>
                            <View>
                                <MyText style={styles.mediumLabel}>Check-in</MyText>
                                <MyText style={styles.largeLabel2}>{checkInDate}</MyText>
                            </View>

                            <View style={{ height: 40, width: 1, backgroundColor: '#ddd' }} />

                            <View style={{ justifyContent: 'flex-start', }}>
                                <MyText style={[styles.mediumLabel, styles.textLeft]}>Check-out</MyText>
                                <MyText style={[styles.largeLabel2, styles.textLeft]}>{checkOutDate}</MyText>
                            </View>

                        </View>
                    </View>
                    ) : bookingStatus === 'Ongoing' ? (
                        <>
                        <View style={[styles.RowB, styles.pt10, styles.mb10]}>
                        <View style={{ justifyContent: 'flex-start', width:'30%' }}>
                                <MyText style={[styles.mediumLabel, styles.textLeft]}>Check-out</MyText>
                                <MyText style={[styles.subLabel, styles.textLeft]}>{checkOutDate}</MyText>
                            </View>

                            <View style={{ height: 'auto', width: 1, backgroundColor: '#ddd' }} />

                            <View style={[{ width:'60%'}]}>
                        {location.length > 0 ? location.map((i, index) => {
                            return (
                         <Text numberOfLines={3} style={[styles.subLabel, styles.textLeft]}>{i.street}, {i.city}, {i.country}</Text>
                            
                            )
                        }) : ''}

                    </View>
                           

                        </View>

                    </>
                    
                    ) : null }

                    {bookingStatus === 'Pending' ? (
                    <View style={[styles.pt15, styles.mb20]}>
                        {location.length > 0 ? location.map((i, index) => {
                            return (
                                <View key={index} style={styles.Row}>
                                    <IconM
                                        name={'location'}
                                        size={moderateScale(20)}
                                        color={'#343434'}
                                        style={{ marginRight: 5 }}

                                    />
                                    <Text numberOfLines={1} style={[styles.subLabel, styles.textLeft]}>{i.street}, {i.city}, {i.country}</Text>
                                </View>
                            )
                        }) : ''}

                    </View>
                    ): null }
                </View>

                
                {bookingStatus === 'Ongoing' ? (
                <View style={styles.chatBottom}>
                    <View style={[ styles.RowB]}> 
                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('BookingChat', { bookingID: bookingID, myTab: 'Chat' })}
                    style={[{ justifyContent: 'flex-start', width:'49%' }, styles.pt10, styles.pb10]}>
                         <MyText style={[styles.subLabel, styles.textCenter]}>Chat</MyText>
                    </TouchableOpacity>
                    
                    <View style={{ height: 'auto', width: 1, backgroundColor: '#ddd' }} />

                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('BookingChat', { bookingID: bookingID, myTab: 'Details' })}
                    style={[{ justifyContent: 'flex-start', width:'49%'}, styles.pt10, styles.pb10]}>
                                <MyText style={[styles.subLabel, styles.textCenter]}>Details</MyText>
                    </TouchableOpacity>

                    </View>
                    </View>

                    ) : null }
            </TouchableOpacity>

        </>
    )
}


export default BookingCard;
