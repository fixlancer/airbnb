import { View, Text, StatusBar, Image, TouchableOpacity, ImageBackground,
Dimensions, ScrollView, StyleSheet, Platform, ActivityIndicator } from 'react-native'
import React, { useEffect, useCallback, useState } from 'react'
import Modal from 'react-native-modalbox';
import MyText from '../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

  const FirstTimer = ({route, navigation}) => {

    const { username } = route?.params;

const handleSubmit = () => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'DashBoardScreen'}],
  })
}


    return (
  <SafeAreaView style={{height: height, width: width, flex: 1, backgroundColor:'#e7f8e6'}}
  edges={['left', 'right', 'top']}>
<StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
<Image
 source={require('../../../Assets/first.jpg')} 
 style={styles.img}
 />

      <View style={styles.body}>
              <View style={{marginTop: 0, justifyContent: 'center',  alignItems: 'center',}}>
  <Text style={[styles.openTitle, {marginBottom:10}]}>Welcome {username}</Text>
              <Text style={[styles.text, {marginTop:0}]}>We are so pleased to have you join us.</Text>
<Text style={[styles.text, {marginTop:10}]}>On Fejora, you get rewarded with {'\n'}
cash bonus on all your trades {'\n'}weekly, monthly or yearly.{'\n'}</Text>

<Text style={[styles.text, {marginTop:0}]}>Amazing, right?</Text>

          </View>  
          <TouchableOpacity
          style={styles.btnCont}
          onPress={() => handleSubmit()}>
          <View style={[styles.submitBtn, {alignItems: 'center',marginTop: 25, }]}>
     <MyText style={{ fontSize: 13, textAlign: 'center', color: '#fff' }}>Yes, Lets Start</MyText>
          </View>
        </TouchableOpacity>
</View>

</SafeAreaView>

  );
};

const styles = StyleSheet.create({
body:{
        paddingVertical: 10,flex:1,justifyContent:'center', alignItems:'center',
        paddingHorizontal: 20, width: '100%',
        backgroundColor: '#fff',
    },
openTitle: {
    color: '#343434',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    textAlign:'center',
},
header: {
  width: width,
  height: 'auto',
  paddingHorizontal: 20,
  backgroundColor: 'transparent',
},
text: {
  fontSize: 13,
  color:'#808080',
  textAlign:'center',
  fontFamily: 'Nunito-Regular',
},
btnCont: {
  backgroundColor: 'transparent', paddingHorizontal: 15,
},
bottomContainerForIos: {
  height: 30,
  width: '100%',
  backgroundColor: 'transparent',
},
submitBtn: {
  alignSelf: 'center',
  backgroundColor: '#1cc88a',
  width: 200,
  borderRadius: 50,
  marginBottom: 20,
  padding: 10,
},
img: {
height: 670, width: width, flex: 1,marginTop:24
},
});

export default FirstTimer;
