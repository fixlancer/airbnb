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

const Desc: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [desc, setDesc] = useState('');
    const [network, setNetwork] = useState('');
    const [pass, setPass] = useState('');


    useEffect(() => {

        setDesc(formData?.desc);
        setNetwork(formData?.wifi[0].network);
        setPass(formData?.wifi[0].password);

    }, [])

    const changeDesc = (value) => {
        const updatedData = {...formData};
        updatedData.desc = value;
        setFormData(updatedData);
    }


    const saveNetwork = (value) => {
        const updatedData = {...formData};
        updatedData.wifi[0].network = value;
        setFormData(updatedData);
    }

    const savePass = (value) => {
        const updatedData = {...formData};
        updatedData.wifi[0].password = value;
        setFormData(updatedData);
    }


    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <Text style={[styles.largeLabel, styles.mb5]}>Apartment features</Text>
                    <MyText style={[styles.tinyLabel, styles.mb20]}>Mention the best features your apartment has. 
                    List special amenties like 24/7 power supply, gated estate, wifi etc.</MyText>

                    <View style={[styles.drop3, styles.mb40]}>
                        <TextInput
                            style={styles.text}
                            placeholder="Write something..."
                            textAlignVertical='top'
                            placeholderTextColor={'#808080'}
                            value={desc}
                            onChangeText={(text) => {
                                setDesc(text);
                                changeDesc(text)
                            }}
                            maxLength={1500}
                            numberOfLines={12}
                            multiline={true}
                          //  onEndEditing={changeDesc}

                        />
                         <MyText style={[styles.tinyLabel, styles.textRight]}>{desc.length} / 1500</MyText>
                    </View>


                    <Text style={[styles.largeLabel, styles.mb15]}>Wifi information</Text>

                    <MyText style={[styles.userLabel, styles.mb5]}>Network</MyText>
                    <View style={[styles.drop, styles.mb15]}>
                        <TextInput
                            style={styles.text}
                            placeholder=""
                            placeholderTextColor={'#808080'}
                            value={network}
                            onChangeText={(text) => {
                                setNetwork(text)
                                saveNetwork(text)
                            }}

                        />
                    </View>


                    <MyText style={[styles.userLabel, styles.mb5]}>Password</MyText>
                    <View style={[styles.drop, styles.mb15]}>
                        <TextInput
                            style={styles.text}
                            placeholder=""
                            placeholderTextColor={'#808080'}
                            value={pass}
                            onChangeText={(text) => {
                                setPass(text)
                                savePass(text)
                            }}

                        />
                    </View>


                </View>
            </ScrollView>


        </>
    )
}

export default Desc;