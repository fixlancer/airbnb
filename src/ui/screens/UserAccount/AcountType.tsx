import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState } from 'react';
import {
    Image,
    FlatList,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';

const AccountType = ({ route, navigation }) => {

    const bgImg = require('../../../Assets/registerbg.png');
    const talent = require('../../../Assets/talent.png');
    const listener = require('../../../Assets/listener.png');
    const [isLoading, setisLoading] = useState(false);


    return (

        <View style={styles.container}>

            <Image
                source={bgImg}
                style={styles.accountBG}
            />
            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />


                <View style={styles.header}>

                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
                        <Icon
                            name={'arrow-back-ios'}
                            size={RFValue(22)}
                            color={'#808080'}
                            style={{ alignSelf: 'center', marginTop:5, paddingRight: 5 }} />
                    </TouchableOpacity>
                    <MyText></MyText>
                    <View style={styles.Row}>
                    <MyText style={[styles.subLabel, {marginTop:10, marginRight:15}]}>Have an account?</MyText>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('SignIn')}
                    style={styles.button}>
                        <MyText style={styles.buttonLabel}>Login</MyText>
                    </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.midBg}>
                    <MyText style={[styles.titleLabel, { textAlign: 'center' }]}>Choose your preferred account</MyText>
                    <MyText style={[styles.tinyLabel, { textAlign: 'center', marginTop: 5, }]}>We'll fit the experience to your needs</MyText>

                    <View style={[styles.RowB, {marginTop:25}]}>
                        <View style={{width:146}}>
                    <Image
                    source={talent}
                    style={styles.talent}

                    />
                    <View style={{justifyContent:'flex-start', alignItems:'flex-start', paddingHorizontal:20}}>
                    <IconM
                            name={'ios-mic'}
                            size={RFValue(55)}
                            color={'#fff'}
                            style={{ marginTop:20, marginBottom:15 }} />
                    <Text style={[styles.titleLabel,{fontSize: RFValue(18), color:'#fff'}]}>Rising Talent</Text>
                    <MyText style={[styles.subLabel, {color:'white'}]}>Upcoming artists looking to get discovered</MyText>
                    </View>
                    </View>

                    <View style={{marginTop:150, width: 146}}>
                    <Image
                    source={listener}
                    style={styles.listener}

                    />
                    <View style={{justifyContent:'flex-start', alignItems:'flex-start', paddingHorizontal:25}}>
                    <IconM
                            name={'headset'}
                            size={RFValue(55)}
                            color={'#fff'}
                            style={{ marginTop:20, marginBottom:20,  }} />
                  <Text style={[styles.titleLabel,{fontSize: RFValue(18), color:'#fff'}]}>Listeners</Text>
                    <MyText style={[styles.subLabel, {color:'white'}]}>Talent seekers or music lovers</MyText>
                    </View>
                    </View>

                    </View>

                </View>

            </SafeAreaView>

        </View>

    )
}

export default AccountType;