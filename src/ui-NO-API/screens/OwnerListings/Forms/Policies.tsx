import { View, Text, Dimensions, Platform, TouchableOpacity, Animated, TextInput, ScrollView, TouchableWithoutFeedback } from 'react-native'
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
    setPolicyLearn: any;
}

const Policies: React.FC<Props> = props => {
    const { formData, setFormData, setPolicyLearn } = props;
    const [policy, setPolicy] = useState('Mild');
    const [dropHr, setDropHr] = useState(false);
    const [dropHr2, setDropHr2] = useState(false);
    const [checkinHr, setCheckinHr] = useState('3pm');
    const [checkoutHr, setCheckoutHr] = useState('11AM');


    useEffect(() => {
        setPolicy(formData[0].cancelPolicy);
        setCheckinHr(formData[0].checkIn);
        setCheckoutHr(formData[0].checkOut);
    }, [])

    const handlePolicy = (value) => {
        const updatedData = [...formData];
        updatedData[0].cancelPolicy = value;
        setPolicy(value);
        setFormData(updatedData);
    }

    const dataHr = ['12 NOON', '1PM', '2PM', '3PM', '4PM']
    const dataHr2 = ['12 NOON', '11AM', '10AM']

    const handleCheckin = (value) => {
        const updatedData = [...formData];
        updatedData[0].checkIn = value;
        updatedData[0].houseRules[0].checkIn = value;
        setFormData(updatedData);
    }

    const handleCheckout = (value) => {
        const updatedData = [...formData];
        updatedData[0].checkOut = value;
        updatedData[0].houseRules[0].checkOut = value;
        setFormData(updatedData);
    }

    const openPolicy = () => {
        setPolicyLearn(true)
    }


    return (

        <TouchableWithoutFeedback onPress={() => {
            setDropHr(false);
            setDropHr2(false);
        }}>

            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>

                    <Text style={[styles.largeLabel, styles.mb5]}>Check-in and checkout details</Text>
                    <MyText style={[styles.tinyLabel, styles.mb20]}>Let your guests know when to check-in and checkout</MyText>

                    <View>
                        <View style={[styles.RowB, styles.mb20]}>
                            <View>
                                <MyText style={[styles.userLabel]}>Check-in time</MyText>
                            </View>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setDropHr(!dropHr)
                                    setDropHr2(false)
                                }}
                                style={[styles.RowB, styles.dropCustom]}>

                                <MyText style={[styles.userLabel,]}>{checkinHr}</MyText>
                                {dropHr ? (
                                    <IconM
                                        name={'chevron-forward-outline'}
                                        size={moderateScale(15)}
                                        color={'#808080'}
                                        style={{ marginLeft: 0 }}

                                    />
                                ) : (
                                    <IconM
                                        name={'chevron-down'}
                                        size={moderateScale(15)}
                                        color={'#808080'}
                                        style={{ marginLeft: 0 }}

                                    />
                                )}

                            </TouchableOpacity>
                        </View>

                        <View style={[styles.RowB, styles.mb40]}>
                            <View>
                                <MyText style={[styles.userLabel]}>Checkout time</MyText>
                            </View>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setDropHr2(!dropHr2)
                                    setDropHr(false)
                                }}
                                style={[styles.RowB, styles.dropCustom]}>

                                <MyText style={[styles.userLabel]}>{checkoutHr}</MyText>
                                {dropHr2 ? (
                                    <IconM
                                        name={'chevron-forward-outline'}
                                        size={moderateScale(15)}
                                        color={'#808080'}
                                        style={{ marginLeft: 0 }}

                                    />
                                ) : (
                                    <IconM
                                        name={'chevron-down'}
                                        size={moderateScale(15)}
                                        color={'#808080'}
                                        style={{ marginLeft: 0 }}

                                    />
                                )}

                            </TouchableOpacity>

                        </View>



                        <Text style={[styles.largeLabel, styles.mb5]}>Cancellation policy</Text>
                        <MyText style={[styles.tinyLabel, styles.mb20]}>Choose your policy for booking cancellations by guests</MyText>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                handlePolicy('Rigid')
                            }}
                            style={[styles.Row, styles.mb5]}>
                            <View style={{ width: '100%' }}>
                                <View
                                    style={[styles.Row, styles.mb10]}
                                >
                                    <IconM
                                        name={policy === 'Rigid' ? 'radio-button-on' : 'radio-button-off'}
                                        size={moderateScale(22)}
                                        color={policy === 'Rigid' ? '#7E178E' : '#808080'}
                                        style={{ marginRight: 15 }}

                                    />
                                    <View>
                                        <MyText style={[styles.subLabel]}>Rigid</MyText>
                                        {policy === 'Rigid' ? (
                                            <>
                                                <MyText style={styles.tinyLabel}>100% refund within 24hrs after booking only if booking is done atleast 14 days before check-in.
                                                    {"\n"}50% refund of each night if guests cancel 7 days before check-in</MyText>

                                                <TouchableOpacity
                                                    onPress={() => openPolicy()}
                                                >
                                                    <MyText style={[styles.moreLabel, styles.mb10]}>Learn more</MyText>
                                                </TouchableOpacity>
                                            </>
                                        ) : null}

                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                handlePolicy('Mild')
                            }}
                            style={[styles.Row, styles.mb5]}>
                            <View style={{ width: '100%' }}>
                                <View
                                    style={[styles.Row, styles.mb10]}
                                >
                                    <IconM
                                        name={policy === 'Mild' ? 'radio-button-on' : 'radio-button-off'}
                                        size={moderateScale(22)}
                                        color={policy === 'Mild' ? '#7E178E' : '#808080'}
                                        style={{ marginRight: 15 }}

                                    />
                                    <View>
                                        <MyText style={[styles.subLabel]}>Mild</MyText>
                                        {policy === 'Mild' ? (
                                            <>
                                                <MyText style={styles.tinyLabel}>100% refund within 48hrs after booking only if booking is done atleast 14 days before check-in.
                                                    {"\n"}50% refund of each night if guests cancel 4 days before check-in</MyText>

                                                <TouchableOpacity
                                                    onPress={() => openPolicy()}
                                                >
                                                    <MyText style={[styles.moreLabel, styles.mb10]}>Learn more</MyText>
                                                </TouchableOpacity>
                                            </>
                                        ) : null}
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                handlePolicy('Flexible')
                            }}
                            style={[styles.Row, styles.mb5]}>
                            <View style={{ width: '100%' }}>
                                <View
                                    style={[styles.Row, styles.mb10]}
                                >
                                    <IconM
                                        name={policy === 'Flexible' ? 'radio-button-on' : 'radio-button-off'}
                                        size={moderateScale(22)}
                                        color={policy === 'Flexible' ? '#7E178E' : '#808080'}
                                        style={{ marginRight: 15 }}

                                    />
                                    <View>
                                        <MyText style={[styles.subLabel]}>Flexible</MyText>
                                        {policy === 'Flexible' ? (
                                            <>
                                                <MyText style={styles.tinyLabel}>100% refund within 48hrs after booking only if booking is done atleast 7 days before check-in.
                                                    {"\n"}50% refund of each night if guests cancel 3 days before check-in</MyText>

                                                <TouchableOpacity
                                                    onPress={() => openPolicy()}
                                                >
                                                    <MyText style={[styles.moreLabel, styles.mb10]}>Learn more</MyText>
                                                </TouchableOpacity>
                                            </>
                                        ) : null}
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                handlePolicy('Nonrefundable')
                            }}
                            style={[styles.Row, styles.mb5]}>
                            <View style={{ width: '100%' }}>
                                <View
                                    style={[styles.Row, styles.mb10]}
                                >
                                    <IconM
                                        name={policy === 'Nonrefundable' ? 'radio-button-on' : 'radio-button-off'}
                                        size={moderateScale(22)}
                                        color={policy === 'Nonrefundable' ? '#7E178E' : '#808080'}
                                        style={{ marginRight: 15 }}

                                    />
                                    <View>
                                        <MyText style={[styles.subLabel]}>Nonrefundable</MyText>
                                        {policy === 'Nonrefundable' ? (
                                            <MyText style={styles.tinyLabel}>No refunds after booking</MyText>
                                        ) : null}
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>




                        {dropHr ? (
                            <View style={[styles.dropBg, { top: 28 }]}>
                                {dataHr && dataHr.map((i) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setDropHr(!dropHr);
                                                handleCheckin(i);
                                                setCheckinHr(i);
                                            }}>
                                            <MyText style={[styles.userLabel, styles.pt10, styles.textCenter, styles.mb10]}>{i}</MyText>
                                            <View style={styles.hr} />
                                        </TouchableOpacity>

                                    )
                                })}

                            </View>
                        ) : null}

                        {dropHr2 ? (
                            <View style={[styles.dropBg, { top: 75 }]}>
                                {dataHr2 && dataHr2.map((i) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setDropHr2(!dropHr2);
                                                handleCheckout(i);
                                                setCheckoutHr(i)
                                            }}>
                                            <MyText style={[styles.userLabel, styles.pt10, styles.textCenter, styles.mb10]}>{i}</MyText>
                                            <View style={styles.hr} />
                                        </TouchableOpacity>

                                    )
                                })}

                            </View>
                        ) : null}
                    </View>





                </View>
            </ScrollView>


           
        </TouchableWithoutFeedback>
    )
}

export default Policies;