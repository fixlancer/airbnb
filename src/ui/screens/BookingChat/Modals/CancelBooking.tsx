import { View, Text, Dimensions, Platform, TouchableOpacity, TextInput, ScrollView, StatusBar, } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyText from '../../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles';
import Modal from 'react-native-modalbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

interface Props {
    isOpen: any;
    userID: any;
    bookingID: any;
    username: any;
    basePrice: any;
    noOfNites: any;
    cautionFee: any;
    cleaningFee: any;
    totalPrice: any;
    amountPaid: any;
    checkIn: any;
    policy: any;
    dateOrdered: any;
    handleChange: any;
}

const CancelBooking: React.FC<Props> = props => {
    const { isOpen, userID, bookingID, checkIn, policy, dateOrdered, basePrice, noOfNites, cautionFee, cleaningFee, totalPrice, amountPaid, username, handleChange } = props;

    const [cancel, setCancel] = useState(0);
    const [title, setTitle] = useState('');
    const [reason, setReason] = useState('');
    const [refund, setRefund] = useState(0);

    const handleSelect = (text) => {
        setTitle(text);
        if (text === 'My host asked me to cancel') {
            setCancel(3);
        } else {
            setCancel(1);
        }
    }

    const close = () => {
        setTitle('');
        setCancel(0);
        setReason('');
        handleChange();
    }

    const date = new Date();
    const dateNow = date;
    const diffDays = (new Date(checkIn) - new Date(dateNow)) / (1000 * 3600 * 24);   //get day between dates


    //RIGID
    let date1 = new Date(checkIn);
    date1.setDate(date1.getDate() - 7);
    const nSd = moment(date1, 'D MMM YY');
    const newSubDate = nSd.format('D MMM YY');


    //MILD
    let date11 = new Date(checkIn);
    date11.setDate(date11.getDate() - 4);
    const nSd2 = moment(date11, 'D MMM YY');
    const newSubDate2 = nSd2.format('D MMM YY');


    //FLEXIBLE
    let date111 = new Date(checkIn);
    date111.setDate(date111.getDate() - 2);
    const nSd3 = moment(date111, 'D MMM YY');
    const newSubDate3 = nSd3.format('D MMM YY');

    const oneDay = 24 * 60 * 60 * 1000; 
    const dateC = 

    useEffect(() => {
    if(policy === 'Nonrefundable'){
        setRefund(0);
    } else if(policy === 'Rigid'){
        if(dateNow - dateOrdered <= oneDay){
            setRefund(50);
        }

    }

    }, [])

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


            <View style={[styles.container, { backgroundColor: '#fff' }]}>

                <SafeAreaView
                    style={{
                        height: height,
                        width: width,
                        flex: 1,
                        backgroundColor: 'transparent',
                    }}
                    edges={['left', 'right', 'top']}>
                    <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />



                    <View style={[styles.newModalHeader, { backgroundColor: '#fff' }]}>
                        <TouchableOpacity
                            onPress={() => close()}>
                            <IconM
                                name={'close-circle-outline'}
                                size={moderateScale(25)}
                                color={'#343434'}
                                style={{ marginTop: 0, }} />

                        </TouchableOpacity>
                        {cancel === 3 ? (
                            <Text style={[styles.largeLabel, styles.pt15, styles.textDark]}>Don't cancel for your host</Text>
                        ) : cancel === 2 ? (
                            <Text style={[styles.largeLabel, styles.pt15, styles.textDark]}>Confirm cancellation</Text>
                        ) : cancel === 1 ? (
                            <Text style={[styles.largeLabel, styles.pt15, styles.textDark]}>Tell {username} why you want to cancel</Text>
                        ) : (
                            <Text style={[styles.largeLabel, styles.pt15, styles.textDark]}>Why do you want to cancel?</Text>
                        )}
                    </View>

                    <ScrollView style={[styles.bgScroll, { backgroundColor: '#fff' }]}>

                        <TouchableOpacity activeOpacity={1}>

                            <View style={[styles.mb30, styles.pt10, styles.ph15,]}>

                                {cancel === 0 ? (
                                    <>

                                        <TouchableOpacity
                                            onPress={() => handleSelect("I'm not comfortable with the host")}
                                            style={[styles.RowB, styles.mb25]}>
                                            <MyText style={[styles.subLabel]}>I'm not comfortable with the host</MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => handleSelect("I no longer need this accomodation")}
                                            style={[styles.RowB, styles.mb25]}>
                                            <MyText style={[styles.subLabel]}>I no longer need this accomodation</MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => handleSelect("Apartment is not as advertised")}
                                            style={[styles.RowB, styles.mb25]}>
                                            <MyText style={[styles.subLabel]}>Apartment is not as advertised</MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => handleSelect("I made the booking by mistake")}
                                            style={[styles.RowB, styles.mb25]}>
                                            <MyText style={[styles.subLabel]}>I made the booking by mistake</MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => handleSelect("My host asked me to cancel")}
                                            style={[styles.RowB, styles.mb25]}>
                                            <MyText style={[styles.subLabel]}>My host asked me to cancel</MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => handleSelect("My travel dates changed")}
                                            style={[styles.RowB, styles.mb25]}>
                                            <MyText style={[styles.subLabel]}>My travel dates changed</MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => handleSelect("Other")}
                                            style={[styles.RowB, styles.mb10]}>
                                            <MyText style={[styles.subLabel]}>Other</MyText>
                                            <Icon
                                                name={'arrow-forward-ios'}
                                                size={moderateScale(17)}
                                                color={'#343434'}
                                                style={{ marginLeft: 0 }}

                                            />
                                        </TouchableOpacity>

                                    </>

                                ) : cancel === 1 ? (

                                    <>

                                        <View style={[styles.drop3, styles.mb20]}>
                                            <TextInput
                                                style={styles.textArea}
                                                placeholder="Leave a message..."
                                                textAlignVertical='top'
                                                placeholderTextColor={'#808080'}
                                                value={reason}
                                                onChangeText={(text) => {
                                                    setReason(text);
                                                }}
                                                maxLength={500}
                                                numberOfLines={8}
                                                multiline={true}
                                            // onEndEditing={changelocInfo}
                                            //  onBlur={changelocInfo}

                                            />
                                        </View>

                                        <View style={[styles.RowB, styles.mb20]}>
                                            <MyText style={[styles.userLabel]}>Reason: </MyText>
                                            <MyText style={[styles.userLabel, styles.pl10]}>{title}</MyText>
                                        </View>
                                    </>

                                ) : cancel === 2 ? (

                                    <>

                                        <View style={[styles.mb15, styles.lineBottom]}>

                                            <View style={styles.RowB}>
                                                <View>
                                                <MyText style={[styles.userLabel]}>{basePrice} x {noOfNites} nights</MyText>
                                                {policy === 'Rigid'}
                                                </View>
                                                <MyText style={[styles.userLabel, styles.pl10]}>{basePrice * noOfNites}</MyText>

                                            </View>

                                        </View>


                                    </>
                                ) : cancel === 3 ? (

                                    <>

                                        <View style={[styles.mb15,]}>
                                            <MyText style={[styles.userLabel, styles.mb20]}>Don't cancel on behalf of your host as
                                                you may not get a full refund if you do so.</MyText>

                                            <MyText style={[styles.userLabel,]}>Send a request for them to cancel instead.</MyText>

                                        </View>


                                    </>
                                ) : null}

                            </View>


                        </TouchableOpacity>
                    </ScrollView>

                    {cancel === 1 ? (
                        <View style={[styles.pt10, styles.ph15, styles.bottomBar]}>

                            <View style={styles.RowB}>
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => setCancel(0)}
                                    style={styles.Row}>
                                    <Icon
                                        name={'arrow-back-ios'}
                                        size={moderateScale(17)}
                                        color={'#343434'}
                                        style={{ marginRight: 0, marginTop: 10 }}

                                    />
                                    <MyText style={[styles.buttonLabel, styles.textDark, styles.pt10]}>Back</MyText>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => setCancel(2)}
                                    style={styles.button}>
                                    <MyText style={styles.buttonLabel}>Next</MyText>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ) : cancel === 2 ? (
                        <View style={[styles.pt10, styles.ph15, styles.bottomBar]}>

                            <View style={styles.RowB}>
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => setCancel(1)}
                                    style={styles.Row}>
                                    <Icon
                                        name={'arrow-back-ios'}
                                        size={moderateScale(17)}
                                        color={'#343434'}
                                        style={{ marginRight: 0, marginTop: 10 }}

                                    />
                                    <MyText style={[styles.buttonLabel, styles.textDark, styles.pt10]}>Back</MyText>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.7}
                                    // onPress={() => handleSubmit()}
                                    style={[styles.button]}>
                                    <MyText style={styles.buttonLabel}>Submit</MyText>
                                </TouchableOpacity>

                            </View>

                        </View>
                    ) : cancel === 3 ? (
                        <View style={[styles.pt15, styles.pb5, styles.ph15, styles.bottomBar]}>


                            <View style={styles.RowB}>
                                <TouchableOpacity activeOpacity={0.7}
                                    onPress={() => setCancel(0)}
                                    style={[styles.Row,]}>
                                    <Icon
                                        name={'arrow-back-ios'}
                                        size={moderateScale(17)}
                                        color={'#343434'}
                                        style={{ marginRight: 0, marginTop: 10 }}

                                    />
                                    <MyText style={[styles.buttonLabel, styles.textDark, styles.pt10]}>Back</MyText>
                                </TouchableOpacity>


                                <TouchableOpacity activeOpacity={0.7}
                                    // onPress={() => handleSubmit()}
                                    style={[styles.button]}>
                                    <MyText style={styles.buttonLabel}>Ask host to cancel</MyText>
                                </TouchableOpacity>

                                </View>
                            </View>
                    ) : null}

                        </SafeAreaView>


            </View>

        </Modal>

    )
}

export default CancelBooking;