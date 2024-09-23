import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState } from 'react';
import {
    Image,
    FlatList,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StyleSheet,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';

const Register = ({ route, navigation }) => {
    
    const { type } = route.params;

    const bgImg = require('../../../Assets/mic.jpg');
    const [isLoading, setisLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (userName == '') {
            setError('Enter a Username or Email');
        } else if (pass == '') {
            setError('You password is required');
        } else if (phone == ''){
            setError('Phone number is required');
        } else {
            setisLoading(true);

            setTimeout(() => {
                navigation.navigate('Dashboard');
                setisLoading(false);
            }, 2000);
        }
    }

    return (

        <View style={[styles.container, { backgroundColor: '#000' }]}
        pointerEvents={isLoading ? "none" : "auto"}>
            {/*  <Image
                        source={bgImg}
                        style={styles.signinBG}
                    />
            */}
            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

                <View style={{ paddingHorizontal: 20, marginBottom: 20, paddingTop: 30 }}>
                    <Image
                        style={{
                            // marginTop: 10,
                            // marginBottom: 10,
                            position: 'relative',
                            width: 30,
                            justifyContent: 'center', alignSelf: 'center',
                            //  right:40,
                            // top:35,
                            marginBottom: 20,
                            height: 30,
                        }}
                        imageStyle={{}}
                        source={require('../../../Assets/icon.png')}
                    />

                    <Text style={[styles.titleLabel, { fontSize: RFValue(30), color: '#fff', textAlign: 'center' }]}>The World is {"\n"}waiting</Text>

                </View>

                <ScrollView style={styles.loginBg}>
                <View style={{paddingVertical:10}}>
                    <MyText style={[styles.titleLabel, { textAlign: 'center', color: 'white', fontSize: RFValue(15), marginBottom:10, }]}>Create an Account</MyText>
                    </View>
                    <View style={styles.errorBg}>
                    <MyText style={styles.errorLabel}>{error}</MyText>
                    </View>


                    <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.drop}>
                            <MyText style={styles.subLabel}>{type}</MyText>
                        </View>

                        <View style={styles.drop}>
                            <TextInput
                                style={styles.text}
                                onChangeText={(text) => setUserName(text)}
                                placeholder="Username"
                                value={userName}
                                placeholderTextColor={'#808080'}
                            />
                        </View>

                        <View style={styles.drop}>
                            <TextInput
                                style={styles.text}
                                onChangeText={(text) => setEmail(text)}
                                placeholder="Email address"
                                value={email}
                                placeholderTextColor={'#808080'}
                            />
                        </View>

                        <View style={styles.drop}>
                            <TextInput
                                style={styles.text}
                                onChangeText={(text) => setPhone(text)}
                                placeholder="Phone Number"
                                value={phone}
                                placeholderTextColor={'#808080'}
                            />
                        </View>

                        <View style={styles.drop}>
                            <TextInput
                                style={styles.text}
                                onChangeText={(text) => setPass(text)}
                                placeholder="Password"
                                placeholderTextColor={'#808080'}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => handleSubmit()}
                            style={[styles.button, { width: '100%', backgroundColor: '#f27415', marginBottom: 15 }]}>
                            <MyText style={[styles.buttonLabel, {}]}>Create Account</MyText>
                        </TouchableOpacity>

                    </View>

                   

                </ScrollView>

            </SafeAreaView>

            {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={'white'} size={'large'} />
        </View>
      ) : null}

        </View>

    )
}

export default Register;