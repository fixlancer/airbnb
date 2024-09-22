import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import MyText from '../DefaultTextComponent/MyText'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { useTheme } from 'react-native-paper';
import newStyles from '../../screens/Styles/Styles';

interface Props {
    listingID: any;
    mainPhoto: any;
    title: any;
    owner: any;
    price: any;
    location: any;
    calendar: any;
    discount: any;
    viewType: any;
    navigation: any;
}

const ListingCard: React.FC<Props> = props => {
    const { listingID, mainPhoto, price, discount, owner, title, location, navigation, viewType } = props;


    const currency = '$';
    //'\u20A6';
    const theme = useTheme()
    const styles = newStyles(theme);

    const handleSubmit = () => {
        navigation.navigate('Listing', { listingID: listingID })
    }


    return (
        <View style={[styles.ph20, styles.mb20,]}>
            <View style={[styles.mb10]}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => handleSubmit()}
                    style={[]}>

                    <Image
                        source={mainPhoto}
                        style={[styles.listImg, styles.b20,]}
                        resizeMode={'contain'}
                    />
                    {/*}
                    {discount && discount[0].firstDiscount > 0 ? (
                        <View style={[styles.absolute, styles.top10, styles.b30, styles.p5, styles.ph10, styles.left10, styles.shadow, styles.bgWhiteAll, { width: 'auto', }]}>
                            <Text style={[styles.userLabel, styles.fontSize10, styles.textDarkAll]}>{discount[0].firstDiscount}% discount</Text>
                        </View>
                    ) : null}
                    */}

                    <View style={[styles.absolute, styles.alignCenter, styles.bgWhiteAll, styles.b30, styles.top15, styles.right15, {height:moderateScale(30), width:moderateScale(30)}]}>
                    <IconM
                                size={moderateScale(18)}
                                name={'heart'}
                                color={'#ddd'}
                                style={{marginTop:1,}}
                            />
                    </View>


                    <View style={[styles.mt10, styles.RowB]}>
                        <View>
                        <Text numberOfLines={1} style={[styles.userLabel, styles.fontSize11, styles.textGrey]}>{location[0].city}, {props.location[0].country}</Text>
                        </View>
                        <View style={[styles.Row]}>
                            <IconM
                                size={moderateScale(12)}
                                name={'star'}
                                color={'#f27415'}
                                style={{ marginTop: 1, marginRight: 2, }}
                            />
                            <Text style={[styles.userLabel, styles.fontSize11, styles.textDark,]}>4.1</Text>
                        </View>
                    </View>
                    <Text numberOfLines={1} style={[styles.userLabel, styles.fontSize13, styles.fontRegular, styles.textDark, styles.textLeft]}>{title}</Text>
                    <Text style={[styles.extraLabel, styles.textDark, styles.fontSize20, styles.mb10]}>{currency}{price[0].basePrice}<MyText style={[styles.fontSize10, styles.textGrey, styles.fontLight]}>/ night</MyText></Text>

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
