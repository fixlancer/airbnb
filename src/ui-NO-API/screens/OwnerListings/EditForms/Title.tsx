import { View, Text, Dimensions, Platform, TouchableOpacity, Animated, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
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

const One: React.FC<Props> = props => {
    const { formData, setFormData} = props;
    const [title, setTitle] = useState('');
    const [smart, setSmart] = useState(0);
    const [pent, setPent] = useState(0);
    const [duplex, setDuplex] = useState(0);
    const [bungalow, setBungalow] = useState(0);



    useEffect(() => {
        setTitle(formData?.title);
        formData?.amenities[0].propertyType.forEach(i => {

            if (i == 'Smart home') {
                setSmart(1)
            }
            if (i == 'Penthouse') {
                setPent(1);
            }
            if (i == 'Duplex') {
                setDuplex(1)
            }
            if (i == 'Bungalow') {
                setBungalow(1);
            }

        })

    }, [])


    const handleSmart = (myData) => {

        const updatedData = {...formData};
        const index = formData?.amenities[0].propertyType.indexOf(myData);
        let shouldAdd = true;

        if (index !== -1) {
            shouldAdd = false;
        }

        if (shouldAdd) {
            formData.amenities[0].propertyType.push(myData);
            setSmart(1);
        } else {
            formData.amenities[0].propertyType.splice(index, 1);
            setSmart(0);
        }

        setFormData(updatedData);

    }

    const handlePent = (myData) => {

        const index = formData?.amenities[0].propertyType.indexOf(myData);
        const updatedData = {...formData};
        let shouldAdd = true;

        if (index !== -1) {
            shouldAdd = false;
        }

        if (shouldAdd) {
            formData?.amenities[0].propertyType.push(myData);
            setPent(1);
        } else {
            formData?.amenities[0].propertyType.splice(index, 1);
            setPent(0);
        }

        setFormData(updatedData);

    }

    const handleDuplex = (myData) => {

        const index = formData?.amenities[0].propertyType.indexOf(myData);
        const updatedData = {...formData};
        let shouldAdd = true;

        if (index !== -1) {
            shouldAdd = false;
        }

        if (shouldAdd) {
            formData?.amenities[0].propertyType.push(myData);
            setDuplex(1);
        } else {
            formData?.amenities[0].propertyType.splice(index, 1);
            setDuplex(0);
        }

        setFormData(updatedData);

    }

    const handleBungalow = (myData) => {


        const index = formData?.amenities[0].propertyType.indexOf(myData);
        const updatedData = {...formData};
        let shouldAdd = true;

        if (index !== -1) {
            shouldAdd = false;
        }

        if (shouldAdd) {
            formData?.amenities[0].propertyType.push(myData);
            setBungalow(1);
        } else {
            formData?.amenities[0].propertyType.splice(index, 1);
            setBungalow(0);
        }

        setFormData(updatedData);

    }


 //   const titleRef = useRef(null);
    const changeValue = (value) => {

      const updatedData = {...formData};
      updatedData.title = value;
      setFormData(updatedData);
    }

    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <Text style={[styles.largeLabel, styles.mb5]}>Create a title for your listing</Text>
                    <MyText style={[styles.tinyLabel, styles.mb20]}>A title that speaks volume, highlighting 
                    what makes your place special</MyText>
                    <View style={[styles.drop]}>
                        <TextInput
                       // ref={titleRef}
                            style={styles.text}
                            placeholder="Title"
                            placeholderTextColor={'#808080'}
                            value={title}
                            onChangeText={(text) => {
                               setTitle(text);
                               changeValue(text);
                            }}
                           // onEndEditing={changeValue}

                        />
                    </View>
                    <MyText style={[styles.tinyLabel, styles.mb40]}>e.g Cosy 2 bedroom smart home</MyText>



                    <Text style={[styles.largeLabel, styles.mb15]}>Confirm the type of apartment</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleSmart('Smart home')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={smart === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={smart === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Smart home</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handlePent('Penthouse')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={pent === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={pent === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Penthouse</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleDuplex('Duplex')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={duplex === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={duplex === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Duplex</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleBungalow('Bungalow')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={bungalow === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={bungalow === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Bungalow</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </>
    )
}

export default One;