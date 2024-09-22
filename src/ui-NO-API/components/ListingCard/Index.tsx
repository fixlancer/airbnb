import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import MyText from '../DefaultTextComponent/MyText'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

interface Props {
    listingID: any;
    title: any;
    mainPhoto: any;
    owner: any;
    price: any;
    location: any;
    calendar: any;
    discount: any;
    viewType: any;
    navigation: any;
}

const ListingCard: React.FC<Props> = props => {
    const { listingID, mainPhoto, price, discount, location, navigation, viewType } = props;


    const handleSubmit = () => {
        navigation.navigate('Listing', {listingID: listingID})
    }


    return (
        <View style={styles.ph10}>
        <View style={[styles.bookBox, styles.mb10]}>
                <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => handleSubmit()}>
                <View>

                    <Image
                        source={{uri: mainPhoto}}
                        style={styles.img}
                        imageStyle={{ borderRadius: 0 }}
                    />
            {discount && discount[0].firstDiscount > 0 ? (
            <View style={[styles.opacityBg2, {width:'auto',}]}>
                <MyText style={styles.priceLabel}>{discount[0].firstDiscount}% off</MyText>
            </View>
            ) : null }
                </View>

                <View style={styles.ph15}>
                <Text numberOfLines={1} style={[styles.titleLabel, styles.textLeft]}>{props.title}</Text>    
                    

                    <View style={[styles.pt15, styles.mb10]}>
                        {location && location.map((i, index) => {
                            return (
                                <View key={index} style={styles.Row}>
                                    <IconM
                                        name={'location'}
                                        size={moderateScale(15)}
                                        color={'#343434'}
                                        style={{ marginRight: 5 }}

                                    />
                                    <Text numberOfLines={1} style={[styles.subLabel, styles.textLeft]}>{i.street}, {i.city}, {i.country}</Text>
                                </View>
                            )
                        })}

                    </View>
                </View>
                </TouchableOpacity>

            </View>

        
        
        {/*}
            <TouchableOpacity
                activeOpacity={1}
                onPress={handleSubmit}
            >

            <Image
            source={mainPhoto}
            style={styles.img}
            imageStyle={{borderRadius:20}}
            />

            
            {viewType === 'Home' ? (
                <>
             <View style={[styles.opacityBg, styles.RowB, {alignSelf:'center',}]}>
                 <IconM
                    size={moderateScale(15)}
                    name={'location-outline'}
                    color={'#fff'}
                    style={{marginRight:4,}}
                  />
                  {location && location.map((item) => (
          <MyText style={[styles.subLabel, {textAlign:'left', marginRight:5,}]}>{item.street}, {item.city}</MyText>
                  ))}
            </View>

            {discount && discount[0].firstDiscount > 0 ? (
            <View style={[styles.opacityBg2, {width:'auto',}]}>
                <Text style={styles.priceLabel}>{discount[0].firstDiscount}% off</Text>
            </View>
            ) : null }
            </>
            ) : (
                <View style={[styles.opacityBg, {width:'30%', alignSelf:'flex-end', right: '2%'}]}>
                <Text style={styles.priceLabel}>{'\u20A6'}{price[0].basePrice}</Text>
                  </View>
            )}
            

        </TouchableOpacity>
            */}

        </View>
    )
}


export default ListingCard;
