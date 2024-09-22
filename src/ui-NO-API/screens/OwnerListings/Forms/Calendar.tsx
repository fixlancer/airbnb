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

const Calendar: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [calendar, setCalendar] = useState(0);


    useEffect(() => {
        setCalendar(formData[0].calendar[0].agreement);
    }, [])



    const handleCalendar = () => {
        const updatedData = [...formData];
        if (calendar === 1) {
            updatedData[0].calendar[0].agreement = 0;
            setCalendar(0);
        } else {
            updatedData[0].calendar[0].agreement = 1;
            setCalendar(1);
        }
        setFormData(updatedData);
    }


    
return (
        <>

            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>

                    <Text style={[styles.largeLabel, styles.mb10]}>Your calendar accuracy is very important</Text>
                    <MyText style={[styles.userLabel, styles.mb20]}>An accurate calendar is very important as guests will book available 
                    dates instantly. {"\n"}So keeping your calendar settings up to date is very paramount.
                    {"\n"}{"\n"}
                    You will be charged a penalty fee if you cancel because your calender is inaccurate, and those dates won't be available for anyone else to book.</MyText>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleCalendar();
                        }}
                        style={[styles.Row, styles.mb10]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={calendar === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={calendar === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>I agree to keep my calendar updated</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


 


                </View>
            </ScrollView>


        </>
    )
}

export default Calendar;