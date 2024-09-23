import { View, Text, Dimensions, Platform, TouchableOpacity, ScrollView, StatusBar,} from 'react-native'
import React from 'react'
import MyText from '../../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
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
  
  const AmenitiesModal: React.FC<Props> = props => {
      const {isOpen, data, bgColor, handleChange} = props;

return (

<Modal isOpen={isOpen}
style={{ backgroundColor: '#fff' }}
keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
swipeToClose={true}
coverScreen={true}
swipeArea={500}
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
        <Text style={[styles.largeLabel,  bgColor === '#fff' ? [styles.textDark, styles.pt15] : [styles.textWhite, styles.pt30]]}>Apartment features</Text>
</View>

<View style={[bgColor === '#fff' ? styles.bgStraight : styles.bgCurve]} /> 
<ScrollView style={[styles.bgScroll]}>
       
<TouchableOpacity activeOpacity={1}>

<View style={[styles.mb30,]}>

{data && data.map((item, index) => (
    <View key={index}>

  <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Luxury type</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.propertyType && item.propertyType.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>
    
        {item.outsideView ? (
            <>
              <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Outside view</Text>
              <View style={[styles.pt10, styles.ph15, styles.mb30]}>
                  {item.outsideView && item.outsideView.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
        </View>
                  ))}
                  </View>

                  </>
        ) : null }
    
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Bathroom</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.bathroom && item.bathroom.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>


    
        <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Bedroom and laundry</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.bedroom && item.bedroom.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>

    {item.entertainment ? (
    <>            
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Entertainment</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.entertainment && item.entertainment.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>
        </>
        ) : null }

  
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Heating and cooling</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.cooling && item.cooling.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>


    {item.internet ? (
    <>              
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Internet and office</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.internet && item.internet.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>
        </>
    ) : null }


        {item.safety ? (  
            <> 
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Safety</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.safety && item.safety.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>

</>
        ) : null }
   
            
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Kitching and dining</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.kitchen && item.kitchen.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>


        {item.outdoor ? (
    <>          
        <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Outdoor</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.outdoor && item.outdoor.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>
        </>
        ) : null }



{item.parking ? (
    <>          
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Parking</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.parking && item.parking.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>
        </>
) : null }


{item.services.length > 0 ? (
    <>                    
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Services</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.services && item.services.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{i}</MyText>
         </View>
    ))}
        </View>
       
 </>
) : null }



{item.notIncluded.length > 0 ? (
    <>                    
    <Text style={[styles.largeLabel, styles.ph15,  styles.pb5, styles.lineBottom]}>Not included</Text>
<View style={[styles.pt10, styles.mb30, styles.ph15]}>
    {item.notIncluded && item.notIncluded.map((i, index) => (
        <View key={index} style={[styles.Row, styles.mb10]}>
        <Icon
                      name={'block'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                      
                <MyText style={[styles.noLabel, { }]}>{i}</MyText>
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

export default AmenitiesModal;