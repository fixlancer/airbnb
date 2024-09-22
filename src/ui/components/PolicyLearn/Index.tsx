import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform,
  TextInput,
  RefreshControl,
  ScrollView,
  Animated,
  ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');
import Modal from 'react-native-modalbox';
import styles from './Styles';

interface Props {
  isOpen: any;
  handleChange: any,
}

const PolicyLearn: React.FC<Props> = props => {

  const { isOpen, handleChange, } = props;
  const [isLoading, setisLoading] = useState(false);


  return (

    <Modal isOpen={isOpen}
      style={{ height: '90%', backgroundColor: 'transparent', }}
      keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
      backdropPressToClose={false}
      swipeToClose={true}
      onClosed={handleChange}
      backdropOpacity={0.5}
      backdropColor="#000"
      position="bottom">

      <View style={[styles.container, { borderTopLeftRadius: 20, borderTopRightRadius: 20 }]}
        pointerEvents={isLoading ? "none" : "auto"}>
        <SafeAreaView
          style={{
            // height: height + StatusBar.currentHeight,
            // width: width,
            flex: 1,
            backgroundColor: 'transparent',
          }}
          edges={['left', 'right', 'top']}>
          <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

          <View style={styles.modalLine} />

          <View style={[styles.newModalHeader]}>
         <Text style={[styles.extraLabel, styles.textDark, styles.mb5,]}>Cancellation policies</Text>
         </View>

          <ScrollView>



          </ScrollView>

          </SafeAreaView>


          </View>


          </Modal>

  )
}

export default PolicyLearn;