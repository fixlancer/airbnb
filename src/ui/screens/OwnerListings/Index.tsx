//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
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
    Animated,
    TextInput,
    RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/Navbars/Navbar';
import MyText from '../../components/DefaultTextComponent/MyText';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { getDraftListing } from '../../../redux/actions/listingActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import Modal from 'react-native-modalbox';
//import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Active from './Tabs/Active';
import Pending from './Tabs/Pending';
import Declined from './Tabs/Declined';
import { useIsFocused } from '@react-navigation/native';

const OwnerListings = ({ route, navigation }) => {

  const [pending, setPending] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const isFocus = useIsFocused();
  const [refresh, setRefresh] = useState(0);

  const dispatch = useDispatch();
 
 // const { draftListing } = useSelector((state: RootState) => state.listingReducers);

  /*
  useEffect(() => {
    setRefresh(refresh + 1);
  }, [isFocus]);

  */

    /* CUSTOM TOAST ========== */

    const [toastType, setToastType] = useState('success');
    const [toastMsg, setToastMsg] = useState('');
    const [show, setShow] = useState(0);
  
    const slideAnim = useRef(new Animated.Value(120)).current;
  
    const animateToast = () => {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
  
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: 120,
          duration: 200,
          useNativeDriver: true,
        }).start();
        setShow(0);
      }, 3500);
    };
  
    const showToast = (type, msg) => {
      setToastType(type);
      setToastMsg(msg);
      setShow(1);
      animateToast();
    };
  
    /* CUSTOM TOAST ENDS ============= */

/*
  const fetchDraft = async () => {

  //  setisLoading(true);

    dispatch(getDraftListing())
      .then(res => {
//        setisLoading(false);
      })
      .catch((err) => {
  //      setisLoading(false);
        if (err.message == 'Network Error') {
          showToast('Warning', 'Connection Error, try again');
        }
        else {
          showToast('Warning', err.message);
        }
      })
  };
 
  
  useEffect(() => {
  //  fetchDraft();
  }, [])
*/


  const [allCount, setAllCount] = useState(0)
  const [activeCount, setActiveCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [declinedCount, setDeclinedCount] = useState(0);

  useEffect(() => {

    setDeclinedCount(2),
    setPendingCount(3)
    setActiveCount(4)
    setAllCount(12);

  }, [])
  
  /*
    const FirstRoute = () => (
        
    //  refresh ? (
        <View style={{flex:1,}}>
        <Pending navigation={navigation} setPending={(i) => setPending(i)} />
        </View>
    //  ) : null
        )

    const SecondRoute = () => {
        
        return (
            <View style={{flex:1,}}>
        <Active navigation={navigation} />
        </View>
        )
    }

    const ThirdRoute = () => {
        return (
        <View style={{flex:1,}}>
        <Declined navigation={navigation} />
        </View>
        )
    }


    const RenderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    })

    const RenderScene2 = SceneMap({
      second: SecondRoute,
      third: ThirdRoute,
  })


    const renderTabBar = props => (
        <TabBar
            {...props}
            scrollEnabled
            indicatorStyle={{ backgroundColor: '#7E178E' }}
            style={{ backgroundColor: '#fff', marginTop: 0, paddingVertical:0, }}
            labelStyle={{ color: '#343434', textTransform: 'none', fontSize: moderateScale(13), fontFamily: 'Nunito-Regular' }}
            pressColor={1}
            gap={0}
            activeColor={'#7E178E'}
        />
    )


    const [index, setIndex] = React.useState(0);
    const [routes] = pending === 1 ? React.useState([
      { key: 'first', title: 'Pending' },
      { key: 'second', title: 'Active' },
      { key: 'third', title: 'Declined' },
  ]) : React.useState([
        { key: 'second', title: 'Active' },
        { key: 'third', title: 'Declined' },
    ])
    

    const [routes] = React.useState([
        { key: 'first', title: 'Pending' },
        { key: 'second', title: 'Active' },
        { key: 'third', title: 'Declined' },
    ])

    */

   const [cat, setCat] = useState('Pending')

   
    return (

        <View style={[styles.container, styles.bgWhite]}>
            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

                <View style={[styles.newModalHeader, styles.bgWhite, styles.RowB]}>
                    <Text style={[styles.extraLabel, styles.pt10, styles.textDark]}>Listings</Text>

                   
                   <View style={[styles.Row]}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('NewListing')}
                    style={[styles.Row, styles.mr10]}>
                            <Icons
                                        name={'pencil-circle-outline'}
                                        size={moderateScale(22)}
                                        color={'#343434'}
                                        style={{ marginTop: 14, marginRight:2, }}

                                    />
                      <MyText style={[styles.subLabel, styles.textDark, styles.pt15]}>Edit Draft</MyText>
                    </TouchableOpacity>
                
                    <TouchableOpacity
                    onPress={() => navigation.navigate('NewListing')}
                    style={[styles.Row]}>
                      <IconM
                            name={'add-circle-outline'}
                            size={moderateScale(22)}
                            color={'#343434'}
                            style={{ marginTop: 14, marginRight:2,}} />
                      <MyText style={[styles.subLabel, styles.textDark, styles.pt15]}>New</MyText>
                    </TouchableOpacity>
                    </View>
                   
                </View>


           
					{/*
                {pending === 1 ? (
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={RenderScene}
                        onIndexChange={setIndex}
                        renderTabBar={renderTabBar}
                        initialLayout={{ width: Dimensions.get('window').width }}
                    />
                ) : (
                  <TabView
                  navigationState={{ index, routes }}
                  renderScene={RenderScene}
                  onIndexChange={setIndex}
                  renderTabBar={renderTabBar}
                  initialLayout={{ width: Dimensions.get('window').width }}
              />

                )}
				
				
					*/}
	
            <View style={[styles.Row, styles.mt5, styles.ph15,]}>

              <TouchableOpacity
                onPress={() => {
                  setCat('Pending')
                }}
                style={[styles.tabLineAuto, styles.pb8, cat === 'Pending' ? styles.lineBottomDark : styles.lineBottomTransparent, styles.mr20,]}>
                <Text style={[styles.textCenter, styles.fontSize13, styles.fontSemi, cat === 'Pending' ? styles.textDark : styles.textGrey]}>Pending ({pendingCount})</Text>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => {
                  setCat('Active')
                }}
                style={[styles.tabLineAuto, styles.pb8, cat === 'Active' ? styles.lineBottomDark : styles.lineBottomTransparent, styles.mr20,]}>
                <Text style={[styles.textCenter, styles.fontSize13, styles.fontSemi, cat === 'Active' ? styles.textDark : styles.textGrey]}>Active ({activeCount})</Text>
              </TouchableOpacity>
			  
			                <TouchableOpacity
                onPress={() => {
                  setCat('Declined')
                }}
                style={[styles.tabLineAuto, styles.pb8, cat === 'Declined' ? styles.lineBottomDark : styles.lineBottomTransparent, styles.mr20,]}>
                <Text style={[styles.textCenter, styles.fontSize13, styles.fontSemi, cat === 'Declined' ? styles.textDark : styles.textGrey]}>Declined ({declinedCount})</Text>
              </TouchableOpacity>

            </View>

            <View style={{ flex: 1, backgroundColor: '#f3f5f9', }}>


        {cat === 'Pending' ? (
          <Pending navigation={navigation} setPending={(i) => setPending(i)} />
        ) : cat === 'Active' ? (
          <Active navigation={navigation} />
        ) : cat === 'Declined' ? (
		<Declined navigation={navigation} />
		) : null}


                </View>

            </SafeAreaView>

            <NavBar
                navigation={navigation}
                activePage={'ownerlistings'}
                backgroundColor={undefined}
            />

        </View>

    );
};

export default OwnerListings;