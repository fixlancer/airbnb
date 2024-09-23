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

const Pricing: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [price, setPrice] = useState(5000);
    const [discFirst, setDiscFirst] = useState(10);



    useEffect(() => {
        setPrice(formData.price[0].basePrice);
        setDiscFirst(formData.discount[0].firstDiscount);
    }, [])


    useEffect(() => {
        if (price) {
            const dprice = discFirst * price;
            const ddprice = dprice / 100;
            const dddprice = price - ddprice;
            const updatedData = {...formData};
            updatedData.price[0].firstPrice = dddprice;
        } 
    }, [price])

    const savePrice = (value) => {
        const updatedData = {...formData};
        updatedData.price[0].basePrice = value;
        setFormData(updatedData);
    }


    return (

        <>

            <ScrollView style={styles.ph15}>
                <View style={[styles.pt10]}>
                    <Text style={[styles.largeLabel, styles.mb5]}>Price your apartment</Text>
                    <MyText style={[styles.tinyLabel, styles.mb30]}>We recommend offering something competitive.</MyText>


                    <View style={[styles.RowB, styles.alignCenter, styles.mb40, {width:'100%'}]}>

                        <View>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={price === 5000 ? true : false}
                                onPress={() => {
                                    setPrice(Number(price) - 5000)
                                    savePrice(Number(price) - 5000);
                                }}
                                style={{ opacity: price === 5000 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>-</MyText>
                                </View>
                            </TouchableOpacity>
                            </View>

                            <View style={[styles.ph15, styles.pt20]}>
                            <View style={[styles.priceForm, styles.ph15, styles.Row, styles.alignCenter, styles.mb5]}>
                            <MyText style={[styles.largeLabel, styles.textCenter]}>{'\u20A6'}</MyText>
                                <TextInput
                                    value={price.toString()}
                                    placeholder="Price"
                                    placeholderTextColor={'#808080'}
                                    onChangeText={(text) => {
                                        setPrice(text)
                                        savePrice(text);
                                    }}
                                    keyboardType="numeric"
                                    maxLength={7}
                                    style={[styles.largeLabel, styles.textCenter, styles.alignCenter, {width: 'auto' }]}
                                />
                            </View>
                            <MyText style={[styles.userLabel, styles.textCenter]}>per night</MyText>
                            </View>

                            <View>
                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setPrice(Number(price)+5000)
                                    savePrice(Number(price)+5000);
                                }}>
                                <View style={styles.circlePlus}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>+</MyText>
                                </View>
                            </TouchableOpacity>
                            </View>

                        </View>


                    <Text style={[styles.largeLabel, styles.pt30, styles.mb5]}>Discount for first 3 guests</Text>
                    <MyText style={[styles.tinyLabel, styles.mb20]}>Your first 3 guests who book your apartment gets the discount below.</MyText>


                    <View style={[styles.RowB, styles.alignCenter, styles.pt15, styles.mb30]}>

            <MyText style={[styles.largeLabel, styles.ph15, styles.textCenter, {width:100, marginTop:2}]}>{discFirst}%</MyText>


                    </View>
                    

                </View>
            </ScrollView>


        </>
    )
}

export default Pricing;