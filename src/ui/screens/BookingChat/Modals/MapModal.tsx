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
    street: any;
    city: any;
    country: any;
    handleChange: any;
  }
  
  const MapModal: React.FC<Props> = props => {
      const {isOpen, street,city, country, handleChange} = props;

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


<View style={[styles.container]}>

<SafeAreaView
style={{
  height: height,
  width: width,
  flex: 1,
  backgroundColor: 'transparent',
}}
edges={['left', 'right', 'top']}>
<StatusBar translucent barStyle="light-content" backgroundColor="transparent" />


<View style={[styles.newModalHeader, {backgroundColor:'#fff'}]}>
        <TouchableOpacity
            onPress={() => handleChange()}>
            <IconM
                name={'close-circle-outline'}
                size={moderateScale(25)}
                color={'#343434'}
                style={{ marginTop: 0, }} />

        </TouchableOpacity>
        <Text style={[styles.largeLabel, styles.pt15, styles.textDark]}>Directions </Text>
</View>

<View style={[styles.bgCurve, {backgroundColor: '#fff'}]} /> 
<ScrollView style={[styles.bgScroll, {backgroundColor: '#fff'}]}>
  
<TouchableOpacity activeOpacity={1}>

<View style={[styles.mb30, styles.ph15,  ]}>

  </View>


</TouchableOpacity>
</ScrollView>

</SafeAreaView>


</View>          

</Modal>

)
}

export default MapModal;