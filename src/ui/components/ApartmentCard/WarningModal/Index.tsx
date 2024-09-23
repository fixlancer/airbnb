import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Platform,
  StatusBar
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../DefaultTextComponent/MyText';
import { useDispatch } from 'react-redux';
import { deleteListing } from '../../../../redux/actions/listingActions';
import CustomToast from '../../CustomToast/CustomToast';
const { width, height } = Dimensions.get('screen');
import styles from './Styles';

interface Props {
  type: string;
  text: string;
  isOpen: boolean;
  listingID: any;
  title: any;
  handleChange: any;
  handleSubmit: any;
}

const WarningModal: React.FC<Props> = props => {

  const [isLoading, setisLoading] = React.useState(false);
  const dispatch = useDispatch();


  /* CUSTOM TOAST STARTS */

  const [toastType, setToastType] = useState('success');
  const [toastMsg, setToastMsg] = useState('');
  const [show, setShow] = useState(0);

  const slideAnim = useRef(new Animated.Value(120)).current;

  const animateToast = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 120,
        duration: 200,
        useNativeDriver: true,
      }).start();
      setShow(0);
    }, 3500);
  };

  const showToast = (type, msg) => {
    setToastType(type);
    setToastMsg(msg);
    setShow(1);
    animateToast();
  };

  /* CUSTOM TOAST ENDS */


  const handleDelete = async () => {
    setisLoading(true);

    const data = {
      listingID: props.listingID
    }

    dispatch(deleteListing({ data }))
      .then(res => {
        setisLoading(false);
        showToast('Success', 'Listing deleted');
        props.handleSubmit();
      })
      .catch((err) => {
        setisLoading(false);

        if (err.message == 'Network Error') {
          showToast('Warning', 'Connection Error, try again');
        }
        else {
          showToast('Warning', err.message);
        }
      })
  }


  return (
    <View>
    <Modal isVisible={props.isOpen}
      onBackdropPress={props.handleChange}
      useNativeDriver={true}>

      <View style={[styles.container, styles.ph15, {}]}>
        <SafeAreaView
          style={{
            // height: height + StatusBar.currentHeight,
            // width: width,
            flex: 1,
            backgroundColor: 'transparent',
          }}
          edges={['left', 'right', 'top']}>
          <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />


          <View style={[styles.newModalHeader, styles.pt15]}>
            <Text style={[styles.extraLabel, styles.textDark, styles.mb5,]}>Confirm action</Text>
          </View>

          <View style={[styles.ph15, { backgroundColor: '#fff' }]}>
            <MyText style={[styles.subLabel, styles.pt10]}>{props.text} <MyText style={[styles.subLabel, { fontWeight: 'bold' }]}>{props?.dataTitle}</MyText></MyText>
          </View>

          <View style={[styles.pt15, styles.ph15, styles.RowB]}>
            
          <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.submitButton, styles.mh10]}
              onPress={props.handleChange}>
              <MyText style={[styles.userLabel, { color: '#343434' }]}>Cancel</MyText>
            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => handleDelete()}
              style={styles.mh10}>
              
                <View style={[styles.submitButton, { backgroundColor: '#fbd2d0', borderColor: '#fbd2d0', }]}>
                  {isLoading ? (
                  <ActivityIndicator size={'small'} color={'#343434'} />
                  ) : (
                  <MyText style={[styles.userLabel, { color: props.type === 'ACCEPT' ? '#1cc88a' : '#343434', }]}>{props.type}</MyText>
                  )}
                </View>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </View>

      {show !== 0 ? (

        <Animated.View
          style={{ transform: [{ translateY: slideAnim }], position: 'absolute', zIndex: 999, bottom: 0 }}>
          <CustomToast
            type={toastType}
            msg={toastMsg}
          />
        </Animated.View>
      ) : null}

    </Modal>
</View>
  );
};


export default WarningModal;
