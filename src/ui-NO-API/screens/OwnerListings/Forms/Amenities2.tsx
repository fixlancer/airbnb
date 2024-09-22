import { View, Text, Dimensions, Platform, TouchableOpacity, Animated, TextInput, ScrollView, AppRegistry } from 'react-native'
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

const Amenities2: React.FC<Props> = props => {
    const { formData, setFormData} = props;
    const [essence, setEssence] = useState(0);
    const [air, setAir] = useState(0);
    const [wifi, setWifi] = useState(0);
    const [tv, setTV] = useState(0);
    const [game, setGame] = useState(0);
    const [kitchen, setKitchen] = useState(0);
    const [breakfast, setBreakfast] = useState(0);
    const [iron, setIron] = useState(0);
    const [hairdryer, setHairdryer] = useState(0);
    const [pEntrance, setPEntrance] = useState(0);
    const [parking, setPaking] = useState(0);
    const [pool, setPool] = useState(0);
    const [coffeemaker, setCoffeemaker] = useState(0);
    const [smoke, setSmoke] = useState(0);
    const [aid, setAid] = useState(0);
    const [camera, setCamera] = useState(0);
    const [fire, setFire] = useState(0);



    useEffect(() => {

        formData[0].amenities[0].bedroom.forEach(i => {

            if (i == 'Essentials') {
                setEssence(1)
            }
            if (i == 'Penthouse') {
                setAir(1);
            }
            if (i == 'Duplex') {
                setDuplex(1)
            }
            if (i == 'Bungalow') {
                setBungalow(1);
            }

        })

        formData[0].amenities[0].cooling.forEach(i => {

            if (i == 'Essentials') {
                setEssence(1)
            }
            if (i == 'Air conditioning') {
                setAir(1);
            }
            if (i == 'Duplex') {
                setDuplex(1)
            }
            if (i == 'Bungalow') {
                setBungalow(1);
            }

        })


    }, [])


    const handleEssence = (myData) => {

        const updatedData = [...formData];
        const index = formData[0].amenities[0].bedroom.indexOf(myData);
        let shouldAdd = true;

        if (index !== -1) {
            shouldAdd = false;
        }

        if (shouldAdd) {
            updatedData[0].amenities[0].bedroom.push(myData);
            setEssence(1);
        } else {
            updatedData[0].amenities[0].bedroom.splice(index, 1);
            setEssence(0);
        }

        setFormData(updatedData);

    }

    const handleAir = (myData) => {


        const index = formData[0].amenities[0].cooling.indexOf(myData);
        const updatedData = [...formData];
        let shouldAdd = true;

        if (index !== -1) {
            shouldAdd = false;
        }

        if (shouldAdd) {
            updatedData[0].amenities[0].cooling.push(myData);
            setAir(1);
        } else {
            updatedData[0].amenities[0].cooling.splice(index, 1);
            setAir(0);
        }

        setFormData(updatedData);

    }

    const handleDuplex = (myData) => {


        const index = formData[0].amenities[0].propertyType.indexOf(myData);
        const updatedData = [...formData];
        let shouldAdd = true;

        if (index !== -1) {
            shouldAdd = false;
        }

        if (shouldAdd) {
            updatedData[0].amenities[0].propertyType.push(myData);
            setDuplex(1);
        } else {
            updatedData[0].amenities[0].propertyType.splice(index, 1);
            setDuplex(0);
        }

        setFormData(updatedData);

    }

    const handleBungalow = (myData) => {


        const index = formData[0].amenities[0].propertyType.indexOf(myData);
        const updatedData = [...formData];
        let shouldAdd = true;

        if (index !== -1) {
            shouldAdd = false;
        }

        if (shouldAdd) {
            updatedData[0].amenities[0].propertyType.push(myData);
            setBungalow(1);
        } else {
            updatedData[0].amenities[0].propertyType.splice(index, 1);
            setBungalow(0);
        }

        setFormData(updatedData);

    }


    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>

                    <Text style={[styles.largeLabel, styles.mb5]}>What amenities do you offer?</Text>
                                    <MyText style={[styles.tinyLabel, styles.mb20]}>These are a few expected amenities. You can add more after publishing.</MyText>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleEssence('Essentials')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={essence === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={essence === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Essentials</MyText>
                <MyText style={[styles.tinyLabel]}>Towels, bed sheets, soap and toilet paper</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            handleAir('Air conditioning')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={air === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={air === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Air conditioning</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleWifi('Wifi')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={wifi === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={wifi === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Wifi</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleTv('TV')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={tv === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={tv === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>TV</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleGame('Video game')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={game === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={game === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Video game</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleKitchen('Kitchen')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={kitchen === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={kitchen === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Kitchen</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleBreakfast('Breakfast')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={breakfast === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={breakfast === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Breakfast</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleIron('Iron')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={iron === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={iron === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Iron</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleHairdryer('Hair dryer')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={hairdryer === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={hairdryer === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Hair dryer</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleCoffee('Coffee maker')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={coffeemaker === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={coffeemaker === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Coffee maker</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleGym('Gym')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={gym === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={gym === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Gym</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handlePrivate('Private entrance')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={pEntrance === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={pEntrance === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Private entrance</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handlePool('Pool')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={pool === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={pool === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Pool</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleParking('Free parking on premises')
                        }}
                        style={[styles.Row, styles.mb40]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={parking === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={parking === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Free parking on premises</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <Text style={[styles.largeLabel, styles.mb20]}>Safety amenities</Text>
 
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleSmoke('Smoke detector')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={smoke === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={smoke === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Smoke detector</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleAid('First-aid kit')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={aid === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={aid === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>First-aid kit</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleCamera('Security cameras')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={camera === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={camera === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Security cameras</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSmart(!smart);
                            handleFire('Fire extinguisher')
                        }}
                        style={[styles.Row, styles.mb5]}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={[styles.Row, styles.mb10]}
                            >
                                <IconM
                                    name={fire === 1 ? 'checkbox' : 'square-outline'}
                                    size={moderateScale(22)}
                                    color={fire === 1 ? '#7E178E' : '#808080'}
                                    style={{ marginRight: 15 }}

                                />
                                <View>
                                    <MyText style={[styles.subLabel]}>Fire extinguisher</MyText>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>


                </View>
            </ScrollView>


        </>
    )
}

export default Amenities2;