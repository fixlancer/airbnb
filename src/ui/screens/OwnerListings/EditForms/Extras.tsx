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

const Extras: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [cleaning, setCleaningFee] = useState('');
    const [caution, setCautionFee] = useState('');


    useEffect(() => {

        setCautionFee(formData.extraCharge[0].cautionFee);
        setCleaningFee(formData.extraCharge[0].cleaningFee);

    }, [])



    const saveCleaning = (value) => {
        const updatedData = {...formData};
            updatedData.extraCharge[0].cleaningFee = value;
            setFormData(updatedData);
    }

    
    const saveCaution = (value) => {
        const updatedData = {...formData};
            updatedData.extraCharge[0].cautionFee = value;
            setFormData(updatedData);

    }

    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <Text style={[styles.largeLabel, styles.mb20]}>Extra charges</Text>

                    <MyText style={[styles.userLabel, styles.mb5]}>Cleaning fee (optional)</MyText>
                    <View style={[styles.drop, styles.mb30]}>
                        <TextInput
                            style={styles.text}
                            placeholder="Amount"
                            placeholderTextColor={'#808080'}
                            value={cleaning.toString()}
                            maxLength={6}
                            keyboardType="numeric"
                            onChangeText={(text) => {
                                setCleaningFee(text)
                                saveCleaning(text)
                            }}

                        />
                    </View>

                    <MyText style={[styles.userLabel, styles.mb5]}>Caution fee (optional)</MyText>
                    <MyText style={[styles.tinyLabel, styles.mb10]}>Guest wil pay this fee when booking and will only get a refund if no damage report is submitted.</MyText>
                    <View style={[styles.drop, styles.mb15]}>
                        <TextInput
                            style={styles.text}
                            placeholder="Amount"
                            placeholderTextColor={'#808080'}
                            value={caution.toString()}
                            keyboardType="numeric"
                            maxLength={6}
                            onChangeText={(text) => {
                                setCautionFee(text)
                                saveCaution(text)
                            }}

                        />
                    </View>



                </View>
            </ScrollView>


        </>
    )
}

export default Extras;