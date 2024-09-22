
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef, useCallback } from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback,
    FlatList,
    StatusBar,
    Platform,
    TextInput,
    RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/Navbars/Navbar';
const { width, height } = Dimensions.get('window');
import styles from './Styles';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Unread from './Tabs/Unread';
import Active from './Tabs/Active';
import Completed from './Tabs/Completed';
import Cancelled from './Tabs/Cancelled';

const Bookings = ({ route, navigation }) => {


    const [cat, setCat] = useState('Active')

    /*
    const SecondRoute = () => {

        return (
            <View style={{ flex: 1, }}>
                <Active navigation={navigation} />
            </View>
        )
    }

    const ThirdRoute = () => {
        return (
            <View style={{ flex: 1, }}>
                <Completed navigation={navigation} />
            </View>
        )
    }

    const FourthRoute = () => {
        return (
            <View style={{ flex: 1, }}>
                <Cancelled navigation={navigation} />
            </View>
        )
    }

    const RenderScene = SceneMap({
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
    })


    const renderTabBar = props => (
        <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={{ backgroundColor: '#7E178E' }}
            style={{ backgroundColor: '#fff', marginTop: 0, paddingVertical: 0, }}
            labelStyle={{ color: '#343434', textTransform: 'none', fontSize: moderateScale(13), fontFamily: 'Nunito-Regular' }}
            pressColor={1}
            activeColor={'#7E178E'}
        />
    )


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'second', title: 'Active' },
        { key: 'third', title: 'Completed' },
        { key: 'fourth', title: 'Cancelled' }
    ])

*/

    return (

        <View style={styles.container}>
            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

                <View style={[styles.newModalHeader]}>
                    <Text style={[styles.extraLabel, styles.pt10, styles.textDark]}>Bookings</Text>
                </View>

                
                        <View style={[styles.Row, styles.ph15,]}>
                            <TouchableOpacity
                                onPress={() => {
                                    setCat('Active')
                                }}
                                style={[styles.tabLineAuto, styles.pb8, cat === 'Active' ? styles.lineBottomDark : styles.lineBottomTransparent, styles.mr20,]}>
                                <Text style={[styles.textCenter, styles.fontSize13, styles.fontSemi, cat === 'Active' ? styles.textDark : styles.textGrey]}>Active</Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => {
                                    setCat('Completed')
                                }}
                                style={[styles.tabLineAuto, styles.pb8, cat === 'Completed' ? styles.lineBottomDark : styles.lineBottomTransparent, styles.mr20,]}>
                                <Text style={[styles.textCenter, styles.fontSize13, styles.fontSemi, cat === 'Completed' ? styles.textDark : styles.textGrey]}>Completed</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    setCat('Cancelled')
                                }}
                                style={[styles.tabLineAuto, styles.pb8, cat === 'Cancelled' ? styles.lineBottomDark : styles.lineBottomTransparent, styles.mr20,]}>
                                <Text style={[styles.textCenter, styles.fontSize13, styles.fontSemi, cat === 'Cancelled' ? styles.textDark : styles.textGrey]}>Cancelled</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flex: 1, backgroundColor: '#f3f5f9', }}>

                    {cat === 'Active' ? (
                        <Active navigation={navigation} />
                    ) : cat === 'Completed' ? (
                        <Completed navigation={navigation}  />
                    ) : cat === 'Cancelled' ? (
                        <Cancelled navigation={navigation} />
                    ) : null}



                </View>

            </SafeAreaView>

            <NavBar
                navigation={navigation}
                activePage={'bookings'}
                backgroundColor={undefined}
            />

        </View>

    );
};

export default Bookings;