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

const Directions: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [direct, setDirect] = useState('');
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('');
    const [mainPhone, setMainPhone] = useState('');
    const [verify, setVerify] = useState(0);
    const [isVerified, setisVerified] = useState(0);
    const [code, setCode] = useState('');

    const codeRef = useRef(null);

    useEffect(() => {

        setDirect(formData?.directions);
        setName(formData?.contactInfo[0].name);
        setPhone(formData?.contactInfo[0].phone);
        setMainPhone('8139662187')
        setisVerified(formData?.contactInfo[0].isVerified);

    }, [])

    useEffect(() => {
        if (mainPhone == phone && phone != '') {
            setisVerified(1);
            const updatedData = {...formData};
            updatedData.contactInfo[0].isVerified = 1;
            setFormData(updatedData);
        } else {
            setisVerified(0);
        }
    }, [phone])



    const saveDirect = (value) => {
        const updatedData = {...formData};
        updatedData.directions = value;
        setFormData(updatedData);
    }



    const saveName = (value) => {
        const updatedData = {...formData};
        updatedData.contactInfo[0].name = value;
        setFormData(updatedData);
    }



    const savePhone = (value) => {
        const updatedData = {...formData};
        updatedData.contactInfo[0].phone = value;
        setFormData(updatedData);
    }

    const sendCode = () => {
        codeRef.current.scrollTo({ y: 500, animated: true });
        setVerify(1);
    }

    const verifyCode = () => {
        setisVerified(1);
        const updatedData = {...formData};
        updatedData.contactInfo[0].isVerified = 1;
        setFormData(updatedData);
    }



    return (

        <ScrollView style={styles.ph15} ref={codeRef}>
            <View style={styles.pt10}>

                <Text style={[styles.largeLabel, styles.mb5]}>Directions to your apartment</Text>
                <MyText style={[styles.tinyLabel, styles.mb20]}>How can guests get to your apartment? Give them landmarks and proper descriptions on how to check-in.</MyText>

                <View style={[styles.drop3, styles.mb40]}>
                    <TextInput
                        style={styles.text}
                        placeholder="Write something..."
                        textAlignVertical='top'
                        placeholderTextColor={'#808080'}
                        value={direct}
                        onChangeText={(text) => {
                            setDirect(text);
                            saveDirect(text);
                        }}
                        maxLength={500}
                        numberOfLines={8}
                        multiline={true}
                    // onEndEditing={changelocInfo}
                    //  onBlur={changelocInfo}

                    />
                    <MyText style={[styles.tinyLabel, styles.textRight]}>{direct.length} / 500</MyText>
                </View>


                <Text style={[styles.largeLabel, styles.mb5]}>Who will receive guests?</Text>
                <MyText style={[styles.tinyLabel, styles.mb20]}>Give your guests the contact details of who will receive them.</MyText>


                <View style={[styles.drop, styles.mb10]}>
                    <TextInput
                        style={styles.text}
                        placeholder="Full Name"
                        placeholderTextColor={'#808080'}
                        value={name}
                        onChangeText={(text) => {
                            setName(text)
                            saveName(text)
                        }}

                    />
                </View>

                <View style={[styles.drop, styles.RowB, styles.mb15]}>
                    <View style={styles.Row}>
                        <MyText style={[styles.userLabel, styles.mr5, { marginTop: 10.5 }]}>+234</MyText>
                        <TextInput
                            style={[styles.text, { width: '60%' }]}
                            placeholder="xxx xxx xxxx"
                            placeholderTextColor={'#808080'}
                            value={phone.toString()}
                            keyboardType="numeric"
                            maxLength={10}
                            onChangeText={(text) => {
                                setPhone(text)
                                savePhone(text)
                            }}

                        />
                    </View>
                    {isVerified === 0 && phone !== '' && mainPhone !== phone ? (
                        <TouchableOpacity
                            onPress={() => sendCode()}>
                            <MyText style={[styles.moreLabel,]}>Verify</MyText>
                        </TouchableOpacity>
                    ) : isVerified === 1 ? (
                        <MyText style={[styles.userLabel, styles.textGreen]}>Verified</MyText>
                    ) : mainPhone === phone ? (
                        <MyText style={[styles.userLabel, styles.textGreen]}>Verified</MyText>
                    ) : null}
                </View>

                {verify === 1 && isVerified === 0 ? (
                    <>
                        <MyText style={[styles.tinyDark, styles.mb10]}>Enter the code we sent to +234{phone}</MyText>
                        <View style={[styles.drop, styles.RowB, styles.mb10]}>
                            <TextInput
                                style={[styles.text, { width: '70%' }]}
                                placeholder="Enter code"
                                placeholderTextColor={'#808080'}
                                value={code.toString()}
                                keyboardType="numeric"
                                maxLength={5}
                                onChangeText={(text) => {
                                    setCode(text)
                                }}

                            />
                            <TouchableOpacity onPress={() => verifyCode()}>
                                <MyText style={[styles.moreLabel,]}>Submit</MyText>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : null}



            </View>
        </ScrollView>
    )
}

export default Directions;