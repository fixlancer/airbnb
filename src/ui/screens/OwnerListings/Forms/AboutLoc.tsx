import { View, Text, Dimensions, Platform, TouchableOpacity, TouchableWithoutFeedback, TextInput, ScrollView } from 'react-native'
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

const AboutLoc: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [locInfo, setLocInfo] = useState('');

    const codeRef = useRef(null);

    useEffect(() => {

        setLocInfo(formData[0].aboutLocation);

    }, [])



    const changelocInfo = (value) => {
        const updatedData = [...formData];
        updatedData[0].aboutLocation = value;
        setFormData(updatedData);
    }


    return (

        <ScrollView style={styles.ph15} ref={codeRef}>
            <View style={styles.pt10}>
                <Text style={[styles.largeLabel, styles.mb5]}>A little info about the location</Text>
                <MyText style={[styles.tinyLabel, styles.mb20]}>Let your guests know a little more about the location and how to get around your city
                    or neighbourhood, like if there are any cab services.</MyText>

                <View style={[styles.drop3, styles.mb40]}>
                    <TextInput
                        style={styles.text}
                        placeholder="Write something..."
                        textAlignVertical='top'
                        placeholderTextColor={'#808080'}
                        value={locInfo}
                        onChangeText={(text) => {
                            setLocInfo(text);
                            changelocInfo(text);
                        }}
                        maxLength={500}
                        numberOfLines={8}
                        multiline={true}
                    // onEndEditing={changelocInfo}
                    //  onBlur={changelocInfo}

                    />
                    <MyText style={[styles.tinyLabel, styles.textRight]}>{locInfo.length} / 500</MyText>
                </View>



            </View>
        </ScrollView>
    )
}

export default AboutLoc;