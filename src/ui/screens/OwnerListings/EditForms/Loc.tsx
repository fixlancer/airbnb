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

const Loc: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');


    useEffect(() => {

        setStreet(formData?.location[0].street);
        setCity(formData?.location[0].city);
        setState(formData?.location[0].state);

    }, [])


    const timeOut = useRef(null);

    const changeStreet = (value) => {
        const updatedData = {...formData};
        updatedData.location[0].street = value;
            setFormData(updatedData);
    }

    
    const changeCity = (value) => {
        const updatedData = {...formData};
        updatedData.location[0].city = value;
            setFormData(updatedData);

    }

    
    const changeState = (value) => {
        const updatedData = {...formData};
            updatedData.location[0].state = value;
            setFormData(updatedData);
    }

    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <Text style={[styles.largeLabel, styles.mb5]}>Where is this apartment located?</Text>
                    <MyText style={[styles.tinyLabel, styles.mb20]}>Guests will see exact location only after booking.</MyText>
                    <View style={[styles.btn, styles.alignCenter, styles.Row, styles.mb20]}>
                        <IconM
                            name={'location'}
                            size={moderateScale(15)}
                            color={'#343434'}
                            style={{ marginRight: 5 }}

                        />
                        <MyText style={styles.userLabel}>Use current location</MyText>
                    </View>

                    <MyText style={[styles.userLabel, styles.mb5]}>Street</MyText>
                    <View style={[styles.drop, styles.mb15]}>
                        <TextInput
                            style={styles.text}
                            placeholder=""
                            placeholderTextColor={'#808080'}
                            value={street}
                            onChangeText={(text) => {
                                setStreet(text)
                                changeStreet(text)
                            }}

                        />
                    </View>

                    <View style={styles.RowB}>
                        <View style={{width:'48%'}}>
                    <MyText style={[styles.userLabel, styles.mb5]}>City</MyText>
                    <View style={[styles.drop2, styles.mb15,]}>
                        <TextInput
                            style={styles.text}
                            placeholder=""
                            placeholderTextColor={'#808080'}
                            value={city}
                            onChangeText={(text) => {
                                setCity(text)
                                changeCity(text)
                            }}

                        />
                    </View>
                    </View>
                    
                    
                    <View style={{width:'48%'}}>
                    <MyText style={[styles.userLabel, styles.mb5]}>State</MyText>
                    <View style={[styles.drop2, styles.mb15,]}>
                        <TextInput
                            style={styles.text}
                            placeholder=""
                            placeholderTextColor={'#808080'}
                            value={state}
                            onChangeText={(text) => {
                                setState(text)
                                changeState(text)
                            }}

                        />
                    </View>
                    </View>
                    </View>


                    <MyText style={[styles.userLabel, styles.mb5]}>Country</MyText>
                    <View style={[styles.drop, styles.mb15, styles.bgGrey]}>
                        <View style={styles.text}> 
                    <MyText style={[styles.userLabel]}>Nigeria</MyText>
                    </View>
                    </View>


                </View>
            </ScrollView>


        </>
    )
}

export default Loc;