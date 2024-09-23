import { View, Text, Dimensions, Platform } from 'react-native'
import React from 'react'
import MyText from '../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');

interface Props {
    item: any;
  }
  
  const Rules: React.FC<Props> = props => {
      const {item} = props;

    return (
        
         <>
<View style={[styles.pt5]}>
        <MyText style={[styles.subLabel, { }]}>Check-in after {item.checkIn}</MyText>

        </View>

            <View style={[styles.pt5]}>
                    <MyText style={[styles.subLabel, { }]}>Check-out before {item.checkOut}</MyText>
          
            </View>


            <View style={[styles.pt5]}>
                   {item.smoking === 0 ? (
                    <MyText style={[styles.subLabel]}>Smoking not allowed</MyText>
                   ) : null }
            </View>


            <View style={[styles.pt5]}>
                   {item.party === 0 ? null : (
                   <MyText style={[styles.subLabel]}>Party or events allowed</MyText> 
                   )}
            </View>



        </>

    )
  }

  export default Rules;