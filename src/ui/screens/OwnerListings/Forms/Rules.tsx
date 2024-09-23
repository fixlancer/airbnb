import { View, Text, Dimensions, Platform, TouchableOpacity, Animated, TextInput, ScrollView, AppRegistry, StyleSheet } from 'react-native'
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

const Rules: React.FC<Props> = props => {
    const { formData, setFormData } = props;
    const [petsAllowed, setPetsAllowed] = useState(-1);
    const [smoking, setSmoking] = useState(-1);
    const [child, setChild] = useState(-1);
    const [infant, setInfant] = useState(-1);
    const [party, setParty] = useState(-1);
    const [addRule, setAddRule] = useState('');

    const [stairs, setStairs] = useState(-1);

    const [myAdd, setMyAdd] = useState([]);
    

    useEffect(() => {

        setPetsAllowed(formData[0].houseRules[0].petsAllowed);
        setSmoking(formData[0].houseRules[0].smoking);
        setInfant(formData[0].safety[0].infant);
        setChild(formData[0].safety[0].children);
        setParty(formData[0].houseRules[0].party);
        setMyAdd(formData[0].houseRules[0].additionalRules);

    }, [])


    const savePets = (value) => {
        setPetsAllowed(value);
        const updatedData = [...formData];
        updatedData[0].houseRules[0].petsAllowed = value;
        setFormData(updatedData);
    }


    const saveChild = (value) => {
        setChild(value);
        const updatedData = [...formData];
        updatedData[0].safety[0].children = value;
        setFormData(updatedData);
    }

    const saveInfant = (value) => {
        setInfant(value);
        const updatedData = [...formData];
        updatedData[0].safety[0].infant = value;
        setFormData(updatedData);
    }

    const saveSmoking = (value) => {
        setSmoking(value);
        const updatedData = [...formData];
        updatedData[0].houseRules[0].smoking = value;
        setFormData(updatedData);
    }

    const saveParty = (value) => {
        setParty(value)
        const updatedData = [...formData];
        updatedData[0].houseRules[0].party = value;
        setFormData(updatedData);
    }

    const removeRule = (value) => {
        const index = formData[0].houseRules[0].additionalRules.indexOf(value);
        const updatedData = [...formData];
        updatedData[0].houseRules[0].additionalRules.splice(index, 1);
        setFormData(updatedData);

        const index2 = myAdd.indexOf(value);
        const updatedAdd = [...myAdd];
        updatedAdd.splice(index2, 1);
        setMyAdd(updatedAdd);

    }

    const saveRule = () => {
        const index = myAdd.indexOf(addRule);
        const updatedData = [...formData];

        if (index !== -1) {
    //
        } else {
            updatedData[0].houseRules[0].additionalRules.push(addRule);
            myAdd.push(addRule);
        }
        setFormData(updatedData);
        setAddRule('');

        console.log('RULES', myAdd);
     
    }


  /*  const handleStairs = () => {
        const updatedData = [...formData];
        if(stairs === 1){
        updatedData[0].safety[0].stairs = 0;
        setStairs(0);
        } else {
        updatedData[0].safety[0].stairs = 1;
        setStairs(1);
        }
        setFormData(updatedData);
    }
    
*/

    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>

                    <Text style={[styles.largeLabel, styles.mb5]}>Your house your rules</Text>
                    <MyText style={[styles.tinyLabel, styles.mb30]}>Set the rules guest must abide to during their stay</MyText>

                    <View style={[styles.RowB, styles.mb10,]}>
                        <View>
                            <MyText style={[styles.subLabel]}>Suitable for children (2-12yrs)</MyText>
                        </View>

                        <View style={[styles.Row, styles.mb10]}>
                            <TouchableOpacity
                                onPress={() => saveChild(0)}>
                                <View style={child === 0 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'close'}
                                    size={moderateScale(16)}
                                    color={child === 0 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                                
                            </TouchableOpacity>

                            <View style={styles.ph5} />

                            <TouchableOpacity
                                onPress={() => saveChild(1)}>
                                <View style={child === 1 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'checkmark'}
                                    size={moderateScale(16)}
                                    color={child === 1 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.RowB, styles.mb10,]}>
                        <View>
                            <MyText style={[styles.subLabel]}>Suitable for infants (under 2yrs)</MyText>
                        </View>

                        <View style={[styles.Row, styles.mb10]}>
                            <TouchableOpacity
                                onPress={() => saveInfant(0)}>
                                <View style={infant === 0 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'close'}
                                    size={moderateScale(16)}
                                    color={infant === 0 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                            </TouchableOpacity>

                            <View style={styles.ph5} />

                            <TouchableOpacity
                                onPress={() => saveInfant(1)}>
                                <View style={infant === 1 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'checkmark'}
                                    size={moderateScale(16)}
                                    color={infant === 1 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.RowB, styles.mb10,]}>
                        <View>
                            <MyText style={[styles.subLabel]}>Pets allowed</MyText>
                        </View>

                        <View style={[styles.Row, styles.mb10]}>
                            <TouchableOpacity
                                onPress={() => savePets(0)}>
                                <View style={petsAllowed === 0 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'close'}
                                    size={moderateScale(16)}
                                    color={petsAllowed === 0 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                            </TouchableOpacity>

                            <View style={styles.ph5} />

                            <TouchableOpacity
                                onPress={() => savePets(1)}>
                                <View style={petsAllowed === 1 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'checkmark'}
                                    size={moderateScale(16)}
                                    color={petsAllowed === 1 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.RowB, styles.mb10,]}>
                        <View>
                            <MyText style={[styles.subLabel]}>Smoking allowed</MyText>
                        </View>

                        <View style={[styles.Row, styles.mb10]}>
                            <TouchableOpacity
                                onPress={() => saveSmoking(0)}>
                                <View style={smoking === 0 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'close'}
                                    size={moderateScale(16)}
                                    color={smoking === 0 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                            </TouchableOpacity>

                            <View style={styles.ph5} />

                            <TouchableOpacity
                                onPress={() => saveSmoking(1)}>
                                <View style={smoking === 1 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'checkmark'}
                                    size={moderateScale(16)}
                                    color={smoking === 1 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={[styles.RowB, styles.mb20,]}>
                        <View>
                            <MyText style={[styles.subLabel]}>Party or event allowed</MyText>
                        </View>

                        <View style={[styles.Row, styles.mb20]}>
                            <TouchableOpacity
                                onPress={() => saveParty(0)}>
                                <View style={party === 0 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'close'}
                                    size={moderateScale(16)}
                                    color={party === 0 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                            </TouchableOpacity>

                            <View style={styles.ph5} />

                            <TouchableOpacity
                                onPress={() => saveParty(1)}>
                                <View style={party === 1 ? styles.circlePlus2Color : styles.circlePlus2}>
                                <IconM
                                    name={'checkmark'}
                                    size={moderateScale(16)}
                                    color={party === 1 ? '#fff' : '#808080'}
                                    style={{ alignSelf:'center' }}
                                />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={[styles.largeLabel2, styles.mb20]}>Additional Rules</Text>

                    {myAdd && myAdd.map((i, index) => {
                        return (
                        <View key={index}>
                            <View style={[styles.mb10, styles.pt5, styles.RowB,]}>
                            <MyText style={styles.userLabel}>{i}</MyText>
                            <TouchableOpacity
                                onPress={() => removeRule(i)}>
                                <IconM
                                    name={'close'}
                                    size={moderateScale(22)}
                                    color={'#808080'}
                                    style={{ marginTop: -2, marginRight: 0 }}

                                />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={[styles.mb15, styles.hr]} />
                        </View>
                        )
                        })}


                    <View style={[styles.drop, styles.Row, styles.mb40,]}>
                        <TextInput
                            style={[styles.text, { width: '89%' }]}
                            placeholder="e.g No noise after 11pm"
                            placeholderTextColor={'#808080'}
                            value={addRule}
                            onChangeText={(text) => {
                                setAddRule(text)
                            }}

                        />
                        {addRule !== '' ? (
                            <TouchableOpacity
                                onPress={() => saveRule()}
                                style={{ width: '10%' }}>
                                <Text style={styles.userLabel}>Add</Text>
                            </TouchableOpacity>
                        ) : (
                            <View
                                style={{ width: '10%', opacity:0.5}}>
                                <Text style={styles.userLabel}>Add</Text>
                            </View>
                        )}
                    </View>


                   
               {/*
                    <Text style={[styles.largeLabel2, styles.mb20]}>Details your guests need to know about this apartment</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleStairs()
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={stairs === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={stairs === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Must climb stairs</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleStairs()
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={stairs === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={stairs === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Dangerous animals on property</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleStairs()
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={stairs === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={stairs === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Surveillance or recording device on property</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleStairs()
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={stairs === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={stairs === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>No smoke alarm</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleStairs()
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={stairs === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={stairs === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>No parking on property</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleStairs()
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={stairs === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={stairs === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Weapons on property</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                    */}
 

                </View>
            </ScrollView>


        </>
    )
}

export default Rules;