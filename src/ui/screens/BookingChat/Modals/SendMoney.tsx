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
    bookingID: any;
    handleChange: any;
}

const SendModal: React.FC<Props> = props => {
    const { isOpen, userID, bookingID, username, handleChange } = props;

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
                        <Text style={[styles.largeLabel, styles.pt15, styles.textDark]}>Send money</Text>
                    </View>

                    <ScrollView style={[styles.bgScroll, { backgroundColor: '#fff' }]}>

                        <TouchableOpacity activeOpacity={1}>

                            <View style={[styles.mb30, styles.ph15,]}>

                                <MyText style={[styles.userLabel, styles.mb5]}>What extra service are you paying for?</MyText>

                                <View style={[styles.drop3, styles.mb20]}>
                                    <TextInput
                                        style={styles.textArea}
                                        placeholder="e.g One additional occupant"
                                        textAlignVertical='top'
                                        placeholderTextColor={'#808080'}
                                        value={desc}
                                        onChangeText={(text) => {
                                            setDesc(text);
                                        }}
                                        maxLength={100}
                                        numberOfLines={4}
                                        multiline={true}
                                    // onEndEditing={changelocInfo}
                                    //  onBlur={changelocInfo}

                                    />
                                </View>

                                <MyText style={[styles.userLabel, styles.mb5]}>How much is it?</MyText>
                                <View style={[styles.drop, styles.mb30]}>
                                    <TextInput
                                        style={styles.textArea}
                                        placeholder="Amount"
                                        placeholderTextColor={'#808080'}
                                        value={price.toString()}
                                        maxLength={6}
                                        keyboardType="numeric"
                                        onChangeText={(text) => {
                                            setPrice(text)
                                        }}

                                    />
                                </View>

                            </View>


                        </TouchableOpacity>
                    </ScrollView>

                    <View style={[styles.pt10, styles.ph15, styles.alignCenter, styles.bottomBar]}>

                        <TouchableOpacity activeOpacity={0.7}
                            // onPress={() => handleSubmit()}
                            style={styles.submitButton}>
                            <MyText style={styles.buttonLabel}>Submit</MyText>
                        </TouchableOpacity>

                    </View>

                </SafeAreaView>


            </View>

        </Modal>

    )
}

export default SendModal;