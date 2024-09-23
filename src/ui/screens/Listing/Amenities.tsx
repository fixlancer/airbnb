import { View, Text, Dimensions, Platform } from 'react-native'
import React from 'react'
import MyText from '../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

interface Props {
    item: any;
  }
  
  const Amenities: React.FC<Props> = props => {
      const {item} = props;

    return (
        <>
        <View style={[styles.Row]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{item[0].propertyType[Math.floor(Math.random() * item[0].propertyType.length)]}</MyText>
        </View>
    
        {item[0].outsideView ? (
        <View style={[styles.Row, styles.pt5]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{item[0].outsideView[Math.floor(Math.random() * item[0].outsideView.length)]}</MyText>
        </View>
        ) : null }
    
        <View style={[styles.Row, styles.pt5]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
        <View>
                <MyText style={[styles.subLabel, { }]}>{item[0].bedroom[Math.floor(Math.random() * item[0].bedroom.length)]}</MyText>
               {item[0].bedroom === 'Essentials' ? (
                <MyText style={[styles.tinyLabel]}>Towels, bed sheets, soap and toilet paper</MyText>
               ) : null }
        </View>
        </View>

        <View style={[styles.Row, styles.pt5]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{item[0].entertainment[Math.floor(Math.random() * item[0].entertainment.length)]}</MyText>
        </View>

        {item[0].safety ? (
        <View style={[styles.Row, styles.pt5]}>
        <IconM
                      name={'checkmark'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                <MyText style={[styles.subLabel, { }]}>{item[0].safety[Math.floor(Math.random() * item[0].safety.length)]}</MyText>
        </View>

        ) : null }
        
        <View style={[styles.Row, styles.pt5]}>
        <Icon
                      name={'block'}
                      size={moderateScale(20)}
                      color={'#343434'}
                      style={{marginRight:15}}
    
                      />
                      
                <MyText style={[styles.noLabel, { }]}>{item[0].notIncluded[Math.floor(Math.random() * item[0].notIncluded.length)]}</MyText>
        </View>

        </>

    )
  }

  export default Amenities;