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
import CalendarPicker from 'react-native-calendar-picker';

import Modal from 'react-native-modalbox';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { useTheme } from 'react-native-paper';
import newStyles from '../Styles/Styles';
import HeaderClose from '../../components/Header/HeaderClose';
//import HeaderModalClose from '../../components/Header/HeaderModalClose';
const { width, height } = Dimensions.get('screen');


interface Props {
    isOpen: any;
    location: any;
    handleLoc: any;
    handleChange: any;
}

const Search: React.FC<Props> = props => {
    const { isOpen, handleChange, location, handleLoc} = props;

    const theme = useTheme()
    const styles = newStyles(theme);
    
    const [focus, setFocus] = useState(false);
    const [loc, setLoc] = useState(location)

    const refCal = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {

        setFocus(true);
        setLoc(location);

    }, [focus]);

    
    useFocusEffect(
        React.useCallback(() => {
            const goBack = () => {
                setFocus(true);
            }

            return () => goBack();

        }, [])
    )


    const searchResults = [
        {
            id: '0',
            desc: 'Ontario, CA',
        },
        {
            id: '1',
            desc: 'New york, US'
        },
        {
            id: '2',
            desc: 'Ibiza, Spain'
        }
    ]


    const searchLocation = async (text) => {
        setLoc(text);
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
                    inputRef.current.blur();
                    handleLoc(item.desc);
                    setFocus(false);
                }}>
                <IconM
                    size={moderateScale(15)}
                    name={'location-sharp'}
                    color={theme.dark ? '#fff' : '#343434'}
                    style={{ marginRight: moderateScale(23), }}
                />
                <MyText style={styles.subLabel}>{item.desc}</MyText>
            </TouchableOpacity>
        );
    }

    const seperator = () => {

        return (
            <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: theme.dark ? '#420d48' : '#f2f2f2' }} />
        )
    }

    const clearFocus = () => {
        setFocus(false);
        handleChange()
        setLoc('');
        inputRef.current.blur();
    }


    return (
        <Modal isOpen={isOpen}
        style={{ backgroundColor: '#fff' }}
        keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
        swipeToClose={false}
        onClosed={handleChange}
        backdropOpacity={1}
        backdropColor="transparent"
        position="top">

        <TouchableWithoutFeedback onPress={() => { focus ? inputRef.current.blur() : '' }}>
            <View style={[styles.container]}>

                <SafeAreaView
                    style={{
                        height: height,
                        width: width,
                        flex: 1,
                        backgroundColor: 'transparent',
                    }}
                    edges={['left', 'right', 'top']}>
                    <StatusBar translucent barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor="transparent" />

                    <HeaderClose headerTitle={'Where are you going?'} route={clearFocus} />


                    <View style={styles.midBg}>

                            <View style={[focus ? styles.mb10 : styles.mb20, styles.ph15]}>
                                <View style={[styles.b15,  styles.ph5, styles.bgGrey]}>
                                    <View style={styles.Row}>
                                        <View style={[styles.alignCenter, styles.mt5, styles.b30, styles.bgWhite, styles.width35]}>
                                            <IconM
                                                size={moderateScale(15)}
                                                name={'location-sharp'}
                                                color={theme.dark ? '#fff' : '#343434'}
                                            />
                                        </View>

                                        <TextInput
                                            style={styles.mainText}
                                            placeholder="Search location"
                                            placeholderTextColor={theme.dark ? '#ddd' : '#343434'}
                                            value={loc}
                                            autoFocus={focus}
                                            ref={inputRef}
                                            onTouchStart={() => setFocus(true)}
                                            onChangeText={(text) => searchLocation(text)}

                                        />

                                    </View>
                                </View>
                            </View>

                        {focus ? (

                            <FlatList
                                data={searchResults}
                                renderItem={renderSearch}
                                style={[styles.iosBar, {flexGrow:1}]}
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={seperator}
                                keyboardShouldPersistTaps='handled' //allow clicking on items even when input is onFocus
                            />
                        ) : null }
                         
                    </View>

                </SafeAreaView >

            </View >
        </TouchableWithoutFeedback>
        </Modal>
    );
};


export default Search;
