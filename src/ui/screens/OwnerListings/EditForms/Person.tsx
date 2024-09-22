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

const Person: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [person, setPerson] = useState(0);
    const [room, setRoom] = useState(0);
    const [bed, setBed] = useState(0);
    const [bathroom, setBathroom] = useState(0);



    useEffect(() => {
        setPerson(formData?.maxPerson);
        setRoom(formData?.bedrooms);
        setBed(formData?.beds);
        setBathroom(formData?.bathrooms);
    }, [])


    const savePerson = (value) => {

        const updatedData = {...formData};
        updatedData.maxPerson = value;
        setFormData(updatedData);
    }

    const saveRoom = (value) => {

        const updatedData = {...formData};
        updatedData.bedrooms = value;
        setFormData(updatedData);
    }

    const saveBed = (value) => {      
        const updatedData = {...formData};
        updatedData.beds = value;
        setFormData(updatedData);
    }

    const saveBath = (value) => {
        
        const updatedData = {...formData};
        updatedData.bathrooms = value;
        setFormData(updatedData);
    }



    return (

        <>

            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <Text style={[styles.largeLabel, styles.mb5]}>How many persons can your apartment accomodate?</Text>

                    <MyText style={[styles.tinyLabel, styles.mb20]}>Make sure you have enough beds to accomodate them comfortably.</MyText>

                    <View style={[styles.RowB, styles.mb30]}>
                        <View>
                            <MyText style={[styles.userLabel, styles.pt5]}>Maximum Persons</MyText>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={person === 0 ? true : false}
                                onPress={() => {
                                    setPerson(person - 1)
                                    savePerson(person - 1);
                                }}
                                style={{ opacity: person === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>-</MyText>
                                </View>
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{person}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setPerson(person + 1)
                                    savePerson(person + 1);
                                }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>+</MyText>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={[styles.RowB, styles.mb30]}>
                        <View>
                            <MyText style={[styles.userLabel, styles.pt5]}>No. of Bedrooms</MyText>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={room === 0 ? true : false}
                                onPress={() => {
                                    setRoom(room - 1)
                                    saveRoom(room - 1)
                                }}
                                style={{ opacity: room === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>-</MyText>
                                </View>
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{room}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setRoom(room + 1)
                                    saveRoom(room + 1)
                                    }}>
                                    <View style={styles.circlePlus2}>
                                        <MyText style={[styles.circleLabel, styles.textCenter]}>+</MyText>
                                    </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={[styles.RowB, styles.mb30]}>
                        <View>
                            <MyText style={[styles.userLabel, styles.pt5]}>No. of Beds</MyText>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={bed === 0 ? true : false}
                                onPress={() => {
                                    setBed(bed - 1)
                                    saveBed(bed - 1)
                                }}
                                style={{ opacity: bed === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>-</MyText>
                                </View>
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{bed}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setBed(bed + 1)
                                    saveBed(bed + 1)
                                }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>+</MyText>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <MyText style={[styles.tinyLabel, styles.mb10]}>Count bathrooms without shower as half</MyText>

                    <View style={[styles.RowB, styles.mb20]}>
                        <View>
                            <MyText style={[styles.userLabel, styles.pt5]}>No. of Bathrooms</MyText>
                        </View>

                        <View style={styles.Row}>
                            <TouchableOpacity activeOpacity={0.7}
                                disabled={bathroom === 0 ? true : false}
                                onPress={() => {
                                    setBathroom(bathroom - 0.5)
                                    saveBath(bathroom - 0.5)
                                }}
                                style={{ opacity: bathroom === 0 ? 0.4 : 1 }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>-</MyText>
                                </View>  
                            </TouchableOpacity>

                            <Text style={[styles.userLabel, styles.pt5, styles.ph15]}>{bathroom}</Text>

                            <TouchableOpacity activeOpacity={0.7}
                                onPress={() => {
                                    setBathroom(bathroom + 0.5)
                                    saveBath(bathroom + 0.5)
                                }}>
                                <View style={styles.circlePlus2}>
                                    <MyText style={[styles.circleLabel, styles.textCenter]}>+</MyText>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>



                </View>
            </ScrollView>


        </>
    )
}

export default Person;