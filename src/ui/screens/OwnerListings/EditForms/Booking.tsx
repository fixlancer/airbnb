import { View, Text, Dimensions, Platform, TouchableOpacity, Animated, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import MyText from '../../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import styles from '../Styles';
const { width, height } = Dimensions.get('window');

interface Props {
    formData: any;
    setFormData: any;
}

const Booking: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [ID, setID] = useState(0);
    const [bookingType, setBookingType] = useState('Instant');


    useEffect(() => {
        setBookingType(formData?.bookingType);
        setID(formData?.IDverify);
    }, [])



    const handleID = () => {
        const updatedData = {...formData};
        if (ID === 1) {
            updatedData.IDverify = 0;
            setID(0);
        } else {
            updatedData.IDverify = 1;
            setID(1);
        }
        setFormData(updatedData);
    }



    const handleBook = (value) => {
        const updatedData = {...formData};
            updatedData.bookingType = value;
            setBookingType(value);
        setFormData(updatedData);
    }


    
return (
        <>

            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>

                    <Text style={[styles.largeLabel, styles.mb5]}>Guest Requirements</Text>
                    <MyText style={[styles.tinyLabel, styles.mb20]}>Guest will always meet these requirements before they can make bookings</MyText>

                    <View style={[styles.Row, styles.mb10]}>
                        <View style={styles.Row}>
                            <IconM
                                name={'checkmark'}
                                size={moderateScale(22)}
                                color={'#1cc88a'}
                                style={{ marginRight: 10 }}

                            />
                            <MyText style={[styles.subLabel]}>Verified phone number</MyText>
                        </View>
                        </View>


                        <View style={[styles.Row, styles.mb10]}>
                        <View style={styles.Row}>
                            <IconM
                                name={'checkmark'}
                                size={moderateScale(22)}
                                color={'#1cc88a'}
                                style={{ marginRight: 10 }}

                            />
                            <MyText style={[styles.subLabel]}>Profile image</MyText>
                        </View>
                    </View>

                    <View style={[styles.Row, styles.mb30]}>
                        <IconM
                            name={'checkmark'}
                            size={moderateScale(22)}
                            color={'#1cc88a'}
                            style={{ marginRight: 10 }}

                        />
                        <MyText style={[styles.subLabel]}>Verified email address</MyText>
                    </View>


                    <Text style={[styles.largeLabel2, styles.mb15]}>Additional requirements</Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleID();
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={ID === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={ID === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Government-issued ID</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <Text style={[styles.largeLabel, styles.mb5]}>How guests can book?</Text>
                    <MyText style={[styles.tinyLabel, styles.mb20]}>Choose how guest will book this apartment</MyText>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleBook('Instant')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={bookingType === 'Instant' ? 'radio-button-on' : 'radio-button-off'}
                                    size={moderateScale(22)}
                                    color={bookingType === 'Instant' ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Instant booking</MyText>
                                    <MyText style={styles.tinyLabel}>Guest who meet all your requirements can book instantly</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleBook('Manual')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={bookingType === 'Manual' ? 'radio-button-on' : 'radio-button-off'}
                                    size={moderateScale(22)}
                                    color={bookingType === 'Manual' ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Manual approval</MyText>
                                    <MyText style={styles.tinyLabel}>All guests must send a booking request</MyText>

                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>




                </View>
            </ScrollView>


        </>
    )
}

export default Booking;