import { View, Text, Dimensions, Platform, TouchableOpacity, Animated, Image, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import MyText from '../../../components/DefaultTextComponent/MyText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import styles from '../Styles';
import CustomToast from '../../../components/CustomToast/CustomToast';
const { width, height } = Dimensions.get('window');

interface Props {
    formData: any;
    setFormData: any;
    setUpload: any;
    setLocalimg: any;
    imgUrl: any
}

const Photos: React.FC<Props> = props => {
    const { formData, setFormData, setUpload, setLocalimg, imgUrl } = props;

    const [localimages, setlocalimages] = useState([]);
    const [img, setImg] = useState([]);
    const [main, setMain] = useState(0);
    const [refresh, setRefresh] = useState(true);

    const openUpload = () => {
        setUpload(true);
    }

    useEffect(() => {
        if(refresh)
        setImg(img.concat(imgUrl));
        const updatedData = {...formData};
        updatedData.photos = imgUrl;
        updatedData.mainPhoto = imgUrl[0];
        setFormData(updatedData); 

    }, [refresh])


    useEffect(() => {
        if(imgUrl){
        setRefresh(true);
        }
    }, [imgUrl])

    useEffect(() => {
    setImg(formData.photos);    
    }, [])


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

           //     setlocalimages(localimages.concat(newImages));
                openUpload();
                setLocalimg(localimages.concat(newImages))

            })
        // .catch((e) => alert(e));
    }


    const deletePhoto = (value) => {
        const index = formData.photos.indexOf(value);
        const index2 = img.indexOf(value);
        const updatedData = {...formData};
        const updatedImg = {...img};

        updatedData.photos.splice(index, 1);
        updatedImg.splice(index2, 1);

        setImg(updatedImg); 
        setFormData(updatedData); 
    }


    const saveMain = ({value, index}) => {
        const updatedData = {...formData};
        updatedData.mainPhoto = value;
        setFormData(updatedData);
        setMain(index);  
    }


    return (

        <>
            <ScrollView style={styles.ph15}>
                <View style={styles.pt10}>
                    <Text style={[styles.largeLabel, styles.mb5]}>Add photos to your listing</Text>
                    <MyText style={[styles.tinyLabel, styles.mb20]}>Make your listing stand out with great photos. Upload atleast 3 photos to publish your listing. You can add or edit your photos later.</MyText>

                    {img.length > 0 ? null : (
                        <TouchableOpacity activeOpacity={0.7}
                            onPress={openPicker}
                            style={styles.photoAttach}>
                            <Icon
                                name={'camera-alt'}
                                size={18}
                                color={'#808080'}
                                style={{ alignSelf: 'center', marginRight: 5, }}></Icon>
                            <MyText style={[styles.userLabel, styles.textCenter]}>Add Photos</MyText>
                        </TouchableOpacity>
                    )}
                    <>
                        <View style={styles.photoBg}>
                            {img.length > 0 && img.map((i, index) => (
                                <TouchableOpacity key={index}
                                activeOpacity={0.7}
                                onPress={() => saveMain({i, index})}>
                                    <Image
                                        source={{ uri: i }}
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
                                        style={{ alignSelf:'center' }}

                                    />
                                    </TouchableOpacity>

                                    {main === index ? (
                                    <View style={[styles.Row, styles.mainBg]}>
                                    <IconM
                                        name={'star'}
                                        size={moderateScale(14)}
                                        color={'#fff'}
                                        style={{ alignSelf:'center', marginRight:5 }}

                                    />
                                    <MyText style={[styles.photoLabel, styles.textWhite]}>Primary</MyText>
                                    </View>
                                    ) : null }

                                </TouchableOpacity>
                            ))
                            }
                        </View>

                    </>


                </View>
            </ScrollView>

            {img.length > 0 ? (
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
            ) : null}


            {show !== 0 ? (

                <Animated.View
                    style={{ transform: [{ translateY: slideAnim }], position: 'absolute', zIndex: 999, bottom: 0 }}>
                    <CustomToast
                        type={toastType}
                        msg={toastMsg}
                    />
                </Animated.View>
            ) : null}
        </>
    )
}

export default Photos;