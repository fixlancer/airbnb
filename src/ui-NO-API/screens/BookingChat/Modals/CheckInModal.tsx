import { View, Text, Dimensions, Platform, TouchableOpacity, ScrollView, StatusBar, } from 'react-native'
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
  contactInfo: any;
  confirmCode: any;
  handleChange: any;
}

const CheckInModal: React.FC<Props> = props => {
  const { isOpen, data, contactInfo, handleChange, confirmCode } = props;

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


      <View style={[styles.container, { backgroundColor: '#fff' }]}>

        <SafeAreaView
          style={{
            height: height,
            width: width,
            flex: 1,
            backgroundColor: 'transparent',
          }}
          edges={['left', 'right', 'top']}>
          <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />



          <View style={[styles.newModalHeader, { backgroundColor: '#fff' }]}>
            <TouchableOpacity
              onPress={() => handleChange()}>
              <IconM
                name={'close-circle-outline'}
                size={moderateScale(25)}
                color={'#343434'}
                style={{ marginTop: 0, }} />

            </TouchableOpacity>
            <Text style={[styles.largeLabel, styles.pt15, styles.textDark]}>How to check-in</Text>
          </View>

          <View style={[styles.bgCurve, { backgroundColor: '#fff' }]} />
          <ScrollView style={[styles.bgScroll, { backgroundColor: '#fff' }]}>

            <TouchableOpacity activeOpacity={1}>

              <View style={[styles.mb30, styles.ph15,]}>


                <Text style={[styles.subLabel]}>{data}</Text>

              </View>


            </TouchableOpacity>
          </ScrollView>

        </SafeAreaView>


      </View>

    </Modal>

  )
}

export default CheckInModal;