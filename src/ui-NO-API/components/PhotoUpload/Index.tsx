import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Platform,
    Image,
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
import CustomToast from '../CustomToast/CustomToast';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import styles from './Styles';

interface Props {
    isOpen: any;
    handleChange: any,
    localimg: any;
    setImgUrl: any;
}

const PhotoUpload: React.FC<Props> = props => {

    const { isOpen, handleChange, localimg, setImgUrl } = props;

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [imgUploaded, setImgUploaded] = useState([]);
    const [localimages, setlocalimages] = useState([])

    useEffect(() => {
        setlocalimages(localimg);
    }, [localimg])


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


    const openPicker = async () => {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            sortOrder: 'desc',
            includeExif: true,
            forceJpg: true,
            compressImageMaxWidth: 500,
            compressImageQuality: 0.8,
            maxFiles: 9,
            mediaType: 'photo',
        })
            .then(response => {
                const newImages = response.map((i, index) => ({
                    uri: i.path,
                    type: `test/${i.mime.split('/')[1]}`,
                    name: `test.${i.mime.split('/')[1]}`,
                }));

                setlocalimages(localimages.concat(newImages));

            })
        // .catch((e) => alert(e));
    }



    const handleUpload = (imageList) => { //uploading image on cloudinary

        setisLoading(true);
        const data = new FormData();
        imageList.map(async (item, i) => {

            data.append('file', item);
            data.append('upload_preset', 'fejoraApp');
            data.append('cloud_name', 'fejora');

            await axios({
                method: 'post',
                url: 'https://api.cloudinary.com/v1_1/fejora/image/upload',
                data: data,
                headers: { "Content-Type": "multipart/form-data", },
                onUploadProgress: function (event) {
                    var percent = Math.round((event.loaded * 100) / event.total)
                    //setPercentage(percent)

                    let newItem = item;
                    newItem.progress = percent;
                    let itemsCopy = [...imageList];
                    setImgUploaded([...itemsCopy]);
                    item.progress = percent;
                },

            })

                .then(data => {
                    //   setisonProgress(true);
                    setImgUrl(old => [...old, data.data.secure_url]);
                    setisLoading(false);
                    handleChange();
                })

                .catch((err) => {
                    setisLoading(false);
                    showToast('Warning', 'Unable to process your upload. Please try again')
                })
        })
    }

    const deletePhoto = (value) => {
        const index = localimages.indexOf(value);
        const updatedData = [...localimages];
        updatedData.splice(index, 1);
        setlocalimages(updatedData);
    }




    return (

        <Modal isOpen={isOpen}
            style={{ height: '90%', backgroundColor: 'transparent', }}
            keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
            backdropPressToClose={false}
            swipeToClose={false}
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

                    <View style={[styles.newModalHeader, styles.RowB]}>
                        
                    <TouchableOpacity
                        onPress={() => handleChange()}>
                        <IconM
                            name={'close-circle-outline'}
                            size={moderateScale(25)}
                            color={'#343434'}
                            style={{ marginTop: 0, }} />

                    </TouchableOpacity>
                    {isLoading ? (
                        <ActivityIndicator size={'small'} color={'#343434'} />
                    ) : (
                        <TouchableOpacity
                            onPress={() => handleUpload(localimages)}
                            style={styles.button}>
                        <Text style={[styles.buttonLabel, styles.textWhite]}>Submit</Text>
                        </TouchableOpacity>
                    )}

                    </View>

                    <ScrollView>

                        <View style={[styles.photoBg, styles.ph15]}>
                            {localimages.length > 0 && localimages.map((i, index) => (
                                <View key={index}>
                                    <Image
                                        source={{ uri: i.uri }}
                                        style={[styles.mb5, styles.mt5, styles.photoImg]}
                                        imageStyle={{ borderRadius: 8 }}
                                    />
                                    <TouchableOpacity activeOpacity={0.7}
                                        onPress={() => deletePhoto(i)}
                                        style={styles.deleteBg}>
                                        <IconM
                                            name={'trash'}
                                            size={moderateScale(15)}
                                            color={'#ff0000'}
                                            style={{ alignSelf: 'center' }}

                                        />
                                    </TouchableOpacity>
                                </View>
                            ))
                            }
                        </View>

                    </ScrollView>

                    <View style={styles.attachMore}>
                        <TouchableOpacity activeOpacity={0.7}
                            onPress={openPicker}
                            style={[styles.Row, styles.alignCenter]}>
                            <Icon
                                name={'camera-alt'}
                                size={18}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginRight: 5, }}></Icon>
                            <MyText style={[styles.userLabel, styles.textWhite, styles.textCenter]}>Attach more</MyText>
                        </TouchableOpacity>
                    </View>

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

            </View>


        </Modal>

    )
}

export default PhotoUpload;