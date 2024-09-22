import { View, Text, Dimensions, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyText from '../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import moment from 'moment';
const { width, height } = Dimensions.get('window');

interface Props {
    item: any;
    checkInDate: any;
    checkOutDate: any;
    dateCreated: any;
}

const CancelPolicy: React.FC<Props> = props => {
    const { item, checkInDate, checkOutDate, dateCreated } = props;

    const [info, setInfo] = useState(false);

    //   const newDate = moment(dateCreated, 'D MMM YY');

    //   const date2 = moment(checkOutDate, 'D MMM YY');
    //   const diffDays = date2.diff(newDate, 'days'); //get day between dates

    const diffDays = (new Date(checkInDate) - new Date(dateCreated)) / (1000 * 3600 * 24);   //get day between dates


    //RIGID
    let date1 = new Date(checkInDate);
    date1.setDate(date1.getDate() - 7);
    const nSd = moment(date1, 'D MMM YY');
    const newSubDate = nSd.format('D MMM YY');


    //MILD
    let date11 = new Date(checkInDate);
    date11.setDate(date11.getDate() - 4);
    const nSd2 = moment(date11, 'D MMM YY');
    const newSubDate2 = nSd2.format('D MMM YY');


    //FLEXIBLE
    let date111 = new Date(checkInDate);
    date111.setDate(date111.getDate() - 2);
    const nSd3 = moment(date111, 'D MMM YY');
    const newSubDate3 = nSd3.format('D MMM YY');


    return (

        <>

            {checkInDate && checkOutDate ? (

                <>
                    {item === 'Nonrefundable' ? (

                        <View style={[styles.mb20]}>

                            <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                <View style={{ width: '35%' }}>
                                    <Text style={[styles.userLabel, {}]}>{checkInDate.format('D MMM YY')}</Text>
                                    <MyText style={[styles.thinLabel]}>(on or before)</MyText>
                                </View>

                                <View style={{ width: '65%' }}>
                                    <MyText style={[styles.userLabel, {}]}>No Refund</MyText>
                                </View>

                            </View>
                        </View>

                    ) : (
                        <>

                            {item === 'Rigid' ? (

                                diffDays >= 14 ? (
                                    <>
                                        <View style={[styles.mb20,]}>
                                            <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                                <View style={{ width: '35%' }}>
                                                    <Text style={[styles.userLabel, {}]}>24hours</Text>
                                                    <MyText style={[styles.thinLabel, {}]}>(after booking)</MyText>
                                                </View>

                                                <View style={{ width: '65%' }}>
                                                    <MyText style={[styles.userLabel, {}]}>Full refund of what you paid</MyText>
                                                </View>

                                            </View>
                                        </View>


                                        {diffDays >= 7 ? (

                                            <View style={[styles.mb20]}>
                                                <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                                    <View style={{ width: '35%' }}>
                                                        <Text style={[styles.userLabel, {}]}>{newSubDate}</Text>
                                                        <MyText style={[styles.thinLabel, {}]}>(on or before)</MyText>
                                                    </View>

                                                    <View style={{ width: '65%' }}>
                                                        <MyText style={[styles.userLabel, {}]}>You get back 50% of each night + caution fee (if any)</MyText>
                                                    </View>

                                                </View>
                                            </View>
                                        ) : null}
                                    </>
                                ) : null

                            ) : null}


                            {item === 'Mild' ? (


                                diffDays >= 14 ? (
                                    <>
                                        <View style={[styles.mb20,]}>
                                            <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                                <View style={{ width: '35%' }}>
                                                    <Text style={[styles.userLabel, {}]}>48hours</Text>
                                                    <MyText style={[styles.thinLabel, {}]}>(after booking)</MyText>
                                                </View>

                                                <View style={{ width: '65%' }}>
                                                    <MyText style={[styles.userLabel, {}]}>Full refund of what you paid</MyText>
                                                </View>

                                            </View>
                                        </View>


                                        {diffDays >= 4 ? (

                                            <View style={[styles.mb20]}>
                                                <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                                    <View style={{ width: '35%' }}>
                                                        <Text style={[styles.userLabel, {}]}>{newSubDate2}</Text>
                                                        <MyText style={[styles.thinLabel, {}]}>(on or before)</MyText>
                                                    </View>

                                                    <View style={{ width: '65%' }}>
                                                        <MyText style={[styles.userLabel, {}]}>You get back 50% of what you paid</MyText>
                                                    </View>

                                                </View>
                                            </View>
                                        ) : null}
                                    </>
                                ) : null

                            ) : null}


                            {item === 'Flexible' ? (


                                diffDays >= 7 ? (
                                    <>
                                        <View style={[styles.mb20,]}>
                                            <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                                <View style={{ width: '35%' }}>
                                                    <Text style={[styles.userLabel, {}]}>48hours</Text>
                                                    <MyText style={[styles.thinLabel, {}]}>(after booking)</MyText>
                                                </View>

                                                <View style={{ width: '65%' }}>
                                                    <MyText style={[styles.userLabel, {}]}>Full refund of what you paid</MyText>
                                                </View>

                                            </View>
                                        </View>


                                        {diffDays >= 3 ? (

                                            <View style={[styles.mb20]}>
                                                <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                                    <View style={{ width: '35%' }}>
                                                        <Text style={[styles.userLabel, {}]}>{newSubDate3}</Text>
                                                        <MyText style={[styles.thinLabel, {}]}>(on or before)</MyText>
                                                    </View>

                                                    <View style={{ width: '65%' }}>
                                                        <MyText style={[styles.userLabel, {}]}>You get back 50% of what you paid</MyText>
                                                    </View>

                                                </View>
                                            </View>
                                        ) : null}
                                    </>
                                ) : null

                            ) : null}


                            <View style={[styles.mb20]}>

                                <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                    <View style={{ width: '35%' }}>
                                        <Text style={[styles.userLabel, {}]}>{checkInDate.format('D MMM YY')}</Text>
                                        <MyText style={[styles.thinLabel]}>(within 12hrs of check-in)</MyText>
                                    </View>

                                    <View style={{ width: '65%' }}>
                                        <MyText style={[styles.userLabel, {}]}>Full refund only on the basis that apartment isn't as advertised</MyText>


                                        <TouchableOpacity activeOpacity={0.9} onPress={() => setInfo(!info)}><Text style={[styles.moreLabel]}>learn more</Text>
                                        </TouchableOpacity>

                                    </View>


                                </View>
                            </View>


                            <View style={[styles.mb20]}>

                                <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                    <View style={{ width: '35%' }}>
                                        <Text style={[styles.userLabel, {}]}>{checkInDate.format('D MMM YY')}</Text>
                                        <MyText style={[styles.thinLabel]}>(12hrs or more after check-in)</MyText>
                                    </View>

                                    <View style={{ width: '65%' }}>
                                        <MyText style={[styles.userLabel, {}]}>No Refund</MyText>
                                    </View>

                                </View>
                            </View>

                        </>
                    )}
                </>

            ) : null}

        </>
    )
}

export default CancelPolicy;