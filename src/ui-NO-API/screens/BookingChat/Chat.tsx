import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import MyText from '../../components/DefaultTextComponent/MyText';
import styles from './Styles';
//import ImagePreviewModal from '../../components/ImagePreviewModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const Chat = (props) => {

  const {userID, from, data, id} = props;


  const datec = new Date();
  //  const myDate = `${date.getDate()} ${date.toLocaleDateString('default', {month : 'short'})} ${date.getFullYear()}`;
    const myDate = datec.toLocaleDateString('en-US');

const previousMsg = id > 0 ? data[id - 1] : null;
const nextMsg = data.length && id < data.length - 1 ? data[id + 1] : null;

const isCurrentUser = from === userID;
const isSameSenderAsPrevious = previousMsg && previousMsg.from === from;
const isSameSenderAsNext = nextMsg && nextMsg.from === from;
const shouldGroupMessages = isCurrentUser && isSameSenderAsPrevious;
const shouldGroupMessages2 = !isCurrentUser && isSameSenderAsPrevious;


const [date, setDate] = useState('');
  useEffect(() => {

    var date = moment(props.date).utcOffset('+1').format('hh:mm A');
    setDate(date);

  }, [])

  const [previewImgPath, setpreviewImgPath] = useState(false);
  const [isPreviewImage, setisPreviewImage] = useState(false);

  const previewImage = (image) => {
    setpreviewImgPath(image);
    setisPreviewImage(true);
  };

  const togglePreviewImgModal = () => {
    setisPreviewImage(false);
  };


  const renderAsset = (upload) => {
    //if (upload.mime && upload.mime.toLowerCase().indexOf('video/') !== -1) {
    // return renderVideo(upload);
    //} 

    return renderUpload(upload);

  }

  const onView = () => {

  }

  const renderUpload = (upload) => {
    return (
      <TouchableOpacity onPress={onView}
        style={{ justifyContent: 'center', alignItems: 'center', marginRight: 5 }}>
        {upload.mime && upload.mime.toLowerCase().indexOf('video/') !== -1 ? (
          <>
            <View
              style={[styles.Video, {}]}>
              <TouchableOpacity>
                <MyText style={{ textAlign: 'center', color: '#808080', fontSize: 9, }}>filename.apk</MyText>
                <Icon
                  name={'download'}
                  size={15}
                  color={'#808080'}
                  style={{ alignSelf: 'center', marginTop: 5 }} />
              </TouchableOpacity>
            </View>

          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => previewImage(upload)}>
              <Image
                style={styles.img}
                source={upload} />
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
    )
  }



  const renderUpload1 = (upload) => {
    return (
      <TouchableOpacity onPress={onView}
        style={{ justifyContent: 'center', alignItems: 'center', marginRight: 5 }}>
        {upload.mime && upload.mime.toLowerCase().indexOf('video/') !== -1 ? (
          <>
            <View
              style={[styles.file11, { marginTop: 10, }]}>
              <Icon
                name={'download'}
                size={15}
                color={'#808080'}
                style={{ marginTop: 5, alignSelf: 'center', }} />

              <MyText style={{ textAlign: 'center', color: '#808080', fontSize: 9, }}>filename.apk</MyText>
            </View>

          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => previewImage(upload)}>
              <Image
                style={[styles.img11, { marginTop: 10, }]}
                source={upload} />

            </TouchableOpacity>

          </>
        )}
      </TouchableOpacity>
    )
  }



  return (
    <>

      {!props.message ? null : (
        <>

          <View style={[
          styles.messageBubble,
          isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble,
          shouldGroupMessages && styles.groupedBubble,
          isCurrentUser && !isSameSenderAsPrevious && styles.firstBubble,
          shouldGroupMessages && !isSameSenderAsNext && styles.lastBubble,
          
          shouldGroupMessages2 && styles.groupedBubble,
          !isCurrentUser && isSameSenderAsPrevious && styles.lastBubble2,
          !isCurrentUser && isSameSenderAsNext && styles.firstBubble2,
        ]}
      >
         
            <Text selectable={true} style={[styles.ChatText, { color: isCurrentUser ? '#fff' : '#343434' }]}>{props.message} </Text>

            {props.attachment.length > 0 ? (
              <>
                <View style={{ flexDirection: 'row', }}>
                  {Object.keys(props.attachment).length === 1 ? props.attachment && (
                    props.attachment.map((i) => {
                      return (
                        <View key={i.uri}>{renderUpload1(i)}</View>
                      )
                    })
                  ) : null}
                </View>

                <View style={styles.Row}>
                  <ScrollView showsHorizontalScrollIndicator={true} horizontal={true} style={{ height: 'auto', marginLeft: 5, paddingBottom: 10, width: '100%' }}>
                    {Object.keys(props.attachment).length > 1 ?
                      props.attachment && (
                        props.attachment.map((i) => {
                          return (
                            <View key={i.uri}>{renderAsset(i)}</View>
                          )
                        })
                      ) : null}
                  </ScrollView>
                </View>
              </>
            ) : null }
   
            
            <View style={{width:'auto', position:'absolute', bottom:2, right:4}}>
          <MyText style={isCurrentUser ? styles.rightChat : styles.leftChat}>{props.time}</MyText>
          </View>
          
          </View>


            {props.msgError[props.id] === 'Failed' ? (
            <IconM
                name={'information-circle'}
                size={15}
                color={'#ff0000'}
                style={{ marginLeft: 10, alignSelf: 'center', }} />
            ) : null }
     
        </>

      )}



      {/*
  
<ImagePreviewModal
        image={previewImgPath}
        isPreviewImgVisible={isPreviewImage}
        togglePreviewImgModal={togglePreviewImgModal}
      />
*/}

    </>

  );
};

export default Chat;