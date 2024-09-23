import { View, Text, Dimensions, Platform, TouchableOpacity, TextInput, ScrollView, StatusBar, } from 'react-native'
import React, { useState } from 'react'
import MyText from '../../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles';
import Modal from 'react-native-modalbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('window');

interface Props {
    isOpen: any;
    userID: any;
    username: any;
    extrasID: any;
    bookingID: any;
    handleChange: any;
}

const ExtrasRespond: React.FC<Props> = props => {
    const { isOpen, userID, extrasID, bookingID, username, handleChange } = props;

    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');

    const close = () => {
        setPrice('');
        setDesc('');
        handleChange();
    }

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
                        <Text style={[styles.largeLabel, styles.pt15, styles.textDark]}>How do you respond?</Text>
                    </View>

                    <ScrollView style={[styles.bgScroll, { backgroundColor: '#fff' }]}>

                    </ScrollView>

                    <View style={[styles.pt10, styles.ph15, styles.bottomBar]}>

                    <View style={styles.RowB}>
                                <TouchableOpacity activeOpacity={0.7}
                                 //   onPress={() => setCancel(0)}
                                    style={[styles.Row,]}>
                                    <Icon
                                        name={'block-flipped'}
                                        size={moderateScale(17)}
                                        color={'#343434'}
                                        style={{ marginRight: 5, marginTop: 10 }}

                                    />
                                    <MyText style={[styles.buttonLabel, styles.textDark, styles.pt10]}>Reject</MyText>
                                </TouchableOpacity>


                                <TouchableOpacity activeOpacity={0.7}
                                    // onPress={() => handleSubmit()}
                                    style={[styles.button]}>
                                    <MyText style={styles.buttonLabel}>Pay now</MyText>
                                </TouchableOpacity>

                                </View>

                    </View>

                </SafeAreaView>


            </View>

        </Modal>

    )
}

export default ExtrasRespond;