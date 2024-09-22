//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef, useCallback } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  //  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
  StatusBar,
  Platform,
  TextInput,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/Navbars/Navbar';
import MyText from '../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');
import styles from './Styles';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

const Dashboard = ({ route, navigation }) => {

  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [insight, setInsight] = useState('Today')

  const monthLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date();
  const month = monthLabel[d.getMonth()];

  const cRate = 50;
  const rRate= 80;
  const rate = 4.7;

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
        <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

        <View style={[styles.newModalHeader, styles.RowB]}>
          <Text style={[styles.extraLabel, styles.pt10, styles.textWhite]}>How Today is looking</Text>
          <TouchableOpacity>
            <View style={[styles.iconBg, {borderRadius:20, marginTop:7,}]}>
          <IconM
                            name={'notifications-outline'}
                            size={moderateScale(20)}
                            color={'#343434'}
                            style={{ marginTop: 0, }} />
                            </View>
          </TouchableOpacity>
        </View>


<ScrollView style={{height:'100%', backgroundColor:'#fff'}}>
<View style={{backgroundColor:'#fff', flex:1, height:'100%'}}>


            <View style={[styles.Row, styles.ph15, styles.pt10,]}>
                <TouchableOpacity activeOpacity={0.7}
                onPress={() => setInsight('Today')}
                style={[insight === 'Today' ? styles.btn : styles.noBtn]}>
                    <MyText style={[styles.subLabel, insight === 'Today' ? styles.textDark : styles.textDark]}>Today</MyText>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}
                onPress={() => setInsight('Tomorrow')}
                style={[insight === 'Tomorrow' ? styles.btn : styles.noBtn]}>
                    <MyText style={[styles.subLabel, insight === 'Tomorrow' ? styles.textDark : styles.textDark]}>Tomorrow</MyText>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}
                onPress={() => setInsight('Days')}
                style={[insight === 'Days' ? styles.btn : styles.noBtn]}>
                    <MyText style={[styles.subLabel, insight === 'Days' ? styles.textDark : styles.textDark]}>7 days</MyText>
                </TouchableOpacity>

            </View>

            <View style={styles.lineBottom} />
            </View>


            <View style={styles.midBg}>

            <View style={[styles.pt15,]}>

                <View style={[styles.bb, styles.ph15, styles.RowB, {width:'100%'}]}>
                  <View style={{width:'48%'}}>
                <TouchableOpacity  activeOpacity={0.7}
                onPress={() => navigation.navigate('Bookings')}>
                <View style={[styles.box, styles.mb10]}>
                  <View style={styles.iconBg}>
                <Icons
                            name={'bag-suitcase'}
                            size={moderateScale(20)}
                            color={'#343434'}
                            style={{ marginTop: 0, }} />
                </View>
                <View>
                <Text style={[styles.extraLabel, styles.pt30]}>10</Text>            
                <MyText style={[styles.tinyLabel]}>Check-ins</MyText>
                </View>
                </View>
                </TouchableOpacity>
                </View>

                <View style={{width:'48%'}}>
                <TouchableOpacity  activeOpacity={0.7}
                onPress={() => navigation.navigate('Bookings')}>
                <View style={[styles.box, styles.mb10]}>
                <View style={styles.iconBg}>
                      <Icons
                            name={'briefcase-clock'}
                            size={moderateScale(18)}
                            color={'#343434'}
                            style={{ marginTop: 0 }} />
                </View>
                <View>
                <Text style={[styles.extraLabel, styles.pt30]}>4</Text>
                <MyText style={[styles.tinyLabel]}>Check-outs</MyText>
                </View>
                </View>
                </TouchableOpacity>
                </View>

                </View>

                <View>
                

                </View>

            </View>


            <View style={[styles.Row, styles.bb, styles.ph15, styles.pt15, ]}>
                <View style={[styles.mb10, styles.alignCenter, styles.mr15]}>
                <View style={[styles.statBg, {borderColor: cRate > 60 ? '#343434' : '#ff0000'}]}>    
                <Text style={[styles.largeLabel, styles.textCenter, {color: cRate > 60 ? '#343434' : '#ff0000'}]}>{cRate}%</Text>
                </View>
                <Text style={[styles.tinyDark, styles.pt10, {}]}>Completion Rate</Text>
                </View>

                <View style={[styles.mb10, styles.alignCenter, styles.mr20]}>
                <View style={[styles.statBg, {borderColor: rRate > 60 ? '#343434' : '#ff0000'}]}>   
                <Text style={[styles.largeLabel, styles.textCenter, {color: rRate > 60 ? '#343434' : '#ff0000'}]}>{rRate}%</Text>
                </View>
                <Text style={[styles.tinyDark, styles.pt10]}>Response Rate</Text>
                </View>

                <View style={[styles.mb10, styles.alignCenter]}>
                <View style={[styles.statBg, {borderColor: rate > 4 ? '#343434' : '#ff0000'}]}>
                <Text style={[styles.largeLabel, styles.textCenter, {color: rate > 4 ? '#343434' : '#ff0000'}]}>4.8</Text>
                </View>
                <Text style={[styles.tinyDark, styles.pt10]}>Rating</Text>
                </View>


                
                </View>


            <View style={[styles.ph15, styles.mb20]}>
              
            <Text style={[styles.largeLabel, styles.pt15]}>Earnings</Text>

            <View style={styles.pt15}>
            <View style={[styles.Row, styles.mb20]}>
              <View style={{width:'50%'}}>
            <Text style={[styles.tinyLabel]}>Available for withdrawal</Text>
            <Text style={[styles.titleLabel, styles.pt5]}>{'\u20A6'}500,000</Text>
              </View>

              <View>
            <Text style={[styles.tinyLabel]}>Earnings in {month}</Text>
            <Text style={[styles.titleLabel, styles.pt5]}>{'\u20A6'}1,500,000</Text>
              </View>

            </View>

            <View style={[styles.Row, styles.mb20]}>
            <View style={{width:'50%'}}>
            <MyText style={[styles.tinyLabel]}>Payments clearing</MyText>
            <Text style={[styles.titleLabel, styles.pt5]}>{'\u20A6'}2,500,000</Text>
              </View>

              <View>
            <Text style={[styles.tinyLabel]}>Pending Bookings</Text>
            <Text style={[styles.titleLabel, styles.pt5]}>7 ({'\u20A6'}3,500,000)</Text>
              </View>

            </View>


            </View>
              </View>

    </View>

</ScrollView>

            </SafeAreaView >

  <NavBar
    navigation={navigation}
    activePage={'dashboard'}
    backgroundColor={undefined}
  />

        </View>

    );
};

export default Dashboard;