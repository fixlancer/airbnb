import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar,
    ScrollView,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    ActivityIndicator,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './Styles';
import CalendarPicker from 'react-native-calendar-picker';

import {scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen');


const ModalSearch = ({ navigation, route }) => {


    const [isLoading, setIsLoading] = React.useState(false);
    const [loc, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [beds, setBeds] = useState('Any');
 //   const [person, setPerson] = useState('Any');
    const [focus, setFocus] = useState(false);
    const [isResults, setResults] = useState(false);
    const [onDate, setOnDate] = useState(false);

    const minDate = new Date();
    const maxDate = new Date(2024, 7, 4);
    const minRange = 1;
    const maxRange = 365;

    const handleDate = (date, type) => {
        if (type === 'END_DATE') {
            if (date)
                setCheckOut(date.format('D MMM YY'));
        } else {
            if (date)
                setCheckIn(date.format('D MMM YY'));
            setCheckOut(null);
        }
    }

    const submitDate = () => {
        setOnDate(false);
    }

    const refCal = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {

        setFocus(true);

    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const goBack = () => {
                setFocus(true);
            }

            return () => goBack();

        }, [])
    )


    const numbers = [
        {
            id: 0,
            name: 'Any',
        },
        {
            id: 1,
            name: '1',
        },
        {
            id: 2,
            name: '2'
        },
        {
            id: 3,
            name: '3',
        },
        {
            id: 4,
            name: '4',
        },
        {
            id: 5,
            name: '5'
        },
        {
            id: 6,
            name: '6'
        },
        {
            id: 7,
            name: '7+',
        },
    ]


    const searchResults = [
        {
            id: '0',
            desc: 'Lekki, lagos',
        },
        {
            id: '1',
            desc: 'lekki ajah, lagos'
        },
        {
            id: '2',
            desc: 'lekki phase 1, lagos'
        }
    ]


    const searchLocation = async (text) => {
        setLocation(text);
        setFocus(true);
        /* axios
           .request({
             method: 'post',
             url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${this.state.searchKeyword}`,
           })
           .then((response) => {
             console.log(response.data);
             this.setState({
               searchResults: response.data.predictions,
               isShowingResults: true,
             });
           })
           .catch((e) => {
             console.log(e.response);
           });
           */

    };

    const renderSearch = ({ item, index }) => {

        return (
            <TouchableOpacity
                style={styles.resultItem}
                onPress={() => {
                    setLocation(item.desc);
        inputRef.current.blur();
                    setFocus(false);

                }}>
                <IconM
                    size={moderateScale(15)}
                    name={'location-sharp'}
                    color={'#343434'}
                    style={{ marginRight: 20, }}
                />
                <MyText style={styles.subLabel}>{item.desc}</MyText>
            </TouchableOpacity>
        );
    }

    const seperator = () => {

        return (
            <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: '#ddd' }} />
        )
    }


    const clearAll = () => {
        setLocation('');
        setCheckIn(null);
        setCheckOut(null);
        setBeds('Any');
  //      setPerson('Any');
        setFocus(false);
        inputRef.current.blur();

    }

    const addDates = () => {
        setOnDate(true)
        setFocus(false);
        inputRef.current.blur();
    }

    const clearDates = () => {
        refCal.current.resetSelections()
        setCheckIn(null)
        setCheckOut(null)
    }

    const clearFocus = () => {
        setFocus(false);-
        inputRef.current.blur();
    }

    return (
        <TouchableWithoutFeedback onPress={() => {focus ? inputRef.current.blur() : ''}}>
        <View style={styles.container}>

            <SafeAreaView
                style={{
                    height: height,
                    width: width,
                    flex: 1,
                    backgroundColor: '#fff',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

                <View style={{ paddingHorizontal: 15, paddingTop: 20, paddingBottom: 15 }}>
                    <TouchableOpacity
                        onPress={() => {
                            focus ? (
                                clearFocus()
                            ) : (
                                navigation.goBack()
                            )
                        }}>
                        <IconM
                            name={focus ? 'chevron-back-circle-outline' : 'close-circle-outline'}
                            size={moderateScale(25)}
                            color={'#343434'}
                            style={{ marginTop: 0 }} />

                    </TouchableOpacity>
                </View>


                <View style={styles.midBg}>

                {!onDate ? (
                    <View style={[focus ? styles.mb10 : styles.mb20, styles.ph15]}>
                        <Text style={styles.largeLabel}>Where are you going?</Text>
                        <View style={styles.bgGrey}>
                            <View style={styles.Row}>
                                <View style={styles.bgIcon}>
                                    <IconM
                                        size={moderateScale(15)}
                                        name={'location-sharp'}
                                        color={'#343434'}
                                    />
                                </View>
                                
                                <TextInput
                                    style={styles.mainText}
                                    placeholder="Search location"
                                    placeholderTextColor={'#343434'}
                                    value={loc}
                                    autoFocus={focus}
                                    ref={inputRef}
                                    onTouchStart={() => setFocus(true)}
                                    onChangeText={(text) => searchLocation(text)}

                                />

                            </View>
                        </View>
                    </View>
                ) : null }

                    {focus ? (

                        <FlatList
                            data={searchResults}
                            renderItem={renderSearch}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={seperator}
                            keyboardShouldPersistTaps='handled' //allow clicking on items even when input is onFocus
                        />
                    ) : (

                        <>

                            {!onDate ? (

                                <View style={[styles.mb10, styles.ph15]}>
                                    
                                    <TouchableOpacity
                                    onPress={() => addDates()}
                                     style={[styles.RowB, styles.drop]}>
                                        <MyText style={[styles.dLabel, { color: '#808080', }]}>When</MyText>

                                        <View>
                                            {checkIn ? (
                                                <MyText style={styles.dLabel}>{checkIn} - {checkOut ? checkOut : 'Add check-out'}</MyText>
                                            ) : (
                                                <MyText style={[styles.dLabel]}>Add dates</MyText>
                                            )}
                                        </View>

                                        </TouchableOpacity>
                                </View>
                            ) : null}

                            {onDate ? (

                                <View style={[styles.mb10, styles.ph15]}>
                                    <Text style={styles.largeLabel2}>When is your trip?</Text>
                                    {checkIn ? (
                                        <MyText style={styles.subLabel}>{checkIn} - {checkOut ? checkOut : 'Add check-out'}</MyText>
                                    ) : (
                                        <MyText style={[styles.subLabel, { color: '#808080' }]}>Add dates of your trip</MyText>
                                    )}

                                    <View style={styles.pt15}>
                                        <CalendarPicker
                                        width={width - 5}
                                            allowRangeSelection={true}
                                            minDate={minDate}
                                            maxDate={maxDate}
                                            minRangeDuration={minRange}
                                            maxRangeDuration={maxRange}
                                            todayBackgroundColor='#fff'
                                            todayTextStyle={{color:'#343434'}}
                                            previousTitleStyle={{color:'#343434'}}
                                            nextTitleStyle={{color:'#343434'}}
                                            dayLabelsWrapper={{borderTopColor:'#ddd', 
                                            borderTopWidth:StyleSheet.hairlineWidth, borderBottomWidth:0}}
                                            selectedRangeStyle={{ backgroundColor: '#F4DBF8' }}
                                            selectedRangeStartTextStyle={{ color: '#fff' }}
                                            selectedRangeEndTextStyle={{color:'#fff'}}
                                            disabledDatesTextStyle={{textDecorationLine:'line-through'}}
                                            selectedDisabledDatesTextStyle={{textDecorationLine:'none'}}
                                            selectedRangeStartStyle={{ backgroundColor:'#7E178E'}}
                                            selectedRangeEndStyle={{backgroundColor:'#7E178E'}}
                                            textStyle={{ fontFamily: 'Nunito-Regular' }}
                                            restrictMonthNavigation={true}
                                            onDateChange={handleDate}
                                            ref={refCal}
                                        />
                                    </View>
                                </View>

                            ) : (

                                <>
                                    <View style={[styles.mb30, styles.pl15]}>
                                        <Text style={styles.titleLabel}>Bedrooms</Text>
                                        <ScrollView>
                                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                                {numbers && numbers.map((item) => {
                                                    return (
                                                        <View key={item.id}>
                                                            <TouchableOpacity
                                                                onPress={() => setBeds(item.name)}
                                                                style={[styles.button, { backgroundColor: beds === item.name ? '#7E178E' : '#fff', borderColor: beds === item.name ? '#7E178E' : '#ddd' }]}>

                                                                <MyText style={[styles.buttonLabel, { color: beds === item.name ? '#fff' : '#343434' }]}>{item.name}</MyText>
                                                            </TouchableOpacity>
                                                        </View>
                                                    )
                                                })}
                                            </ScrollView>
                                        </ScrollView>
                                    </View>

                            {/*        <View style={[styles.mb30, styles.pl15]}>
                                        <Text style={styles.titleLabel}>Occupants</Text>
                                        <ScrollView>
                                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                                {numbers && numbers.map((item) => {
                                                    return (
                                                        <View key={item.id}>
                                                            <TouchableOpacity
                                                                onPress={() => setPerson(item.name)}
                                                                style={[styles.button, { backgroundColor: person === item.name ? '#7E178E' : '#fff', borderColor: person === item.name ? '#7E178E' : '#ddd' }]}>

                                                                <MyText style={[styles.buttonLabel, { color: person === item.name ? '#fff' : '#343434' }]}>{item.name}</MyText>
                                                            </TouchableOpacity>
                                                        </View>
                                                    )
                                                })}
                                            </ScrollView>
                                        </ScrollView>
                                    </View>
                             */}
                            
                                </>
                            )}

                        </>

                    )}

                </View>

                {!onDate ? (

                    !focus ? (

                        <View style={[styles.RowB, styles.ph15, styles.pt10, styles.bottomBar]}>
                            <TouchableOpacity
                                onPress={() => clearAll()}
                            >
                                <MyText style={[styles.subLabel, styles.pt10]}>Clear all</MyText>
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={() =>  navigation.navigate('Search', {loc: loc, beds: beds, checkIn: checkIn, checkOut: checkOut})}
                                style={styles.submitButton}>
                                <MyText style={styles.buttonLabel}>Search</MyText>
                            </TouchableOpacity>

                        </View>
                    ) : null

                ) : onDate ? (
                    <View style={[styles.RowB, styles.ph15, styles.pt10, styles.bottomBar]}>
                        <TouchableOpacity
                            onPress={() => {
                                !checkIn ? (
                                    setOnDate(false)
                                ) : (
                                    clearDates()
                                )
                            }}>
                            <MyText style={[styles.subLabel, styles.pt10]}>{checkIn ? 'Clear dates' : 'Close'} </MyText>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>  submitDate()}
                            style={[styles.submitButton, {}]}>
                            <MyText style={styles.buttonLabel}>Proceed</MyText>
                        </TouchableOpacity>


                    </View>
                ) : null}

            </SafeAreaView >

        </View >
        </TouchableWithoutFeedback>
    );
};


export default ModalSearch;
