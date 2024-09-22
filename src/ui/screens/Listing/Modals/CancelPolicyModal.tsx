import { View, Text, Dimensions, Platform, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import MyText from '../../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from '../Styles';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from 'react-native-modalbox';
import moment from 'moment';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('window');

interface Props {
    isOpen: any;
    item: any;
    dateCreated: any;
    checkInDate: any;
    checkOutDate: any;
    bgColor: any;
    handleChange: any;
}

const CancelPolicyModal: React.FC<Props> = props => {
    const { item, checkInDate, isOpen, handleChange, checkOutDate, bgColor, dateCreated } = props;

    const [info, setInfo] = useState(false);


    /*
        const newDate = moment(dateCreated, 'D MMM YY');
    
        const date1 = moment(checkInDate, 'D MMM YY');
        const date2 = moment(checkOutDate, 'D MMM YY');
        
       const diffDays = date2.diff(newDate, 'days'); //get day between dates
    
       //RIGID
       const subtractDate = checkInDate && date1.subtract(7, 'days');
       const newSubDate =  checkInDate && subtractDate.format('D MMM YY');
    
    
          //MILD
       const date11 = moment(checkInDate, 'D MMM YY');
    
       const subDate = checkInDate && date11.subtract(4, 'days');
       const newSubDate2 =  checkInDate && subDate.format('D MMM YY');
    
    
          //FLEXIBLE
       const date111 = moment(checkInDate, 'D MMM YY');
    
       const sub3 = checkInDate && date111.subtract(2, 'days');
       const newSubDate3 =  checkInDate && sub3.format('D MMM YY');
    */

    const newCh = new Date(checkInDate)
    const checkIn2 = `${newCh.getDate()} ${newCh.toLocaleDateString('default', {month : 'short'})} ${newCh.getFullYear()}`;
 //   const checkOut2 = moment(checkOutDate, 'D MMM YY');

    const diffDays = (new Date(checkInDate) - new Date(dateCreated)) / (1000 * 3600 * 24);


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

        <Modal isOpen={isOpen}
            style={{ backgroundColor: '#fff' }}
            keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
            swipeToClose={true}
            coverScreen={true}
            onClosed={handleChange}
            backdropOpacity={1}
            backdropColor="white"
            position="top">


            <View style={[styles.container, { backgroundColor: bgColor }]}>

                <SafeAreaView
                    style={{
                        height: height,
                        width: width,
                        flex: 1,
                        backgroundColor: 'transparent',
                    }}
                    edges={['left', 'right', 'top']}>
                    <StatusBar translucent barStyle={bgColor === '#fff' ? 'dark-content' : "light-content"} backgroundColor="transparent" />


                    <View style={[styles.newModalHeader, { backgroundColor: bgColor }]}>
                        <TouchableOpacity
                            onPress={() => handleChange()}>
                            <IconM
                                name={'close-circle-outline'}
                                size={moderateScale(25)}
                                color={bgColor === '#fff' ? '#343434' : '#fff'}
                                style={{ marginTop: 0, }} />

                        </TouchableOpacity>
                        <Text style={[styles.largeLabel, bgColor === '#fff' ? [styles.textDark, styles.pt15] : [styles.textWhite, styles.pt30]]}>Cancellation policy</Text>
                        <MyText style={[styles.tinyLabel, styles.pt5, bgColor === '#fff' ? styles.textGrey : styles.textWhite]}>Here are detailed explanations of the owner’s cancellation policies</MyText>
                    </View>

                    <View style={[bgColor === '#fff' ? styles.bgStraight : styles.bgCurve]} />
                    <ScrollView style={[styles.bgScroll]}>

                        <TouchableOpacity activeOpacity={1}>
                            <View style={[styles.ph15, styles.pt10]}>

                                {checkInDate && checkOutDate ? (

                                    <>
                                        {item === 'Nonrefundable' ? (

                                            <View style={[styles.mb20]}>

                                                <View style={[styles.RowB, { width: '100%', flexWrap: 'wrap', }]}>
                                                    <View style={{ width: '35%' }}>
                                                        <Text style={[styles.userLabel, {}]}>{checkIn2}</Text>
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
                                                            <Text style={[styles.userLabel, {}]}>{checkIn2}</Text>
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
                                                            <Text style={[styles.userLabel, {}]}>{checkIn2}</Text>
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
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                </SafeAreaView>
            </View>

        </Modal>

    )
}

export default CancelPolicyModal;