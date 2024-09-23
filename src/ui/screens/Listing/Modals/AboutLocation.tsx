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
    city: any;
    country: any;
    bgColor: any;
    handleChange: any;
  }
  
  const AboutLocationModal: React.FC<Props> = props => {
      const {isOpen, data, city, country, bgColor, handleChange} = props;

return (

<Modal isOpen={isOpen}
style={{ backgroundColor: '#fff' }}
keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
swipeToClose={true}
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
        <Text style={[styles.largeLabel,  bgColor === '#fff' ? [styles.textDark, styles.pt15] : [styles.textWhite, styles.pt30]]}>About location</Text>
</View>

<View style={[bgColor === '#fff' ? styles.bgStraight : styles.bgCurve]} /> 
<ScrollView style={[styles.bgScroll]}>
      
<TouchableOpacity activeOpacity={1}>

<View style={[styles.mb30, styles.ph15]}>


<Text style={[styles.largeLabel2]}>{city}, {country}</Text>
      
  <Text style={[styles.subLabel,styles.mb30]}>{data}</Text>

  </View>


</TouchableOpacity>
</ScrollView>

</SafeAreaView>


</View>          

</Modal>

)
}

export default AboutLocationModal;