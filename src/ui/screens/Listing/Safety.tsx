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
  
  const Safety: React.FC<Props> = props => {
      const {item} = props;

    return (
        
         <>
    {item && item.forEach((i) => (
<View style={[styles.mb10]}>
                <MyText style={[styles.noLabel, { }]}>{i}</MyText>
         </View>
    ))}




        </>

    )
  }

  export default Safety;