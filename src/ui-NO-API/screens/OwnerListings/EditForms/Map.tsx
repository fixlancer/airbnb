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

const Map: React.FC<Props> = props => {
    const { formData, setFormData } = props;

    useEffect(() => {


    }, [])



    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <View style={styles.Row}>
                    <IconM
                            name={'location'}
                            size={moderateScale(20)}
                            color={'#343434'}
                            style={{ marginRight: 5, marginTop:2 }}

                        />
                    <Text style={[styles.largeLabel, styles.mb5]}>Confirm your location on the map</Text>
                    </View>

                 


                </View>
            </ScrollView>


        </>
    )
}

export default Map;