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

const Discount: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [price, setPrice] = useState(5000);
    const [weekendDisc, setWeekendDisc] = useState(0);
    const [monthDisc, setMonthDisc] = useState(0);


    useEffect(() => {
        setPrice(formData.price[0].basePrice);
        setWeekendDisc(formData.discount[0].weekendDiscount);
        setMonthDisc(formData.discount[0].monthlyDiscount);
    }, [])


    const saveWeekend = (value) => {
        const dprice = value * price;
        const ddprice = dprice / 100;
        const dddprice = price - ddprice;
        const updatedData = {...formData};
        updatedData.discount[0].weekendDiscount = value;
        updatedData.price[0].weekendPrice = dddprice;
        setFormData(updatedData);
    }


    const saveMonth = (value) => {
        const dprice = value * price;
        const ddprice = dprice / 100;
        const dddprice = price - ddprice;
        const updatedData = {...formData};
        updatedData.discount[0].monthlyDiscount = value;
        updatedData.price[0].monthlyPrice = dddprice;
        setFormData(updatedData);
    }




    return (

        <>

            <ScrollView style={styles.ph15}>
                <View style={[styles.pt10]}>
                    <Text style={[styles.largeLabel, styles.mb5]}>Discounts for longer stay</Text>
                    <MyText style={[styles.tinyLabel, styles.mb20]}>Encourage guest to stay longer by offering them discount for stays upto a week or month.</MyText>


                    <View style={[styles.RowB, styles.mb20]}>
                        <View>
                            <Text style={[styles.userLabel, styles.pt5]}>Week</Text>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={weekendDisc === 0 ? true : false}
                                onPress={() => {
                                    setWeekendDisc(weekendDisc - 5)
                                    saveWeekend(weekendDisc - 5);
                                }}
                                style={{ opacity: weekendDisc === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>-</MyText>
                                </View>
                            </TouchableOpacity>

                            <MyText style={[styles.userLabel, styles.pt5, styles.ph15, styles.textCenter]}>{weekendDisc}%</MyText>


                            <TouchableOpacity activeOpacity={0.7}
                                disabled={weekendDisc === 30 ? true : false}
                                onPress={() => {
                                    setWeekendDisc(weekendDisc + 5)
                                    saveWeekend(weekendDisc + 5);
                                }}
                                style={{ opacity: weekendDisc === 30 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>+</MyText>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>



                    <View style={[styles.RowB, styles.mb20]}>
                        <View>
                            <Text style={[styles.userLabel, styles.pt5]}>Month</Text>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={weekendDisc === 0 ? true : false}
                                onPress={() => {
                                    setMonthDisc(monthDisc - 5)
                                    saveMonth(monthDisc - 5);
                                }}
                                style={{ opacity: monthDisc === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>-</MyText>
                                </View>
                            </TouchableOpacity>

                            <MyText style={[styles.userLabel, styles.pt5, styles.ph15, styles.textCenter]}>{monthDisc}%</MyText>


                            <TouchableOpacity activeOpacity={0.7}
                                disabled={monthDisc === 30 ? true : false}
                                onPress={() => {
                                    setMonthDisc(monthDisc + 5)
                                    saveMonth(monthDisc + 5);
                                }}
                                style={{ opacity: monthDisc === 30 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>+</MyText>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>



                </View>
            </ScrollView>


        </>
    )
}

export default Discount;