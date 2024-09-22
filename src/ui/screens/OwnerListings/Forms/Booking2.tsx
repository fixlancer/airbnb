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

const Booking2: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [maxBookingDate, setMaxBookingDate] = useState(1095);
    const [minNights, setMinNights] = useState(1);
    const [maxNights, setMaxNights] = useState(7);
    const [longBooking, setLongBooking] = useState(true)


    useEffect(() => {
        setMaxBookingDate(formData[0].maxBookingDate);
        setMinNights(formData[0].minNights);
        setMaxNights(formData[0].maxNights);
        setLongBooking(formData[0].longBooking);
    }, [])

    const saveMinNights = (value) => {
        const updatedData = [...formData];
            updatedData[0].minNights = value;
        setFormData(updatedData);
    }

    const saveMaxNights = (value) => {
        const updatedData = [...formData];
            updatedData[0].maxNights = value;
        setFormData(updatedData);
    }


    const handleBook = (value) => {
        const updatedData = [...formData];
            updatedData[0].longBooking = value;
            setLongBooking(value);
        setFormData(updatedData);
    }


    const handleMaxDate = (value) => {
        const updatedData = [...formData];
            updatedData[0].maxBookingDate = value;
            setMaxBookingDate(value);
        setFormData(updatedData);
    }


    return (

        <>

            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>

                    <Text style={[styles.largeLabel, styles.mb20]}>How long can guests stay?</Text>

                    <View style={[styles.RowB, styles.mb10]}>
                        <View>
                            <MyText style={[styles.userLabel, styles.pt5]}>Min Night</MyText>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={minNights === 1 ? true : false}
                                onPress={() => {
                                    setMinNights(minNights - 1)
                                    saveMinNights(minNights - 1);
                                }}
                                style={{ opacity: minNights === 1 ? 0.4 : 1 }}>
                                 <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>-</MyText>
                                </View>
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{minNights}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setMinNights(minNights + 1)
                                    saveMinNights(minNights + 1);
                                }}>
                                 <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>+</MyText>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={[styles.RowB, styles.mb20]}>
                        <View>
                            <MyText style={[styles.userLabel, styles.pt5]}>Max Night</MyText>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={maxNights === 2 ? true : false}
                                onPress={() => {
                                    setMaxNights(maxNights - 1)
                                    saveMaxNights(maxNights - 1);
                                }}
                                style={{ opacity: maxNights === 2 ? 0.4 : 1 }}>
                                 <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>-</MyText>
                                </View>
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{maxNights}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setMaxNights(maxNights + 1)
                                    saveMaxNights(maxNights + 1);
                                }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>+</MyText>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <Text style={[styles.largeLabel2, styles.mb15]}>For stays longer than {maxNights} nights</Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleBook(true)
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={longBooking === true ? 'radio-button-on' : 'radio-button-off'}
                                    size={moderateScale(22)}
                                    color={longBooking === true ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.tinyDark, {marginTop:2}]}>Manually review booking request</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleBook(false)
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={longBooking === false ? 'radio-button-on' : 'radio-button-off'}
                                    size={moderateScale(22)}
                                    color={longBooking === false ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.tinyDark, {marginTop:2}]}>Don't allow booking requests for stays longer than {maxNights} nights</MyText>

                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>




                    <Text style={[styles.largeLabel, styles.mb20]}>How far in advance can guests book?</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleMaxDate(1095)
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={maxBookingDate === 1095 ? 'radio-button-on' : 'radio-button-off'}
                                    size={moderateScale(22)}
                                    color={maxBookingDate === 1095 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Any time</MyText>
                                  </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleMaxDate(92)
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={maxBookingDate === 92 ? 'radio-button-on' : 'radio-button-off'}
                                    size={moderateScale(22)}
                                    color={maxBookingDate === 92 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>3 months</MyText>
                                  </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleMaxDate(183)
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={maxBookingDate === 183 ? 'radio-button-on' : 'radio-button-off'}
                                    size={moderateScale(22)}
                                    color={maxBookingDate === 183 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>6 months</MyText>
                                  </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleMaxDate(365)
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={maxBookingDate === 365 ? 'radio-button-on' : 'radio-button-off'}
                                    size={moderateScale(22)}
                                    color={maxBookingDate === 365 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>1 year</MyText>
                                  </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                </View>
            </ScrollView>


        </>
    )
}

export default Booking2;