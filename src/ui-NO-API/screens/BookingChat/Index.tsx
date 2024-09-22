import React, { useContext, useEffect, useCallback, useMemo, useState, useRef } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  FlatList,
  SectionList,
  Animated,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import MyText from '../../components/DefaultTextComponent/MyText';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Chat from './Chat';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Details from './Details';
import CancelPolicyModal from '../Listing/Modals/CancelPolicyModal';
import AmenitiesModal from '../Listing/Modals/AmenitiesModal';
import SafetyModal from '../Listing/Modals/SafetyModal';
import RulesModal from '../Listing/Modals/RulesModal';
import MapModal from './Modals/MapModal';
import CheckInModal from './Modals/CheckInModal';
import CustomToast from '../../components/CustomToast/CustomToast';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNewChat, getBookingByID, getBookingChat } from '../../../redux/actions/bookingActions';
import FetchError from '../../components/FetchError/Index';
import moment from 'moment';
import SendModal from './Modals/SendMoney';
import RequestModal from './Modals/RequestMoney';
import CancelBooking from './Modals/CancelBooking';
import ExtrasRespond from './Modals/ExtrasRespond';
import CancelRequest from './Modals/CancelRequest';

const { width, height } = Dimensions.get('screen');

const Item = ({ item, index, navigation, uid, msgError, resendMsg, chatData }) => {

  return (

    <Chat
      id={index}
      to={item?.to}
      from={item?.from}
      message={item?.message}
      date={item?.date}
      time={item?.time}
      attachment={item?.attachment}
      userID={uid}
      msgError={msgError}
      resend={() => resendMsg({ item, index })}
      data={chatData[0].data}

    />

  )

}


const BookingChat = ({ route, navigation }) => {
  const { bookingID, myTab } = route.params;

  const [error, setError] = useState(false);

  const [isRefresh, setisRefreshing] = useState(true);
  const [isMiddleLoading, setisMiddleLoading] = useState(false);
  const [chatLoader, setChatLoader] = React.useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [newisLoading, setnewisLoading] = useState(false);

  const { booking_details } = useSelector((state: RootState) => state.bookingReducers);

  const { uid } = useSelector((state: RootState) => state.authReducers);

  const basePrice = booking_details.booking?.basePrice;
  const totalPrice = booking_details.booking?.totalPrice;
  const duePrice = booking_details.booking?.duePrice;
  const amountPaid = totalPrice - duePrice;
  const cautionFee = booking_details.booking?.cautionFee;
  const cleaningFee = booking_details.booking?.cleaningFee;
  const noOfNights = booking_details.booking?.noOfNights;
  const dateOrdered = booking_details.booking?.dateOrdered;


  const [chatData, setChatData] = useState([]);

  const [receiverID, setReceiverID] = useState(0);
  const [endReached, setEndReached] = useState(false);
  const [page, setPage] = useState(0);
  const [errorChat, setErrorChat] = useState(false);


  const [msg, setMsg] = useState('');
  const scrollViewRef = useRef();
  const [upload, setUpload] = useState([]);

  const [rated, setRated] = useState(null);
  const [cancelled, setCancelled] = useState(null);
  const [cancelRequest, setCancelRequest] = useState(0);
  const [extrasID, setExtrasID] = useState(0);

  const currentUser = 'username_of_buyer';

  const onCancelUser = currentUser;

  const [isAmenities, setIsAmenities] = useState(false);
  const [isRules, setIsRules] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const [isSafety, setIsSafety] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [isCancelGuest, setIsCancelGuest] = useState(false);
  const [isExtras, setIsExtras] = useState(false);
  const [isCancelRequest, setIsCancelRequest] = useState(false);


  const closeMap = () => {
    setIsMap(false);
  }

  const closeCheckIn = () => {
    setIsCheckIn(false);
  }

  const closeCancel = () => {
    setIsCancel(false);
  }

  const closeAmenities = () => {
    setIsAmenities(false)
  }

  const closeRules = () => {
    setIsRules(false)
  }
  const closeSafety = () => {
    setIsSafety(false)
  }

  const closeSend = () => {
    setIsSend(false)
  }

  const closeRequest = () => {
    setIsRequest(false)
  }

  const closeCancelGuest = () => {
    setIsCancelGuest(false)
  }

  const closeExtras = () => {
    setIsExtras(false)
  }

  const closeCancelRequest = () => {
    setIsCancelRequest(false)
  }


  /* CUSTOM TOAST ========== */

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

  /* CUSTOM TOAST ENDS ============= */

  const handleModal = (text) => {
    if (text == 'Map') {
      setIsMap(true);
    }
    if (text == 'CheckIn') {
      setIsCheckIn(true);
    }
    if (text == 'Cancel') {
      setIsCancel(true);
    }
    if (text == 'Amenities') {
      setIsAmenities(true);
    }
    if (text == 'Rules') {
      setIsRules(true);
    }
    if (text == 'Safety') {
      setIsSafety(true);
    }
    if (text == 'Send') {
      setIsSend(true);
    }
    if (text == 'Request') {
      setIsRequest(true);
    }
    if (text == 'CancelRequest') {
      setIsCancelRequest(true);
    }


    if (text == 'CancelGuest') {
      setIsCancelGuest(true);
    }

    if (text == 'Extras') {
      setIsExtras(true);
    }

  }


  const handleRefresh = () => {
    fetchBooking();
    setEndReached(false);
    setChatLoader(true);
  }

  const chatRefresh = () => {
    setChatLoader(true);
    refreshChat();
  }

  useEffect(() => {
    fetchBooking();
    refreshChat();
  }, [])


  const dispatch = useDispatch();

  const fetchBooking = async () => {

    setError(false);
    setisMiddleLoading(true);
    setChatLoader(true);

    dispatch(getBookingByID({ bookingID }))
      .then(res => {

        setisRefreshing(false);
        setisMiddleLoading(false);
        setCancelRequest(booking_details.booking?.cancelRequest);

      })
      .catch((err) => {
        setisRefreshing(false);
        setisMiddleLoading(false);
        setError(true);
        if (err.message == 'Network Error') {
          showToast('Warning', 'Connection Error, try again');
        }
        else {
          showToast('Warning', err.message);
        }
      })
  };



  function groupByChat(chat) {
    const groupedChat = {};

    chat.forEach(item => {
      const { date } = item;
      if (!groupedChat[date]) {
        groupedChat[date] = [];
      }
      groupedChat[date].push(item);
    });

    return groupedChat;
  }


  const fetchChat = async () => {
    if (endReached) {
      return;
    } else {
      refreshChat();
    }
  };

  const refreshChat = async () => {

    setisLoading(true);
    setErrorChat(false);
    const limit = 20;

    dispatch(getBookingChat({ bookingID, page, limit }))
      .then(res => {

        const groupedChat = groupByChat(res?.chat);

        const sections = Object.keys(groupedChat).map(date => ({
          date: date,
          data: groupedChat[date],
        }));

        setChatData(chatData.concat(sections));

        if (uid === booking_details.booking?.owner[0].id) {
          setReceiverID(booking_details.booking?.guest[0].id)
        } else {
          setReceiverID(booking_details.booking?.owner[0].id)
        }

        setisLoading(false);
        setPage(page + 1);
        setChatLoader(false);


        if (res?.chat.length < limit) {
          setEndReached(true);
        }

      })
      .catch((err) => {
        setErrorChat(true);
        setisLoading(false);
        setChatLoader(false);
        setEndReached(false);
        if (err.message == 'Network Error') {
          showToast('Warning', 'Connection Error, try again');
        }
        else {
          showToast('Warning', err.message);
        }
      })
  };


  const [msgError, setMsgError] = useState([])

  const inputRef = useRef(null);

  const date = new Date();
  //  const myDate = `${date.getDate()} ${date.toLocaleDateString('default', {month : 'short'})} ${date.getFullYear()}`;
  const myDate = date.toLocaleDateString('en-US');

  const onSend = async () => {

    inputRef.current.blur();

    const mychat = {
      to: receiverID,
      from: uid,
      date: myDate,
      time: moment(date).utcOffset('+1').format('hh:mm A'),
      message: msg,
      attachment: upload,
    }

    const mychat2 = [{
      date: myDate,
      data: [{
        to: receiverID,
        from: uid,
        date: myDate,
        time: moment(date).utcOffset('+1').format('hh:mm A'),
        message: msg,
        attachment: upload,
      }]
    }]

    const chatIndex = chatData.findIndex(chat => chat.date === myDate);
    if (chatIndex !== -1) {
      const updatedChat = [...chatData];
      updatedChat[chatIndex].data.push(mychat)
      setChatData(updatedChat);
    } else {
      setChatData(chatData.concat(mychat2));
    }

    /*   chatData.push(
         {
           to: receiverID,
           from: uid,
           date: new Date(),
           message: msg,
           attachment: upload,
         });
   */

    const data = {
      bookingID: bookingID,
      chatInfo: [{
        receiverID: receiverID,
      }],
      chat: [{
        to: receiverID,
        from: uid,
        date: myDate,
        time: moment(date).utcOffset('+1').format('hh:mm A'),
        message: msg,
        attachment: upload,
      }]
    }

    dispatch(createNewChat({ data }))
      .then(res => {

        const updatedError = [...msgError];
        updatedError[chatData.length - 1] = '';
        setMsgError(updatedError);
      })
      .catch((err) => {
        const updatedError = [...msgError];
        updatedError[chatData.length - 1] = 'Failed';
        setMsgError(updatedError);
      })


    setMsg('');
    setUpload([]);
  }


  const resendMsg = async ({ item, index }) => {

    const data = {
      bookingID: bookingID,
      chatInfo: [{
        receiverID: receiverID,
      }],
      chat: [{
        to: item.to,
        from: item.from,
        date: item.date,
        time: item.time,
        message: item.message,
        attachment: item.attachment,
      }]
    }

    dispatch(createNewChat({ data }))
      .then(res => {

        const updatedError = [...msgError];
        updatedError[index] = '';
        setMsgError(updatedError);
      })
      .catch((err) => {
        const updatedError = [...msgError];
        updatedError[index] = 'Failed';
        setMsgError(updatedError);
      })

  }


  const handleAccept = () => {
    // setisAcceptVisible(false);
  };

  const toggleAccept = () => {
    // setisAcceptVisible(true);
  };


  const handleChangePopup = () => {
    //  setisPopupVisible(false);
  };

  const togglePopup = () => {
    //  setisPopupVisible(true);
  };

  let [tab, setTab] = useState(myTab);



  const renderItem = React.useCallback(({ item, index }) => {
    if (!chatData || chatData.length === 0) {
      return null
    }

    return (

      <Item item={item}
        index={index}
        navigation={navigation}
        uid={uid}
        msgError={msgError}
        resendMsg={resendMsg}
        chatData={chatData}
      />

    )
  }, [chatData])


  const footerLoader = () => {
    return isLoading ? (
      <View style={styles.alignCenter}>
        <ActivityIndicator color={'#343434'} style={{ paddingVertical: 15 }} />
      </View>
    ) : null
  }

  const Empty = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.alignCenter, styles.pt30, { height: '100%', width: '100%' }]}>

          <View style={[styles.circleBg]}>
            <IconM
              name={'ios-send'}
              size={moderateScale(25)}
              color={'#343434'}
              style={{ alignSelf: 'center' }}
            />
          </View>
          <Text style={[styles.largeLabel2, styles.pt15, styles.textCenter]}>Be the first to send a message</Text>


        </View>

      </View>

    )
  }


  const header = (section) => {

    var fulldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    const [month, day, year] = section.date.split('/');
    const newD = new Date(+year, month - 1, +day);
    const timeStamp = newD.getTime();

    const formatDate = (secDate) => {
      var dt = new Date(secDate),
        date = dt.getDate(),
        month = months[dt.getMonth()],
        timeDiff = secDate - Date.now(),
        diffDays = new Date().getDate() - date,
        diffMonths = new Date().getMonth() - dt.getMonth(),
        diffYears = new Date().getFullYear() - dt.getFullYear();

      if (diffYears === 0 && diffDays === 0 && diffMonths === 0) {
        return "Today";
      } else if (diffYears === 0 && diffDays === 1) {
        return "Yesterday";
      } else if (diffYears === 0 && (diffDays < -1 && diffDays > -7)) {
        return fulldays[dt.getDay()];
      } else if (diffYears >= 1) {
        return month + " " + date + ", " + new Date(secDate).getFullYear();
      } else {
        return month + " " + date;
      }
    }


    return (


      <View style={[styles.dateBubble]}>
        <Text style={[styles.dateLabel, styles.textDark]}>{formatDate(timeStamp)}</Text>
      </View>

    )
  }



  const openPicker = async () => {
    const uploadList = [];
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      sortOrder: 'desc',
      includeExif: true,
      maxFiles: 7,
      mediaType: 'any',
      includeBase64: true,
    })
      .then(response => {
        const uploadList = response.map((i) => ({
          //id: index,
          uri: i.path,
          mime: i.mime,
          filename: i.path.split('/').pop()
        }));

        setUpload(uploadList);
        console.log(uploadList);
      })
    // .catch((e) => alert(e));
  }

  const onDelete = () => {
    // const data = images.filter(images => images.uri !== uri);
    //      setImages(null);
    //ImagePicker.cleanSingle(image);  
  }

  const renderAsset = (upload) => {
    //if (upload.mime && upload.mime.toLowerCase().indexOf('video/') !== -1) {
    // return renderVideo(upload);
    //} 

    return renderUpload(upload);

  }

  const renderUpload = (upload) => {
    return (
      <>
        {upload.mime && upload.mime.toLowerCase().indexOf('video/') !== -1 ? (
          <>
            <TouchableOpacity activeOpacity={0.7} onPress={onDelete}
              style={{
                justifyContent: 'center',
                alignItems: 'center', marginRight: 5
              }}>
              <View
                style={styles.Video1}>
                <Icon
                  name={'videocam'}
                  size={15}
                  color={'#ddd'}
                  style={{ alignSelf: 'center', marginTop: 5 }} />

              </View>

              <View style={styles.deleteUpload}>
                <Icon
                  name={'close'}
                  size={8}
                  color={'#ff0000'}
                  style={{ marginTop: 0, alignSelf: 'center' }} />
              </View>

            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity activeOpacity={0.7} onPress={onDelete}
              style={styles.imgArea}>
              <Image
                style={styles.img1}
                source={upload} />
              <View style={{ position: 'absolute', top: -7, zIndex: 999, right: -5 }}>
                <IconM
                  name={'close-circle'}
                  size={moderateScale(20)}
                  color={'#ddd'}
                  style={{ marginTop: 0, alignSelf: 'center' }} />
              </View>
            </TouchableOpacity>
          </>
        )}
      </>
    )
  }




  return (

    <View style={styles.container}>
      <SafeAreaView
        style={{
          // height: height + StatusBar.currentHeight,
          // width: width,
          flex: 1,
          backgroundColor: 'transparent',
        }}
        edges={['left', 'right', 'top']}>

        <StatusBar translucent barStyle='dark-content' backgroundColor="transparent" />


        {error ? (

          <>
            <View style={[styles.header, styles.ph15, styles.RowB]}>

              <View style={styles.Row}>

                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                >
                  <Icon
                    name={'arrow-back-ios'}
                    size={moderateScale(20)}
                    color={'#343434'}
                    style={{ marginRight: 5, }} />

                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.loaderFlex}>
              <FetchError setRetry={() => handleRefresh()} />
            </View>
          </>

        ) : (
          <>
            <View style={[styles.header, styles.RowB]}>

              <View style={[styles.Row]}>

                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.pb5}
                >
                  <Icon
                    name={'arrow-back-ios'}
                    size={moderateScale(20)}
                    color={'#343434'}
                    style={{ paddingRight: 10, }} />

                </TouchableOpacity>

                {isMiddleLoading ? null : (
                  <View>
                    {uid !== booking_details.booking?.owner[0].id ? (
                      <Text style={[styles.largeLabel, { fontSize: moderateScale(14), color: '#343434' }]}>{booking_details.booking?.owner[0].username}</Text>
                    ) : (
                      <Text style={[styles.largeLabel, { fontSize: moderateScale(14), color: '#343434' }]}>{booking_details.booking?.guest[0].firstName} {booking_details.booking?.guest[0].lastName}</Text>
                    )}
                    <MyText style={[styles.thinLabel, styles.textDark]}>Active 1hr ago</MyText>
                  </View>
                )}
              </View>


              {isMiddleLoading ? null : (
                <>
                  {rated || cancelled ? (<MyText></MyText>) : (
                    <View style={styles.Row}>
                      <TouchableOpacity
                      //onPress={togglePopup}
                      >
                        <IconM
                          name={'call-outline'}
                          size={moderateScale(20)}
                          color={'#343434'}
                          style={{ marginRight: 5, marginTop: 0 }} />

                      </TouchableOpacity>
                    </View>
                  )}
                </>
              )}

            </View>

            {isMiddleLoading ? (
              <View style={styles.loaderFlex}>
                <View style={styles.loaderMiddle}>
                  <ActivityIndicator size={'small'} color={'#fff'} />
                </View>
              </View>
            ) : (

              <>


                <View style={styles.tabBG}>
                  <View
                    style={styles.maintabConatiner}>
                    <TouchableOpacity
                      onPress={() => {
                        setTab('Chat');
                      }}
                      style={
                        tab === 'Chat'
                          ? styles.tabContainerActive
                          : styles.tabContainer
                      }>
                      <MyText
                        style={styles.mediumLabel}>
                        Chat
                      </MyText>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setTab('Details');
                      }}
                      style={
                        tab === 'Details'
                          ? styles.tabContainerActive
                          : styles.tabContainer
                      }>
                      <MyText
                        style={styles.mediumLabel}>
                        Details
                      </MyText>
                      {cancelRequest !== 1 && uid === booking_details.booking?.owner[0].id ?
                        <Icons
                          name={'circle-medium'}
                          size={moderateScale(10)}
                          color={'#ff0000'}
                          style={{ position: 'absolute', right: 10 }}

                        /> : null}
                    </TouchableOpacity>
                  </View>

                </View>

                {tab === 'Chat' ? (
                  <>

                    {errorChat ? (
                      <View style={styles.loaderFlex}>
                        <FetchError setRetry={() => chatRefresh()} />
                      </View>
                    ) : (


                      <View style={{ height: '100%', flex: 1, backgroundColor: '#f9f9f9' }}>

                        {chatLoader ? (
                          <View style={styles.loaderFlex}>
                            <View style={styles.alignCenter}>
                              <ActivityIndicator size={'small'} color={'#343434'} />
                            </View>
                          </View>

                        ) : (

                          <View style={[styles.midBg]}>

                            {chatData && chatData.length >= 1 ? (

                              <SectionList
                                //  ref={scrollViewRef}
                                //  onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                                refreshControl={
                                  <RefreshControl
                                    tintColor={'#343434'}
                                    refreshing={isRefresh}
                                    onRefresh={() => handleRefresh()}
                                  />
                                }
                                sections={chatData}
                                renderItem={renderItem}
                                keyExtractor={item => item._id}
                                renderSectionHeader={({ section }) => header(section)}
                                contentContainerStyle={{ paddingTop: moderateScale(10), paddingHorizontal: 15, paddingBottom: moderateScale(30) }}
                                initialNumToRender={10}
                                maintainVisibleContentPosition={{
                                  autoscrollToTopThreshold: 10,
                                  minIndexForVisible: 1,
                                }}
                                onEndReached={fetchChat}
                                onEndReachedThreshold={0.5}
                                ListFooterComponent={footerLoader}

                              />
                            ) : (
                              <Empty />
                            )}

                            {booking_details.booking?.chatInfo[0].receiverID === uid && booking_details.booking?.chatInfo[0].unread === 0 ? (
                              <View style={[styles.Row, styles.pt10, styles.mb10, { justifyContent: 'flex-end', alignItems: 'flex-end' }]}>
                                <IconM
                                  name={'checkmark-done'}
                                  size={moderateScale(10)}
                                  color={'#808080'}
                                  style={{ alignSelf: 'flex-end', }} />

                                <MyText style={[styles.rightChat]}>Seen</MyText>
                              </View>
                            ) : null}
                          </View>

                        )}

                        <View style={styles.SendArea}>


                          {rated === null && !cancelled ? (
                            <>


                              {upload.length <= 0 ? null : (
                                <>
                                  <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                                    <View style={styles.uploadArea}>
                                      {upload && upload.map((i) => {
                                        return (
                                          <View key={i.uri}>{renderAsset(i)}</View>
                                        )
                                      }
                                      )}
                                    </View>
                                  </ScrollView>
                                </>
                              )}

                              <View style={[styles.RowB, styles.mb10]}>
                                <TouchableOpacity
                                  onPress={openPicker}
                                  style={{ paddingLeft: 15, paddingTop: 5, paddingRight: 10 }}>
                                  <Icon
                                    name={'attach-file'}
                                    size={moderateScale(20)}
                                    color={'#808080'}
                                    style={{ alignSelf: 'center', }} />
                                </TouchableOpacity>

                                <TextInput
                                  style={[styles.text, {}]}
                                  placeholder='Type a message...'
                                  placeholderTextColor={'#808080'}
                                  value={msg}
                                  multiline
                                  ref={inputRef}
                                  onChangeText={value => setMsg(value)}
                                />
                                {!msg ? (
                                  <View
                                    style={{ paddingLeft: 10, paddingTop: 2, paddingRight: 15 }}>

                                    <View style={[styles.sendBtn, styles.alignCenter, { backgroundColor: '#ddd' }]}>
                                      <IconM
                                        name={'ios-send'}
                                        size={15}
                                        color={'#f2f2f2'}
                                        style={{ alignSelf: 'center', }} />
                                    </View>
                                  </View>
                                ) : (
                                  <TouchableOpacity
                                    onPress={onSend}
                                    style={{ paddingLeft: 10, paddingTop: 2, paddingRight: 15 }}>
                                    <View style={[styles.sendBtn, styles.alignCenter]}>
                                      <IconM
                                        name={'ios-send'}
                                        size={15}
                                        color={'#fff'}
                                        style={{ alignSelf: 'center', }} />
                                    </View>
                                  </TouchableOpacity>
                                )}

                              </View>


                            </>
                          ) : (
                            <>
                              {rated === '1' ? (

                                <MyText style={{ fontsize: 12, textAlign: 'center', color: '#343434' }}>
                                  Order completed</MyText>

                              ) : null}
                            </>

                          )}

                          {cancelled === '1' ? (
                            <MyText style={{ fontsize: 12, textAlign: 'center', color: '#343434' }}>
                              Order was cancelled.</MyText>

                          ) : null}

                        </View>


                      </View>

                    )}

                  </>
                ) : null}


                {tab === 'Details' ? (
                  <ScrollView style={{ height: '100%', backgroundColor: '#fff' }}
                    refreshControl={
                      <RefreshControl
                        tintColor={'#343434'}
                        refreshing={isRefresh}
                        onRefresh={() => handleRefresh()}
                      />
                    }>
                    <View style={styles.midBg}>

                      <Details
                        listingID={booking_details.booking?.listingID}
                        street={booking_details.booking?.location[0].street}
                        city={booking_details.booking?.location[0].city}
                        country={booking_details.booking?.location[0].country}
                        contactInfo={booking_details.booking?.contactInfo}
                        ownerID={booking_details.booking?.owner[0].id}
                        ownerUsername={booking_details.booking?.owner[0].username}
                        firstName={booking_details.booking?.guest[0].firstName}
                        wifiNetwork={booking_details.booking?.wifi[0].network}
                        wifiPass={booking_details.booking?.wifi[0].password}
                        mainPhoto={booking_details.booking?.mainPhoto}
                        noOfNights={booking_details.booking?.noOfNights}
                        checkIn={booking_details.booking?.checkIn}
                        checkOut={booking_details.booking?.checkOut}
                        inTime={booking_details.booking?.inTime}
                        outTime={booking_details.booking?.outTime}
                        cautionFee={booking_details.booking?.cautionFee}
                        cleaningFee={booking_details.booking?.cleaningFee}
                        status={booking_details.booking?.status}
                        duePrice={booking_details.booking?.duePrice}
                        dueDate={booking_details.booking?.dueDate}
                        cancelPolicy={booking_details.booking?.cancelPolicy}
                        houseRules={booking_details.booking?.houseRules}
                        safety={booking_details.booking?.safety}
                        amenities={booking_details.booking?.amenities}
                        totalPrice={booking_details.booking?.totalPrice}
                        basePrice={booking_details.booking?.basePrice}
                        bathrooms={booking_details.booking?.bathrooms}
                        beds={booking_details.booking?.beds}
                        bedrooms={booking_details.booking?.bedrooms}
                        title={booking_details.booking?.title}
                        personAllowed={booking_details.booking?.personAllowed}
                        checkInDesc={booking_details.booking?.checkInDesc}
                        confirmationCode={booking_details.booking?.confirmationCode}
                        dateOrdered={booking_details.booking?.dateOrdered}
                        extras={booking_details.booking?.extras}
                        openModal={(text) => handleModal(text)}
                        userID={uid}
                        extrasID={(item) => setExtrasID(item)}
                        cancelRequest={cancelRequest}
                        navigation={navigation}
                      />
                    </View>

                  </ScrollView>
                ) : null}

              </>
            )}

          </>
        )}

      </SafeAreaView>

      {show !== 0 ? (

        <Animated.View
          style={{ transform: [{ translateY: slideAnim }], position: 'absolute', zIndex: 999, bottom: 0 }}>
          <CustomToast
            type={toastType}
            msg={toastMsg}
          />
        </Animated.View>
      ) : null}

      {isMiddleLoading ? null : (
        <>

          <AmenitiesModal
            isOpen={isAmenities}
            data={booking_details.booking?.amenities}
            bgColor={'#fff'}
            handleChange={closeAmenities}
          />

          <RulesModal
            isOpen={isRules}
            data={booking_details.booking?.houseRules}
            bgColor={'#fff'}
            handleChange={closeRules}
          />

          <MapModal
            isOpen={isMap}
            street={booking_details.booking?.location[0].street}
            city={booking_details.booking?.location[0].city}
            country={booking_details.booking?.location[0].country}
            handleChange={closeMap}
          />

          <CheckInModal
            isOpen={isCheckIn}
            data={booking_details.booking?.checkInDesc}
            contactInfo={booking_details.booking?.length > 0 ? booking_details.booking?.contactInfo : ''}
            confirmCode={booking_details.booking?.confirmationCode}
            handleChange={closeCheckIn}
          />

          <SafetyModal
            isOpen={isSafety}
            data={booking_details.booking?.length > 0 ? booking_details.booking?.amenities[0].notIncluded : ''}
            bgColor={'#fff'}
            handleChange={closeSafety}
          />

          <CancelPolicyModal
            isOpen={isCancel}
            item={booking_details.booking?.cancelPolicy}
            dateCreated={booking_details.booking?.dateOrdered}
            checkInDate={booking_details.booking?.checkIn}
            checkOutDate={booking_details.booking?.checkOut}
            bgColor={'#fff'}
            handleChange={closeCancel}
          />

          <SendModal
            isOpen={isSend}
            userID={uid}
            bookingID={bookingID}
            username={booking_details.booking?.owner[0].username}
            handleChange={closeSend}
          />

          <RequestModal
            isOpen={isRequest}
            userID={uid}
            bookingID={bookingID}
            firstName={booking_details.booking?.guest[0].firstName}
            handleChange={closeRequest}
          />

          <CancelBooking
            isOpen={isCancelGuest}
            userID={uid}
            bookingID={bookingID}
            amountPaid={amountPaid}
            totalPrice={totalPrice}
            cautionFee={cautionFee}
            cleaningFee={cleaningFee}
            noOfNites={noOfNights}
            basePrice={basePrice}
            username={booking_details.booking?.owner[0].username}
            checkIn={booking_details.booking?.checkIn}
            policy={booking_details.booking?.cancelPolicy}
            dateOrdered={dateOrdered}
            handleChange={closeCancelGuest}
          />

          <ExtrasRespond
            isOpen={isExtras}
            userID={uid}
            bookingID={bookingID}
            extrasID={extrasID}
            username={booking_details.booking?.owner[0].username}
            handleChange={closeSend}
          />


          <CancelRequest
            isOpen={isCancelRequest}
            userID={uid}
            bookingID={bookingID}
            firstName={booking_details.booking?.guest[0].firstName}
            handleChange={closeCancelRequest}
          />

        </>
      )}


    </View>


  );
};

export default BookingChat;

export const ItemBC = React.memo(Item);
