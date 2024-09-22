import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import MyText from '../DefaultTextComponent/MyText'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import moment from 'moment';
import WarningModal from './WarningModal/Index';

interface Props {
    listingID: any;
    title: any;
    mainPhoto: any;
    price: any;
    discount: any;
    location: any;
    maxBookingDate: any;
    calendar: any;
    status: any;
    viewType: any;
    navigation: any;
    refresh: any;
}

const ApartmentCard: React.FC<Props> = props => {

    const { listingID, mainPhoto, price, status, location, navigation, viewType, refresh } = props;

    const [isDelete, setDelete] = useState(false);

    const openDelete = () => {
        setDelete(true)
    }

    const closeDelete = () => {
        setDelete(false);
    }


    const handleSubmit = () => {
        refresh();
        closeDelete();
    }


    const handleEdit= () => {
        return (
            <></>
        )
    }


    return (
        <>

            <View
                style={[styles.bookBox, styles.mb30]}
            >
                <TouchableOpacity
                        activeOpacity={1}
                        onPress={() =>  navigation.navigate('Listing', {listingID: listingID})}>
                <View>

                    <Image
                        source={{uri: mainPhoto}}
                        style={styles.img}
                        imageStyle={{ borderRadius: 0 }}
                    />
                </View>

                <View style={styles.ph15}>
                    <View style={styles.lineBottom}>
                        <Text numberOfLines={1} style={[styles.largeLabel, styles.textLeft]}>{props.title}</Text>

                    </View>

                    <View style={[styles.pt15, styles.mb10]}>
                        {location && location.map((i, index) => {
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
                        })}

                    </View>
                </View>
                </TouchableOpacity>

                <View style={[styles.lineBottom, styles.mb10]}>
                    </View>

                <View style={[styles.ph15, styles.RowB]}>

                    {props.status !== 'Declined' ? (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.navigate('Calendar', {listingID: listingID, calendar: props.calendar, maxBookingDate: props.maxBookingDate, title: props.title})}
                        style={[styles.btn, styles.mb10, styles.Row]}>
                        <IconM
                                    name={'calendar'}
                                    size={moderateScale(15)}
                                    color={'#343434'}
                                    style={{ marginRight: 5 }}

                                />
                        <MyText style={[styles.mediumLabel, {color:'#343434'}]}>Calendar</MyText>
                    </TouchableOpacity>
                    ) : null }

                    <View style={[styles.Row]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.navigate('EditListing', {listingID: listingID})}
                        style={[styles.btn, styles.mb10, styles.Row, {marginRight:10}]}>
                            <Icons
                                        name={'pencil-circle-outline'}
                                        size={moderateScale(15)}
                                        color={'#343434'}
                                        style={{ marginRight: 5 }}

                                    />
                        <MyText style={[styles.mediumLabel, {color:'#343434'}]}>Edit</MyText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => openDelete()}
                        style={[styles.btn, styles.mb10, styles.Row, {backgroundColor:'#fbd2d0'}]}>
                            <IconM
                                        name={'trash'}
                                        size={moderateScale(15)}
                                        color={'#ff0000'}
                                        style={{ marginRight: 0}}

                                    />
                        <MyText style={[styles.mediumLabel, {color:'#343434'}]}></MyText>
                    </TouchableOpacity>
                    </View>

                </View>
            </View>

        <WarningModal
        isOpen={isDelete}
        type={'Delete'}
        text={'Are you sure you want to delete this listing? \n'}
        title={props.title}
        listingID={listingID}
        handleChange={() => closeDelete()}
        handleSubmit={() => handleSubmit()}
      />
        </>
    )
}


export default ApartmentCard;
