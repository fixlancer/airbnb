import { View, Text, Dimensions, Platform, TouchableOpacity, ScrollView, StatusBar,} from 'react-native'
import React from 'react'
import MyText from '../../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles';
import Modal from 'react-native-modalbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('window');

interface Props {
    isOpen: any;
    data: any;
    bgColor: any;
    handleChange: any;
  }
  
  const RulesModal: React.FC<Props> = props => {
      const {isOpen, data, handleChange, bgColor} = props;

return (

<Modal isOpen={isOpen}
style={{ backgroundColor: '#fff' }}
keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
swipeToClose={true}
coverScreen={true}
onClosed={handleChange}
backdropOpacity={1}
backdropColor="white"
position="top">

<View style={[styles.container, {backgroundColor:bgColor}]}>

<SafeAreaView
style={{
  height: height,
  width: width,
  flex: 1,
  backgroundColor: 'transparent',
}}
edges={['left', 'right', 'top']}>
<StatusBar translucent barStyle={bgColor === '#fff' ? 'dark-content' : "light-content"} backgroundColor="transparent" />


<View style={[styles.newModalHeader, {backgroundColor:bgColor}]}>
        <TouchableOpacity
            onPress={() => handleChange()}>
            <IconM
                name={'close-circle-outline'}
                size={moderateScale(25)}
                color={bgColor === '#fff' ? '#343434' : '#fff'}
                style={{ marginTop: 0, }} />

        </TouchableOpacity>
        <Text style={[styles.largeLabel,  bgColor === '#fff' ? [styles.textDark, styles.pt15] : [styles.textWhite, styles.pt30]]}>House rules</Text>
<MyText style={[styles.tinyLabel, styles.pt5, bgColor === '#fff' ? styles.textGrey : styles.textWhite]}>Abide by the rules here so as to avoid any {"\n"}issues during your stay</MyText>
</View>


<View style={[bgColor === '#fff' ? styles.bgStraight : styles.bgCurve]} /> 
<ScrollView style={[styles.bgScroll]}>
    
<TouchableOpacity activeOpacity={1}>
<View style={[styles.mb30,]}>

{data && data.map((item, index) => (
    <View key={index}>

        
  <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Who can stay</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
        <View style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'people'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{item.maxPerson} occupants maximum</MyText>
         </View>

         <View style={[styles.Row, styles.mb10]}>
        <Icon
                      name={'pets'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{item.petsAllowed === 0 ? 'No pets' : 'Pets allowed'} </MyText>
         </View>
        </View>
    
       
              <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>What's allowed</Text>
              <View style={[styles.pt10, styles.ph15, styles.mb30]}>
        <View style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'time-outline'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>Check-in {item.checkIn}</MyText>
        </View>
                
        <View style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'timer-outline'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>Check-out {item.checkOut}</MyText>
        </View>

        <View style={[styles.Row, styles.mb10]}>
        <Icons
                      name={item.smoking === 0 ? 'smoking-off' : 'smoking'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{item.smoking === 0 ? 'No smoking' : 'Smoking allowed'}</MyText>
        </View>

        <View style={[styles.Row, styles.mb10]}>
        <Icon
                      name={item.party === 0 ? 'no-drinks' : 'fastfood'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{item.party === 0 ? 'No party or events' : 'Party allowed'}</MyText>
        </View>

                  </View>

        {item.additionalRules.length != 0 ? (
                    <>
                  
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Additional rules</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.additionalRules && item.additionalRules.map((i, index) => (
        <View key={index} style={[styles.mb10]}>
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>
        
        </>
      ) : null }

   </View>             
)
)}

   </View>

</TouchableOpacity>
</ScrollView>

</SafeAreaView>


</View>          

</Modal>

)
}

export default RulesModal;